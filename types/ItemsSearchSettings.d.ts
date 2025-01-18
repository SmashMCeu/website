interface ItemsSearchSettings {
    name: string;
    order: "name-asc" | "name-desc" | "rarity-asc" | "rarity-desc";
    includeAdvanced: boolean;
}