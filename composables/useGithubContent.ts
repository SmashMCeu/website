import type SmashCharacter from "@/types/SmashCharacter";

export const useGithubContent = () => {


    const baseUrl = "https://smashmceu.github.io/website-content/";

    const mapDir = "maps/";
    const mapListPath = mapDir + "maps.json";

    const charactersDir = "characters/";
    const characterSkinsDir = charactersDir + "skins/";
    const charactersInfoListPath = charactersDir + "characters.json";

    const guidesDir = "guides/";


    // - - - - - - - - -   M A P S   - - - - - - - - -
    const getAllMaps = async (): Promise<SmashMap[]> => {
        const res: Response = await fetch(baseUrl + mapListPath);
        let maps: SmashMap[] = await res.json();

        return Promise.all(await maps.map(async map => { 
            map.image = await getMapImage(map.image);
            return map;
        }));
    }

    const getMapImage = async (imageName: string) => {
        const res: Response = await fetch(baseUrl + mapDir + imageName);
        const data: Blob = await res.blob();
        
        return URL.createObjectURL(data);
    }


    // - - - - - - - - -   C H A R A C T E R S   - - - - - - - - -
    const getAllCharacters = async (): Promise<SmashCharacter[]> => {
        const res: Response = await fetch(baseUrl + charactersInfoListPath);
        let charList: [string, string][] = Object.entries(await res.json());

        let chars: Promise<SmashCharacter>[] = charList.map(async entry => await getSmashCharacter(entry[1], entry[0]));
        
        return Promise.all(chars);
    }

    const getSmashCharacter = async (file: string, charName: string): Promise<SmashCharacter> => {
        const res: Response = await fetch(baseUrl + charactersDir + file);
        const charInfos: SmashCharacter = await res.json();

        charInfos.skinImage = await getSmashCharacterSkin(charInfos.skinImage);
        charInfos.description = await getCharDescription(charName);

        return charInfos;
    }
    const getSmashCharacterSkin = async (file: string): Promise<string> => {
        const res: Response = await fetch(baseUrl + characterSkinsDir + file);
        const data: Blob = await res.blob();
        
        return URL.createObjectURL(data);
    }



    // - - - - - - - - -   G U I D E S   - - - - - - - - -
    const getGuideByName = async (name: string): Promise<string>  => {
        const res: Response = await fetch(baseUrl + guidesDir + name + ".md");
        if (res.ok) {
            const markdown = await res.text();
            return markdown;

        } else {
            return new Promise((resolve) => {
                resolve(`> Error while loading '${name}.md'! Please report this error`);
            });
        }
        
    }



    const translationFileUrl = "https://raw.githubusercontent.com/SmashMCeu/translation-files/main/smash/de.lang";
    const getCharDescription = async (charName: string): Promise<string> => {
        const file = await fetch(translationFileUrl);
        const text = await file.text();


        let desc = "";

        for (const line of text.split("\n")) {
            if (line.startsWith("item.lore." + charName)) {
                
                desc += line.split("=")[1];
            }
        }
        const replace = ["§0", "§1", "§2", "§3", "§4", "§5", "§6", "§7", "§8", "§9", "§a", "§b", "§c", "§d", "§e"];
        for (const repl of replace) {
            desc = desc.replaceAll(repl, " ");
        }
        desc = desc.replace("%%", "%");

   
        return desc;
    }






    return { getAllMaps, getMapImage, getGuideByName, getAllCharacters, getSmashCharacter }

}