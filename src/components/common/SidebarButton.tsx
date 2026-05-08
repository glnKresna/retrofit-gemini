import type { SideBarButtonProps } from "../../types/types";

export default function SidebarButton({name, icon, onClick, isActive}: SideBarButtonProps) {
    return (
        <div onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 8px 8px 16px', cursor: 'pointer', borderRadius: '25px', backgroundColor: isActive 
            ? 'rgba(138, 180, 248, 0.2)'
            : 'transparent'
        }}>
            <span>{icon}</span>
            <div>{name}</div>
        </div>
    );
}