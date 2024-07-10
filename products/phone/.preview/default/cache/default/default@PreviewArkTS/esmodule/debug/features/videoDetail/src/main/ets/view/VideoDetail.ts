if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface VideoDetail_Params {
    currentBreakpoint?: string;
    windowWidth?: number;
    updateTime?: number;
    isHalfFolded?: boolean;
    pageInfo?: NavPathStack;
    commentImgHeight?: string;
    commentImgWidth?: string;
    relatedVideoHeight?: number;
    videoHeight?: number;
    screenWidth?: number;
    commentsList?: UserInfo[];
    avPlayerUtil?: AvPlayerUtil;
    screenHeight?: number;
    windowUtil?: WindowUtil;
    onDetailFoldStatusChange?: Callback<display.FoldStatus>;
}
import type { Callback } from "@ohos:base";
import display from "@ohos:display";
import window from "@ohos:window";
import { AvPlayerUtil, DeviceScreen, Logger, WindowUtil, BreakpointConstants, CommonConstants, DisplayUtil } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { SelfComment } from "@bundle:com.huawei.videoapplication/phone@videoDetail/ets/view/SelfComment";
import { AllComments } from "@bundle:com.huawei.videoapplication/phone@videoDetail/ets/view/AllComments";
import { VideoDetailView } from "@bundle:com.huawei.videoapplication/phone@videoDetail/ets/view/VideoDetailView";
import { DetailConstants } from "@bundle:com.huawei.videoapplication/phone@videoDetail/ets/constants/DetailConstants";
import { UserViewModel } from "@bundle:com.huawei.videoapplication/phone@videoDetail/ets/viewmodel/UserViewModel";
import type { UserInfo } from "@bundle:com.huawei.videoapplication/phone@videoDetail/ets/viewmodel/UserViewModel";
export class VideoDetail extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__windowWidth = this.createStorageLink('windowWidth', 0, "windowWidth");
        this.__updateTime = this.createStorageLink('updateTime', 0, "updateTime");
        this.__isHalfFolded = this.createStorageLink('isHalfFolded', false, "isHalfFolded");
        this.__pageInfo = this.initializeConsume('pageInfo', "pageInfo");
        this.__commentImgHeight = new ObservedPropertySimplePU(DetailConstants.INITIAL_COMMENT_IMAGE_HEIGHT, this, "commentImgHeight");
        this.__commentImgWidth = new ObservedPropertySimplePU(DetailConstants.INITIAL_COMMENT_IMAGE_WIDTH, this, "commentImgWidth");
        this.__relatedVideoHeight = new ObservedPropertySimplePU(DetailConstants.INITIAL_RELATED_VIDEO_HEIGHT, this, "relatedVideoHeight");
        this.__videoHeight = new ObservedPropertySimplePU(DetailConstants.INITIAL_VIDEO_HEIGHT, this, "videoHeight");
        this.__screenWidth = new ObservedPropertySimplePU(DeviceScreen.getDeviceWidth(), this, "screenWidth");
        this.__commentsList = new ObservedPropertyObjectPU(new UserViewModel().getRelatedVideoList(), this, "commentsList");
        this.addProvidedVar("commentsList", this.__commentsList, false);
        this.avPlayerUtil = new AvPlayerUtil();
        this.screenHeight = 0;
        this.windowUtil = undefined;
        this.onDetailFoldStatusChange = (data: display.FoldStatus) => {
            if (data === display.FoldStatus.FOLD_STATUS_FOLDED) {
                if (this.windowUtil === undefined) {
                    return;
                }
                this.isHalfFolded = false;
                this.windowUtil.setMainWindowOrientation(window.Orientation.PORTRAIT);
            }
            else {
                if (this.windowUtil === undefined) {
                    return;
                }
                this.windowUtil.setMainWindowOrientation(window.Orientation.AUTO_ROTATION_RESTRICTED);
                if (data === display.FoldStatus.FOLD_STATUS_HALF_FOLDED) {
                    this.isHalfFolded = true;
                    // Full-screen playback.
                    this.pageInfo.pushPath({ name: 'VideoPlayer' });
                }
                else {
                    this.isHalfFolded = false;
                }
            }
        };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: VideoDetail_Params) {
        if (params.commentImgHeight !== undefined) {
            this.commentImgHeight = params.commentImgHeight;
        }
        if (params.commentImgWidth !== undefined) {
            this.commentImgWidth = params.commentImgWidth;
        }
        if (params.relatedVideoHeight !== undefined) {
            this.relatedVideoHeight = params.relatedVideoHeight;
        }
        if (params.videoHeight !== undefined) {
            this.videoHeight = params.videoHeight;
        }
        if (params.screenWidth !== undefined) {
            this.screenWidth = params.screenWidth;
        }
        if (params.commentsList !== undefined) {
            this.commentsList = params.commentsList;
        }
        if (params.avPlayerUtil !== undefined) {
            this.avPlayerUtil = params.avPlayerUtil;
        }
        if (params.screenHeight !== undefined) {
            this.screenHeight = params.screenHeight;
        }
        if (params.windowUtil !== undefined) {
            this.windowUtil = params.windowUtil;
        }
        if (params.onDetailFoldStatusChange !== undefined) {
            this.onDetailFoldStatusChange = params.onDetailFoldStatusChange;
        }
    }
    updateStateVars(params: VideoDetail_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__windowWidth.purgeDependencyOnElmtId(rmElmtId);
        this.__updateTime.purgeDependencyOnElmtId(rmElmtId);
        this.__isHalfFolded.purgeDependencyOnElmtId(rmElmtId);
        this.__pageInfo.purgeDependencyOnElmtId(rmElmtId);
        this.__commentImgHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__commentImgWidth.purgeDependencyOnElmtId(rmElmtId);
        this.__relatedVideoHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__videoHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__screenWidth.purgeDependencyOnElmtId(rmElmtId);
        this.__commentsList.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__windowWidth.aboutToBeDeleted();
        this.__updateTime.aboutToBeDeleted();
        this.__isHalfFolded.aboutToBeDeleted();
        this.__pageInfo.aboutToBeDeleted();
        this.__commentImgHeight.aboutToBeDeleted();
        this.__commentImgWidth.aboutToBeDeleted();
        this.__relatedVideoHeight.aboutToBeDeleted();
        this.__videoHeight.aboutToBeDeleted();
        this.__screenWidth.aboutToBeDeleted();
        this.__commentsList.aboutToBeDeleted();
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
    private __windowWidth: ObservedPropertyAbstractPU<number>;
    get windowWidth() {
        return this.__windowWidth.get();
    }
    set windowWidth(newValue: number) {
        this.__windowWidth.set(newValue);
    }
    private __updateTime: ObservedPropertyAbstractPU<number>;
    get updateTime() {
        return this.__updateTime.get();
    }
    set updateTime(newValue: number) {
        this.__updateTime.set(newValue);
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
    private __relatedVideoHeight: ObservedPropertySimplePU<number>;
    get relatedVideoHeight() {
        return this.__relatedVideoHeight.get();
    }
    set relatedVideoHeight(newValue: number) {
        this.__relatedVideoHeight.set(newValue);
    }
    private __videoHeight: ObservedPropertySimplePU<number>;
    get videoHeight() {
        return this.__videoHeight.get();
    }
    set videoHeight(newValue: number) {
        this.__videoHeight.set(newValue);
    }
    private __screenWidth: ObservedPropertySimplePU<number>;
    get screenWidth() {
        return this.__screenWidth.get();
    }
    set screenWidth(newValue: number) {
        this.__screenWidth.set(newValue);
    }
    private __commentsList: ObservedPropertyObjectPU<UserInfo[]>;
    get commentsList() {
        return this.__commentsList.get();
    }
    set commentsList(newValue: UserInfo[]) {
        this.__commentsList.set(newValue);
    }
    private avPlayerUtil: AvPlayerUtil;
    private screenHeight: number;
    private windowUtil?: WindowUtil;
    private onDetailFoldStatusChange: Callback<display.FoldStatus>;
    aboutToAppear() {
        DisplayUtil.getFoldCreaseRegion();
        this.screenHeight = DeviceScreen.getDeviceHeight();
        this.windowUtil = WindowUtil.getInstance();
        if (this.windowUtil === undefined) {
            return;
        }
        if (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD && display.isFoldable()) {
            this.windowUtil.setMainWindowOrientation(window.Orientation.AUTO_ROTATION_RESTRICTED);
        }
    }
    aboutToDisappear() {
        this.updateTime = 0;
        if (this.windowUtil === undefined) {
            return;
        }
        if (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD && display.isFoldable()) {
            this.windowUtil.setMainWindowOrientation(window.Orientation.PORTRAIT);
        }
        this.avPlayerUtil.release();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            NavDestination.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    GridRow.create({
                        columns: {
                            sm: BreakpointConstants.GRID_ROW_COLUMNS[2],
                            md: BreakpointConstants.GRID_ROW_COLUMNS[0],
                            lg: BreakpointConstants.GRID_ROW_COLUMNS[0]
                        }
                    });
                    GridRow.debugLine("features/videoDetail/src/main/ets/view/VideoDetail.ets(89:7)");
                    GridRow.width(CommonConstants.FULL_PERCENT);
                    GridRow.height(CommonConstants.FULL_PERCENT);
                    GridRow.onBreakpointChange((breakPoints) => {
                        if (breakPoints !== BreakpointConstants.BREAKPOINT_LG &&
                            this.videoHeight < DetailConstants.INITIAL_VIDEO_HEIGHT) {
                            this.relatedVideoHeight = 0;
                        }
                        else if (breakPoints === BreakpointConstants.BREAKPOINT_LG) {
                            this.relatedVideoHeight = DetailConstants.INITIAL_RELATED_VIDEO_HEIGHT;
                        }
                        else {
                            Logger.info(`No specific function`);
                        }
                    });
                }, GridRow);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    GridCol.create({
                        span: {
                            sm: BreakpointConstants.GRID_COLUMN_SPANS[5],
                            md: BreakpointConstants.GRID_COLUMN_SPANS[0],
                            lg: BreakpointConstants.GRID_COLUMN_SPANS[0]
                        }
                    });
                    GridCol.debugLine("features/videoDetail/src/main/ets/view/VideoDetail.ets(96:9)");
                    GridCol.height(CommonConstants.FULL_PERCENT);
                }, GridCol);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    SideBarContainer.create();
                    SideBarContainer.debugLine("features/videoDetail/src/main/ets/view/VideoDetail.ets(103:11)");
                    SideBarContainer.showSideBar(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? true : false);
                    SideBarContainer.showControlButton(false);
                    SideBarContainer.autoHide(false);
                    SideBarContainer.sideBarPosition(SideBarPosition.End);
                    SideBarContainer.sideBarWidth({ "id": 50331757, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    SideBarContainer.minSideBarWidth({ "id": 50331757, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    SideBarContainer.maxSideBarWidth(px2vp(this.windowWidth * DetailConstants.COMMENTS_AREA_PERCENT));
                }, SideBarContainer);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("features/videoDetail/src/main/ets/view/VideoDetail.ets(104:13)");
                    Column.justifyContent(FlexAlign.Start);
                    Column.height(CommonConstants.FULL_PERCENT);
                    Column.width(CommonConstants.FULL_PERCENT);
                    Column.backgroundColor(Color.White);
                    Column.onAreaChange((newValue: Area) => {
                        if (newValue.width !== 0) {
                            let height: number = DetailConstants.COMMENT_IMAGE_MIN_HEIGHT_NUMBER + (Number(newValue.width) -
                                DetailConstants.SIDE_BAR_MIN_WIDTH_NUMBER) / (this.windowWidth * DetailConstants.COMMENTS_AREA_PERCENT -
                                DetailConstants.SIDE_BAR_MIN_WIDTH_NUMBER) * (DetailConstants.COMMENT_IMAGE_MAX_HEIGHT_NUMBER -
                                DetailConstants.COMMENT_IMAGE_MIN_HEIGHT_NUMBER);
                            let width: number = DetailConstants.COMMENT_IMAGE_MIN_WIDTH_NUMBER + (Number(newValue.width) -
                                DetailConstants.SIDE_BAR_MIN_WIDTH_NUMBER) / (this.windowWidth * DetailConstants.COMMENTS_AREA_PERCENT -
                                DetailConstants.SIDE_BAR_MIN_WIDTH_NUMBER) * (DetailConstants.COMMENT_IMAGE_MAX_WIDTH_NUMBER -
                                DetailConstants.COMMENT_IMAGE_MIN_WIDTH_NUMBER);
                            this.commentImgHeight = JSON.stringify(height);
                            this.commentImgWidth = JSON.stringify(width);
                        }
                    });
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Scroll.create();
                    Scroll.debugLine("features/videoDetail/src/main/ets/view/VideoDetail.ets(105:15)");
                    Scroll.align(Alignment.Top);
                    Scroll.scrollBar(BarState.Off);
                    Scroll.layoutWeight(1);
                    Scroll.width(CommonConstants.FULL_PERCENT);
                    Scroll.padding({ bottom: { "id": 50331758, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                }, Scroll);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    __Common__.create();
                    __Common__.visibility(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? Visibility.Visible :
                        Visibility.None);
                }, __Common__);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new AllComments(this, { commentImgHeight: this.__commentImgHeight, commentImgWidth: this.__commentImgWidth }, undefined, elmtId, () => { }, { page: "features/videoDetail/src/main/ets/view/VideoDetail.ets", line: 106 });
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
                Scroll.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    __Common__.create();
                    __Common__.visibility(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? Visibility.Visible :
                        Visibility.None);
                }, __Common__);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new SelfComment(this, {}, undefined, elmtId, () => { }, { page: "features/videoDetail/src/main/ets/view/VideoDetail.ets", line: 116 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "SelfComment" });
                }
                __Common__.pop();
                Column.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("features/videoDetail/src/main/ets/view/VideoDetail.ets(139:13)");
                    Column.height(CommonConstants.FULL_PERCENT);
                    Column.width(CommonConstants.FULL_PERCENT);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    __Common__.create();
                    __Common__.layoutWeight(1);
                }, __Common__);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new VideoDetailView(this, {
                                screenHeight: this.screenHeight,
                                avPlayerUtil: this.avPlayerUtil,
                                relatedVideoHeight: this.__relatedVideoHeight,
                                videoHeight: this.__videoHeight
                            }, undefined, elmtId, () => { }, { page: "features/videoDetail/src/main/ets/view/VideoDetail.ets", line: 140 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    screenHeight: this.screenHeight,
                                    avPlayerUtil: this.avPlayerUtil,
                                    relatedVideoHeight: this.relatedVideoHeight,
                                    videoHeight: this.videoHeight
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "VideoDetailView" });
                }
                __Common__.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    __Common__.create();
                    __Common__.visibility(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? Visibility.None :
                        Visibility.Visible);
                }, __Common__);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new SelfComment(this, {}, undefined, elmtId, () => { }, { page: "features/videoDetail/src/main/ets/view/VideoDetail.ets", line: 148 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "SelfComment" });
                }
                __Common__.pop();
                Column.pop();
                SideBarContainer.pop();
                GridCol.pop();
                GridRow.pop();
            }, { moduleName: "phone", pagePath: "features/videoDetail/src/main/ets/view/VideoDetail" });
            NavDestination.hideTitleBar(true);
            NavDestination.onShown(() => {
                try {
                    display.on('foldStatusChange', this.onDetailFoldStatusChange);
                }
                catch (exception) {
                    Logger.error('Failed to register callback. Code: ' + JSON.stringify(exception));
                }
                if (this.windowUtil === undefined) {
                    return;
                }
                if (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD && display.isFoldable()) {
                    this.isHalfFolded = false;
                }
                this.avPlayerUtil.setStartTime(this.updateTime);
                this.avPlayerUtil.playerStateControl();
                this.avPlayerUtil.onTimeUpdate();
            });
            NavDestination.onHidden(() => {
                try {
                    display.off('foldStatusChange');
                }
                catch (exception) {
                    Logger.error('Failed to unregister callback. Code: ' + JSON.stringify(exception));
                }
                this.avPlayerUtil.pause();
                this.avPlayerUtil.offTimeUpdate();
            });
            NavDestination.debugLine("features/videoDetail/src/main/ets/view/VideoDetail.ets(88:5)");
        }, NavDestination);
        NavDestination.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
