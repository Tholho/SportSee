import React from "react"
import { UserData } from "../types/data"
import ActivityG from "./activityG"
import AverageSessions from "./averageSessionsG"
import PerformanceG from "./performanceG"
import ScoreG from "./scoreG"

const Graphs: React.FC<{ data: UserData }> = ({ data }) => {
    //console.log(data.activity)
    return (
        <div className="flex-col w-full">
            <ActivityG data={data.activity.data} />
            <div className="flex w-full mt-2 h-1/2 gap-2">
                    <AverageSessions data={data.averageSessions.data} />
                    <PerformanceG data={data.performance.data} />
                    <ScoreG data={data.base.data} />                
            </div>
        </div>

    )
}

export default Graphs