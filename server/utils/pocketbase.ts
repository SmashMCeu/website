// server/utils/pocketbase.ts
import PocketBase from 'pocketbase';
import { useRuntimeConfig } from '#imports';

const pb = new PocketBase(
    useRuntimeConfig().public.pocketbase.apiBaseUrl,
);

export default pb;
