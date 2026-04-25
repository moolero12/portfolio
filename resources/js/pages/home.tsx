import { About } from '@/components/about';
import { ContactSection } from '@/components/contact-section';
import { EducationList } from '@/components/education-list';
import { ExperienceTimeline } from '@/components/experience-timeline';
import { Hero } from '@/components/hero';
import { ProjectsGrid } from '@/components/projects-grid';
import { SkillsGrid } from '@/components/skills-grid';
import { PortfolioLayout } from '@/layouts/portfolio-layout';

export default function Home() {
    return (
        <PortfolioLayout>
            <Hero />
            <About />
            <ProjectsGrid />
            <SkillsGrid />
            <ExperienceTimeline />
            <EducationList />
            <ContactSection />
        </PortfolioLayout>
    );
}
