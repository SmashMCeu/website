
export const useCharacters = () => {

    
    

   

    const getAll = (): Promise<Character[]> => {        
        let characters: Character[] = [];

        characters.push({
            name: "Mario",
            isPro: true,
            skinImage: "data:image/png;base64, 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",
            isSlimSkin: true,
            primaryColor: "#EE1234",
            difficulty: "Easy",
            description: "Mario kann mit seiner berühmten STAMPFATACKE Gegner in einem kleinem Radius beim Einschlagenvon Oben weg schubsen. Außerdem dies das Annanas Max ist ein Boss",
            cooldownTime: "15 Seconds",
        });
        characters.push({
            name: "Mario",
            isPro: false,
            skinImage: "data:image/png;base64, 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",
            isSlimSkin: false,
            primaryColor: "#EE1234",
            difficulty: "Easy",
            description: "Mario kann mit seiner berühmten STAMPFATACKE Gegner in einem kleinem Radius beim Einschlagenvon Oben weg schubsen. Außerdem dies das Annanas Max ist ein Boss",
            cooldownTime: "15 Seconds",
        });
        characters.push({
            name: "Mario",
            isPro: false,
            skinImage: "data:image/png;base64, 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",
            isSlimSkin: true,
            primaryColor: "#EE1234",
            difficulty: "Easy",
            description: "Mario kann mit seiner berühmten STAMPFATACKE Gegner in einem kleinem Radius beim Einschlagenvon Oben weg schubsen. Außerdem dies das Annanas Max ist ein Boss",
            cooldownTime: "15 Seconds",
        });
        characters.push({
            name: "Mario",
            isPro: false,
            skinImage: "data:image/png;base64, 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",
            isSlimSkin: false,
            primaryColor: "#EE1234",
            difficulty: "Easy",
            description: "Mario kann mit seiner berühmten STAMPFATACKE Gegner in einem kleinem Radius beim Einschlagenvon Oben weg schubsen. Außerdem dies das Annanas Max ist ein Boss",
            cooldownTime: "15 Seconds",
        });
        characters.push({
            name: "Mario",
            isPro: false,
            skinImage: "data:image/png;base64, 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",
            isSlimSkin: false,
            primaryColor: "#EE1234",
            difficulty: "Easy",
            description: "Mario kann mit seiner berühmten STAMPFATACKE Gegner in einem kleinem Radius beim Einschlagenvon Oben weg schubsen. Außerdem dies das Annanas Max ist ein Boss",
            cooldownTime: "15 Seconds",
        });
        

        return new Promise<Character[]>((resolve) => {
            setTimeout(() => resolve(characters), 1000)
        });
    }


    const getPreviewChracters = async (): Promise<Character[]> => {
        //TODO: pick specific characters
        return (await getAll()).slice(0, 5);
    }



    return {
        getAll, getPreviewChracters
    }

}