import PocketBase from "pocketbase"

let pocketbase: PocketBase

export function usePocketbase(): PocketBase {
    if (!pocketbase) {
        const config = useRuntimeConfig().pocketbase
        pocketbase = new PocketBase(config.baseUrl)
    }
    return pocketbase
}
