export const useSmashMaps = () => {

    const baseUrl = "https://smashmceu.github.io/website-content/maps/";
    const mapListPath = baseUrl + "maps.json";


    async function getSmashMaps(): Promise<SmashMap[]> { 
        const maps: Response = await fetch(mapListPath);
        if (!maps.ok) {
            createError({
                statusCode: maps.status,
                message: maps.status == 404 ? "Maps not available" : maps.statusText,
            });
            showError({
                statusCode: maps.status,
                message: maps.status == 404 ? "Maps not available" : maps.statusText,
            });
            return [];
        }
        return await maps.json();
    }

    function getSmashMapImage(imgName: string): string {
        return baseUrl + imgName;
    }


    return { getSmashMaps, getSmashMapImage }

}