import type GuideInfo from "./GuideInfo";

interface GuidesConfig {

    topGuides: string[];
    QnA: {
        [key: string]: string
    },
    guides: GuideInfo[]


}
export default GuidesConfig;