import { TechIcon } from '@/components/tech-icon';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Project } from '@/data/portfolio';
import { cn } from '@/lib/utils';

type ProjectCardProps = {
    project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card
            className={cn(
                'group h-full p-0 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]',
                project.featured && 'md:[&_div[data-slot=card-header]]:p-8',
            )}
        >
            <div className="flex h-full flex-col">
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
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition duration-200 hover:gap-3"
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
