import { createRoot } from "react-dom/client";
import { ensureComposerMount } from "@/shared/gemini/mount";
import { App } from "@/app/App";
import { mountComposerApp } from "@/app/main";

const mount = ensureComposerMount();

if (mount) {
    mountComposerApp(mount);
    createRoot(mount).render(<App />);
}