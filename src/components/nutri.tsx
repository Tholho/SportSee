import React from "react"
import { BaseData } from "../types/data"
import FoodPart from "./foodPart";

const Nutri: React.FC<{ data: BaseData['data'] }> = ({ data }) => {
    return (
        <div className="flex flex-col w-[20%] justify-between">
            <FoodPart 
            keyDataType="Calories"
            data={data.keyData.calorieCount + "kCal"}
            src="src/assets/icons/foodIcons/1energy.svg"
            bgColor="bg-[#FF0000]" size={20} bgOpacity="bg-opacity-10"
            />
            <FoodPart 
            keyDataType="Protéines"
            data={data.keyData.calorieCount + "kCal"}
            src="src/assets/icons/foodIcons/2proteins.svg"
            bgColor="bg-[#4AB8FF]" size={20} bgOpacity="bg-opacity-10"
            />
            <FoodPart 
            keyDataType="Glucides"
            data={data.keyData.calorieCount + "kCal"}
            src="src/assets/icons/foodIcons/3carbohydrates.svg"
            bgColor="bg-[#FDCC0C]" size={20} bgOpacity="bg-opacity-10"
            />
            <FoodPart 
            keyDataType="Lipides"
            data={data.keyData.calorieCount + "kCal"}
            src="src/assets/icons/foodIcons/4lipids.svg"
            bgColor="bg-[#FD5181]" size={20} bgOpacity="bg-opacity-10"
            />
        </div>
    )
}

export default Nutri