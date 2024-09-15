import PocketBase from "pocketbase";

export const useSmashCharacters = () => {


    // vs doesn't always import the type correctly...
    const pb: PocketBase = useNuxtApp().$pocketbase as PocketBase;

    const charactersCollection = useRuntimeConfig().public.pocketbase.collections.characters;



    async function getCharacter(id: string): Promise<SmashCharacter | undefined> {
        try {
            return await pb.collection(charactersCollection).getFirstListItem<SmashCharacter>("id=" + id, { 
                sort: "name",
                expand: "skins_via_character"
            });
        } catch (error) {
            createError({
                statusCode: 500,
                message: "Failed to fetch characters",
            });
            showError({
                statusCode: 500,
                message: "Failed to fetch characters",
            });
            return undefined;
        }
    }


    async function getAllCharacters(withSkins: boolean): Promise<SmashCharacter[]> {
        try {
            return await pb.collection(charactersCollection).getFullList<SmashCharacter>({ 
                sort: "name",
                expand: withSkins ? "skins_via_character" : undefined,
            });
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


    function getCharacterImgUrl(character: SmashCharacter, key: string): string {
        return pb.files.getUrl({
            collectionId: character.collectionId,
            id: character.id
        }, key);
    }
    

    return { getCharacter, getAllCharacters, getCharacterImgUrl };

}