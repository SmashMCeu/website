import mongoose, { Schema } from 'mongoose';

export interface IUserStatsPoints {
    gameType: string;
    monthlyPoints: number;
    totalPoints: number;
    uuid: string;
}

const UserStatsPointsSchema = new Schema<IUserStatsPoints>({
    gameType: {
        type: String,
        required: true
    },
    monthlyPoints: {
        type: Number,
        required: true
    },
    totalPoints: {
        type: Number,
        required: true
    },
    uuid: {
        type: String,
        required: true
    }
});

const UserStatsPoints = mongoose.connection.useDb("stats").model<IUserStatsPoints>("points", UserStatsPointsSchema);
export default UserStatsPoints;