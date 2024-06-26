import type SmashCharacter from "@/types/SmashCharacter";
import { useTranslationFiles } from "./useTranslationFiles";
import type GuidesConfig from "~/types/GuidesConfig";
import type GuideInfo from "~/types/GuideInfo";

export const useGithubContent = () => {


    const baseUrl = "https://smashmceu.github.io/website-content/";

    const mapDir = "maps/";
    const mapListPath = mapDir + "maps.json";

    const charactersDir = "characters/";
    const characterSkinsDir = charactersDir + "skins/";
    const charactersInfoListPath = charactersDir + "characters.json";

    const guidesDir = "guides/";
    const guidesConfigPath = "guides.json";


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
        let description = "Error while loading!";
        try {
            description = await useTranslationFiles().getCharDescription(charName);
        } catch {}
        charInfos.description = description;

        return charInfos;
    }
    const getSmashCharacterSkin = async (file: string): Promise<string> => {
        const res: Response = await fetch(baseUrl + characterSkinsDir + file);
        const data: Blob = await res.blob();
        
        return URL.createObjectURL(data);
    }



    // - - - - - - - - -   G U I D E S   - - - - - - - - -
    const getGuidesJson = async (): Promise<GuidesConfig> => {
        const res: Response = await fetch(baseUrl + guidesDir + guidesConfigPath);
        const content: GuidesConfig = await res.json();
        return content;
    }

    const getGuideMarkdown = async (filename: string): Promise<string> => {
        const res: Response = await fetch(baseUrl + guidesDir + filename);
        if (res.ok) {
            const markdown = await res.text();
            return markdown;
        } else {
            return new Promise((resolve) => {
                resolve(`> Error while loading '${name}.md'!`);
            });
        }

    }

    const getGuideById = async (id: string) => {
        const guideConfig: GuidesConfig = await getGuidesJson();
        const matchingGuides: GuideInfo[] = guideConfig.guides.filter(g => g.id == id);
        return matchingGuides.length == 0 ? undefined : matchingGuides.at(0);
    }
    




    return { getAllMaps, getMapImage, getAllCharacters, getSmashCharacter, getGuidesJson, getGuideMarkdown, getGuideById }

}