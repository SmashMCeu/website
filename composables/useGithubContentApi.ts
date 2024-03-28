export const useGithubContentApi = () => {


    const apiBaseUrl: string = "https://api.github.com/repos/SmashMCeu/website-content/contents/";


    const decodeMarkdownFile = (contentObject: any): string => {
        const content: string = contentObject["content"];
        //return content.split("\n").map(line => atob(line)).join("\n");
        return atob(content).replace("\n", "LINE");
    }
    const decodeImageFile = (contentObject: any): string => {
        const imageFormat: string = contentObject["name"].split('.').pop();
        return `data:image/${imageFormat};base64,` + contentObject["content"].replace("\n", "");
    }

    const getContent = async (path: string): Promise<any> => {
        const res: Response = await fetch(apiBaseUrl + path);
        const json: any = await res.json();
        return json;
    }
    const getFolderContent = async (baseDir: string): Promise<string[]> => {
        
        const res: Response = await fetch(apiBaseUrl + baseDir);
        const json: Array<any> = await res.json();

        return json.map(e => e["name"]);
    }

    return { getContent, getFolderContent, decodeImageFile, decodeMarkdownFile }

}
