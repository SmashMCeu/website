export default function () {
    async function get(): Promise<string> {
        try {
            return await $fetch("/api/rules/get")
        } catch (error) {
            throw createError({
                statusCode: 500,
                statusMessage: "Failed to fetch rules",
                cause: error,
            })
        }
    }

    return {
        get,
    }
}
