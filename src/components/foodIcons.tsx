import React from "react"
import Icon from "./Icon"

interface FoodIconsProps {
    contents: { [key: string]: string };
}

const SideIcons: React.FC<FoodIconsProps> = ({ contents }) => (
    <ul className="p-6 space-y-4">
        {Object.entries(contents).map(([key, value]) => (
            <li key={key} >
                <Icon src={value} />
            </li>
        ))}
    </ul>
);

export default SideIcons;