import { BreakpointConstants } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { SearchConstants } from "@bundle:com.huawei.videoapplication/phone@search/ets/constants/SearchConstants";
export class SearchVideoImgModel {
    private trendingSearchList: SearchVideoImg[] = [];
    private searchResultImgList: SearchVideoImg[] = [];
    constructor() {
        this.trendingSearchList.push(new SearchVideoImg({ "id": 50332181, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, SearchConstants.SEARCH_IMG_IMG_TITLES[0], SearchConstants.SEARCH_IMG_IMG_CONTENTS[0], ''));
        this.trendingSearchList.push(new SearchVideoImg({ "id": 50332280, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, SearchConstants.SEARCH_IMG_IMG_TITLES[1], SearchConstants.SEARCH_IMG_IMG_CONTENTS[1], ''));
        this.trendingSearchList.push(new SearchVideoImg({ "id": 50332177, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, SearchConstants.SEARCH_IMG_IMG_TITLES[2], SearchConstants.SEARCH_IMG_IMG_CONTENTS[2], ''));
        this.trendingSearchList.push(new SearchVideoImg({ "id": 50332174, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, SearchConstants.SEARCH_IMG_IMG_TITLES[3], SearchConstants.SEARCH_IMG_IMG_CONTENTS[3], ''));
        this.trendingSearchList.push(new SearchVideoImg({ "id": 50332168, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, SearchConstants.SEARCH_IMG_IMG_TITLES[4], SearchConstants.SEARCH_IMG_IMG_CONTENTS[4], ''));
        this.trendingSearchList.push(new SearchVideoImg({ "id": 50332172, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, SearchConstants.SEARCH_IMG_IMG_TITLES[5], SearchConstants.SEARCH_IMG_IMG_CONTENTS[5], ''));
        this.trendingSearchList.push(new SearchVideoImg({ "id": 50332287, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, SearchConstants.SEARCH_IMG_IMG_TITLES[6], SearchConstants.SEARCH_IMG_IMG_CONTENTS[6], ''));
        this.trendingSearchList.push(new SearchVideoImg({ "id": 50332176, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, SearchConstants.SEARCH_IMG_IMG_TITLES[7], SearchConstants.SEARCH_IMG_IMG_CONTENTS[7], ''));
        this.trendingSearchList.push(new SearchVideoImg({ "id": 50332281, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, SearchConstants.SEARCH_IMG_IMG_TITLES[8], SearchConstants.SEARCH_IMG_IMG_CONTENTS[8], ''));
        this.trendingSearchList.push(new SearchVideoImg({ "id": 50332178, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, SearchConstants.SEARCH_IMG_IMG_TITLES[9], SearchConstants.SEARCH_IMG_IMG_CONTENTS[9], ''));
        this.trendingSearchList.push(new SearchVideoImg({ "id": 50332169, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, SearchConstants.SEARCH_IMG_IMG_TITLES[10], SearchConstants.SEARCH_IMG_IMG_CONTENTS[10], ''));
        this.trendingSearchList.push(new SearchVideoImg({ "id": 50332171, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, SearchConstants.SEARCH_IMG_IMG_TITLES[11], SearchConstants.SEARCH_IMG_IMG_CONTENTS[11], ''));
        this.searchResultImgList.push(new SearchVideoImg({ "id": 50332173, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, SearchConstants.SEARCH_RESULT_TITLES[0], SearchConstants.SEARCH_RESULT_CONTENTS[0], SearchConstants.SEARCH_RESULT_MORE[0]));
        this.searchResultImgList.push(new SearchVideoImg({ "id": 50332170, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, SearchConstants.SEARCH_RESULT_TITLES[1], SearchConstants.SEARCH_RESULT_CONTENTS[1], SearchConstants.SEARCH_RESULT_MORE[1]));
        this.searchResultImgList.push(new SearchVideoImg({ "id": 50332175, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, SearchConstants.SEARCH_RESULT_TITLES[2], SearchConstants.SEARCH_RESULT_CONTENTS[2], SearchConstants.SEARCH_RESULT_MORE[2]));
    }
    getTrendSearchList(currentBreakpoint: string): SearchVideoImg[] {
        if (currentBreakpoint === BreakpointConstants.BREAKPOINT_SM) {
            return this.trendingSearchList.slice(0, 5);
        }
        else if (currentBreakpoint === BreakpointConstants.BREAKPOINT_MD) {
            return this.trendingSearchList.slice(0, 10);
        }
        else {
            return this.trendingSearchList;
        }
    }
    getSearchResultImgList(): SearchVideoImg[] {
        return this.searchResultImgList;
    }
}
export class SearchVideoImg {
    /**
     * Image src of the video.
     */
    private imgSrc: Resource;
    /**
     * Title of the video.
     */
    private title: string;
    /**
     * Content of the video.
     */
    private content: string;
    /**
     * Other information of the video.
     */
    private otherInfo: string;
    constructor(imgSrc: Resource, title: string, content: string, otherInfo: string) {
        this.imgSrc = imgSrc;
        this.title = title;
        this.content = content;
        this.otherInfo = otherInfo;
    }
    getImgSrc(): Resource {
        return this.imgSrc;
    }
    getTitle(): string {
        return this.title;
    }
    getContent(): string {
        return this.content;
    }
    getOtherInfo(): string {
        return this.otherInfo;
    }
}
