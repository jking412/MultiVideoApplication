import { HomeConstants } from "@bundle:com.huawei.videoapplication/phone@home/ets/constants/HomeConstants";
export class IconViewModel {
    private iconList: VideoIcon[] = [];
    constructor() {
        this.iconList.push(new VideoIcon(HomeConstants.ICON_LIST[0], { "id": 50331841, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }));
        this.iconList.push(new VideoIcon(HomeConstants.ICON_LIST[1], { "id": 50331853, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }));
        this.iconList.push(new VideoIcon(HomeConstants.ICON_LIST[2], { "id": 50332103, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }));
        this.iconList.push(new VideoIcon(HomeConstants.ICON_LIST[3], { "id": 50331848, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }));
        this.iconList.push(new VideoIcon(HomeConstants.ICON_LIST[4], { "id": 50331850, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }));
        this.iconList.push(new VideoIcon(HomeConstants.ICON_LIST[5], { "id": 50331846, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }));
        this.iconList.push(new VideoIcon(HomeConstants.ICON_LIST[6], { "id": 50331824, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }));
        this.iconList.push(new VideoIcon(HomeConstants.ICON_LIST[7], { "id": 50331860, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }));
        this.iconList.push(new VideoIcon(HomeConstants.ICON_LIST[8], { "id": 50332100, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }));
    }
    getIconList(): VideoIcon[] {
        return this.iconList;
    }
}
export class VideoIcon {
    /**
     * Name of the icon.
     */
    private name: string;
    /**
     * Image of the icon.
     */
    private image: Resource;
    constructor(name: string, image: Resource) {
        this.name = name;
        this.image = image;
    }
    getName(): string {
        return this.name;
    }
    getImage(): Resource {
        return this.image;
    }
}
