import React from "react"
import { ReactSVG } from "react-svg";

interface IconProps {
    size?: number;
    src: string;
    bgColor?: string;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ src, size = 32, bgColor = "bg-white", className }) => {
    return (
        <div className={`p-4 ${bgColor} rounded`}>
            <ReactSVG src={src}
                className={className}
                beforeInjection={(svg) => {
                    svg.setAttribute('width', size.toString());
                    svg.setAttribute('height', size.toString());
                    svg.setAttribute('fill', size.toString());
                }}
            />
        </div>
    )
}

export default Icon