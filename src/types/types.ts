export interface Project {
    id: string;
    name: string;
    icon: string;
}

export interface SideBarButtonProps {
    name: string;
    icon: string;
    onClick: () => void;
    isActive: boolean;
}

export interface SuperchargedStore {
    projects: Project[];
    activeProject: string | null;
    chatMapping: Record<string, string>;
    addProject: (name: string, icon: string) => void;
    setActiveProject: (id: string | null) => void;
}