import UserStatsPoints, { IUserStatsPoints } from "../models/UserStatsPoints";
import uuidToBasicUser from "../utils/uuidToTexture";


export default defineEventHandler(async () => {


    const topFiveEnties = await UserStatsPoints.find({ gameType: "smash" }).sort({ monthlyPoints: -1 }).limit(5);
    const topFiveBasicUsers: UserStats[] = await Promise.all(topFiveEnties.map(async (entry: IUserStatsPoints) => {
        const user = await uuidToBasicUser(entry.uuid);
        return <UserStats>{
            uuid: user.uuid,
            username: user.name,
            skinTexture: user.texture,
            gameType: entry.gameType,
            monthlyPoints: entry.monthlyPoints,
            totalPoints: entry.totalPoints
        }
    }));
    
    return topFiveBasicUsers;


})