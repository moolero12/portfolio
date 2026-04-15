import { Section } from '@/components/section';
import { SectionHeading } from '@/components/section-heading';
import { TechIcon } from '@/components/tech-icon';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skillGroups } from '@/data/portfolio';

export function SkillsGrid() {
    return (
        <Section
            id="habilidades"
            className="border-y border-[var(--color-line)] bg-[rgba(18,26,34,0.35)]"
        >
            <div className="space-y-12">
                <SectionHeading
                    eyebrow="Habilidades"
                    title="Tecnologías y herramientas con las que ya trabajo."
                    description="He evitado barras o porcentajes artificiales. Prefiero mostrar con claridad el stack que uso, el entorno en el que he trabajado y la base técnica que aporta valor al perfil."
                />

                <div className="grid gap-6 md:grid-cols-2">
                    {skillGroups.map((group) => (
                        <Card key={group.title} className="h-full">
                            <CardHeader>
                                <CardTitle>{group.title}</CardTitle>
                                <p className="text-sm leading-6 text-[var(--color-muted)]">
                                    {group.description}
                                </p>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-2.5 pt-0">
                                {group.items.map((item) => (
                                    <Badge key={item} variant="secondary">
                                        <TechIcon
                                            name={item}
                                            className="shrink-0 text-[var(--color-muted)]"
                                        />
                                        {item}
                                    </Badge>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
}
