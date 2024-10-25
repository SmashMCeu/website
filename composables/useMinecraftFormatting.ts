export const useMinecraftFormatting = () => {

    const styleMap: { [key: string]: string } = {
        '§4': 'font-weight:normal;text-decoration:none;color:#be0000',
        '§c': 'font-weight:normal;text-decoration:none;color:#fe3f3f',
        '§6': 'font-weight:normal;text-decoration:none;color:#d9a334',
        '§e': 'font-weight:normal;text-decoration:none;color:#fefe3f',
        '§2': 'font-weight:normal;text-decoration:none;color:#00be00',
        '§a': 'font-weight:normal;text-decoration:none;color:#3ffe3f',
        '§b': 'font-weight:normal;text-decoration:none;color:#3ffefe',
        '§3': 'font-weight:normal;text-decoration:none;color:#00bebe',
        '§1': 'font-weight:normal;text-decoration:none;color:#0000be',
        '§9': 'font-weight:normal;text-decoration:none;color:#3f3ffe',
        '§d': 'font-weight:normal;text-decoration:none;color:#fe3ffe',
        '§5': 'font-weight:normal;text-decoration:none;color:#be00be',
        '§f': 'font-weight:normal;text-decoration:none;color:#ffffff',
        '§7': 'font-weight:normal;text-decoration:none;color:#bebebe',
        '§8': 'font-weight:normal;text-decoration:none;color:#3f3f3f',
        '§0': 'font-weight:normal;text-decoration:none;color:#000000',
        '§l': 'font-weight:bold',
        '§n': 'text-decoration:underline;text-decoration-skip:spaces',
        '§o': 'font-style:italic',
        '§m': 'text-decoration:line-through;text-decoration-skip:spaces',
    };


    function formatText(text: string): string {
        return text.replace(/§./g, match => {
            return `<span style="${styleMap[match]}">`;
        }) + '</span>';
    }
    


    return { formatText };

}