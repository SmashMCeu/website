export default interface CharacterSearchFilter {
    name: string;
    sortBy: "name" | "difficulty";
    onlyFree: boolean;
}