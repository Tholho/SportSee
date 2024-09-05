import { PerformanceData } from "../types/data"
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, Legend, PolarRadiusAxis } from "recharts";

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
            <RadarChart outerRadius={90} width={250} height={250} data={graphData}>
                <PolarGrid gridType="polygon" radialLines={false} />
                <PolarAngleAxis axisLine={false} dataKey="stat" tick={{ fill: "#FFFFFF", fontSize: "12" }} />
                <PolarRadiusAxis axisLine={false} domain={[0, 200]} tick={false} tickCount={5} ticks={[50, 100, 200, 300, 400] as any} />
                <Radar legendType="none" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
                <Legend />
            </RadarChart>
    )
}


export default PerformanceG