import { create } from "zustand";
import type { SuperchargedStore } from "../types/types";

export const useStore = create <SuperchargedStore>((set) => ({
    projects: [
        { id: "proj_1", name: "Coding", icon: "👩‍💻"},
        { id: "proj_2", name: "Study", icon: "🔬"},
        { id: "proj_3", name: "Writing", icon: "📑"},
        { id: "proj_4", name: "Health", icon: "💪"},
        { id: "proj_5", name: "Business", icon: "💲"},
        { id: "proj_6", name: "Entertainment", icon: "🎮"},
    ],

    activeProject: null,
    chatMapping: {},

    addProject: (name, icon) => set((state) => ({
        projects: [
            ...state.projects, 
            { id: `proj_${Date.now()}`, name, icon }
        ]
    })),
    
    setActiveProject: (id) => set({ activeProject: id }),
}));