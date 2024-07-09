import { BreakpointConstants } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { HomeConstants } from "@bundle:com.huawei.videoapplication/phone@home/ets/constants/HomeConstants";
export class VideoImgViewModel {
    private videoImgList: VideoImage[] = [];
    private newVideoImgList: VideoImage[] = [];
    private dailyVideoImgList: VideoImage[] = [];
    private mainDailyVideoImg: VideoImage;
    private previousVideoImgListOne: VideoImage[] = [];
    private previousVideoImgListTwo: VideoImage[] = [];
    constructor() {
        this.videoImgList.push(new VideoImage({ "id": 50331826, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, HomeConstants.VIDEO_GRID_RATES[0], HomeConstants.VIDEO_GRID_NAMES[0], HomeConstants.VIDEO_GRID_CONTENTS[0], ''));
        this.videoImgList.push(new VideoImage({ "id": 50331863, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, HomeConstants.VIDEO_GRID_RATES[1], HomeConstants.VIDEO_GRID_NAMES[1], HomeConstants.VIDEO_GRID_CONTENTS[1], ''));
        this.videoImgList.push(new VideoImage({ "id": 50331842, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, HomeConstants.VIDEO_GRID_RATES[2], HomeConstants.VIDEO_GRID_NAMES[2], HomeConstants.VIDEO_GRID_CONTENTS[2], ''));
        this.videoImgList.push(new VideoImage({ "id": 50331825, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, HomeConstants.VIDEO_GRID_RATES[3], HomeConstants.VIDEO_GRID_NAMES[3], HomeConstants.VIDEO_GRID_CONTENTS[3], ''));
        this.videoImgList.push(new VideoImage({ "id": 50331836, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, HomeConstants.VIDEO_GRID_RATES[4], HomeConstants.VIDEO_GRID_NAMES[4], HomeConstants.VIDEO_GRID_CONTENTS[4], ''));
        this.videoImgList.push(new VideoImage({ "id": 50331864, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, HomeConstants.VIDEO_GRID_RATES[5], HomeConstants.VIDEO_GRID_NAMES[5], HomeConstants.VIDEO_GRID_CONTENTS[5], ''));
        this.videoImgList.push(new VideoImage({ "id": 50331840, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, HomeConstants.VIDEO_GRID_RATES[6], HomeConstants.VIDEO_GRID_NAMES[6], HomeConstants.VIDEO_GRID_CONTENTS[6], ''));
        this.videoImgList.push(new VideoImage({ "id": 50332098, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, HomeConstants.VIDEO_GRID_RATES[7], HomeConstants.VIDEO_GRID_NAMES[7], HomeConstants.VIDEO_GRID_CONTENTS[7], ''));
        this.videoImgList.push(new VideoImage({ "id": 50331833, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, HomeConstants.VIDEO_GRID_RATES[8], HomeConstants.VIDEO_GRID_NAMES[8], HomeConstants.VIDEO_GRID_CONTENTS[8], ''));
        this.videoImgList.push(new VideoImage({ "id": 50331818, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, HomeConstants.VIDEO_GRID_RATES[9], HomeConstants.VIDEO_GRID_NAMES[9], HomeConstants.VIDEO_GRID_CONTENTS[9], ''));
        this.newVideoImgList.push(new VideoImage({ "id": 50331844, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, HomeConstants.NEW_VIDEO_RATES[0], HomeConstants.NEW_VIDEO_NAMES[0], HomeConstants.NEW_VIDEO_CONTENTS[0], ''));
        this.newVideoImgList.push(new VideoImage({ "id": 50331851, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, HomeConstants.NEW_VIDEO_RATES[1], HomeConstants.NEW_VIDEO_NAMES[1], HomeConstants.NEW_VIDEO_CONTENTS[1], ''));
        this.newVideoImgList.push(new VideoImage({ "id": 50331829, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, HomeConstants.NEW_VIDEO_RATES[2], HomeConstants.NEW_VIDEO_NAMES[2], HomeConstants.NEW_VIDEO_CONTENTS[2], ''));
        this.newVideoImgList.push(new VideoImage({ "id": 50331819, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, HomeConstants.NEW_VIDEO_RATES[3], HomeConstants.NEW_VIDEO_NAMES[3], HomeConstants.NEW_VIDEO_CONTENTS[3], ''));
        this.newVideoImgList.push(new VideoImage({ "id": 50331837, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, HomeConstants.NEW_VIDEO_RATES[4], HomeConstants.NEW_VIDEO_NAMES[4], HomeConstants.NEW_VIDEO_CONTENTS[4], ''));
        this.newVideoImgList.push(new VideoImage({ "id": 50331870, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, HomeConstants.NEW_VIDEO_RATES[5], HomeConstants.NEW_VIDEO_NAMES[5], HomeConstants.NEW_VIDEO_CONTENTS[5], ''));
        this.newVideoImgList.push(new VideoImage({ "id": 50332099, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, HomeConstants.NEW_VIDEO_RATES[6], HomeConstants.NEW_VIDEO_NAMES[6], HomeConstants.NEW_VIDEO_CONTENTS[6], ''));
        this.mainDailyVideoImg = new VideoImage({ "id": 50331835, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, HomeConstants.MAIN_DAILY_VIDEO_RATE, HomeConstants.MAIN_DAILY_VIDEO_NAME, HomeConstants.MAIN_DAILY_VIDEO_CONTENT, HomeConstants.MAIN_DAILY_VIDEO_MORE);
        this.dailyVideoImgList.push(new VideoImage({ "id": 50331793, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, HomeConstants.DAILY_VIDEO_RATES[0], HomeConstants.DAILY_VIDEO_NAMES[0], HomeConstants.DAILY_VIDEO_CONTENTS[0], ''));
        this.dailyVideoImgList.push(new VideoImage({ "id": 50331799, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, HomeConstants.DAILY_VIDEO_RATES[1], HomeConstants.DAILY_VIDEO_NAMES[1], HomeConstants.DAILY_VIDEO_CONTENTS[1], ''));
        this.dailyVideoImgList.push(new VideoImage({ "id": 50331794, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, HomeConstants.DAILY_VIDEO_RATES[2], HomeConstants.DAILY_VIDEO_NAMES[2], HomeConstants.DAILY_VIDEO_CONTENTS[2], ''));
        this.dailyVideoImgList.push(new VideoImage({ "id": 50331821, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, HomeConstants.DAILY_VIDEO_RATES[3], HomeConstants.DAILY_VIDEO_NAMES[3], HomeConstants.DAILY_VIDEO_CONTENTS[3], ''));
        this.previousVideoImgListOne.push(new VideoImage({ "id": 50331866, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, '', HomeConstants.PREVIOUS_VIDEO_NAMES_ONE[0], HomeConstants.PREVIOUS_VIDEO_CONTENTS_ONE[0], HomeConstants.PREVIOUS_VIDEO_MORE_ONE[0]));
        this.previousVideoImgListOne.push(new VideoImage({ "id": 50331867, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, '', HomeConstants.PREVIOUS_VIDEO_NAMES_ONE[1], HomeConstants.PREVIOUS_VIDEO_CONTENTS_ONE[1], HomeConstants.PREVIOUS_VIDEO_MORE_ONE[1]));
        this.previousVideoImgListOne.push(new VideoImage({ "id": 50331817, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, '', HomeConstants.PREVIOUS_VIDEO_NAMES_ONE[2], HomeConstants.PREVIOUS_VIDEO_CONTENTS_ONE[2], HomeConstants.PREVIOUS_VIDEO_MORE_ONE[2]));
        this.previousVideoImgListTwo.push(new VideoImage({ "id": 50332104, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, '', HomeConstants.PREVIOUS_VIDEO_NAMES_TWO[0], HomeConstants.PREVIOUS_VIDEO_CONTENTS_TWO[0], ''));
        this.previousVideoImgListTwo.push(new VideoImage({ "id": 50331847, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, '', HomeConstants.PREVIOUS_VIDEO_NAMES_TWO[1], HomeConstants.PREVIOUS_VIDEO_CONTENTS_TWO[1], ''));
        this.previousVideoImgListTwo.push(new VideoImage({ "id": 50331797, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, '', HomeConstants.PREVIOUS_VIDEO_NAMES_TWO[2], HomeConstants.PREVIOUS_VIDEO_CONTENTS_TWO[2], ''));
        this.previousVideoImgListTwo.push(new VideoImage({ "id": 50331823, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, '', HomeConstants.PREVIOUS_VIDEO_NAMES_TWO[3], HomeConstants.PREVIOUS_VIDEO_CONTENTS_TWO[3], ''));
        this.previousVideoImgListTwo.push(new VideoImage({ "id": 50331828, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, '', HomeConstants.PREVIOUS_VIDEO_NAMES_TWO[4], HomeConstants.PREVIOUS_VIDEO_CONTENTS_TWO[4], ''));
        this.previousVideoImgListTwo.push(new VideoImage({ "id": 50331861, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, '', HomeConstants.PREVIOUS_VIDEO_NAMES_TWO[5], HomeConstants.PREVIOUS_VIDEO_CONTENTS_TWO[5], ''));
    }
    getVideoImgList(): VideoImage[] {
        return this.videoImgList;
    }
    getNewVideoImgList(): VideoImage[] {
        return this.newVideoImgList;
    }
    getDailyVideoImgList(): VideoImage[] {
        return this.dailyVideoImgList;
    }
    getMainDailyVideoImg(): VideoImage {
        return this.mainDailyVideoImg;
    }
    getPreviousVideoOne(): VideoImage[] {
        return this.previousVideoImgListOne;
    }
    getPreviousVideoTwo(currentBreakpoint: string): VideoImage[] {
        if (currentBreakpoint === BreakpointConstants.BREAKPOINT_MD) {
            return this.previousVideoImgListTwo;
        }
        else if (currentBreakpoint === BreakpointConstants.BREAKPOINT_LG) {
            return this.previousVideoImgListTwo.slice(1, 6);
        }
        else {
            return this.previousVideoImgListTwo.slice(0, 4);
        }
    }
}
export class VideoImage {
    /**
     * Image src of the video.
     */
    private imgSrc: Resource;
    /**
     * Rating of the video.
     */
    private rating: string;
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
    constructor(imgSrc: Resource, rating: string, title: string, content: string, otherInfo: string) {
        this.imgSrc = imgSrc;
        this.rating = rating;
        this.title = title;
        this.content = content;
        this.otherInfo = otherInfo;
    }
    getImgSrc(): Resource {
        return this.imgSrc;
    }
    getRating(): string {
        return this.rating;
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
