import React from "react";
import { createRoot } from "react-dom/client";
import ProjectList from "./components/modules/ProjectList";

function injectApp() {
    if (document.getElementById("gemini-supercharged-root")) return; // Safety check: Inject only once and only if the target element exists

    const chatsList = document.querySelector('conversations-list[data-test-id="all-conversations"]'); // Anchor element ('conversations-list[data-test-id="all-conversations"]')
    if (!chatsList) return;

    const rootElm = document.createElement("div");
    rootElm.id = "gemini-supercharged-root";

    try {
        chatsList.before(rootElm); // Insert the root element before the target anchor element
    } catch (error) {
        console.error("[Supercharged] DOM Insertion failed:", error);
        return;
    }

    createRoot(rootElm).render(
        <React.StrictMode>
            <ProjectList />
        </React.StrictMode>
    );
}

// DOM observer: Watch for changes in the DOM to ensure the app is injected if the target element is dynamically added later
new MutationObserver(injectApp).observe(document.body, {
    childList: true,
    subtree: true
});
//