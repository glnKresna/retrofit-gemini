export interface Project {
    id: string;
    label: string;
    icon: string;
    chatIds: string[];
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

    addProject: (project: Project) => void;
    setActiveProject: (id: string | null) => void;
    addChatToProject: (projectId: string, chatId: string) => void;
}