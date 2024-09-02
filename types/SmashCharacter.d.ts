interface SmashCharacter {
    id: string;
    collectionId: string;
    collectionName: string;
    skin: string;
    isSlimSkin: boolean;
    name: string;
    isPro: boolean;
    description: string;
    difficulty: "easy" | "medium" | "hard";
    cooldown: string;
    isBetaCharacter: boolean;
    created: string;
    updated: string;
}