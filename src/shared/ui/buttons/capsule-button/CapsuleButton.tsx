import "./CapsuleButton.css";

type CapsuleButtonProps = {
    label: string
    onClick?: () => void
    icon?: React.ReactNode
};

export function CapsuleButton (props: CapsuleButtonProps) {
    return (
        <button className="retrofit-composer-action" onClick={props.onClick}>
            <span>{props.icon}</span>
            <span>{props.label}</span>
        </button>
    )
}