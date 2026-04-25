import { ProjectCard } from '@/components/project-card';
import { Section } from '@/components/section';
import { SectionHeading } from '@/components/section-heading';
import { projects } from '@/data/portfolio';

export function ProjectsGrid() {
    const featuredProject = projects.find((project) => project.featured);
    const secondaryProjects = projects.filter((project) => !project.featured);

    return (
        <Section id="proyectos" labelledBy="proyectos-heading">
            <div className="space-y-12">
                <SectionHeading
                    eyebrow="Proyectos"
                    headingId="proyectos-heading"
                    title="Proyectos que reflejan iniciativa, criterio técnico y ganas de construir."
                    description="La selección es breve y honesta. La idea es mostrar trabajos que explican bien el perfil y dejan claro el tipo de problemas que me interesa resolver."
                />

                <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(18rem,0.9fr)]">
                    {featuredProject ? (
                        <ProjectCard project={featuredProject} />
                    ) : null}
                    <div className="grid gap-6">
                        {secondaryProjects.map((project) => (
                            <ProjectCard key={project.name} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
