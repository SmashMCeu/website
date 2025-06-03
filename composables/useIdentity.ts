
export const useIdentity = () => {
    /**
     * @description Fetch identities from a set of uuid's
     */
    async function fetchIdentities(set: Set<string>) {
        const ids = Array.from(set).join(",");
        const identitys: Array<Identity> = await $fetch(
            `https://api.smashmc.eu/identity/minecraft/${ids}`
        );
        return identitys;
    }
    return { fetchIdentities };
}
export interface Identity {
    name: string;
    uuid: string;
    texture: IdentityTexture;
}

export interface IdentityTexture {
    signature: string;
    value: string
}
