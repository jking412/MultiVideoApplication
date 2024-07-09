if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TimeText_Params {
    time?: string;
}
interface TextButton_Params {
    content?: string;
}
interface ImgIcon_Params {
    img?: Resource;
}
interface VideoPlayer_Params {
    currentBreakpoint?: string;
    creaseRegion?: number[];
    updateTime?: number;
    currentTime?: string;
    totalTime?: string;
    progress?: number;
    fullScreenPlayState?: boolean;
    isHalfFolded?: boolean;
    isShowingSideBar?: boolean;
    foldStatus?: display.FoldStatus;
    pageInfo?: NavPathStack;
    windowUtil?: WindowUtil;
    avPlayerUtil?: AvPlayerUtil;
    xComponentController?: XComponentController;
    surfaceId?: string;
    onFoldStatusChange?: Callback<display.FoldStatus>;
}
import display from "@ohos:display";
import window from "@ohos:window";
import deviceInfo from "@ohos:deviceInfo";
import type { Callback } from "@ohos:base";
import { BreakpointConstants, CommonConstants } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { AvPlayerUtil, Logger, WindowUtil } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { PlayerConstants } from "@bundle:com.huawei.videoapplication/phone@videoPlayer/ets/constants/PlayerConstants";
import { FooterEpisodes } from "@bundle:com.huawei.videoapplication/phone@videoPlayer/ets/view/FooterEpisodes";
import { SideEpisodes } from "@bundle:com.huawei.videoapplication/phone@videoPlayer/ets/view/SideEpisodes";
export class VideoPlayer extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__creaseRegion = this.createStorageLink('creaseRegion', [], "creaseRegion");
        this.__updateTime = this.createStorageLink('updateTime', 0, "updateTime");
        this.__currentTime = this.createStorageLink('currentTime', CommonConstants.INITIAL_TIME, "currentTime");
        this.__totalTime = this.createStorageLink('totalTime', CommonConstants.INITIAL_TIME, "totalTime");
        this.__progress = this.createStorageLink('progress', 0, "progress");
        this.__fullScreenPlayState = this.createStorageLink('fullScreenPlayState', true, "fullScreenPlayState");
        this.__isHalfFolded = this.createStorageLink('isHalfFolded', false, "isHalfFolded");
        this.__isShowingSideBar = new ObservedPropertySimplePU(false, this, "isShowingSideBar");
        this.__foldStatus = new ObservedPropertySimplePU(display.getFoldStatus(), this, "foldStatus");
        this.__pageInfo = this.initializeConsume('pageInfo', "pageInfo");
        this.windowUtil = undefined;
        this.avPlayerUtil = new AvPlayerUtil();
        this.xComponentController = new XComponentController();
        this.surfaceId = '';
        this.onFoldStatusChange = (data: display.FoldStatus) => {
            this.foldStatus = data;
            if (data === display.FoldStatus.FOLD_STATUS_EXPANDED) {
                if (this.windowUtil === undefined) {
                    return;
                }
                this.isHalfFolded = false;
                this.windowUtil.setMainWindowOrientation(window.Orientation.AUTO_ROTATION_RESTRICTED);
            }
            else {
                if (this.windowUtil === undefined) {
                    return;
                }
                if (data === display.FoldStatus.FOLD_STATUS_HALF_FOLDED) {
                    this.isHalfFolded = true;
                }
                else {
                    this.isHalfFolded = false;
                }
                this.windowUtil.setMainWindowOrientation(window.Orientation.AUTO_ROTATION_LANDSCAPE);
            }
        };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: VideoPlayer_Params) {
        if (params.isShowingSideBar !== undefined) {
            this.isShowingSideBar = params.isShowingSideBar;
        }
        if (params.foldStatus !== undefined) {
            this.foldStatus = params.foldStatus;
        }
        if (params.windowUtil !== undefined) {
            this.windowUtil = params.windowUtil;
        }
        if (params.avPlayerUtil !== undefined) {
            this.avPlayerUtil = params.avPlayerUtil;
        }
        if (params.xComponentController !== undefined) {
            this.xComponentController = params.xComponentController;
        }
        if (params.surfaceId !== undefined) {
            this.surfaceId = params.surfaceId;
        }
        if (params.onFoldStatusChange !== undefined) {
            this.onFoldStatusChange = params.onFoldStatusChange;
        }
    }
    updateStateVars(params: VideoPlayer_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__creaseRegion.purgeDependencyOnElmtId(rmElmtId);
        this.__updateTime.purgeDependencyOnElmtId(rmElmtId);
        this.__currentTime.purgeDependencyOnElmtId(rmElmtId);
        this.__totalTime.purgeDependencyOnElmtId(rmElmtId);
        this.__progress.purgeDependencyOnElmtId(rmElmtId);
        this.__fullScreenPlayState.purgeDependencyOnElmtId(rmElmtId);
        this.__isHalfFolded.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowingSideBar.purgeDependencyOnElmtId(rmElmtId);
        this.__foldStatus.purgeDependencyOnElmtId(rmElmtId);
        this.__pageInfo.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__creaseRegion.aboutToBeDeleted();
        this.__updateTime.aboutToBeDeleted();
        this.__currentTime.aboutToBeDeleted();
        this.__totalTime.aboutToBeDeleted();
        this.__progress.aboutToBeDeleted();
        this.__fullScreenPlayState.aboutToBeDeleted();
        this.__isHalfFolded.aboutToBeDeleted();
        this.__isShowingSideBar.aboutToBeDeleted();
        this.__foldStatus.aboutToBeDeleted();
        this.__pageInfo.aboutToBeDeleted();
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
    private __creaseRegion: ObservedPropertyAbstractPU<number[]>;
    get creaseRegion() {
        return this.__creaseRegion.get();
    }
    set creaseRegion(newValue: number[]) {
        this.__creaseRegion.set(newValue);
    }
    private __updateTime: ObservedPropertyAbstractPU<number>;
    get updateTime() {
        return this.__updateTime.get();
    }
    set updateTime(newValue: number) {
        this.__updateTime.set(newValue);
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
    private __fullScreenPlayState: ObservedPropertyAbstractPU<boolean>;
    get fullScreenPlayState() {
        return this.__fullScreenPlayState.get();
    }
    set fullScreenPlayState(newValue: boolean) {
        this.__fullScreenPlayState.set(newValue);
    }
    private __isHalfFolded: ObservedPropertyAbstractPU<boolean>;
    get isHalfFolded() {
        return this.__isHalfFolded.get();
    }
    set isHalfFolded(newValue: boolean) {
        this.__isHalfFolded.set(newValue);
    }
    private __isShowingSideBar: ObservedPropertySimplePU<boolean>;
    get isShowingSideBar() {
        return this.__isShowingSideBar.get();
    }
    set isShowingSideBar(newValue: boolean) {
        this.__isShowingSideBar.set(newValue);
    }
    private __foldStatus: ObservedPropertySimplePU<display.FoldStatus>;
    get foldStatus() {
        return this.__foldStatus.get();
    }
    set foldStatus(newValue: display.FoldStatus) {
        this.__foldStatus.set(newValue);
    }
    private __pageInfo: ObservedPropertyAbstractPU<NavPathStack>;
    get pageInfo() {
        return this.__pageInfo.get();
    }
    set pageInfo(newValue: NavPathStack) {
        this.__pageInfo.set(newValue);
    }
    private windowUtil?: WindowUtil;
    private avPlayerUtil: AvPlayerUtil;
    private xComponentController: XComponentController;
    private surfaceId: string;
    private onFoldStatusChange: Callback<display.FoldStatus>;
    aboutToAppear() {
        this.windowUtil = WindowUtil.getInstance();
        if (this.windowUtil !== undefined) {
            if (deviceInfo.deviceType !== CommonConstants.DEVICE_TYPES[0]) {
                this.windowUtil.disableWindowSystemBar();
            }
            if ((!display.isFoldable() && deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[2]) ||
                display.getFoldStatus() === display.FoldStatus.FOLD_STATUS_FOLDED) {
                this.windowUtil.setMainWindowOrientation(window.Orientation.AUTO_ROTATION_LANDSCAPE);
            }
            if (display.isFoldable()) {
                if (this.isHalfFolded) {
                    this.windowUtil.setMainWindowOrientation(window.Orientation.AUTO_ROTATION_LANDSCAPE);
                }
            }
        }
        else {
            Logger.info(`Full-screen display in portrait mode`);
        }
        this.avPlayerUtil.setStartTime(this.updateTime);
    }
    aboutToDisappear() {
        this.avPlayerUtil.release();
        if (this.windowUtil !== undefined) {
            if (deviceInfo.deviceType !== CommonConstants.DEVICE_TYPES[0]) {
                this.windowUtil.enableWindowSystemBar();
            }
            if ((!display.isFoldable() && deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[2]) ||
                display.getFoldStatus() === display.FoldStatus.FOLD_STATUS_FOLDED) {
                this.windowUtil.setMainWindowOrientation(window.Orientation.PORTRAIT);
            }
            else if (deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[1]) {
                this.windowUtil.setMainWindowOrientation(window.Orientation.LANDSCAPE);
            }
            else {
                this.windowUtil.setMainWindowOrientation(window.Orientation.AUTO_ROTATION_RESTRICTED);
            }
        }
        else {
            Logger.info(`Normal return in portrait mode`);
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            NavDestination.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("features/videoPlayer/src/main/ets/view/VideoPlayer.ets(105:7)");
                    Row.justifyContent(FlexAlign.Start);
                    Row.backgroundColor(Color.Black);
                    Row.height(CommonConstants.FULL_PERCENT);
                    Row.width(CommonConstants.FULL_PERCENT);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("features/videoPlayer/src/main/ets/view/VideoPlayer.ets(106:9)");
                    Column.layoutWeight(3);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Stack.create({ alignContent: Alignment.Center });
                    Stack.debugLine("features/videoPlayer/src/main/ets/view/VideoPlayer.ets(107:11)");
                    Stack.width(CommonConstants.FULL_PERCENT);
                    Stack.height(this.isShowingSideBar ? this.creaseRegion[0] : CommonConstants.FULL_PERCENT);
                    Stack.layoutWeight(this.isHalfFolded ? 0 : 1);
                }, Stack);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Flex.create({
                        direction: FlexDirection.Column,
                        justifyContent: this.isHalfFolded ? FlexAlign.Start : FlexAlign.Center,
                        alignItems: ItemAlign.Start
                    });
                    Flex.debugLine("features/videoPlayer/src/main/ets/view/VideoPlayer.ets(108:13)");
                    Flex.width(CommonConstants.FULL_PERCENT);
                    Flex.height(CommonConstants.FULL_PERCENT);
                    Flex.onClick(() => {
                        if (this.isShowingSideBar) {
                            this.isShowingSideBar = false;
                        }
                    });
                }, Flex);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("features/videoPlayer/src/main/ets/view/VideoPlayer.ets(113:15)");
                    Column.justifyContent(FlexAlign.Center);
                    Column.height(this.isHalfFolded ? this.creaseRegion[0] : CommonConstants.FULL_PERCENT);
                    Column.width(CommonConstants.FULL_PERCENT);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    XComponent.create({
                        id: PlayerConstants.X_COMPONENT_ID,
                        type: XComponentType.SURFACE,
                        controller: this.xComponentController
                    }, "com.huawei.videoapplication/phone");
                    XComponent.debugLine("features/videoPlayer/src/main/ets/view/VideoPlayer.ets(114:17)");
                    XComponent.onLoad(() => {
                        this.xComponentController.setXComponentSurfaceSize({
                            surfaceWidth: CommonConstants.X_COMPONENT_SURFACE_WIDTH, surfaceHeight: CommonConstants.X_COMPONENT_SURFACE_HEIGHT
                        });
                        this.surfaceId = this.xComponentController.getXComponentSurfaceId();
                        this.avPlayerUtil.createAvPlayer(this.surfaceId, true);
                    });
                    XComponent.aspectRatio(CommonConstants.VIDEO_ASPECT_RATIO);
                }, XComponent);
                Column.pop();
                Flex.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("features/videoPlayer/src/main/ets/view/VideoPlayer.ets(141:13)");
                    Column.height(CommonConstants.FULL_PERCENT);
                    Column.width(CommonConstants.FULL_PERCENT);
                    Column.justifyContent(FlexAlign.End);
                    Column.visibility(this.isShowingSideBar ? Visibility.None : Visibility.Visible);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("features/videoPlayer/src/main/ets/view/VideoPlayer.ets(142:15)");
                    Row.width(CommonConstants.FULL_PERCENT);
                    Row.height({ "id": 50331766, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Row.alignItems(VerticalAlign.Center);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    __Common__.create();
                    __Common__.margin({
                        left: { "id": 50332119, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                        right: { "id": 50332120, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                    });
                }, __Common__);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new TimeText(this, { time: this.__currentTime }, undefined, elmtId, () => { }, { page: "features/videoPlayer/src/main/ets/view/VideoPlayer.ets", line: 143 });
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
                    Slider.create({ min: 0, max: CommonConstants.PROGRESS_HUNDRED, step: 1, value: this.progress });
                    Slider.debugLine("features/videoPlayer/src/main/ets/view/VideoPlayer.ets(149:17)");
                    Slider.onChange((value: number, mode: SliderChangeMode) => {
                        this.avPlayerUtil.sliderChange(value, mode);
                    });
                    Slider.layoutWeight(1);
                    Slider.selectedColor({ "id": 50332110, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                }, Slider);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    __Common__.create();
                    __Common__.margin({
                        left: { "id": 50332164, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                        right: { "id": 50332165, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                    });
                }, __Common__);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new TimeText(this, { time: this.__totalTime }, undefined, elmtId, () => { }, { page: "features/videoPlayer/src/main/ets/view/VideoPlayer.ets", line: 156 });
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
                Row.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("features/videoPlayer/src/main/ets/view/VideoPlayer.ets(166:15)");
                    Row.height({ "id": 50332132, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Row.width(CommonConstants.FULL_PERCENT);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("features/videoPlayer/src/main/ets/view/VideoPlayer.ets(167:17)");
                    Row.margin({
                        top: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? '0' : { "id": 50332136, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                        bottom: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 50332135, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332134, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                    });
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(this.fullScreenPlayState ? { "id": 50332107, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332166, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Image.debugLine("features/videoPlayer/src/main/ets/view/VideoPlayer.ets(168:19)");
                    Image.height({ "id": 50332137, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Image.width({ "id": 50332137, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Image.margin({ left: { "id": 50332133, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                    Image.onClick(() => {
                        this.avPlayerUtil.playerStateControl();
                    });
                }, Image);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new ImgIcon(this, { img: { "id": 50332112, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } }, undefined, elmtId, () => { }, { page: "features/videoPlayer/src/main/ets/view/VideoPlayer.ets", line: 175 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    img: { "id": 50332112, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "ImgIcon" });
                }
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new ImgIcon(this, { img: { "id": 50332111, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } }, undefined, elmtId, () => { }, { page: "features/videoPlayer/src/main/ets/view/VideoPlayer.ets", line: 176 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    img: { "id": 50332111, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "ImgIcon" });
                }
                Row.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Blank.create();
                    Blank.debugLine("features/videoPlayer/src/main/ets/view/VideoPlayer.ets(184:17)");
                }, Blank);
                Blank.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("features/videoPlayer/src/main/ets/view/VideoPlayer.ets(186:17)");
                    Row.margin({
                        top: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 50332116, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332115, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                        bottom: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 50332114, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332113, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                    });
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    __Common__.create();
                    __Common__.onClick(() => {
                        this.isShowingSideBar = !this.isShowingSideBar;
                    });
                }, __Common__);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new TextButton(this, { content: PlayerConstants.PLAYER_TEXT_LIST[0] }, undefined, elmtId, () => { }, { page: "features/videoPlayer/src/main/ets/view/VideoPlayer.ets", line: 187 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    content: PlayerConstants.PLAYER_TEXT_LIST[0]
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "TextButton" });
                }
                __Common__.pop();
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new TextButton(this, { content: PlayerConstants.PLAYER_TEXT_LIST[2] }, undefined, elmtId, () => { }, { page: "features/videoPlayer/src/main/ets/view/VideoPlayer.ets", line: 191 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    content: PlayerConstants.PLAYER_TEXT_LIST[2]
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "TextButton" });
                }
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new TextButton(this, { content: PlayerConstants.PLAYER_TEXT_LIST[3] }, undefined, elmtId, () => { }, { page: "features/videoPlayer/src/main/ets/view/VideoPlayer.ets", line: 192 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    content: PlayerConstants.PLAYER_TEXT_LIST[3]
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "TextButton" });
                }
                Row.pop();
                Row.pop();
                Column.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create({ "id": 50331781, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Image.debugLine("features/videoPlayer/src/main/ets/view/VideoPlayer.ets(209:13)");
                    Image.height({ "id": 50332137, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Image.width({ "id": 50332137, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Image.position({
                        x: { "id": 50331700, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                        y: this.isHalfFolded ? this.creaseRegion[0] + this.creaseRegion[1] : { "id": 50331701, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                    });
                    Image.fillColor(Color.White);
                    Image.onClick(() => {
                        this.pageInfo.pop();
                    });
                    Image.visibility(!this.isShowingSideBar ? Visibility.Visible : Visibility.None);
                }, Image);
                Stack.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Blank.create();
                    Blank.debugLine("features/videoPlayer/src/main/ets/view/VideoPlayer.ets(226:11)");
                    Blank.height(this.creaseRegion[1]);
                    Blank.width(CommonConstants.FULL_PERCENT);
                    Blank.visibility(this.isHalfFolded && this.isShowingSideBar ? Visibility.Visible : Visibility.None);
                }, Blank);
                Blank.pop();
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new FooterEpisodes(this, { isShowingSideBar: this.__isShowingSideBar, foldStatus: this.__foldStatus }, undefined, elmtId, () => { }, { page: "features/videoPlayer/src/main/ets/view/VideoPlayer.ets", line: 231 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    isShowingSideBar: this.isShowingSideBar,
                                    foldStatus: this.foldStatus
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "FooterEpisodes" });
                }
                Column.pop();
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new SideEpisodes(this, { isShowingSideBar: this.__isShowingSideBar, foldStatus: this.__foldStatus }, undefined, elmtId, () => { }, { page: "features/videoPlayer/src/main/ets/view/VideoPlayer.ets", line: 235 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    isShowingSideBar: this.isShowingSideBar,
                                    foldStatus: this.foldStatus
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "SideEpisodes" });
                }
                Row.pop();
            }, { moduleName: "phone", pagePath: "features/videoPlayer/src/main/ets/view/VideoPlayer" });
            NavDestination.hideTitleBar(true);
            NavDestination.onShown(() => {
                try {
                    display.on('foldStatusChange', this.onFoldStatusChange);
                }
                catch (exception) {
                    Logger.error('Failed to register callback. Code: ' + JSON.stringify(exception));
                }
                this.avPlayerUtil.onTimeUpdate();
            });
            NavDestination.onHidden(() => {
                this.avPlayerUtil.offTimeUpdate();
                display.off('foldStatusChange');
            });
            NavDestination.debugLine("features/videoPlayer/src/main/ets/view/VideoPlayer.ets(104:5)");
        }, NavDestination);
        NavDestination.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class ImgIcon extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.img = undefined;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ImgIcon_Params) {
        if (params.img !== undefined) {
            this.img = params.img;
        }
    }
    updateStateVars(params: ImgIcon_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private img?: Resource;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.img !== undefined ? this.img : '');
            Image.debugLine("features/videoPlayer/src/main/ets/view/VideoPlayer.ets(263:5)");
            Image.height({ "id": 50332137, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.width({ "id": 50332137, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.margin({ left: { "id": 50332133, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
        }, Image);
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class TextButton extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.content = '';
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TextButton_Params) {
        if (params.content !== undefined) {
            this.content = params.content;
        }
    }
    updateStateVars(params: TextButton_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private content: string;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.content);
            Text.debugLine("features/videoPlayer/src/main/ets/view/VideoPlayer.ets(275:5)");
            Text.fontSize({ "id": 50332117, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Normal);
            Text.fontColor(Color.White);
            Text.margin({ right: { "id": 50332118, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
        }, Text);
        Text.pop();
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
            Text.debugLine("features/videoPlayer/src/main/ets/view/VideoPlayer.ets(288:5)");
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
