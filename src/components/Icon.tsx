import React from "react"
import { ReactSVG } from "react-svg";

interface IconProps {
    size?: number;
    src: string;
    bgColor?: string;
    color?: string;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ src, size = 32, bgColor = "bg-white", color = "text-sportsee-red" }) => {
    return (
        <div className={`p-4 ${bgColor} rounded`}>
            <ReactSVG src={src}
                beforeInjection={(svg) => {
                    svg.setAttribute('width', size.toString());
                    svg.setAttribute('height', size.toString());
                    svg.setAttribute('fill', color.toString());
                    svg.setAttribute('stroke', color.toString());
                }}
            />
        </div>
    )
}

export default Icon