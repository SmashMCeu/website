export const useGithubContent = () => {


    const baseUrl = "https://smashmceu.github.io/website-content/";

    const mapDir = "maps/";
    const mapListPath = mapDir + "maps.json";

    const guidesDir = "guides/";


    // - - - - - - - - -   M A P S   - - - - - - - - -
    const getAllMaps = async (): Promise<SmashMap[]> => {
        const res: Response = await fetch(baseUrl + mapListPath);
        let maps: SmashMap[] = await res.json();

        //TODO: only for testing
        maps = maps.concat(maps);
        maps = maps.concat(maps);
    

        return Promise.all(await maps.map(async map => { 
            map.image = await getMapImage(map.image);
            return map;
        }));
    }

    const getMapImage = async (imageName: string) => {
        const res: Response = await fetch(baseUrl + mapDir + imageName);
        const data: Blob = await res.blob();
        
        return URL.createObjectURL(data);
    }



    // - - - - - - - - -   G U I D E S   - - - - - - - - -
    const getGuideByName = async (name: string): Promise<string>  => {
        const res: Response = await fetch(baseUrl + guidesDir + name + ".md");
        if (res.ok) {
            const markdown = await res.text();
            return markdown;

        } else {
            return new Promise((resolve) => {
                resolve(`> Error while loading '${name}.md'! Please report this error`);
            });
        }
        
    }






    return { getAllMaps, getMapImage, getGuideByName }

}