import React from "react"
import { BaseData } from "../types/data"
import { Pie, PieChart, Cell } from "recharts"


const ScoreG: React.FC<{ data: BaseData['data'] }> = ({ data }) => {

    const graphData = [
        { name: 'UserScore', value: data.todayScore },
        { name: 'Remains', value: 1 - data.todayScore }
    ]

    return (
        <div className="bg-neutral-100 relative rounded flex-1">
            <p className="absolute top-6 left-6 font-medium text-[#20253A]">Score</p>
            <PieChart width={250} height={250}>
                <Pie data={graphData} dataKey="value" cx="50%" cy="50%" innerRadius={74} outerRadius={85} startAngle={-150} endAngle={-390} fill="#FFFFFF" cornerRadius={10}>
                    {graphData.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={index === 0 ? '#FB0000' : '#F5F5F5'}
                            stroke="#F5F5F5"
                        />
                    ))}
                </Pie>
            </PieChart>

            
            <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-white w-[60%] h-[60%] rounded-full flex-col text-center"
            >
                <div className="relative top-[30%]">
                <p className="font-semibold text-[140%]">{data.todayScore * 100}%</p>
                <p className="text-[#74798C] text-[100%]">de votre objectif</p>
                </div>
            </div>

        </div>

    )
}


export default ScoreG

/*
style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'white',
                    width: '140px',
                    height: '140px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}
                    */