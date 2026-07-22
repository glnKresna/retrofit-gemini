import { ComposerAction } from "../composer-action/ComposerAction";
import "./ComposerToolbar.css"

export function ComposerToolbar() {
    return (
        <div className="retrofit-toolbar">
            <ComposerAction 
                icon="📚"
                label="Prompt Library"
                onClick={() => console.log("Prompt Library clicked")}
            />

            <ComposerAction 
                icon="⚫"
                label="This is a ridiculously long placeholder"
                onClick={() => console.log("Prompt Library clicked")}
            />
        </div>
    );
}