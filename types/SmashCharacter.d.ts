interface SmashCharacter {
    id: string;
    collectionId: string;
    collectionName: string;
    position: number;
    skin: string;
    preview: string;
    isSlimSkin: boolean;
    name: string;
    isPro: boolean;
    description: string;
    difficulty: "easy" | "medium" | "hard";
    cooldown: string;
    isBetaCharacter: boolean;
    created: string;
    updated: string;

    expand?: {
        skins_via_character: SmashCharacterSkin[];
    }
}