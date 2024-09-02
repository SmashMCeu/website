import PocketBase from "pocketbase";

export const useSmashCharacters = () => {


    // vs doesn't always import the type correctly...
    const pb: PocketBase = useNuxtApp().$pocketbase as PocketBase;

    const charactersCollection = useRuntimeConfig().public.pocketbase.collections.characters;


    async function getAllCharacters(): Promise<SmashCharacter[]> {
        try {
            return await pb.collection(charactersCollection).getFullList<SmashCharacter>({ sort: "name" });
        } catch (error) {
            createError({
                statusCode: 500,
                message: "Failed to fetch characters",
            });
            showError({
                statusCode: 500,
                message: "Failed to fetch characters",
            });
            return [];
        }
    }

    function getCharacterSkinUrl(character: SmashCharacter): string {
        return pb.files.getUrl({
            collectionId: character.collectionId,
            id: character.id
        }, character.skin);
    }

    

    return { getAllCharacters, getCharacterSkinUrl };

}