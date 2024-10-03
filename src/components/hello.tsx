import { BaseData } from "../types/data"

const Hello: React.FC<{ data: BaseData['data'] }> = ({ data }) => {
    return (
        <div className="">
        <h1 className="font-medium mb-6 text-5xl">Bonjour <span className="text-sportsee-brightred">{data.userInfos.firstName}</span></h1>
        <p className="mb-10 text-lg"> Félicitation ! Vous avez explosé vos objectifs hier 👏 </p>
        </div>
    )
}

export default Hello