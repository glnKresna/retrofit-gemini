import { createRoot } from "react-dom/client";
import { App } from "./App";

export function mountComposerApp(container: HTMLElement) {
    createRoot(container).render(<App />);
}