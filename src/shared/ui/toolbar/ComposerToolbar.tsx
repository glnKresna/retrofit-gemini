import { CapsuleButton } from "../buttons/capsule-button/CapsuleButton";
import "./ComposerToolbar.css"

export function ComposerToolbar() {
    return (
        <div className="retrofit-toolbar">
            <CapsuleButton 
                icon="📚"
                label="Prompt Library"
                onClick={() => console.log("Prompt Library: clicked")}
            />

            <CapsuleButton
                icon="😳"
                label="Diinjak cina?"
                onClick={() => console.log("Prompt Library clicked")}
            />
        </div>
    );
}