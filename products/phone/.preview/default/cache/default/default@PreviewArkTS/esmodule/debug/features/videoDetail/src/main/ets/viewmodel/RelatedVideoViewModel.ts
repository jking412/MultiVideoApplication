import { DetailConstants } from "@bundle:com.huawei.videoapplication/phone@videoDetail/ets/constants/DetailConstants";
export class RelatedVideoViewModel {
    private relatedVideoList: RelatedVideo[] = [];
    private peripheralVideoList: RelatedVideo[] = [];
    constructor() {
        this.relatedVideoList.push(new RelatedVideo(DetailConstants.RELATED_VIDEO_TITLES[0], { "id": 50331662, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }));
        this.relatedVideoList.push(new RelatedVideo(DetailConstants.RELATED_VIDEO_TITLES[1], { "id": 50331783, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }));
        this.relatedVideoList.push(new RelatedVideo(DetailConstants.RELATED_VIDEO_TITLES[2], { "id": 50331657, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }));
        this.relatedVideoList.push(new RelatedVideo(DetailConstants.RELATED_VIDEO_TITLES[3], { "id": 50331669, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }));
        this.relatedVideoList.push(new RelatedVideo(DetailConstants.RELATED_VIDEO_TITLES[4], { "id": 50331664, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }));
        this.relatedVideoList.push(new RelatedVideo(DetailConstants.RELATED_VIDEO_TITLES[5], { "id": 50331663, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }));
        this.relatedVideoList.push(new RelatedVideo(DetailConstants.RELATED_VIDEO_TITLES[6], { "id": 50331776, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }));
        this.peripheralVideoList.push(new RelatedVideo(DetailConstants.PERIPHERAL_VIDEO_TITLE[0], { "id": 50331675, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }));
        this.peripheralVideoList.push(new RelatedVideo(DetailConstants.PERIPHERAL_VIDEO_TITLE[1], { "id": 50331672, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }));
        this.peripheralVideoList.push(new RelatedVideo(DetailConstants.PERIPHERAL_VIDEO_TITLE[2], { "id": 50331660, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }));
        this.peripheralVideoList.push(new RelatedVideo(DetailConstants.PERIPHERAL_VIDEO_TITLE[3], { "id": 50331775, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }));
        this.peripheralVideoList.push(new RelatedVideo(DetailConstants.PERIPHERAL_VIDEO_TITLE[4], { "id": 50331788, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }));
    }
    getRelatedVideoList(): RelatedVideo[] {
        return this.relatedVideoList;
    }
    getPeripheralVideoList(): RelatedVideo[] {
        return this.peripheralVideoList;
    }
}
export class RelatedVideo {
    /**
     * Name of the related video.
     */
    private name: string;
    /**
     * Image src of related video.
     */
    private imageSrc: Resource;
    constructor(name: string, imageSrc: Resource) {
        this.name = name;
        this.imageSrc = imageSrc;
    }
    public getName(): string {
        return this.name;
    }
    public getImageSrc(): Resource {
        return this.imageSrc;
    }
}
