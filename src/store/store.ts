import { create } from "zustand";
import type { SuperchargedStore } from "../types/types";

// export const useStore = create <SuperchargedStore>((set) => ({
//     projects: [
//         { id: "proj_1", name: "Coding", icon: "👩‍💻"},
//         { id: "proj_2", name: "Study", icon: "🔬"},
//         { id: "proj_3", name: "Writing", icon: "📑"},
//         { id: "proj_4", name: "Health", icon: "💪"},
//         { id: "proj_5", name: "Business", icon: "💲"},
//         { id: "proj_6", name: "Entertainment", icon: "🎮"},
//     ],

//     activeProject: null,
//     chatMapping: {},

//     addProject: (name, icon) => set((state) => ({
//         projects: [
//             ...state.projects, 
//             { id: `proj_${Date.now()}`, name, icon }
//         ]
//     })),
    
//     setActiveProject: (id) => set({ activeProject: id }),
// }));

export const useSuperchargedStore = create<SuperchargedStore>((set) => ({
    // Initial state (for demo purposes)
    projects: [
        { id: "proj_1", label: "Coding", chatIds: [], icon: "👩‍💻"},
        { id: "proj_2", label: "Study", chatIds: [], icon: "🔬"},
        { id: "proj_3", label: "Writing", chatIds: [], icon: "📑"},
        { id: "proj_4", label: "Health", chatIds: [], icon: "💪"},
        { id: "proj_5", label: "Business", chatIds: [], icon: "💲"},
        { id: "proj_6", label: "Entertainment", chatIds: [], icon: "🎮"},
    ],
    activeProject: null,

    setActiveProject: (id) => set({ activeProject: id }),

    addProject: (newProject) => set((state) => ({ 
        projects: [...state.projects, newProject] 
    })),

    addChatToProject: (projectId, chatId) => set((state) => ({
        projects: state.projects.map((project) => {
            if (project.id === projectId) {
                
                // Safety check: If the Chat ID is already in the project, just return it as-is (no duplicates)
                if (project.chatIds.includes(chatId)) {
                    return project; 
                }

                return {
                    ...project,
                    chatIds: [...project.chatIds, chatId]
                };
            }
            
            return project;
        })
    })),
}));
