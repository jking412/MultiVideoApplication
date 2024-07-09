import { CommonConstants } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { BreakpointType } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { HomeConstants } from "@bundle:com.huawei.videoapplication/phone@home/ets/constants/HomeConstants";
export class BannerViewModel {
    private bannerList: Banner[] = [];
    private bannerImgList: BannerImg[] = new BannerImgModel().getBannerImgList();
    private bannerDescriptionList: BannerDescription[] = new BannerDescriptionModel().getBannerDescriptionList();
    constructor() {
        this.bannerList.push(new Banner(this.bannerImgList[0], this.bannerDescriptionList[3]));
        this.bannerList.push(new Banner(this.bannerImgList[2], this.bannerDescriptionList[1]));
        this.bannerList.push(new Banner(this.bannerImgList[1], this.bannerDescriptionList[0]));
        this.bannerList.push(new Banner(this.bannerImgList[2], this.bannerDescriptionList[1]));
        this.bannerList.push(new Banner(this.bannerImgList[3], this.bannerDescriptionList[2]));
    }
    getBannerList(): Banner[] {
        return this.bannerList;
    }
}
class BannerImgModel {
    private BannerImgList: BannerImg[] = [];
    constructor() {
        this.BannerImgList.push(new BannerImg({ "id": 50331839, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331838, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, new BreakpointType({ "id": 50331875, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331874, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331873, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })));
        this.BannerImgList.push(new BannerImg({ "id": 50331820, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331798, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, new BreakpointType({ "id": 50331875, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331874, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331873, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })));
        this.BannerImgList.push(new BannerImg({ "id": 50332102, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331816, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, new BreakpointType({ "id": 50331875, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331874, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331873, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })));
        this.BannerImgList.push(new BannerImg({ "id": 50331858, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331858, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, new BreakpointType({ "id": 50331875, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331874, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331873, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })));
    }
    getBannerImgList(): BannerImg[] {
        return this.BannerImgList;
    }
}
class BannerDescriptionModel {
    private bannerDescriptionList: BannerDescription[] = [];
    constructor() {
        this.bannerDescriptionList.push(new BannerDescription(HomeConstants.BANNER_TEXT_1, new BreakpointType([{ "id": 50331881, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331887, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }], [{ "id": 50331880, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331886, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }], [{ "id": 50331879, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331885, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }]), [CommonConstants.FONT_WEIGHT_700, CommonConstants.FONT_WEIGHT_500], new BreakpointType([{ "id": 50331884, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331890, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }], [{ "id": 50331883, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331889, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }], [{ "id": 50331882, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331888, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }]), new BreakpointType([], [HomeConstants.BANNER_TEXT_1_LEFT_MD], []), new BreakpointType(HomeConstants.BANNER_TEXT_1_TOP_SM, HomeConstants.BANNER_TEXT_1_TOP_MD, HomeConstants.BANNER_TEXT_1_TOP_LG), new BreakpointType(true, false, true), new BreakpointType(false, false, false)));
        this.bannerDescriptionList.push(new BannerDescription(HomeConstants.BANNER_TEXT_2, new BreakpointType([{ "id": 50331881, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331887, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }], [{ "id": 50331880, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331886, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }], [{ "id": 50331879, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331885, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }]), [CommonConstants.FONT_WEIGHT_700, CommonConstants.FONT_WEIGHT_500], new BreakpointType([{ "id": 50331884, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331890, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }], [{ "id": 50331883, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331889, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }], [{ "id": 50331882, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331888, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }]), new BreakpointType([], [HomeConstants.BANNER_TEXT_2_LEFT_MD], [HomeConstants.BANNER_TEXT_2_LEFT_LG]), new BreakpointType(HomeConstants.BANNER_TEXT_2_TOP_SM, HomeConstants.BANNER_TEXT_2_TOP_MD, HomeConstants.BANNER_TEXT_2_TOP_LG), new BreakpointType(true, false, false), new BreakpointType(false, false, false)));
        this.bannerDescriptionList.push(new BannerDescription(HomeConstants.BANNER_TEXT_3, new BreakpointType([{ "id": 50331881, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331887, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }], [{ "id": 50331880, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331886, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }], [{ "id": 50331879, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331885, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }]), [CommonConstants.FONT_WEIGHT_700, CommonConstants.FONT_WEIGHT_500], new BreakpointType([{ "id": 50331884, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331890, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }], [{ "id": 50331883, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331889, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }], [{ "id": 50331882, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331888, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }]), new BreakpointType([], [''], []), new BreakpointType([''], [], []), new BreakpointType(true, true, true), new BreakpointType(true, true, true)));
        this.bannerDescriptionList.push(new BannerDescription(HomeConstants.BANNER_TEXT_4, new BreakpointType([{ "id": 50331881, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331887, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }], [{ "id": 50331880, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331886, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }], [{ "id": 50331879, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331885, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }]), [CommonConstants.FONT_WEIGHT_700, CommonConstants.FONT_WEIGHT_500], new BreakpointType([{ "id": 50331884, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331890, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }], [{ "id": 50331883, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331889, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }], [{ "id": 50331882, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331888, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }]), new BreakpointType([], [''], []), new BreakpointType([''], [], []), new BreakpointType(true, true, true), new BreakpointType(true, true, true)));
    }
    getBannerDescriptionList(): BannerDescription[] {
        return this.bannerDescriptionList;
    }
}
export class Banner {
    /**
     * Img of the banner.
     */
    private bannerImg: BannerImg;
    /**
     * Description of the banner.
     */
    private description: BannerDescription;
    constructor(bannerImg: BannerImg, description: BannerDescription) {
        this.bannerImg = bannerImg;
        this.description = description;
    }
    getBannerImg(): BannerImg {
        return this.bannerImg;
    }
    getDescription(): BannerDescription {
        return this.description;
    }
}
class BannerDescription {
    /**
     * Text description.
     */
    private description: string[];
    /**
     * Font size of text.
     */
    private fontSize: BreakpointType<Resource[]>;
    /**
     * Font weight of text.
     */
    private fontWeight: number[];
    /**
     * Line height of text.
     */
    private lineHeight: BreakpointType<Resource[]>;
    /**
     * Top position for text.
     */
    private topPosition: BreakpointType<string[]>;
    /**
     * Left position for text.
     */
    private leftPosition: BreakpointType<string[]>;
    /**
     * Whether text is horizontal center.
     */
    private isLeftCenter: BreakpointType<boolean>;
    /**
     * Whether text is vertical center.
     */
    private isTopCenter: BreakpointType<boolean>;
    constructor(description: string[], fontSize: BreakpointType<Resource[]>, fontWeight: number[], lineHeight: BreakpointType<Resource[]>, leftPosition: BreakpointType<string[]>, topPosition: BreakpointType<string[]>, isLeftCenter: BreakpointType<boolean>, isTopCenter: BreakpointType<boolean>) {
        this.description = description;
        this.fontSize = fontSize;
        this.fontWeight = fontWeight;
        this.lineHeight = lineHeight;
        this.leftPosition = leftPosition;
        this.topPosition = topPosition;
        this.isLeftCenter = isLeftCenter;
        this.isTopCenter = isTopCenter;
    }
    getDescription(): string[] {
        return this.description;
    }
    getFontSize(): BreakpointType<Resource[]> {
        return this.fontSize;
    }
    getFontWeight(): number[] {
        return this.fontWeight;
    }
    getLineHeight(): BreakpointType<Resource[]> {
        return this.lineHeight;
    }
    getLeftPosition(): BreakpointType<string[]> {
        return this.leftPosition;
    }
    getTopPosition(): BreakpointType<string[]> {
        return this.topPosition;
    }
    getIsLeftCenter(): BreakpointType<boolean> {
        return this.isLeftCenter;
    }
    getIsTopCenter(): BreakpointType<boolean> {
        return this.isTopCenter;
    }
}
class BannerImg {
    /**
     * Image src of the banner.
     */
    private imgSrc: Resource;
    /**
     * Image src of the banner for sm.
     */
    private imgSrcSm: Resource;
    /**
     * Height of the banner.
     */
    private height: BreakpointType<Resource>;
    constructor(imgSrc: Resource, imgSrcSm: Resource, height: BreakpointType<Resource>) {
        this.imgSrc = imgSrc;
        this.imgSrcSm = imgSrcSm;
        this.height = height;
    }
    getImgSrc(): Resource {
        return this.imgSrc;
    }
    getImgSrcSm(): Resource {
        return this.imgSrcSm;
    }
    getHeight(): BreakpointType<Resource> {
        return this.height;
    }
}
