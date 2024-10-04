import React from "react"
import Icon from "./Icon"
import { IconProps } from "../types/icons"

interface FoodPartProps extends IconProps {
    data: string;
    keyDataType: string;
  }

const FoodPart: React.FC<FoodPartProps> = ({keyDataType, data, ...iconProps }) => {
    return (
        <div className="flex items-center bg-neutral-50 p-6  justify-around gap-1">
        <Icon {...iconProps} />
        <div className="flex flex-col">
        <p className="font-semibold text-l">{data}</p>
        <p className="text-sportsee-midgrey text-sm">{keyDataType}</p>
        </div>
        </div>
    )
}

export default FoodPart;