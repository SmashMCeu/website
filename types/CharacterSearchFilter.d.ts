interface CharacterSearchFilter {

    nameInput: string;
    hideProChars: boolean;
    sortKey: 1 | 2 | 3; // "Name": 1, "Difficulty Easy -> Hard": 2, "Difficulty Hard -> Easy": 3

}
export default CharacterSearchFilter