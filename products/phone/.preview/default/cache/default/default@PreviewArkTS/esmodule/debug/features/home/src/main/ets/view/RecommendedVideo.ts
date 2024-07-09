if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface RecommendedVideo_Params {
    currentBreakpoint?: string;
    videoGridColumn?: string;
    windowWidth?: number;
    currentTopIndex?: number;
    isShowingRecommendBorder?: boolean;
    currentRecommendFocusIndex?: number;
    recommendedCurrentVideo?: number;
    videoImgList?: VideoImage[];
    videoDialogController?: CustomDialogController;
    windowUtil?: WindowUtil;
}
import deviceInfo from "@ohos:deviceInfo";
import { BreakpointConstants, CommonConstants } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { BreakpointType, Logger, WindowUtil } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { HomeConstants } from "@bundle:com.huawei.videoapplication/phone@home/ets/constants/HomeConstants";
import { VideoImgViewModel } from "@bundle:com.huawei.videoapplication/phone@home/ets/viewmodel/VideoImgViewModel";
import type { VideoImage } from "@bundle:com.huawei.videoapplication/phone@home/ets/viewmodel/VideoImgViewModel";
import { getTabIndex, VideoContent, VideoImgRating, VideoTitle } from "@bundle:com.huawei.videoapplication/phone@home/ets/view/CommonView";
import { RightClickMenu, VideoDialog } from "@bundle:com.huawei.videoapplication/phone@home/ets/view/VideoDialog";
export class RecommendedVideo extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__videoGridColumn = this.createStorageLink('videoGridColumn', CommonConstants.VIDEO_GRID_COLUMNS[0], "videoGridColumn");
        this.__windowWidth = this.createStorageLink('windowWidth', 0, "windowWidth");
        this.__currentTopIndex = this.createStorageLink('currentTopIndex', 0, "currentTopIndex");
        this.__isShowingRecommendBorder = new ObservedPropertySimplePU(false, this, "isShowingRecommendBorder");
        this.__currentRecommendFocusIndex = new ObservedPropertySimplePU(0, this, "currentRecommendFocusIndex");
        this.__recommendedCurrentVideo = new ObservedPropertySimplePU(-1, this, "recommendedCurrentVideo");
        this.__videoImgList = new ObservedPropertyObjectPU(new VideoImgViewModel().getVideoImgList(), this, "videoImgList");
        this.videoDialogController = undefined;
        this.windowUtil = undefined;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: RecommendedVideo_Params) {
        if (params.isShowingRecommendBorder !== undefined) {
            this.isShowingRecommendBorder = params.isShowingRecommendBorder;
        }
        if (params.currentRecommendFocusIndex !== undefined) {
            this.currentRecommendFocusIndex = params.currentRecommendFocusIndex;
        }
        if (params.recommendedCurrentVideo !== undefined) {
            this.recommendedCurrentVideo = params.recommendedCurrentVideo;
        }
        if (params.videoImgList !== undefined) {
            this.videoImgList = params.videoImgList;
        }
        if (params.videoDialogController !== undefined) {
            this.videoDialogController = params.videoDialogController;
        }
        if (params.windowUtil !== undefined) {
            this.windowUtil = params.windowUtil;
        }
    }
    updateStateVars(params: RecommendedVideo_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__videoGridColumn.purgeDependencyOnElmtId(rmElmtId);
        this.__windowWidth.purgeDependencyOnElmtId(rmElmtId);
        this.__currentTopIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowingRecommendBorder.purgeDependencyOnElmtId(rmElmtId);
        this.__currentRecommendFocusIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__recommendedCurrentVideo.purgeDependencyOnElmtId(rmElmtId);
        this.__videoImgList.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__videoGridColumn.aboutToBeDeleted();
        this.__windowWidth.aboutToBeDeleted();
        this.__currentTopIndex.aboutToBeDeleted();
        this.__isShowingRecommendBorder.aboutToBeDeleted();
        this.__currentRecommendFocusIndex.aboutToBeDeleted();
        this.__recommendedCurrentVideo.aboutToBeDeleted();
        this.__videoImgList.aboutToBeDeleted();
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
    private __videoGridColumn: ObservedPropertyAbstractPU<string>;
    get videoGridColumn() {
        return this.__videoGridColumn.get();
    }
    set videoGridColumn(newValue: string) {
        this.__videoGridColumn.set(newValue);
    }
    private __windowWidth: ObservedPropertyAbstractPU<number>;
    get windowWidth() {
        return this.__windowWidth.get();
    }
    set windowWidth(newValue: number) {
        this.__windowWidth.set(newValue);
    }
    private __currentTopIndex: ObservedPropertyAbstractPU<number>;
    get currentTopIndex() {
        return this.__currentTopIndex.get();
    }
    set currentTopIndex(newValue: number) {
        this.__currentTopIndex.set(newValue);
    }
    private __isShowingRecommendBorder: ObservedPropertySimplePU<boolean>;
    get isShowingRecommendBorder() {
        return this.__isShowingRecommendBorder.get();
    }
    set isShowingRecommendBorder(newValue: boolean) {
        this.__isShowingRecommendBorder.set(newValue);
    }
    private __currentRecommendFocusIndex: ObservedPropertySimplePU<number>;
    get currentRecommendFocusIndex() {
        return this.__currentRecommendFocusIndex.get();
    }
    set currentRecommendFocusIndex(newValue: number) {
        this.__currentRecommendFocusIndex.set(newValue);
    }
    private __recommendedCurrentVideo: ObservedPropertySimplePU<number>;
    get recommendedCurrentVideo() {
        return this.__recommendedCurrentVideo.get();
    }
    set recommendedCurrentVideo(newValue: number) {
        this.__recommendedCurrentVideo.set(newValue);
    }
    private __videoImgList: ObservedPropertyObjectPU<VideoImage[]>;
    get videoImgList() {
        return this.__videoImgList.get();
    }
    set videoImgList(newValue: VideoImage[]) {
        this.__videoImgList.set(newValue);
    }
    private videoDialogController?: CustomDialogController;
    private windowUtil?: WindowUtil;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/home/src/main/ets/view/RecommendedVideo.ets(53:5)");
            Gesture.create(GesturePriority.Low);
            PinchGesture.create({ fingers: 2 });
            PinchGesture.onActionUpdate((event: GestureEvent) => {
                if (event.scale > 1 && this.currentBreakpoint !== BreakpointConstants.BREAKPOINT_SM) {
                    if (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD) {
                        Context.animateTo({
                            duration: HomeConstants.ANIMATION_DURATION
                        }, () => {
                            this.videoGridColumn = CommonConstants.VIDEO_GRID_COLUMNS[1];
                        });
                    }
                    else {
                        Context.animateTo({
                            duration: HomeConstants.ANIMATION_DURATION
                        }, () => {
                            this.videoGridColumn = CommonConstants.VIDEO_GRID_COLUMNS[2];
                        });
                    }
                }
                else if (event.scale < 1 && this.currentBreakpoint !== BreakpointConstants.BREAKPOINT_SM) {
                    if (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD) {
                        Context.animateTo({
                            duration: HomeConstants.ANIMATION_DURATION
                        }, () => {
                            this.videoGridColumn = CommonConstants.VIDEO_GRID_COLUMNS[2];
                        });
                    }
                    else {
                        Context.animateTo({
                            duration: HomeConstants.ANIMATION_DURATION
                        }, () => {
                            this.videoGridColumn = CommonConstants.VIDEO_GRID_COLUMNS[3];
                        });
                    }
                }
                else {
                    Logger.info(`Two-finger operation is not supported`);
                }
            });
            PinchGesture.pop();
            Gesture.pop();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Video grid layout.
            Grid.create();
            Grid.debugLine("features/home/src/main/ets/view/RecommendedVideo.ets(55:7)");
            // Video grid layout.
            Grid.tabIndex(getTabIndex(HomeConstants.DIRECTION_LIST[4]));
            // Video grid layout.
            Grid.editMode(false);
            // Video grid layout.
            Grid.columnsTemplate(this.videoGridColumn);
            // Video grid layout.
            Grid.rowsTemplate(CommonConstants.VIDEO_GRID_COLUMNS[0]);
            // Video grid layout.
            Grid.width(CommonConstants.FULL_PERCENT);
            // Video grid layout.
            Grid.rowsGap({ "id": 50332085, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            // Video grid layout.
            Grid.columnsGap({ "id": 50332085, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            // Video grid layout.
            Grid.height(this.getGridHeight(this.videoGridColumn, this.currentBreakpoint, this.windowWidth));
            // Video grid layout.
            Grid.padding({
                left: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG && this.currentTopIndex === 2 ?
                    new BreakpointType({ "id": 50331927, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331926, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331925, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint) :
                    new BreakpointType({ "id": 50331924, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331923, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331922, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint),
                right: new BreakpointType({ "id": 50331924, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331923, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331922, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint),
                top: { "id": 50332033, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
        }, Grid);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                {
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        GridItem.create(() => { }, false);
                        GridItem.debugLine("features/home/src/main/ets/view/RecommendedVideo.ets(57:11)");
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation2(itemCreation2, GridItem);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                            Column.debugLine("features/home/src/main/ets/view/RecommendedVideo.ets(58:13)");
                            Column.alignItems(HorizontalAlign.Start);
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Stack.create({ alignContent: Alignment.Center });
                            Stack.debugLine("features/home/src/main/ets/view/RecommendedVideo.ets(59:15)");
                            Stack.width(CommonConstants.FULL_PERCENT);
                            Stack.aspectRatio(HomeConstants.VIDEO_DIALOG_ASPECT_RATIO);
                            Stack.onHover((isHover: boolean) => {
                                if (isHover) {
                                    this.recommendedCurrentVideo = index;
                                }
                                else {
                                    this.recommendedCurrentVideo = -1;
                                }
                            });
                            Gesture.create(GesturePriority.Low);
                            LongPressGesture.create({ repeat: false });
                            LongPressGesture.onAction(() => {
                                if (index !== 0) {
                                    Logger.info(`Please long press the first image`);
                                    return;
                                }
                                // Obtains all attributes of a component.
                                let obj: Record<string, string> = JSON.parse(getInspectorByKey(JSON.stringify(item)));
                                // let obj: Record<string, string> = JSON.parse((JSON.stringify(item)));
                                let rectInfo: string[] = JSON.parse(HomeConstants.SQUARE_BRACKETS[0] + obj.$rect +
                                    HomeConstants.SQUARE_BRACKETS[1]);
                                // Obtains the height of the component from the top.
                                let rectTop: number = px2vp(JSON.parse(HomeConstants.SQUARE_BRACKETS[0] + rectInfo[0] +
                                    HomeConstants.SQUARE_BRACKETS[1])[1]);
                                let rectTop2: number = px2vp(JSON.parse(HomeConstants.SQUARE_BRACKETS[0] + rectInfo[1] +
                                    HomeConstants.SQUARE_BRACKETS[1])[1]);
                                // Obtains the width of the component from the left.
                                let rectLeft: number = px2vp(JSON.parse(HomeConstants.SQUARE_BRACKETS[0] + rectInfo[0] +
                                    HomeConstants.SQUARE_BRACKETS[1])[0]);
                                let topHeightNeeded: number = new BreakpointType(HomeConstants.VIDEO_DIALOG_HEIGHTS[0], HomeConstants.VIDEO_DIALOG_HEIGHTS[1], HomeConstants.VIDEO_DIALOG_HEIGHTS[2])
                                    .getValue(this.currentBreakpoint) + rectTop - rectTop2;
                                if (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM) {
                                    topHeightNeeded += HomeConstants.HOME_HEADER_HEIGHT_SM;
                                }
                                let dialogYOffset: number;
                                // Adaptive pop-up window expansion direction.
                                if (topHeightNeeded < rectTop) {
                                    dialogYOffset = rectTop2 - new BreakpointType(HomeConstants.VIDEO_DIALOG_HEIGHTS[0], HomeConstants.VIDEO_DIALOG_HEIGHTS[1], HomeConstants.VIDEO_DIALOG_HEIGHTS[2])
                                        .getValue(this.currentBreakpoint);
                                }
                                else {
                                    dialogYOffset = rectTop;
                                }
                                this.windowUtil = WindowUtil.getInstance();
                                let isLayoutFullScreen: boolean = true;
                                if (this.windowUtil === undefined) {
                                    Logger.error(`WindowUtil is undefined`);
                                    return;
                                }
                                let mainWindow = this.windowUtil.getMainWindow();
                                if (mainWindow === undefined) {
                                    Logger.error(`MainWindow is undefined`);
                                    return;
                                }
                                isLayoutFullScreen = mainWindow.getWindowProperties().isLayoutFullScreen;
                                // Subtract the width and height of the window in the 2in1 device.
                                if (deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] && !isLayoutFullScreen) {
                                    dialogYOffset -= HomeConstants.WINDOW_UNDEFINED_TOP;
                                    rectLeft -= HomeConstants.WINDOW_UNDEFINED_LEFT;
                                }
                                else {
                                    Logger.info(`No need to subtract extra height`);
                                }
                                this.videoDialogController = new CustomDialogController({
                                    builder: () => {
                                        let jsDialog = new VideoDialog(this, {}, undefined, -1, () => { }, { page: "features/home/src/main/ets/view/RecommendedVideo.ets", line: 148 });
                                        jsDialog.setController(this.videoDialogController);
                                        ViewPU.create(jsDialog);
                                        let paramsLambda = () => {
                                            return {};
                                        };
                                        jsDialog.paramsGenerator_ = paramsLambda;
                                    },
                                    autoCancel: true,
                                    customStyle: true,
                                    alignment: DialogAlignment.TopStart,
                                    offset: {
                                        dx: rectLeft,
                                        dy: dialogYOffset
                                    }
                                }, this);
                                // Display the customized pop-up window to play the video.
                                this.videoDialogController.open();
                            });
                            LongPressGesture.pop();
                            Gesture.pop();
                            Stack.bindContextMenu({ builder: () => {
                                    RightClickMenu.call(this, this.currentBreakpoint);
                                } }, ResponseType.RightClick);
                        }, Stack);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Image.create(item.getImgSrc());
                            Image.debugLine("features/home/src/main/ets/view/RecommendedVideo.ets(60:17)");
                            Image.focusable(true);
                            Image.groupDefaultFocus(index === 0 ? true : false);
                            Image.objectFit(ImageFit.Fill);
                            Image.width(this.recommendedCurrentVideo === index ? HomeConstants.PERCENT_HUNDRED_AND_FIVE :
                                CommonConstants.FULL_PERCENT);
                            Image.height(this.recommendedCurrentVideo === index ? HomeConstants.PERCENT_HUNDRED_AND_FIVE :
                                CommonConstants.FULL_PERCENT);
                            Image.draggable(false);
                            ViewStackProcessor.visualState("normal");
                            Image.border({
                                width: 0,
                                radius: { "id": 50331872, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                            });
                            ViewStackProcessor.visualState("focused");
                            Image.border({
                                width: { "id": 50331917, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                                color: { "id": 50331802, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                                radius: { "id": 50331872, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                            });
                            ViewStackProcessor.visualState();
                            Image.id(JSON.stringify(item));
                        }, Image);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                            Column.debugLine("features/home/src/main/ets/view/RecommendedVideo.ets(74:17)");
                            Column.width(CommonConstants.FULL_PERCENT);
                            Column.height(CommonConstants.FULL_PERCENT);
                            Column.alignItems(HorizontalAlign.End);
                            Column.justifyContent(FlexAlign.End);
                        }, Column);
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new VideoImgRating(this, { rating: item.getRating() }, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/RecommendedVideo.ets", line: 75 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            rating: item.getRating()
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                            }, { name: "VideoImgRating" });
                        }
                        Column.pop();
                        Stack.pop();
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new VideoTitle(this, { title: item.getTitle() }, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/RecommendedVideo.ets", line: 162 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            title: item.getTitle()
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                            }, { name: "VideoTitle" });
                        }
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new VideoContent(this, { content: item.getContent() }, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/RecommendedVideo.ets", line: 163 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            content: item.getContent()
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                            }, { name: "VideoContent" });
                        }
                        Column.pop();
                        GridItem.pop();
                    };
                    observedDeepRender();
                }
            };
            this.forEachUpdateFunction(elmtId, this.videoImgList, forEachItemGenFunction, (item: VideoImage, index: number) => index + JSON.stringify(item), true, true);
        }, ForEach);
        ForEach.pop();
        // Video grid layout.
        Grid.pop();
        Column.pop();
    }
    getGridHeight(videoGridColumn: string, currentBreakpoint: string, windowWidth: number): string {
        // Obtain the window width and subtract the blank parts on both sides.
        let result: number = px2vp(windowWidth) - new BreakpointType(HomeConstants.VIDEO_GRID_MARGIN[0], HomeConstants.VIDEO_GRID_MARGIN[1], HomeConstants.VIDEO_GRID_MARGIN[2]).getValue(this.currentBreakpoint);
        if (currentBreakpoint === BreakpointConstants.BREAKPOINT_LG) {
            result = result - HomeConstants.LG_SIDEBAR_WIDTH;
        }
        // Calculate the width of a single image based on the number of grid columns.
        if (videoGridColumn === CommonConstants.VIDEO_GRID_COLUMNS[0]) {
            result = (result - HomeConstants.VIDEO_GRID_ITEM_SPACE * 1) / HomeConstants.TWO;
        }
        else if (videoGridColumn === CommonConstants.VIDEO_GRID_COLUMNS[1]) {
            result = (result - HomeConstants.VIDEO_GRID_ITEM_SPACE * 2) / CommonConstants.THREE;
        }
        else if (videoGridColumn === CommonConstants.VIDEO_GRID_COLUMNS[2]) {
            result = (result - HomeConstants.VIDEO_GRID_ITEM_SPACE * 3) / CommonConstants.FOUR;
        }
        else {
            result = (result - HomeConstants.VIDEO_GRID_ITEM_SPACE * 4) / HomeConstants.FIVE;
        }
        // Calculate the height of a single image, title, and content, and calculate the total height of the grid layout.
        return result / HomeConstants.VIDEO_DIALOG_ASPECT_RATIO * HomeConstants.TWO +
            HomeConstants.VIDEO_GRID_DESCRIPTION_HEIGHT + HomeConstants.HEIGHT_UNIT;
    }
    rerender() {
        this.updateDirtyElements();
    }
}
