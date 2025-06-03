import { Identity, useIdentity } from "~/composables/useIdentity";
import pb from "../../utils/pocketbase";

export default defineEventHandler(async (event): Promise<Array<TeamMemberWithMCIdentity>> => {
    try {
        const teamCollection = useRuntimeConfig().public.pocketbase.collections.teamMembers;
        const teamMembers = await pb.collection(teamCollection).getFullList<TeamMember>({
            expand: "domains",
        });
        const set: Set<string> = new Set();
        for (const i of teamMembers) {
            set.add(i.minecraftUuid);
        }
        const identitys: Array<Identity> = await useIdentity().fetchIdentities(set);

        return teamMembers
            .map((member) => {
                const user = identitys.find(i => i.uuid === member.minecraftUuid);
                if (user === undefined) {
                    return undefined;
                }
                const textureProps = JSON.parse(atob(user.texture.value));
                return ({
                    member,
                    name: user.name,
                    skinUrl: textureProps.textures.SKIN.url,
                });
            })
            .filter(i => i !== undefined);
    } catch (error) {
        console.log(error);
        throw createError({
            statusCode: 500,
            statusMessage: "Failed to fetch data",
        });
    }

});
