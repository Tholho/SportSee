import React from "react"
import { ReactSVG } from "react-svg";
import { IconProps } from "../types/icons";

const Icon: React.FC<IconProps> = ({ src, size = 32, bgColor = "bg-white", bgOpacity = "bg-opacity-100", svgPadding = "p-4", color = "text-sportsee-red" }) => {
    return (
        <div className={`${bgColor} ${bgOpacity} ${svgPadding} rounded`}>
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