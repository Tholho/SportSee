import React from "react"
import { BaseData } from "../types/data"
import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts"


const ScoreG: React.FC<{ data: BaseData['data'] }> = ({ data }) => {

    const score = data.todayScore ? data.todayScore : data.score;

    const graphData = [
        { name: 'UserScore', value: score },
        { name: 'Remains', value: 1 - score }
    ]

    return (
        <div className="relative flex justify-center items-center h-full flex-1 p-2 bg-neutral-100  rounded">
            <p className="absolute top-6 left-6 font-medium text-[#20253A]">Score</p>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={220} height={220}>
                    <Pie data={graphData} dataKey="value" cx="50%" cy="50%" innerRadius="63%" outerRadius="73%" startAngle={-150} endAngle={-390} fill="#FFFFFF" cornerRadius={10}>
                        {graphData.map((value, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={index === 0 ? '#FB0000' : '#F5F5F5'}
                                stroke="#F5F5F5"
                            />
                        ))}
                    </Pie>
                    <svg className="z-10 absolute inset-0 w-full h-full" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" role="img" preserveAspectRatio="xMidYMid meet" fill=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><circle fill="#FFFFFF" cx="50%" cy="50%" r="30%"></circle></g></svg>
                </PieChart>
            </ResponsiveContainer>
            <div className="z-20 absolute inset-0 flex flex-col justify-center items-center">
                <p className="font-semibold text-[140%]">{score * 100}%</p>
                <p className="text-sportsee-midgrey text-[90%]">de votre objectif</p>
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