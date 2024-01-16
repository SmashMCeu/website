export const useSmashMaps = () => {

    type MapInfo = {
        name: String,
        imagePath: String
    }

    const getAll = (): string[] => {
        return Object.keys(import.meta.glob(`@/public/images/SmashMaps/*.png`)).map(path => path.slice(7));
    }

    const getAllWithName = (): Array<MapInfo> => {
        
        let out: Array<MapInfo> = [];
        getAll().forEach(mapPath => 
            out.push({
                imagePath: mapPath, 
                name: mapPath.split("/").pop()?.replace(".png", "") || "Unknown Name"
            })
        );
        return out;
    }



    return { getAll, getAllWithName }
}
