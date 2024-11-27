interface SmashItem {
    id: string;
    collectionId: string;
    collectionName: string;
    image: string;
    name: string;
    description: string;
    is_advanced: boolean;
    rarity: "common" | "rare" | "epic";
    created: string;
    updated: string;    
}