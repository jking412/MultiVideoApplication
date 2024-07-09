if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TimeText_Params {
    time?: string;
}
interface VideoDetailView_Params {
    currentTime?: string;
    totalTime?: string;
    progress?: number;
    currentBreakpoint?: string;
    isHalfFolded?: boolean;
    pageInfo?: NavPathStack;
    relatedVideoHeight?: number;
    videoHeight?: number;
    avPlayerUtil?: AvPlayerUtil;
    screenHeight?: number;
    surfaceId?: string;
    xComponentController?: XComponentController;
    scroller?: Scroller;
}
import { BreakpointConstants, CommonConstants } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { AvPlayerUtil, Logger } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { RelatedList } from "@bundle:com.huawei.videoapplication/phone@videoDetail/ets/view/RelatedList";
import { CurrentOffsetUtil } from "@bundle:com.huawei.videoapplication/phone@videoDetail/ets/utils/CurrentOffsetUtil";
import { DetailConstants } from "@bundle:com.huawei.videoapplication/phone@videoDetail/ets/constants/DetailConstants";
export class VideoDetailView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentTime = this.createStorageLink('currentTime', CommonConstants.INITIAL_TIME, "currentTime");
        this.__totalTime = this.createStorageLink('totalTime', CommonConstants.INITIAL_TIME, "totalTime");
        this.__progress = this.createStorageLink('progress', 0, "progress");
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__isHalfFolded = this.createStorageLink('isHalfFolded', false, "isHalfFolded");
        this.__pageInfo = this.initializeConsume('pageInfo', "pageInfo");
        this.__relatedVideoHeight = new SynchedPropertySimpleTwoWayPU(params.relatedVideoHeight, this, "relatedVideoHeight");
        this.__videoHeight = new SynchedPropertySimpleTwoWayPU(params.videoHeight, this, "videoHeight");
        this.avPlayerUtil = new AvPlayerUtil();
        this.screenHeight = 0;
        this.surfaceId = '';
        this.xComponentController = new XComponentController();
        this.scroller = new Scroller();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: VideoDetailView_Params) {
        if (params.avPlayerUtil !== undefined) {
            this.avPlayerUtil = params.avPlayerUtil;
        }
        if (params.screenHeight !== undefined) {
            this.screenHeight = params.screenHeight;
        }
        if (params.surfaceId !== undefined) {
            this.surfaceId = params.surfaceId;
        }
        if (params.xComponentController !== undefined) {
            this.xComponentController = params.xComponentController;
        }
        if (params.scroller !== undefined) {
            this.scroller = params.scroller;
        }
    }
    updateStateVars(params: VideoDetailView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentTime.purgeDependencyOnElmtId(rmElmtId);
        this.__totalTime.purgeDependencyOnElmtId(rmElmtId);
        this.__progress.purgeDependencyOnElmtId(rmElmtId);
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__isHalfFolded.purgeDependencyOnElmtId(rmElmtId);
        this.__pageInfo.purgeDependencyOnElmtId(rmElmtId);
        this.__relatedVideoHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__videoHeight.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentTime.aboutToBeDeleted();
        this.__totalTime.aboutToBeDeleted();
        this.__progress.aboutToBeDeleted();
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__isHalfFolded.aboutToBeDeleted();
        this.__pageInfo.aboutToBeDeleted();
        this.__relatedVideoHeight.aboutToBeDeleted();
        this.__videoHeight.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentTime: ObservedPropertyAbstractPU<string>;
    get currentTime() {
        return this.__currentTime.get();
    }
    set currentTime(newValue: string) {
        this.__currentTime.set(newValue);
    }
    private __totalTime: ObservedPropertyAbstractPU<string>;
    get totalTime() {
        return this.__totalTime.get();
    }
    set totalTime(newValue: string) {
        this.__totalTime.set(newValue);
    }
    private __progress: ObservedPropertyAbstractPU<number>;
    get progress() {
        return this.__progress.get();
    }
    set progress(newValue: number) {
        this.__progress.set(newValue);
    }
    private __currentBreakpoint: ObservedPropertyAbstractPU<string>;
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue: string) {
        this.__currentBreakpoint.set(newValue);
    }
    private __isHalfFolded: ObservedPropertyAbstractPU<boolean>;
    get isHalfFolded() {
        return this.__isHalfFolded.get();
    }
    set isHalfFolded(newValue: boolean) {
        this.__isHalfFolded.set(newValue);
    }
    private __pageInfo: ObservedPropertyAbstractPU<NavPathStack>;
    get pageInfo() {
        return this.__pageInfo.get();
    }
    set pageInfo(newValue: NavPathStack) {
        this.__pageInfo.set(newValue);
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
    private avPlayerUtil: AvPlayerUtil;
    private screenHeight: number;
    private surfaceId: string;
    private xComponentController: XComponentController;
    private scroller: Scroller;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create(this.scroller);
            Scroll.debugLine("features/videoDetail/src/main/ets/view/VideoDetailView.ets(39:5)");
            Scroll.scrollable(ScrollDirection.Vertical);
            Scroll.scrollBar(BarState.Off);
            Scroll.height(CommonConstants.FULL_PERCENT);
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
                    }
                    else if ((offset < 0) && (this.videoHeight < DetailConstants.MAX_VIDEO_PERCENT) &&
                        (CurrentOffsetUtil.scrollToTop(JSON.stringify(this.scroller.currentOffset())))) {
                        // Video magnification logic.
                        let offsetPercent = (Math.abs(offset) * DetailConstants.MAX_VIDEO_PERCENT) / this.screenHeight;
                        let heightOffset = offsetPercent < DetailConstants.MAX_VIDEO_PERCENT - this.videoHeight ? offsetPercent :
                            DetailConstants.MAX_VIDEO_PERCENT - this.videoHeight;
                        this.videoHeight = this.videoHeight + heightOffset;
                    }
                    else {
                        Logger.info(`No specific function`);
                    }
                }
                else {
                    if ((offset > 0) && (this.videoHeight === DetailConstants.MAX_VIDEO_PERCENT) && (this.relatedVideoHeight > 0)) {
                        // Related list shrinking logic.
                        // Percentage of screen height by sliding.
                        let offsetPercent = (Math.abs(offset) * DetailConstants.TEN) / this.screenHeight;
                        this.relatedVideoHeight = (this.relatedVideoHeight - offsetPercent * DetailConstants.RELATED_LIST_HEIGHT) <
                            0 ? 0 : (this.relatedVideoHeight - offsetPercent * DetailConstants.RELATED_LIST_HEIGHT);
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
                    }
                    else if ((this.videoHeight < DetailConstants.MAX_VIDEO_PERCENT) && (this.relatedVideoHeight === 0)
                        && (offset < 0) && (CurrentOffsetUtil.scrollToTop(JSON.stringify(this.scroller.currentOffset())))) {
                        // Video magnification logic.
                        let offsetPercent = (Math.abs(offset) * DetailConstants.MAX_VIDEO_PERCENT) / this.screenHeight;
                        let heightOffset = offsetPercent < DetailConstants.MAX_VIDEO_PERCENT - this.videoHeight ? offsetPercent :
                            DetailConstants.MAX_VIDEO_PERCENT - this.videoHeight;
                        this.videoHeight = this.videoHeight + heightOffset;
                    }
                    else if ((offset < 0) && (this.videoHeight === DetailConstants.MAX_VIDEO_PERCENT) &&
                        (this.relatedVideoHeight >= 0)) {
                        // Related list enlargement logic.
                        // Percentage of screen height by sliding.
                        let offsetPercent = (Math.abs(offset) * DetailConstants.TEN) / this.screenHeight;
                        this.relatedVideoHeight = (this.relatedVideoHeight + offsetPercent * DetailConstants.RELATED_LIST_HEIGHT) >
                            DetailConstants.RELATED_LIST_HEIGHT ? DetailConstants.RELATED_LIST_HEIGHT : (this.relatedVideoHeight +
                            offsetPercent * DetailConstants.RELATED_LIST_HEIGHT);
                    }
                    else {
                        Logger.info(`No specific function`);
                    }
                }
                // Returns the actual offset 0.
                return { offsetRemain: 0 };
            });
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/videoDetail/src/main/ets/view/VideoDetailView.ets(40:7)");
            Column.width(CommonConstants.FULL_PERCENT);
            Column.justifyContent(FlexAlign.Start);
            Column.padding({ bottom: { "id": 50331771, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.Bottom });
            Stack.debugLine("features/videoDetail/src/main/ets/view/VideoDetailView.ets(41:9)");
            Stack.width(CommonConstants.FULL_PERCENT);
            Stack.backgroundColor(Color.Black);
            Stack.onClick(() => {
                this.avPlayerUtil.playerStateControl();
            });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            XComponent.create({
                id: DetailConstants.VIDEO_DETAIL,
                type: XComponentType.SURFACE,
                controller: this.xComponentController
            }, "com.huawei.videoapplication/phone");
            XComponent.debugLine("features/videoDetail/src/main/ets/view/VideoDetailView.ets(42:11)");
            XComponent.onLoad(() => {
                this.surfaceId = this.xComponentController.getXComponentSurfaceId();
                this.avPlayerUtil.createAvPlayer(this.surfaceId, false);
            });
            XComponent.width(this.videoHeight + DetailConstants.PERCENT_SIGN);
            XComponent.height(CommonConstants.FULL_PERCENT);
            XComponent.aspectRatio(CommonConstants.VIDEO_ASPECT_RATIO);
        }, XComponent);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/videoDetail/src/main/ets/view/VideoDetailView.ets(55:11)");
            Row.width(CommonConstants.FULL_PERCENT);
            Row.height({ "id": 50331766, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Row.alignItems(VerticalAlign.Center);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.margin({
                left: { "id": 50331703, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                right: { "id": 50331704, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TimeText(this, { time: this.__currentTime }, undefined, elmtId, () => { }, { page: "features/videoDetail/src/main/ets/view/VideoDetailView.ets", line: 56 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            time: this.currentTime
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "TimeText" });
        }
        __Common__.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Slider.create({
                min: 0,
                max: CommonConstants.PROGRESS_HUNDRED,
                step: 1,
                value: this.progress
            });
            Slider.debugLine("features/videoDetail/src/main/ets/view/VideoDetailView.ets(62:13)");
            Slider.onChange((value: number, mode: SliderChangeMode) => {
                this.avPlayerUtil.sliderChange(value, mode);
            });
            Slider.layoutWeight(1);
            Slider.selectedColor({ "id": 50331778, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
        }, Slider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.margin({
                left: { "id": 50331769, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                right: { "id": 50331770, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TimeText(this, { time: this.__totalTime }, undefined, elmtId, () => { }, { page: "features/videoDetail/src/main/ets/view/VideoDetailView.ets", line: 74 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            time: this.totalTime
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "TimeText" });
        }
        __Common__.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 50331656, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.debugLine("features/videoDetail/src/main/ets/view/VideoDetailView.ets(80:13)");
            Image.height({ "id": 50331706, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.width({ "id": 50331706, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.margin({ right: { "id": 50331705, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
            Image.fillColor(Color.White);
            Image.onClick(() => {
                // Full-screen playback.
                this.pageInfo.pushPath({ name: 'VideoPlayer' });
            });
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 50331781, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.debugLine("features/videoDetail/src/main/ets/view/VideoDetailView.ets(94:11)");
            Image.height({ "id": 50331702, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.width({ "id": 50331702, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.position({
                x: { "id": 50331700, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                y: { "id": 50331701, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
            Image.fillColor(Color.White);
            Image.onClick(() => {
                this.pageInfo.pop();
            });
        }, Image);
        Stack.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new RelatedList(this, {
                        relatedVideoHeight: this.__relatedVideoHeight,
                        videoHeight: this.__videoHeight,
                        screenHeight: this.screenHeight
                    }, undefined, elmtId, () => { }, { page: "features/videoDetail/src/main/ets/view/VideoDetailView.ets", line: 112 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            relatedVideoHeight: this.relatedVideoHeight,
                            videoHeight: this.videoHeight,
                            screenHeight: this.screenHeight
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "RelatedList" });
        }
        Column.pop();
        Scroll.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class TimeText extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__time = new SynchedPropertySimpleTwoWayPU(params.time, this, "time");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TimeText_Params) {
    }
    updateStateVars(params: TimeText_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__time.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__time.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __time: SynchedPropertySimpleTwoWayPU<string>;
    get time() {
        return this.__time.get();
    }
    set time(newValue: string) {
        this.__time.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.time);
            Text.debugLine("features/videoDetail/src/main/ets/view/VideoDetailView.ets(191:5)");
            Text.fontSize({ "id": 50331765, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.fontColor(Color.White);
            Text.lineHeight({ "id": 50331767, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.width({ "id": 50331768, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
        }, Text);
        Text.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
