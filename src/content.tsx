import React from "react";
import { createRoot } from "react-dom/client";
import ProjectList from "./components/modules/ProjectList";

export default function injectApp() {
    if (document.getElementById("gemini-supercharged-root")) return; // Safety check: Inject only once and only if the target element exists

    const chatsList = document.querySelector('conversations-list[data-test-id="all-conversations"]'); // Anchor element ('conversations-list[data-test-id="all-conversations"]')
    if (!chatsList) return;

    const rootElm = document.createElement("div");
    rootElm.id = "gemini-supercharged-root";

    // The injector: Insert the Projects root element before the target element (chatsList) to ensure it appears above it
    chatsList.parentNode?.insertBefore(rootElm, chatsList);
    createRoot(rootElm).render(<ProjectList />);
    // 

    // DOM observer: Watch for changes in the DOM to ensure the app is injected if the target element is dynamically added later
    new MutationObserver(injectApp).observe(document.body, {
        childList: true,
        subtree: true
    });
    //
}