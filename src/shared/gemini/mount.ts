import { getComposerHost, getComposerWrapper } from "./composer";

export function ensureComposerMount(): HTMLElement | null {
    const wrapper = getComposerWrapper();
    if (!wrapper) return null;

    const root = wrapper.querySelector<HTMLElement>("#retrofit-composer-toolbar");
    if (root) return root;

    const mountRoot = document.createElement("div");
    mountRoot.id = "retrofit-composer-toolbar";
    mountRoot.className = "retrofit-composer-root";

    wrapper.prepend(mountRoot);

    return mountRoot;
}