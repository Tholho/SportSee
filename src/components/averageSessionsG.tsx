import { AverageSessionsData } from "../types/data"
import { LineChart, XAxis, Tooltip, Line, ResponsiveContainer } from "recharts"

import { TooltipProps } from 'recharts';
// for recharts v2.1 and above
import {
    ValueType,
    NameType,
} from 'recharts/types/component/DefaultTooltipContent';

const CustomTooltip = ({
    active,
    payload
}: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip bg-neutral-50 p-2">
                <p>{`${payload[0].value}`} min</p>
            </div>
        );
    }

    return null;
};



const AverageSessions: React.FC<{ data: AverageSessionsData['data'] }> = ({ data }) => {
    const extendedData = structuredClone(data);
    extendedData.sessions.unshift({ day: 0, sessionLength: extendedData.sessions[0].sessionLength })
    extendedData.sessions.push({ day: 8, sessionLength: extendedData.sessions[7].sessionLength })

    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

    console.log(data.userId)
    return (
        <div className="flex-1 p-2 bg-[#FF0000] relative rounded h-full">
            <p className="absolute text-white w-[60%] left-8 top-4">Durée moyenne des sessions</p>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={260} height={260} data={data.sessions}
                    margin={{ top: 35, right: 0, left: 5, bottom: 5 }}>
                    <XAxis axisLine={false} tickLine={false} dataKey="day" tickFormatter={(value) => (value >= 1 && value <= 7 ? days[value - 1] : '')} tick={{ fill: "#FFFFFF" }} />
                    <Tooltip offset={0} content={<CustomTooltip />}
                    />
                    <Line dot={false} type="monotone" dataKey="sessionLength" stroke="#FFFFFF" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AverageSessions