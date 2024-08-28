import PocketBase from "pocketbase";

export default defineNuxtPlugin(async () => {
    const pocketbase = new PocketBase(
        useRuntimeConfig().public.pocketbaseBaseUrl
    );
    
    return {
        provide: { pocketbase }
    }
});