import React from "react"
import { BaseData } from "../types/data"

const Nutri: React.FC<{ data: BaseData['data'] }> = ({ data }) => {
    console.log(data.id)
    return (
        <div className="nutri bg-black flex-col w-[20%]">
        </div>
    )
}

export default Nutri