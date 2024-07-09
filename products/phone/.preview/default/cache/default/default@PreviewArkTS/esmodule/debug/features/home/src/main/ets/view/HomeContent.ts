if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface HomeContent_Params {
    currentBreakpoint?: string;
    currentTopIndex?: number;
    windowWidth?: number;
    gridStatus?: number;
    windowUtil?: WindowUtil;
    mainWindow?: window.Window;
    isSearching?: boolean;
    onWindowSizeChange?: (data: window.Size) => void;
}
import type window from "@ohos:window";
import deviceInfo from "@ohos:deviceInfo";
import { BreakpointConstants, BreakpointType, CommonConstants } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { Logger, WindowUtil } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { BannerView } from "@bundle:com.huawei.videoapplication/phone@home/ets/view/BannerView";
import { IconView } from "@bundle:com.huawei.videoapplication/phone@home/ets/view/IconView";
import { RecommendedVideo } from "@bundle:com.huawei.videoapplication/phone@home/ets/view/RecommendedVideo";
import { NewVideoRelease } from "@bundle:com.huawei.videoapplication/phone@home/ets/view/NewVideoRelease";
import { DailyVideo } from "@bundle:com.huawei.videoapplication/phone@home/ets/view/DailyVideo";
import { PreviousVideo } from "@bundle:com.huawei.videoapplication/phone@home/ets/view/PreviousVideo";
export class HomeContent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__currentTopIndex = this.createStorageLink('currentTopIndex', 0, "currentTopIndex");
        this.__windowWidth = this.createStorageLink('windowWidth', 0, "windowWidth");
        this.__gridStatus = new ObservedPropertySimplePU(1, this, "gridStatus");
        this.windowUtil = undefined;
        this.mainWindow = undefined;
        this.isSearching = false;
        this.onWindowSizeChange = (data: window.Size) => {
            this.windowWidth = data.width;
        };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: HomeContent_Params) {
        if (params.gridStatus !== undefined) {
            this.gridStatus = params.gridStatus;
        }
        if (params.windowUtil !== undefined) {
            this.windowUtil = params.windowUtil;
        }
        if (params.mainWindow !== undefined) {
            this.mainWindow = params.mainWindow;
        }
        if (params.isSearching !== undefined) {
            this.isSearching = params.isSearching;
        }
        if (params.onWindowSizeChange !== undefined) {
            this.onWindowSizeChange = params.onWindowSizeChange;
        }
    }
    updateStateVars(params: HomeContent_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__currentTopIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__windowWidth.purgeDependencyOnElmtId(rmElmtId);
        this.__gridStatus.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__currentTopIndex.aboutToBeDeleted();
        this.__windowWidth.aboutToBeDeleted();
        this.__gridStatus.aboutToBeDeleted();
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
    private __currentTopIndex: ObservedPropertyAbstractPU<number>;
    get currentTopIndex() {
        return this.__currentTopIndex.get();
    }
    set currentTopIndex(newValue: number) {
        this.__currentTopIndex.set(newValue);
    }
    private __windowWidth: ObservedPropertyAbstractPU<number>;
    get windowWidth() {
        return this.__windowWidth.get();
    }
    set windowWidth(newValue: number) {
        this.__windowWidth.set(newValue);
    }
    private __gridStatus: ObservedPropertySimplePU<number>;
    get gridStatus() {
        return this.__gridStatus.get();
    }
    set gridStatus(newValue: number) {
        this.__gridStatus.set(newValue);
    }
    private windowUtil?: WindowUtil;
    private mainWindow?: window.Window;
    private isSearching: boolean;
    private onWindowSizeChange: (data: window.Size) => void;
    aboutToAppear(): void {
        this.windowUtil = WindowUtil.getInstance();
        if (this.windowUtil === undefined) {
            Logger.error(`WindwoUtil is undefined`);
            return;
        }
        if (deviceInfo.deviceType !== CommonConstants.DEVICE_TYPES[0]) {
            this.windowUtil.setFullScreen();
        }
        this.mainWindow = this.windowUtil.getMainWindow();
        if (this.mainWindow === undefined) {
            Logger.error(`MainWindow is undefined`);
            return;
        }
        this.windowWidth = this.mainWindow.getWindowProperties().windowRect.width;
        this.mainWindow.on('windowSizeChange', this.onWindowSizeChange);
    }
    aboutToDisappear(): void {
        this.windowUtil = WindowUtil.getInstance();
        if (this.windowUtil === undefined) {
            return;
        }
        this.mainWindow = this.windowUtil.getMainWindow();
        if (this.mainWindow === undefined) {
            return;
        }
        try {
            this.mainWindow.off('windowSizeChange');
        }
        catch (exception) {
            Logger.error('Failed to unregister the window callback. Code: ' + JSON.stringify(exception));
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/home/src/main/ets/view/HomeContent.ets(75:5)");
            Column.backgroundImage(this.currentTopIndex === 2 && !this.isSearching ? new BreakpointType({ "id": 50332101, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331871, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331865, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint) : { "id": 50331859, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Column.backgroundImageSize({ width: CommonConstants.FULL_PERCENT, height: new BreakpointType({ "id": 50331942, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331941, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331940, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint) });
            Column.backgroundColor(this.currentTopIndex === 2 && !this.isSearching ? (this.currentBreakpoint !== BreakpointConstants.BREAKPOINT_MD ? { "id": 50331804, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50331805, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }) : Color.White);
            Column.width(CommonConstants.FULL_PERCENT);
            Column.padding({ bottom: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[1] ? { "id": 50331891, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : 0 });
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new BannerView(this, {}, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/HomeContent.ets", line: 76 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "BannerView" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new IconView(this, {}, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/HomeContent.ets", line: 77 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "IconView" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new RecommendedVideo(this, {}, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/HomeContent.ets", line: 78 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "RecommendedVideo" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/home/src/main/ets/view/HomeContent.ets(79:7)");
            Column.padding({
                left: new BreakpointType({ "id": 50331924, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331923, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331922, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint),
                right: new BreakpointType({ "id": 50331924, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331923, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331922, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint)
            });
            Column.width(CommonConstants.FULL_PERCENT);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new NewVideoRelease(this, {}, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/HomeContent.ets", line: 80 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "NewVideoRelease" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new DailyVideo(this, {}, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/HomeContent.ets", line: 81 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "DailyVideo" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PreviousVideo(this, {}, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/HomeContent.ets", line: 82 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "PreviousVideo" });
        }
        Column.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
