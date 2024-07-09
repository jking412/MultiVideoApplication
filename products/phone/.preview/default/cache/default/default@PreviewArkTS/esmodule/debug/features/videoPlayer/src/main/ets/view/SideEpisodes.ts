if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SideTitleText_Params {
    content?: string;
}
interface SideEpisodes_Params {
    currentBreakpoint?: string;
    isShowingSideBar?: boolean;
    foldStatus?: display.FoldStatus;
}
import display from "@ohos:display";
import deviceInfo from "@ohos:deviceInfo";
import { BreakpointConstants, CommonConstants } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { PlayerConstants } from "@bundle:com.huawei.videoapplication/phone@videoPlayer/ets/constants/PlayerConstants";
export class SideEpisodes extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__isShowingSideBar = new SynchedPropertySimpleTwoWayPU(params.isShowingSideBar, this, "isShowingSideBar");
        this.__foldStatus = new SynchedPropertySimpleTwoWayPU(params.foldStatus, this, "foldStatus");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SideEpisodes_Params) {
    }
    updateStateVars(params: SideEpisodes_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowingSideBar.purgeDependencyOnElmtId(rmElmtId);
        this.__foldStatus.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__isShowingSideBar.aboutToBeDeleted();
        this.__foldStatus.aboutToBeDeleted();
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
    private __isShowingSideBar: SynchedPropertySimpleTwoWayPU<boolean>;
    get isShowingSideBar() {
        return this.__isShowingSideBar.get();
    }
    set isShowingSideBar(newValue: boolean) {
        this.__isShowingSideBar.set(newValue);
    }
    private __foldStatus: SynchedPropertySimpleTwoWayPU<display.FoldStatus>;
    get foldStatus() {
        return this.__foldStatus.get();
    }
    set foldStatus(newValue: display.FoldStatus) {
        this.__foldStatus.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/videoPlayer/src/main/ets/view/SideEpisodes.ets(28:5)");
            Column.justifyContent(FlexAlign.Start);
            Column.backgroundColor(Color.Black);
            Column.layoutWeight(this.currentBreakpoint !== BreakpointConstants.BREAKPOINT_LG ? 2 : 0);
            Column.height(CommonConstants.FULL_PERCENT);
            Column.width(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332146, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : 0);
            Column.visibility((this.isShowingSideBar && (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ||
                this.foldStatus === display.FoldStatus.FOLD_STATUS_FOLDED ||
                (deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[2] && !display.getFoldStatus()))) ?
                Visibility.Visible : Visibility.None);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Episodes sidebar.
            Row.create();
            Row.debugLine("features/videoPlayer/src/main/ets/view/SideEpisodes.ets(30:7)");
            // Episodes sidebar.
            Row.width(CommonConstants.FULL_PERCENT);
            // Episodes sidebar.
            Row.margin({ bottom: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 50332148, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332147, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("features/videoPlayer/src/main/ets/view/SideEpisodes.ets(31:9)");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.width({ "id": 50332152, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            __Common__.margin({ right: { "id": 50332151, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SideTitleText(this, { content: PlayerConstants.PLAYER_TEXT_LIST[0] }, undefined, elmtId, () => { }, { page: "features/videoPlayer/src/main/ets/view/SideEpisodes.ets", line: 32 });
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
            }, { name: "SideTitleText" });
        }
        __Common__.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.width({ "id": 50332153, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            __Common__.opacity(CommonConstants.TEXT_OPACITY[2]);
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SideTitleText(this, { content: PlayerConstants.PLAYER_TEXT_LIST[1] }, undefined, elmtId, () => { }, { page: "features/videoPlayer/src/main/ets/view/SideEpisodes.ets", line: 35 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            content: PlayerConstants.PLAYER_TEXT_LIST[1]
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SideTitleText" });
        }
        __Common__.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("features/videoPlayer/src/main/ets/view/SideEpisodes.ets(38:9)");
        }, Blank);
        Blank.pop();
        // Episodes sidebar.
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ space: CommonConstants.LIST_SPACE });
            List.debugLine("features/videoPlayer/src/main/ets/view/SideEpisodes.ets(44:7)");
            List.layoutWeight(1);
            List.width(CommonConstants.FULL_PERCENT);
            List.edgeEffect(EdgeEffect.None);
            List.scrollBar(BarState.Off);
            List.lanes(PlayerConstants.EPISODE_LIST_LANES[1], { "id": 50332138, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            List.padding({
                left: { "id": 50332131, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                right: { "id": 50332131, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                bottom: { "id": 50332130, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
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
                        ListItem.debugLine("features/videoPlayer/src/main/ets/view/SideEpisodes.ets(46:11)");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Row.create();
                            Row.debugLine("features/videoPlayer/src/main/ets/view/SideEpisodes.ets(47:13)");
                            Row.justifyContent(FlexAlign.Center);
                            Row.borderRadius({ "id": 50332127, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Row.backgroundColor({ "id": 50332108, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Row.width(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332128, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332129, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Row.height(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332125, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332126, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                        }, Row);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item);
                            Text.debugLine("features/videoPlayer/src/main/ets/view/SideEpisodes.ets(48:15)");
                            Text.fontSize({ "id": 50332154, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Text.fontColor(index === 1 ? { "id": 50332109, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : Color.White);
                            Text.fontWeight(FontWeight.Normal);
                        }, Text);
                        Text.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Image.create({ "id": 50331670, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Image.debugLine("features/videoPlayer/src/main/ets/view/SideEpisodes.ets(53:15)");
                            Image.height({ "id": 50332145, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Image.width({ "id": 50332145, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Image.position({
                                x: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332141, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332140, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                                y: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332144, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332143, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                            });
                            Image.visibility(index === 1 ? Visibility.Visible : Visibility.None);
                        }, Image);
                        Row.pop();
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, PlayerConstants.PLAYER_EPISODE, forEachItemGenFunction, (item: string, index: number) => index + JSON.stringify(item), true, true);
        }, ForEach);
        ForEach.pop();
        List.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class SideTitleText extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.content = '';
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SideTitleText_Params) {
        if (params.content !== undefined) {
            this.content = params.content;
        }
    }
    updateStateVars(params: SideTitleText_Params) {
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
            Text.debugLine("features/videoPlayer/src/main/ets/view/SideEpisodes.ets(102:5)");
            Text.fontSize({ "id": 50332149, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.fontColor(Color.White);
            Text.fontWeight(FontWeight.Normal);
            Text.lineHeight({ "id": 50332150, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
        }, Text);
        Text.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
