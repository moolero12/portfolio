import { useEffect, useRef } from 'react';

type Segment = [number, number, number, number];

const GLYPHS: Segment[][] = [
    [
        [-0.34, 0, 0.02, 0.34],
        [-0.34, 0, 0.02, -0.34],
        [0.18, -0.36, 0.34, 0.36],
        [0.5, 0.34, 0.16, 0],
        [0.5, -0.34, 0.16, 0],
    ],
    [
        [-0.2, 0.42, -0.38, 0.42],
        [-0.38, 0.42, -0.38, -0.42],
        [-0.38, -0.42, -0.2, -0.42],
        [0.2, 0.42, 0.38, 0.42],
        [0.38, 0.42, 0.38, -0.42],
        [0.38, -0.42, 0.2, -0.42],
    ],
    [
        [-0.46, 0.16, 0.1, 0.16],
        [0.1, 0.16, 0.28, 0.34],
        [0.1, 0.16, 0.28, -0.02],
        [-0.46, -0.26, 0.44, -0.26],
    ],
    [
        [-0.42, 0.32, 0.4, 0.32],
        [-0.42, 0, 0.18, 0],
        [-0.42, -0.32, 0.4, -0.32],
        [0.5, -0.24, 0.5, -0.34],
    ],
];

function createCodeField() {
    const linePositions: number[] = [];
    const pointPositions: number[] = [];
    const columns = 7;
    const rows = 5;

    const addPoint = (x: number, y: number, z: number) => {
        pointPositions.push(x, y, z);
    };

    const addLine = (
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        z: number,
    ) => {
        linePositions.push(x1, y1, z, x2, y2, z);
        addPoint(x1, y1, z);
        addPoint(x2, y2, z);
    };

    for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
            const glyph = GLYPHS[(row * columns + column) % GLYPHS.length];
            const originX = (column - (columns - 1) / 2) * 1.85;
            const originY = ((rows - 1) / 2 - row) * 1.25;
            const z = ((row + column) % 5) * 0.22 - 0.6;
            const scale = 0.72 + ((row + column) % 3) * 0.1;

            glyph.forEach(([x1, y1, x2, y2]) => {
                addLine(
                    originX + x1 * scale,
                    originY + y1 * scale,
                    originX + x2 * scale,
                    originY + y2 * scale,
                    z,
                );
            });

            if ((row + column) % 2 === 0) {
                addLine(
                    originX - 0.62,
                    originY - 0.58,
                    originX + 0.62,
                    originY - 0.58,
                    z,
                );
            }
        }
    }

    return {
        lines: new Float32Array(linePositions),
        points: new Float32Array(pointPositions),
    };
}

export function SiteCodeBackground() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        let cleanup = () => {};
        let cancelled = false;

        if (!container) {
            return cleanup;
        }

        void import('three').then(
            ({
                AdditiveBlending,
                BufferAttribute,
                BufferGeometry,
                Color,
                LineBasicMaterial,
                LineSegments,
                OrthographicCamera,
                Points,
                PointsMaterial,
                Scene,
                Vector2,
                WebGLRenderer,
            }) => {
                if (cancelled) {
                    return;
                }

                const prefersReducedMotion = window.matchMedia(
                    '(prefers-reduced-motion: reduce)',
                ).matches;
                const pointer = new Vector2(0, 0);
                const scene = new Scene();
                const camera = new OrthographicCamera(-7, 7, 4, -4, 0.1, 30);
                const { lines, points } = createCodeField();
                const lineGeometry = new BufferGeometry();
                const pointGeometry = new BufferGeometry();
                const renderer = new WebGLRenderer({
                    alpha: true,
                    antialias: true,
                    powerPreference: 'high-performance',
                });
                const lineMaterial = new LineBasicMaterial({
                    color: new Color('#68b7ad'),
                    transparent: true,
                    opacity: 0.12,
                    blending: AdditiveBlending,
                });
                const pointMaterial = new PointsMaterial({
                    color: new Color('#d79665'),
                    size: 0.035,
                    sizeAttenuation: true,
                    transparent: true,
                    opacity: 0.24,
                    blending: AdditiveBlending,
                });
                const lineMesh = new LineSegments(lineGeometry, lineMaterial);
                const pointMesh = new Points(pointGeometry, pointMaterial);
                let animationFrame = 0;

                lineGeometry.setAttribute(
                    'position',
                    new BufferAttribute(lines, 3),
                );
                pointGeometry.setAttribute(
                    'position',
                    new BufferAttribute(points, 3),
                );

                camera.position.set(0, 0, 10);
                scene.add(lineMesh, pointMesh);

                renderer.domElement.style.display = 'block';
                renderer.domElement.style.width = '100%';
                renderer.domElement.style.height = '100%';
                renderer.setClearAlpha(0);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
                container.appendChild(renderer.domElement);

                const resize = () => {
                    const { width, height } = container.getBoundingClientRect();
                    const aspect = width / Math.max(height, 1);
                    const viewHeight = 7.2;
                    const viewWidth = viewHeight * aspect;

                    camera.left = -viewWidth / 2;
                    camera.right = viewWidth / 2;
                    camera.top = viewHeight / 2;
                    camera.bottom = -viewHeight / 2;
                    camera.updateProjectionMatrix();
                    renderer.setSize(width, height, false);
                };

                const resizeObserver = new ResizeObserver(resize);
                resizeObserver.observe(container);
                resize();

                const handlePointerMove = (event: PointerEvent) => {
                    pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
                    pointer.y = -(event.clientY / window.innerHeight - 0.5) * 2;
                };

                window.addEventListener('pointermove', handlePointerMove, {
                    passive: true,
                });

                const render = (time = 0) => {
                    const progress = time * 0.00008;

                    lineMesh.rotation.z = Math.sin(progress) * 0.008;
                    pointMesh.rotation.z = lineMesh.rotation.z;
                    scene.position.x = pointer.x * 0.035;
                    scene.position.y =
                        pointer.y * 0.025 + Math.sin(progress) * 0.025;

                    renderer.render(scene, camera);

                    if (!prefersReducedMotion) {
                        animationFrame = window.requestAnimationFrame(render);
                    }
                };

                render();

                cleanup = () => {
                    window.cancelAnimationFrame(animationFrame);
                    window.removeEventListener(
                        'pointermove',
                        handlePointerMove,
                    );
                    resizeObserver.disconnect();
                    lineGeometry.dispose();
                    pointGeometry.dispose();
                    lineMaterial.dispose();
                    pointMaterial.dispose();
                    renderer.dispose();
                    renderer.domElement.remove();
                };
            },
        );

        return () => {
            cancelled = true;
            cleanup();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 [mask-image:radial-gradient(ellipse_at_center,black_0%,black_46%,transparent_82%)] opacity-45"
        />
    );
}
