import { useState } from 'react';
import { TechIcon } from '@/components/tech-icon';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Project } from '@/data/portfolio';
import { trackPlausibleEvent } from '@/lib/plausible';
import { cn } from '@/lib/utils';

type ProjectCardProps = {
    project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
    const [hasPreview, setHasPreview] = useState(Boolean(project.imageSrc));

    return (
        <Card
            className={cn(
                'group h-full overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]',
                project.featured && 'md:[&_div[data-slot=card-header]]:p-8',
            )}
        >
            <div className="flex h-full flex-col">
                {project.imageSrc ? (
                    <div className="relative border-b border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(16,23,31,0.96),rgba(10,14,19,0.98))]">
                        {hasPreview ? (
                            <img
                                src={project.imageSrc}
                                alt={
                                    project.imageAlt ??
                                    `Vista previa del proyecto ${project.name}`
                                }
                                loading={project.featured ? 'eager' : 'lazy'}
                                width={1280}
                                height={720}
                                onError={() => setHasPreview(false)}
                                className={cn(
                                    'h-52 w-full object-cover object-top transition duration-500 group-hover:scale-[1.015]',
                                    project.featured && 'md:h-72',
                                )}
                            />
                        ) : (
                            <div
                                className={cn(
                                    'flex h-52 items-end bg-[radial-gradient(circle_at_top,rgba(104,183,173,0.18),transparent_46%),linear-gradient(180deg,rgba(19,27,35,0.98),rgba(11,16,22,0.98))] p-6',
                                    project.featured && 'md:h-72 md:p-8',
                                )}
                            >
                                <div className="space-y-2">
                                    <p className="text-xs font-semibold tracking-[0.2em] text-[var(--color-primary)] uppercase">
                                        Vista previa
                                    </p>
                                    <p className="text-sm leading-6 text-[var(--color-muted)]">
                                        Añade la imagen en{' '}
                                        <span className="font-medium text-[var(--color-text)]">
                                            public{project.imageSrc}
                                        </span>{' '}
                                        para mostrarla aquí.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                ) : null}

                <CardHeader data-slot="card-header" className="space-y-4">
                    {project.featured ? (
                        <Badge className="w-fit tracking-[0.18em] uppercase">
                            Proyecto destacado
                        </Badge>
                    ) : null}
                    <div className="space-y-3">
                        <CardTitle className="text-2xl">
                            {project.name}
                        </CardTitle>
                        <p className="text-base leading-7 text-[var(--color-text)]">
                            {project.summary}
                        </p>
                        <p className="text-sm leading-6 text-[var(--color-muted)]">
                            {project.description}
                        </p>
                    </div>
                </CardHeader>

                <CardContent className="mt-auto flex flex-wrap gap-2.5 pt-0">
                    {project.stack.map((item) => (
                        <Badge key={item} variant="secondary">
                            <TechIcon
                                name={item}
                                className="shrink-0 text-[var(--color-muted)]"
                            />
                            {item}
                        </Badge>
                    ))}
                </CardContent>

                {project.href ? (
                    <CardContent className="pt-0">
                        <a
                            href={project.href}
                            aria-label={`Ver ${project.name} en una nueva pestaña`}
                            target="_blank"
                            rel="noreferrer"
                            onClick={() =>
                                trackPlausibleEvent('View Project', {
                                    props: {
                                        project: project.name,
                                    },
                                })
                            }
                            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)] bg-[color-mix(in_srgb,var(--color-primary)_16%,transparent)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition duration-200 hover:gap-3 hover:bg-[color-mix(in_srgb,var(--color-primary)_24%,transparent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                        >
                            {project.hrefLabel ?? 'Ver proyecto'}
                            <span aria-hidden="true">-&gt;</span>
                        </a>
                    </CardContent>
                ) : null}
            </div>
        </Card>
    );
}
