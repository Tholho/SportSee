import { PerformanceData } from "../types/data"
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, Legend, PolarRadiusAxis, ResponsiveContainer } from "recharts";

const PerformanceG: React.FC<{ data: PerformanceData['data'] }> = ({ data }) => {


    const graphData = [

        { stat: data.kind[6], value: data.data.find(item => item.kind === 6)?.value },
        { stat: data.kind[5], value: data.data.find(item => item.kind === 5)?.value },
        { stat: data.kind[4], value: data.data.find(item => item.kind === 4)?.value },
        { stat: data.kind[3], value: data.data.find(item => item.kind === 3)?.value },
        { stat: data.kind[2], value: data.data.find(item => item.kind === 2)?.value },
        { stat: data.kind[1], value: data.data.find(item => item.kind === 1)?.value }
    ]
    console.log(data.data[0])
    return (
        <div className="flex-1 p-2 bg-[#282D30] rounded text-white">
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart width={300} height={300} data={graphData} margin={{ top: 15, right: 25, bottom: 15, left: 25 }
        }>
                <PolarGrid gridType="polygon" radialLines={false} />
                <PolarAngleAxis axisLine={false} dataKey="stat" tick={{ fill: "#FFFFFF", fontSize: "12" }}/>
                <PolarRadiusAxis axisLine={false} domain={[0, 400]} tick={false} tickCount={5} ticks={[50, 100, 200, 300, 400] as any} />
                <Radar legendType="none" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
            </RadarChart>
            </ResponsiveContainer>
            </div>
    )
}


export default PerformanceG