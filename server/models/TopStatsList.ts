import type {UUID} from "~/types/UUID";

export interface TopStatsList {
    gameType: string;
    limit: number;
    monthly: boolean;
    result: Array<UUID>;
}