export const useSmashMaps = () => {

    const baseUrl = "https://smashmceu.github.io/website-content/maps/";
    const mapListPath = baseUrl + "maps.json";


    async function getSmashMaps(): Promise<SmashMap[]> { 
        const maps: Response = await fetch(mapListPath);
        if (!maps.ok) throw createError({
            statusCode: maps.status,
            message: maps.statusText
        });
        return await maps.json();
    }

    function getSmashMapImage(imgName: string): string {
        return baseUrl + imgName;
    }


    return { getSmashMaps, getSmashMapImage }

}