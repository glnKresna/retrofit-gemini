import React from "react";
import SidebarButton from "../common/SidebarButton";
import { useStore } from "../../store/store";

export default function ProjectList() {
    const projects = useStore((state) => state.projects);
    const activeProject = useStore((state) => state.activeProject);
    const setActiveProject = useStore((state) => state.setActiveProject);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '12px' }}>
            <SidebarButton 
                name='All Chats' 
                icon='🌐' 
                isActive={activeProject === null} 
                onClick={() => setActiveProject(null)} 
            />

            {projects.map((project) => (
                <SidebarButton
                    key = {project.id}
                    name = {project.name}
                    icon = {project.icon}

                    isActive = {activeProject === project.id}
                    onClick = {() => setActiveProject(project.id)}
                />
            ))}
        </div>
    )
}
