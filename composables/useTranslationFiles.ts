export const useTranslationFiles = () => {

    // TODO: add lang support + cache lang file!!!
    // TRASH CODE !!!!!!!!
    const translationFileUrl = "https://cdn.smashmc.eu/translation-files/smash/";
    const characterKey = "item.lore.NAME=";
    
    const getCharDescription = async (langFileContent: string, charName: string): Promise<string> => {
        const lines = langFileContent.split("\n");
        const key = characterKey.replace("NAME", charName);

        for (const line of lines) {
            if (line.startsWith(key)) {
                let desc = line.replace(key, "");
                desc = desc.replaceAll(/§[abcdef0-9]/g, "").replaceAll("%s" ,"<Placeholder>").replaceAll("%%", "%");
                return desc;
            }
        }

        return "Not found!";
    }

    const getTranslationFile = async (langCode: string): Promise<string> => {
        if (langCode.length == 0) langCode = useNuxtApp().$i18n.defaultLocale;
        const file = await fetch(translationFileUrl + langCode + ".lang");
        return await file.text();
    }





    return { getCharDescription, getTranslationFile }

}