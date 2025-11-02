import type { NitroFetchOptions, NitroFetchRequest } from "nitropack/types"

export default function<T> (
    route: string,
    url: string,
    options?: NitroFetchOptions<NitroFetchRequest, "get" | "head" | "patch" | "post" | "put" | "delete" | "connect" | "options" | "trace"> | undefined,
) {
    const tebexConfig = useRuntimeConfig().public.tebex
    const baseURL = `${tebexConfig.apiBaseUrl}/api/${route}/${route === "accounts" ? tebexConfig.token : ""}`

    return $fetch<T>(`${baseURL}${url}`, {
        ...options,
    })
}
