import { RuntimeConfig } from "nuxt/schema";
import { fetchIdentities, Identity } from "~/server/utils/identity";
import { TopUser } from "~/types/TopUser";

export default defineEventHandler(async (event): Promise<Array<TopUser>> => {

    try {
        const top: TopStatsList = await $fetch(`https://api.smashmc.eu/statistics/users/top?limit=5&type=smash&monthly=true`);
        const set = new Set();
        for (const i of top.result) {
            set.add(i)
        }

        const identitys: Array<Identity> = await fetchIdentities(set);
        const out: Array<TopUser> = [];

        for (const topUser of top.result) {
            let name = "";
            const user = identitys.find(i => i.uuid === topUser);
            if (user === undefined) {
                continue
            }

            const textureProps = JSON.parse(atob(user.texture.value));

            const isSlim = textureProps.textures.SKIN.metadata?.model == "slim";
            out.push({
                name: user?.name,
                uuid: user.uuid,
                texture: textureProps.textures.SKIN.url,
                isSlim
            });
        }
        return out;
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: "Failed to fetch data",
        });
    }
});
