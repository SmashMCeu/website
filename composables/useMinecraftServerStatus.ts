import { statusJava, type JavaStatusResponse } from "node-mcstatus";

export const useMinecraftServerStatus = () => {


    const MINECRAFT_SERVER_IP = "play.smashmc.eu";
    

    async function getServerStatus(): Promise<JavaStatusResponse | undefined> {
        try {
            const response: JavaStatusResponse = await statusJava(MINECRAFT_SERVER_IP);
            return response;
        } catch (error) {
            return undefined;
        }
    }

    async function getPlayerCount(): Promise<number> {
        const status = await getServerStatus();
        if (status && status.players) {
            return status.players.online;
        }
        return 0;
    }



    return { getServerStatus, getPlayerCount }

}