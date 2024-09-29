import { ActivityData } from "../types/data"
import { BarChart, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Bar, ResponsiveContainer } from "recharts"
import { TooltipProps } from 'recharts';

import {
    ValueType,
    NameType,
} from 'recharts/types/component/DefaultTooltipContent';

const RoundedBar = (props) => {
    const { x, y, width, height, fill } = props;

    const radius = 6;

    return (
        <g>
            {/* Création d'une barre avec sommet arrondi */}
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                rx={radius}  // Rayon pour les bords arrondis en haut
                ry={radius}
                fill={fill}
            />
            {/* Ajouter un rectangle au bas pour combler la partie non arrondie */}
            <rect
                x={x}
                y={y + height - radius}
                width={width}
                height={radius}
                fill={fill}
            />
        </g>
    );
};

const CustomTooltip = ({
    active,
    payload
}: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip bg-[#E60000]">
                <p className="text-white p-2 text-xs">{`${payload[0].value}`}kg</p>
                <p className="text-white p-2 text-xs">{`${payload[1].value}`}kCal</p>

            </div>
        );
    }

    return null;
};

const ActivityG: React.FC<{ data: ActivityData['data'] }> = ({ data }) => {

    return (
        <div className="relative flex-grow bg-neutral-50 h-1/2">
            <h2 className="absolute top-4 left-8 font-normal">Activite quotidienne</h2>
            <ResponsiveContainer width="100%" height="95%">
                <BarChart
                    width={700}
                    height={250}
                    data={data.sessions}
                    barGap={10}
                    barCategoryGap={30}
                    margin={{
                        top: 20,
                        right: 20,
                        left: 40,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#DEDEDE" />
                    <XAxis dataKey="day" tickFormatter={(value, index) => index + 1} tickSize={0} tickMargin={15} stroke="#DEDEDE" style={{ fill: "#9B9EAC" }} />
                    <YAxis yAxisId="left" hide={true} />
                    <YAxis yAxisId="right" orientation="right" tickLine={false} tickMargin={30} axisLine={false} domain={['dataMin - 1', 'dataMax + 1']} style={{ fill: "#9B9EAC" }} />
                    <Tooltip offset={0} content={<CustomTooltip />}
                    />
                    <Legend verticalAlign="top" align="right" iconType="circle" iconSize={10} height={40}
                        formatter={(value, entry, index) => <span className="text-[#74798C] m-4">{value}</span>}
                    />
                    <Bar name="Poids (kg)" yAxisId="right" dataKey="kilogram" fill="#282D30" shape={<RoundedBar width={10} />} />
                    <Bar name="Calories brûlées (kCal)" yAxisId="left" dataKey="calories" fill="#E60000" shape={<RoundedBar width={10} />} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ActivityG