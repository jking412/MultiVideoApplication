if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface RelatedList_Params {
    currentBreakpoint?: string;
    commentImgHeight?: string;
    commentImgWidth?: string;
    relatedVideoHeight?: number;
    videoHeight?: number;
    screenHeight?: number;
    relatedVideoList?: RelatedVideo[];
    peripheralVideoList?: RelatedVideo[];
    episodes?: string[];
    currentIndex?: number;
    iconList?: Resource[];
    scroller?: Scroller;
}
import { BreakpointConstants, CommonConstants } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { DetailConstants } from "@bundle:com.huawei.videoapplication/phone@videoDetail/ets/constants/DetailConstants";
import { CurrentOffsetUtil } from "@bundle:com.huawei.videoapplication/phone@videoDetail/ets/utils/CurrentOffsetUtil";
import { RelatedVideoViewModel } from "@bundle:com.huawei.videoapplication/phone@videoDetail/ets/viewmodel/RelatedVideoViewModel";
import type { RelatedVideo } from "@bundle:com.huawei.videoapplication/phone@videoDetail/ets/viewmodel/RelatedVideoViewModel";
import { AllComments } from "@bundle:com.huawei.videoapplication/phone@videoDetail/ets/view/AllComments";
export class RelatedList extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__commentImgHeight = new ObservedPropertySimplePU(DetailConstants.INITIAL_COMMENT_IMAGE_HEIGHT, this, "commentImgHeight");
        this.__commentImgWidth = new ObservedPropertySimplePU(DetailConstants.INITIAL_COMMENT_IMAGE_WIDTH, this, "commentImgWidth");
        this.__relatedVideoHeight = new SynchedPropertySimpleTwoWayPU(params.relatedVideoHeight, this, "relatedVideoHeight");
        this.__videoHeight = new SynchedPropertySimpleTwoWayPU(params.videoHeight, this, "videoHeight");
        this.screenHeight = 0;
        this.relatedVideoList = new RelatedVideoViewModel().getRelatedVideoList();
        this.peripheralVideoList = new RelatedVideoViewModel().getPeripheralVideoList();
        this.episodes = DetailConstants.EPISODES_LIST;
        this.currentIndex = 2;
        this.iconList = DetailConstants.ICON_LIST;
        this.scroller = new Scroller();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: RelatedList_Params) {
        if (params.commentImgHeight !== undefined) {
            this.commentImgHeight = params.commentImgHeight;
        }
        if (params.commentImgWidth !== undefined) {
            this.commentImgWidth = params.commentImgWidth;
        }
        if (params.screenHeight !== undefined) {
            this.screenHeight = params.screenHeight;
        }
        if (params.relatedVideoList !== undefined) {
            this.relatedVideoList = params.relatedVideoList;
        }
        if (params.peripheralVideoList !== undefined) {
            this.peripheralVideoList = params.peripheralVideoList;
        }
        if (params.episodes !== undefined) {
            this.episodes = params.episodes;
        }
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.iconList !== undefined) {
            this.iconList = params.iconList;
        }
        if (params.scroller !== undefined) {
            this.scroller = params.scroller;
        }
    }
    updateStateVars(params: RelatedList_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__commentImgHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__commentImgWidth.purgeDependencyOnElmtId(rmElmtId);
        this.__relatedVideoHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__videoHeight.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__commentImgHeight.aboutToBeDeleted();
        this.__commentImgWidth.aboutToBeDeleted();
        this.__relatedVideoHeight.aboutToBeDeleted();
        this.__videoHeight.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentBreakpoint: ObservedPropertyAbstractPU<string>;
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue: string) {
        this.__currentBreakpoint.set(newValue);
    }
    private __commentImgHeight: ObservedPropertySimplePU<string>;
    get commentImgHeight() {
        return this.__commentImgHeight.get();
    }
    set commentImgHeight(newValue: string) {
        this.__commentImgHeight.set(newValue);
    }
    private __commentImgWidth: ObservedPropertySimplePU<string>;
    get commentImgWidth() {
        return this.__commentImgWidth.get();
    }
    set commentImgWidth(newValue: string) {
        this.__commentImgWidth.set(newValue);
    }
    private __relatedVideoHeight: SynchedPropertySimpleTwoWayPU<number>;
    get relatedVideoHeight() {
        return this.__relatedVideoHeight.get();
    }
    set relatedVideoHeight(newValue: number) {
        this.__relatedVideoHeight.set(newValue);
    }
    private __videoHeight: SynchedPropertySimpleTwoWayPU<number>;
    get videoHeight() {
        return this.__videoHeight.get();
    }
    set videoHeight(newValue: number) {
        this.__videoHeight.set(newValue);
    }
    private screenHeight: number;
    private relatedVideoList: RelatedVideo[];
    private peripheralVideoList: RelatedVideo[];
    private episodes: string[];
    private currentIndex: number;
    private iconList: Resource[];
    private scroller: Scroller;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create(this.scroller);
            Scroll.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(38:5)");
            Scroll.layoutWeight(1);
            Scroll.scrollBar(BarState.Off);
            Scroll.onScrollFrameBegin((offset: number) => {
                if (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG) {
                    if ((offset > 0) && (this.videoHeight > DetailConstants.MIN_VIDEO_PERCENT)) {
                        // Video zoom-out logic.
                        // Percentage of screen height by sliding.
                        let offsetPercent = (Math.abs(offset) * DetailConstants.MAX_VIDEO_PERCENT) / this.screenHeight;
                        // Video shrinkage percentage.
                        let heightOffset = offsetPercent < this.videoHeight - DetailConstants.MIN_VIDEO_PERCENT ? offsetPercent :
                            this.videoHeight - DetailConstants.MIN_VIDEO_PERCENT;
                        this.videoHeight = this.videoHeight - heightOffset;
                        // Returns the actual offset 0.
                        return { offsetRemain: 0 };
                    }
                    else if ((offset < 0) && (this.videoHeight < DetailConstants.MAX_VIDEO_PERCENT) &&
                        (CurrentOffsetUtil.scrollToTop(JSON.stringify(this.scroller.currentOffset())))) {
                        // Video magnification logic.
                        let offsetPercent = (Math.abs(offset) * DetailConstants.MAX_VIDEO_PERCENT) / this.screenHeight;
                        let heightOffset = offsetPercent < DetailConstants.MAX_VIDEO_PERCENT - this.videoHeight ? offsetPercent :
                            DetailConstants.MAX_VIDEO_PERCENT - this.videoHeight;
                        this.videoHeight = this.videoHeight + heightOffset;
                        // Returns the actual offset 0.
                        return { offsetRemain: 0 };
                    }
                    return { offsetRemain: offset };
                }
                else {
                    if ((offset > 0) && (this.videoHeight === DetailConstants.MAX_VIDEO_PERCENT) && (this.relatedVideoHeight > 0)) {
                        // Related list shrinking logic.
                        // Percentage of screen height by sliding.
                        let offsetPercent = (Math.abs(offset) * DetailConstants.TEN) / this.screenHeight;
                        this.relatedVideoHeight = (this.relatedVideoHeight - offsetPercent * DetailConstants.RELATED_LIST_HEIGHT) <
                            0 ? 0 : (this.relatedVideoHeight - offsetPercent * DetailConstants.RELATED_LIST_HEIGHT);
                        // Returns the actual offset 0.
                        return { offsetRemain: 0 };
                    }
                    else if ((offset > 0) && (this.videoHeight > DetailConstants.MIN_VIDEO_PERCENT) &&
                        (this.relatedVideoHeight === 0)) {
                        // Video zoom-out logic.
                        // Percentage of screen height by sliding.
                        let offsetPercent = (Math.abs(offset) * DetailConstants.MAX_VIDEO_PERCENT) / this.screenHeight;
                        // Video shrinkage percentage.
                        let heightOffset = offsetPercent < this.videoHeight - DetailConstants.MIN_VIDEO_PERCENT ? offsetPercent :
                            this.videoHeight - DetailConstants.MIN_VIDEO_PERCENT;
                        this.videoHeight = this.videoHeight - heightOffset;
                        // Returns the actual offset 0.
                        return { offsetRemain: 0 };
                    }
                    else if ((offset > 0) && (this.videoHeight === DetailConstants.MIN_VIDEO_PERCENT) &&
                        (this.relatedVideoHeight === 0)) {
                        return { offsetRemain: offset };
                    }
                    else if ((offset < 0) && (this.videoHeight < DetailConstants.MAX_VIDEO_PERCENT) &&
                        (this.relatedVideoHeight === 0)) {
                        if (CurrentOffsetUtil.scrollToTop(JSON.stringify(this.scroller.currentOffset()))) {
                            // Video magnification logic.
                            let offsetPercent = (Math.abs(offset) * DetailConstants.MAX_VIDEO_PERCENT) / this.screenHeight;
                            let heightOffset = offsetPercent < DetailConstants.MAX_VIDEO_PERCENT - this.videoHeight ? offsetPercent :
                                DetailConstants.MAX_VIDEO_PERCENT - this.videoHeight;
                            this.videoHeight = this.videoHeight + heightOffset;
                            // Returns the actual offset 0.
                            return { offsetRemain: 0 };
                        }
                        return { offsetRemain: offset };
                    }
                    else if ((offset < 0) && (this.videoHeight === DetailConstants.MAX_VIDEO_PERCENT) &&
                        (this.relatedVideoHeight >= 0)) {
                        // Related list enlargement logic.
                        // Percentage of screen height by sliding.
                        let offsetPercent = (Math.abs(offset) * DetailConstants.TEN) / this.screenHeight;
                        this.relatedVideoHeight = (this.relatedVideoHeight + offsetPercent * DetailConstants.RELATED_LIST_HEIGHT) >
                            DetailConstants.RELATED_LIST_HEIGHT ? DetailConstants.RELATED_LIST_HEIGHT : (this.relatedVideoHeight +
                            offsetPercent * DetailConstants.RELATED_LIST_HEIGHT);
                        // Returns the actual offset 0.
                        return { offsetRemain: 0 };
                    }
                    return { offsetRemain: 0 };
                }
            });
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(39:7)");
            Column.width(CommonConstants.FULL_PERCENT);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.RelatedVideoComponent.bind(this)(this);
        this.VideoIntroduction.bind(this)(this);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.visibility(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? Visibility.None :
                Visibility.Visible);
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new AllComments(this, { commentImgHeight: this.__commentImgHeight, commentImgWidth: this.__commentImgWidth }, undefined, elmtId, () => { }, { page: "features/videoDetail/src/main/ets/view/RelatedList.ets", line: 42 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            commentImgHeight: this.commentImgHeight,
                            commentImgWidth: this.commentImgWidth
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "AllComments" });
        }
        __Common__.pop();
        Column.pop();
        Scroll.pop();
    }
    RelatedVideoComponent(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(127:5)");
            Column.height(this.relatedVideoHeight + DetailConstants.LENGTH_UNIT);
        }, Column);
        this.SubTitleAndMore.bind(this)(DetailConstants.SUB_TITLES[1], parent ? parent : this);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(130:7)");
            Row.padding({
                left: { "id": 50331737, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                bottom: { "id": 50331735, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
            Row.height({ "id": 50331736, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Row.width(CommonConstants.FULL_PERCENT);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ space: CommonConstants.LIST_SPACE });
            List.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(131:9)");
            List.listDirection(Axis.Horizontal);
            List.scrollBar(BarState.Off);
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        itemCreation2(elmtId, isInitialRender);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(deepRenderFunction, true);
                        ListItem.margin({
                            top: { "id": 50331732, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                            bottom: { "id": 50331731, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                        });
                        ListItem.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(133:13)");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                            Column.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(134:15)");
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Image.create(item.getImageSrc());
                            Image.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(135:17)");
                            Image.height({ "id": 50331727, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Image.width({ "id": 50331730, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Image.objectFit(ImageFit.Cover);
                            Image.borderRadius({ "id": 50331729, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Image.margin({ bottom: { "id": 50331728, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                        }, Image);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item.getName());
                            Text.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(142:17)");
                            Text.fontSize({ "id": 50331733, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Text.lineHeight({ "id": 50331734, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
                            Text.opacity(CommonConstants.TEXT_OPACITY[2]);
                            Text.fontColor(index === 0 ? { "id": 50331778, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : Color.Black);
                        }, Text);
                        Text.pop();
                        Column.pop();
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.relatedVideoList, forEachItemGenFunction, (item: RelatedVideo, index: number) => index + JSON.stringify(item), true, true);
        }, ForEach);
        ForEach.pop();
        List.pop();
        Row.pop();
        Column.pop();
    }
    VideoIntroduction(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(171:5)");
            Column.width(CommonConstants.FULL_PERCENT);
            Column.backgroundColor(Color.White);
            Column.visibility(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? Visibility.Visible : Visibility.None);
        }, Column);
        this.SubTitle.bind(this)(DetailConstants.SUB_TITLES[3], parent ? parent : this);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(174:7)");
            Column.padding({
                left: { "id": 50331762, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                right: { "id": 50331762, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
            Column.width(CommonConstants.FULL_PERCENT);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.IntroductionContent.bind(this)(DetailConstants.INTRODUCTION_CONTENT[0], parent ? parent : this);
        this.IntroductionContent.bind(this)(DetailConstants.INTRODUCTION_CONTENT[1], parent ? parent : this);
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(185:7)");
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.padding({
                top: { "id": 50331716, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                bottom: { "id": 50331716, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                left: { "id": 50331762, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                right: { "id": 50331762, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
            Row.height({ "id": 50331761, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Row.width(CommonConstants.FULL_PERCENT);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(item);
                    Image.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(187:11)");
                    Image.height({ "id": 50331715, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Image.width({ "id": 50331715, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                }, Image);
            };
            this.forEachUpdateFunction(elmtId, this.iconList, forEachItemGenFunction, (item: Resource, index: number) => index + JSON.stringify(item), true, true);
        }, ForEach);
        ForEach.pop();
        Row.pop();
        this.SubTitle.bind(this)(DetailConstants.SUB_TITLES[4], parent ? parent : this);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ space: CommonConstants.LIST_SPACE });
            List.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(204:7)");
            List.scrollBar(BarState.Off);
            List.listDirection(Axis.Horizontal);
            List.padding({ left: { "id": 50331762, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
            List.margin({ bottom: { "id": 50331708, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
            List.width(CommonConstants.FULL_PERCENT);
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        itemCreation2(elmtId, isInitialRender);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(deepRenderFunction, true);
                        ListItem.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(206:11)");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Row.create();
                            Row.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(207:13)");
                            Row.justifyContent(FlexAlign.Center);
                            Row.backgroundColor({ "id": 50331777, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Row.height({ "id": 50331707, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Row.width({ "id": 50331710, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Row.borderRadius({ "id": 50331709, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                        }, Row);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Image.create({ "id": 50331670, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Image.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(208:15)");
                            Image.height({ "id": 50331717, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Image.width({ "id": 50331717, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Image.position({ x: { "id": 50331718, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, y: { "id": 50331719, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                            Image.visibility((index + 1) === this.currentIndex ? Visibility.Visible : Visibility.None);
                        }, Image);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item);
                            Text.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(214:15)");
                            Text.fontSize({ "id": 50331711, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Text.fontWeight(FontWeight.Normal);
                            Text.height({ "id": 50331712, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Text.fontColor((index + 1) === this.currentIndex ? { "id": 50331778, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : Color.Black);
                        }, Text);
                        Text.pop();
                        Row.pop();
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.episodes, forEachItemGenFunction, (item: string, index: number) => index + JSON.stringify(item), true, true);
        }, ForEach);
        ForEach.pop();
        List.pop();
        this.SubTitleAndMore.bind(this)(DetailConstants.SUB_TITLES[5], parent ? parent : this);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ space: CommonConstants.LIST_SPACE });
            List.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(236:7)");
            List.scrollBar(BarState.Off);
            List.listDirection(Axis.Horizontal);
            List.margin({ top: { "id": 50331724, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
            List.padding({
                left: { "id": 50331762, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                right: { "id": 50331762, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
            List.width(CommonConstants.FULL_PERCENT);
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        itemCreation2(elmtId, isInitialRender);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(deepRenderFunction, true);
                        ListItem.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(238:11)");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                            Column.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(239:13)");
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Image.create(item.getImageSrc());
                            Image.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(240:15)");
                            Image.height({ "id": 50331720, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Image.width({ "id": 50331723, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Image.margin({ bottom: { "id": 50331721, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                            Image.borderRadius({ "id": 50331722, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                        }, Image);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item.getName());
                            Text.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(246:15)");
                            Text.lineHeight({ "id": 50331726, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Text.fontSize({ "id": 50331725, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Text.opacity(CommonConstants.TEXT_OPACITY[2]);
                            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
                        }, Text);
                        Text.pop();
                        Column.pop();
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.peripheralVideoList, forEachItemGenFunction, (item: RelatedVideo, index: number) => index + JSON.stringify(item), true, true);
        }, ForEach);
        ForEach.pop();
        List.pop();
        Column.pop();
    }
    SubTitle(subtitle: string, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(271:5)");
            Row.padding({
                left: { "id": 50331762, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                right: { "id": 50331762, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
            Row.height({ "id": 50331761, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Row.width(CommonConstants.FULL_PERCENT);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(subtitle);
            Text.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(272:7)");
            Text.fontSize({ "id": 50331759, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.lineHeight({ "id": 50331763, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
        }, Text);
        Text.pop();
        Row.pop();
    }
    SubTitleAndMore(subtitle: string, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(287:5)");
            Row.padding({
                left: { "id": 50331762, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                right: { "id": 50331762, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
            Row.height({ "id": 50331761, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Row.width(CommonConstants.FULL_PERCENT);
            Row.alignItems(VerticalAlign.Center);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(subtitle);
            Text.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(288:7)");
            Text.fontSize({ "id": 50331759, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.lineHeight({ "id": 50331763, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(293:7)");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(DetailConstants.SUB_TITLES[2]);
            Text.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(295:7)");
            Text.fontSize({ "id": 50331760, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.lineHeight({ "id": 50331764, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Normal);
            Text.opacity(CommonConstants.TEXT_OPACITY[2]);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 50331667, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(300:7)");
            Image.height({ "id": 50331699, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.width({ "id": 50331699, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
        }, Image);
        Row.pop();
    }
    IntroductionContent(content: string, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(content);
            Text.debugLine("features/videoDetail/src/main/ets/view/RelatedList.ets(315:5)");
            Text.fontSize({ "id": 50331713, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.lineHeight({ "id": 50331714, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
            Text.opacity(CommonConstants.TEXT_OPACITY[2]);
        }, Text);
        Text.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
