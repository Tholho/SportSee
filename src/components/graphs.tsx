import React from "react"
import { UserData } from "../types/data"
import ActivityG from "./activityG"
import AverageSessions from "./averageSessionsG"
import PerformanceG from "./performanceG"
import ScoreG from "./scoreG"

const Graphs: React.FC<{ data: UserData }> = ({ data }) => {
    return (
        <div className="flex-col w-full">
            <ActivityG data={data.activity.data} />
            <div className="flex w-full pt-2 h-1/2 gap-2">
                    <AverageSessions data={data.averageSessions.data} />
                    <PerformanceG data={data.performance.data} />
                    <ScoreG data={data.base.data} />                
            </div>
        </div>

    )
}

export default Graphs