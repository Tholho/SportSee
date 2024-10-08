import React from "react"
import Icon from "./Icon"

interface SideIconsProps {
    contents: { [key: string]: string };
}

const SideIcons: React.FC<SideIconsProps> = ({ contents }) => (
    <ul className="p-6 space-y-4">
        {Object.entries(contents).map(([key, value]) => (
            <li key={key} >
                <Icon src={value} />
            </li>
        ))}
    </ul>
);

export default SideIcons;