import PocketBase from "pocketbase";

export default defineNuxtPlugin(async () => {
    const pocketbase = new PocketBase(
        useRuntimeConfig().public.pocketbase.apiBaseUrl,
    );
    
    return {
        provide: { pocketbase }
    }
});