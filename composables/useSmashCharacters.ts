export const useSmashCharacters = () => {


    const baseUrl = "https://smashmceu.github.io/website-content/characters/";
    const skinsDir = "skins/";
    const characterListPath = baseUrl + "characters.json";


    async function getCharacterList(): Promise<[string, string][]> {
        const characterList: Response = await fetch(characterListPath);
        if (!characterList.ok) throw createError({
            statusCode: characterList.status,
            message: characterList.statusText
        });
        return Object.entries(await characterList.json());
    }

    async function getAllCharacters(): Promise<SmashCharacter[]> {
        const characterList: [string, string][] = await getCharacterList();
        return Promise.all(characterList.map(e => getCharacter(e[1])));
    }

    async function getCharacter(characterFileName: string): Promise<SmashCharacter> {
        const character: Response = await fetch(baseUrl + characterFileName);
        if (!character.ok) throw createError({
            statusCode: character.status,
            message: character.statusText
        });
        const characterData: SmashCharacter = await character.json();
        characterData.description = "Not implemented yet!";
        return characterData;
    }

    function getCharacterSkin(skinFileName: string) {
        return baseUrl + skinsDir + skinFileName;
    }


    return { getCharacterList, getAllCharacters, getCharacter, getCharacterSkin };

}