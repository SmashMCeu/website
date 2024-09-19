import type {TopStatsList} from "~/types/TopStatsList";

const config: RuntimeConfig = useRuntimeConfig();

const testing: boolean = false;

export default defineEventHandler(async (event): Promise<TopStatsList> => {
    const query = getQuery(event);
    const limit: number = parseInt(query.limit) as number;

    if (isNaN(limit)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid limit',
        });
    }

    if (limit > 10) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Limit too high',
        });
    }

    if (limit < 1) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Limit too low',
        });
    }

    if (testing) {
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
            statusMessage: 'Failed to fetch data',
        });
    }
});