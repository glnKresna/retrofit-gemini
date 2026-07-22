import { GEMINI_SELECTOR } from "./selector";

export function getComposerHost() {
    return document.querySelector<HTMLElement>(GEMINI_SELECTOR.composerHost);
}

export function getComposerWrapper() {
    return document.querySelector<HTMLElement>(GEMINI_SELECTOR.composerWrapper);
}

export function getComposer() {
    return document.querySelector<HTMLElement>(GEMINI_SELECTOR.composer);
}