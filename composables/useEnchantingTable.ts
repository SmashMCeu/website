export const useEnchantingTable = () => {

    const isPageEnchantedState: Ref<boolean> = useState("isPageEnchanted", () => false);
    const isPageEnchanted = () => isPageEnchantedState.value;

    const glyphs: Map<string, string> = new Map<string, string>([
        ["a", "ᔑ"],
        ["b", "ʖ"],
        ["c", "ᓵ"],
        ["d", "↸"],
        ["e", "ᒷ"],
        ["f", "⎓"],
        ["g", "⊣"],
        ["h", "⍑"],
        ["i", "╎"],
        ["j", "⋮"],
        ["k", "ꖌ"],
        ["l", "ꖎ"],
        ["m", "ᒲ"],
        ["n", "リ"],
        ["o", "フ"],
        ["p", "!¡"],
        ["q", "ᑑ"],
        ["r", "∷"],
        ["s", "ᓭ"],
        ["t", "ℸ ̣"],
        ["u", "⚍"],
        ["v", "⍊"],
        ["w", "∴"],
        ["x", "/"],
        ["y", "׀׀"],
        ["z", "⨅"],
    ]);


    const getGlyphOrDefault = (char: string) => {
        const glyph = glyphs.get(char);
        return glyph == null ? char : glyph;
    }

    const transformText = (text: string) => {
        text = text.toLowerCase();
        text = text.replace("ä", "ae");
        text = text.replace("ö", "oe");
        text = text.replace("ü", "ue");
        text = text.replace("ß", "ss");
        return text;
    }

    const enchant = (text: string) => transformText(text).split("").map(char => getGlyphOrDefault(char)).join("");
    const isEnchanted = (text: string) => text.toLowerCase().split("").filter(char => getGlyphOrDefault(char) != char).length <= 0;
    

    const enchantThePage = () => {
        if (isPageEnchanted()) return;
        isPageEnchantedState.value = true;


        const callback = () => {
            const enchantNode = (node: Node) => {
                if (node.nodeType === Node.TEXT_NODE && !useEnchantingTable().isEnchanted(node.textContent || " ")) {
                    node.textContent = useEnchantingTable().enchant(node.textContent || "");
                }
                if (node.hasChildNodes()) {
                    node.childNodes.forEach(n => enchantNode(n));
                }
            }
    
    
            document.body.childNodes.forEach(node => enchantNode(node));
        }

        setInterval(callback, 100);
    }



    return { enchant, isEnchanted, enchantThePage, isPageEnchanted };
}