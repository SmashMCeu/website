import { RuntimeConfig } from "nuxt/schema";

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


    try {
        return await $fetch(`https://api.smashmc.eu/statistics/users/top?limit=5&type=smash&monthly=true`);
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: "Failed to fetch data",
        });
    }
});
