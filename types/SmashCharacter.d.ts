interface SmashCharacter {
    name: string,
    description: string;
    isPro: boolean,
    skinImage: string,
    primaryColor: string,
    difficulty: 1 | 2 | 3; // 1 Easy - 2 Medium - 3 Hard
    cooldownTime: string,
    isSlimSkin: boolean,
}