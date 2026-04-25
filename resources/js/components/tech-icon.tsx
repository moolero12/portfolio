import type { ComponentType } from 'react';

import type { IconBaseProps } from 'react-icons';
import { FaWindows } from 'react-icons/fa';
import {
    SiCapacitor,
    SiCss,
    SiDocker,
    SiFirebase,
    SiGit,
    SiGithub,
    SiGitlab,
    SiHtml5,
    SiJavascript,
    SiLaravel,
    SiLinux,
    SiMariadb,
    SiMongodb,
    SiMysql,
    SiNodedotjs,
    SiPhp,
    SiPostgresql,
    SiPostman,
    SiPython,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiUbuntu,
} from 'react-icons/si';

const techIcons: Record<string, ComponentType<IconBaseProps>> = {
    PHP: SiPhp,
    Laravel: SiLaravel,
    MySQL: SiMysql,
    PostgreSQL: SiPostgresql,
    MariaDB: SiMariadb,
    MongoDB: SiMongodb,
    Firebase: SiFirebase,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    React: SiReact,
    HTML5: SiHtml5,
    CSS3: SiCss,
    CSS: SiCss,
    'Tailwind CSS': SiTailwindcss,
    Git: SiGit,
    GitHub: SiGithub,
    GitLab: SiGitlab,
    Postman: SiPostman,
    Docker: SiDocker,
    'Node.js': SiNodedotjs,
    Linux: SiLinux,
    Windows: FaWindows,
    'Windows Server': FaWindows,
    'Ubuntu Server': SiUbuntu,
    Python: SiPython,
    Capacitor: SiCapacitor,
};

type TechIconProps = {
    name: string;
    size?: number;
    className?: string;
};

export function TechIcon({ name, size = 14, className }: TechIconProps) {
    const Icon = techIcons[name];

    if (!Icon) {
        return null;
    }

    return <Icon size={size} className={className} />;
}
