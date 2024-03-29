interface SmashCharacter {
    name: string;
    isPro: boolean;
    skinImage: string;
    isSlimSkin: boolean;
    primaryColor: string;
    description: string;
    difficulty: 1 | 2 | 3; // 1 Easy - 2 Medium - 3 Hard
    cooldownTime: string;
}
export default SmashCharacter;