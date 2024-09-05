import { AverageSessionsData } from "../types/data"
import { LineChart, XAxis, Tooltip, Legend, Line, ResponsiveContainer } from "recharts"

const AverageSessions: React.FC<{ data: AverageSessionsData['data'] }> = ({ data }) => {
    
    const extendedData = structuredClone(data);
    extendedData.sessions.unshift({day: 0, sessionLength: extendedData.sessions[0].sessionLength })
    extendedData.sessions.push({day: 8, sessionLength: extendedData.sessions[7].sessionLength })

    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

    console.log(data.userId)
    return (
        <LineChart width={250} height={250} data={extendedData.sessions}
            margin={{ top: 35, right: 0, left: 0, bottom: 5 }}>
            <XAxis axisLine={false} tickLine={false} dataKey="day" tickFormatter={(value) => (value > 0 && value <= 7 ? days[value - 1] : '')} tick={{fill: "#FFFFFF"}} />
            <Tooltip offset={0}/>
            <Line dot={false} type="basis" dataKey="sessionLength" stroke="#FFFFFF" />
        </LineChart>
    )
}

export default AverageSessions