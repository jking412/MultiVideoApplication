if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface NewVideoRelease_Params {
    currentBreakpoint?: string;
    windowWidth?: number;
    currentTopIndex?: number;
    newVideoImgList?: VideoImage[];
}
import { BreakpointConstants, CommonConstants } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { BreakpointType } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { HomeConstants } from "@bundle:com.huawei.videoapplication/phone@home/ets/constants/HomeConstants";
import { VideoImgViewModel } from "@bundle:com.huawei.videoapplication/phone@home/ets/viewmodel/VideoImgViewModel";
import type { VideoImage } from "@bundle:com.huawei.videoapplication/phone@home/ets/viewmodel/VideoImgViewModel";
import { getTabIndex, SubtitleComponent, VideoContent, VideoImgComponent, VideoImgPlay, VideoImgRating, VideoTitle } from "@bundle:com.huawei.videoapplication/phone@home/ets/view/CommonView";
export class NewVideoRelease extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__windowWidth = this.createStorageLink('windowWidth', 0, "windowWidth");
        this.__currentTopIndex = this.createStorageLink('currentTopIndex', 0, "currentTopIndex");
        this.newVideoImgList = new VideoImgViewModel().getNewVideoImgList();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: NewVideoRelease_Params) {
        if (params.newVideoImgList !== undefined) {
            this.newVideoImgList = params.newVideoImgList;
        }
    }
    updateStateVars(params: NewVideoRelease_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__windowWidth.purgeDependencyOnElmtId(rmElmtId);
        this.__currentTopIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__windowWidth.aboutToBeDeleted();
        this.__currentTopIndex.aboutToBeDeleted();
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
    private __currentTopIndex: ObservedPropertyAbstractPU<number>;
    get currentTopIndex() {
        return this.__currentTopIndex.get();
    }
    set currentTopIndex(newValue: number) {
        this.__currentTopIndex.set(newValue);
    }
    private newVideoImgList: VideoImage[];
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/home/src/main/ets/view/NewVideoRelease.ets(31:5)");
            Column.padding({ left: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG && this.currentTopIndex === 2 ? { "id": 50332047, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : 0 });
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SubtitleComponent(this, { title: HomeConstants.HOME_SUB_TITLES[0] }, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/NewVideoRelease.ets", line: 32 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: HomeConstants.HOME_SUB_TITLES[0]
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SubtitleComponent" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Video grid.
            Grid.create();
            Grid.debugLine("features/home/src/main/ets/view/NewVideoRelease.ets(35:7)");
            // Video grid.
            Grid.tabIndex(getTabIndex(HomeConstants.DIRECTION_LIST[5]));
            // Video grid.
            Grid.columnsTemplate(new BreakpointType(CommonConstants.VIDEO_GRID_COLUMNS[1], CommonConstants.VIDEO_GRID_COLUMNS[3], CommonConstants.VIDEO_GRID_COLUMNS[4]).getValue(this.currentBreakpoint));
            // Video grid.
            Grid.rowsTemplate(HomeConstants.NEW_VIDEO_ROWS_TEMPLATE);
            // Video grid.
            Grid.width(CommonConstants.FULL_PERCENT);
            // Video grid.
            Grid.columnsGap({ "id": 50331994, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            // Video grid.
            Grid.height(this.getNewVideoHeight(this.currentBreakpoint, this.windowWidth));
        }, Grid);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        GridItem.create(() => { }, false);
                        GridItem.debugLine("features/home/src/main/ets/view/NewVideoRelease.ets(37:11)");
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation2(itemCreation2, GridItem);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                            Column.debugLine("features/home/src/main/ets/view/NewVideoRelease.ets(38:13)");
                            Column.alignItems(HorizontalAlign.Start);
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Stack.create({ alignContent: Alignment.Bottom });
                            Stack.debugLine("features/home/src/main/ets/view/NewVideoRelease.ets(39:15)");
                            Stack.height(new BreakpointType({ "id": 50331997, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331996, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331995, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint));
                            Stack.width(CommonConstants.FULL_PERCENT);
                            Stack.aspectRatio(HomeConstants.NEW_VIDEO_ASPECT_RATIO);
                        }, Stack);
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new VideoImgComponent(this, { imgSrc: item.getImgSrc() }, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/NewVideoRelease.ets", line: 40 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            imgSrc: item.getImgSrc()
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                            }, { name: "VideoImgComponent" });
                        }
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new VideoImgPlay(this, {}, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/NewVideoRelease.ets", line: 41 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {};
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                            }, { name: "VideoImgPlay" });
                        }
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new VideoImgRating(this, { rating: item.getRating() }, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/NewVideoRelease.ets", line: 42 });
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
                        Stack.pop();
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new VideoTitle(this, { title: item.getTitle() }, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/NewVideoRelease.ets", line: 49 });
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
                                    let componentCall = new VideoContent(this, { content: item.getContent() }, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/NewVideoRelease.ets", line: 50 });
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
            this.forEachUpdateFunction(elmtId, this.newVideoImgList, forEachItemGenFunction, (item: VideoImage, index: number) => index + JSON.stringify(item), false, true);
        }, ForEach);
        ForEach.pop();
        // Video grid.
        Grid.pop();
        Column.pop();
    }
    getNewVideoHeight(currentBreakpoint: string, windowWidth: number): string {
        let result: number = px2vp(windowWidth) - new BreakpointType(HomeConstants.VIDEO_GRID_MARGIN[0], HomeConstants.VIDEO_GRID_MARGIN[1], HomeConstants.VIDEO_GRID_MARGIN[2]).getValue(this.currentBreakpoint);
        if (currentBreakpoint === BreakpointConstants.BREAKPOINT_LG) {
            result = result - HomeConstants.LG_SIDEBAR_WIDTH;
            result = (result - HomeConstants.VIDEO_GRID_ITEM_SPACE * HomeConstants.SIX) / HomeConstants.SEVEN;
        }
        else if (currentBreakpoint === BreakpointConstants.BREAKPOINT_MD) {
            result = (result - HomeConstants.VIDEO_GRID_ITEM_SPACE * CommonConstants.FOUR) / HomeConstants.FIVE;
        }
        else {
            result = (result - HomeConstants.VIDEO_GRID_ITEM_SPACE * HomeConstants.TWO) / CommonConstants.THREE;
        }
        return (result / HomeConstants.NEW_VIDEO_ASPECT_RATIO + HomeConstants.NEW_VIDEO_DESCRIPTION_HEIGHT +
            HomeConstants.HEIGHT_UNIT);
    }
    rerender() {
        this.updateDirtyElements();
    }
}
