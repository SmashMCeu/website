import { RuntimeConfig } from "nuxt/schema";

const config: RuntimeConfig = useRuntimeConfig();

const isDevEnv: boolean = import.meta.dev || false;



export default defineEventHandler(async (event): Promise<TopStatsList> => {
    let limit: number = 5;
    const query = getQuery<{ limit: string }>(event);
    
    if (query && query.limit) {
        const limitQuery: number = parseInt(query.limit);

        if (isNaN(limitQuery)) {
            throw createError({
                statusCode: 400,
                statusMessage: "Invalid limit",
            });
        }
        if (limitQuery > 10) {
            throw createError({
                statusCode: 400,
                statusMessage: "Limit too high",
            });
        }
        if (limitQuery < 1) {
            throw createError({
                statusCode: 400,
                statusMessage: "Limit too low",
            });
        }

        limit = limitQuery;
    }

    

    if (isDevEnv) {
        return Promise.resolve(
            {
                gameType: "smash",
                limit: 5,
                monthly: true,
                result: [
                    "5f8939fc-3f94-4ee1-92e8-615c725dbede",
                    "2c7caee6-bcb1-41b4-8189-5dc727f567fe",
                    "618698d8-bf1a-40c0-9d7d-954a370ec573",
                    "070d6fef-b16a-4726-900c-133ea5bcddef",
                    "4df0de99-62af-4daf-b174-8b856749a61a"
                ]
            }
        )
    }

    try {
        return await $fetch(`${config.statsApiBaseUrl}/users/top?limit=${limit}&type=smash&monthly=true`);
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: "Failed to fetch data",
        });
    }
});