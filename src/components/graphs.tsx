import React from "react"
import { UserData } from "../types/data"
import ActivityG from "./activityG"
import AverageSessions from "./averageSessionsG"
import PerformanceG from "./performanceG"
import ScoreG from "./scoreG"

const Graphs: React.FC<{ data: UserData }> = ({ data }) => {
    //console.log(data.activity)
    return (
        <div className="z-20 flex-col">
            <ActivityG data={data.activity.data} />
            <div className="3graph flex w-full">
                <div className="divAverage flex-1 p-2 bg-[#FF0000] relative">
                    <p className="absolute top-6 left-6 text-white w-[60%]">Durée moyenne des sessions</p>
                    <AverageSessions data={data.averageSessions.data} />
                </div>
                <div className="flex-1 p-2 bg-[#282D30] rounded text-white">
                    <PerformanceG data={data.performance.data} />
                </div>
                <div className="flex-1 p-2">
                    <ScoreG data={data.base.data} />
                </div>
            </div>
        </div>

    )
}

export default Graphs