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
            bgColor="bg-sportsee-brightred" size={20} bgOpacity="bg-opacity-10"
            />
            <FoodPart 
            keyDataType="Protéines"
            data={data.keyData.calorieCount + "kCal"}
            src="src/assets/icons/foodIcons/2proteins.svg"
            bgColor="bg-sportsee-lightblue" size={20} bgOpacity="bg-opacity-10"
            />
            <FoodPart 
            keyDataType="Glucides"
            data={data.keyData.calorieCount + "kCal"}
            src="src/assets/icons/foodIcons/3carbohydrates.svg"
            bgColor="bg-sportsee-lightyellow" size={20} bgOpacity="bg-opacity-10"
            />
            <FoodPart 
            keyDataType="Lipides"
            data={data.keyData.calorieCount + "kCal"}
            src="src/assets/icons/foodIcons/4lipids.svg"
            bgColor="bg-sportsee-lightred" size={20} bgOpacity="bg-opacity-10"
            />
        </div>
    )
}

export default Nutri