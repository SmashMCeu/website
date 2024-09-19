export interface UUID extends String {
    __uuid: void;
}
  
const UUID_REGEX = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;
  
export function isUUID(uuid: string): uuid is UUID {
    return UUID_REGEX.test(uuid);
}