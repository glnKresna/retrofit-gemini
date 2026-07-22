import "./ComposerAction.css";

type ComposerActionProps = {
    label: string
    onClick?: () => void
    icon?: React.ReactNode
};

export function ComposerAction(props: ComposerActionProps) {
    return (
        <button className="retrofit-composer-action" onClick={props.onClick}>
            <span>{props.icon}</span>
            <span>{props.label}</span>
        </button>
    )
}