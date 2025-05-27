import { RuntimeConfig } from "nuxt/schema";
import PocketBase from "pocketbase";


const isDevEnv: boolean = import.meta.dev || false;
export default defineEventHandler(async (event): Promise<Array<SmashMap>> => {
    const config: RuntimeConfig = useRuntimeConfig(event);
    try {
        // TODO: Not all maps are displayed when there are more the 50 maps in the map pool
        const sekaiMapModels: Array<SekaiDataMapModel> = await $fetch(`${config.sekaiDataBaseUrl}/play?type=smash&pageSize=50&sort=POPULARITY`);

        // data mapping
        const pb: PocketBase = useNuxtApp().$pocketbase as PocketBase;
    
        const mapsImagesCollection = useRuntimeConfig().public.pocketbase.collections.map_images;

        const images = await pb.collection(mapsImagesCollection).getFullList<MapImage>();
        
        return sekaiMapModels
          .map((m)=> {
            const map = images.find((i) => i.id == m.id);
            if (map == null) { return null;}
            const mapUrl = pb.files.getURL({collectionId: map.collectionId, id: map.id}, map.image);
            return {
                name: m.name,
                builtBy: m.owner,
                map: mapUrl,
                created: m.dateCreated,
                updated: m.dateUpdated,
                timesPlayed: m.timesPlayed,
            };
          })
          .filter((i) => i !== null);
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: "Failed to fetch data",
        });
    }

});

interface SekaiDataMapModel {
  id: string;
  name: string;
  // uuid
  owner: string
  dateCreated: string;
  dateUpdated: string;
  timesPlayed: number;
}
