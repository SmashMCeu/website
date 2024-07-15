export const useTranslationFiles = () => {

    // TODO: add lang support + cache lang file!!!
    // TRASH CODE !!!!!!!!
    const translationFileUrl = "https://cdn.smashmc.eu/translation-files/smash/de.lang";
    const characterKey = "item.lore.NAME=";
    
    const getCharDescription = async (charName: string): Promise<string> => {
        const file = await fetch(translationFileUrl);
        const text = await file.text();
        const lines = text.split("\n");
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





    return { getCharDescription }

}