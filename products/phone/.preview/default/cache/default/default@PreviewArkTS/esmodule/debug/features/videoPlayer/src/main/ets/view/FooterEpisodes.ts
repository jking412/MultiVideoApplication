if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface FooterEpisodes_Params {
    currentBreakpoint?: string;
    isShowingSideBar?: boolean;
    foldStatus?: display.FoldStatus;
}
import { BreakpointConstants, CommonConstants } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import display from "@ohos:display";
import deviceInfo from "@ohos:deviceInfo";
import { PlayerConstants } from "@bundle:com.huawei.videoapplication/phone@videoPlayer/ets/constants/PlayerConstants";
export class FooterEpisodes extends ViewPU {
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
    setInitiallyProvidedValue(params: FooterEpisodes_Params) {
    }
    updateStateVars(params: FooterEpisodes_Params) {
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
            Column.debugLine("features/videoPlayer/src/main/ets/view/FooterEpisodes.ets(28:5)");
            Column.layoutWeight(1);
            Column.width(CommonConstants.FULL_PERCENT);
            Column.visibility(this.isShowingFooter());
            Column.backgroundColor(Color.Black);
            Column.padding({
                left: { "id": 50332121, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                right: { "id": 50332121, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Selection bottom bar.
            Row.create();
            Row.debugLine("features/videoPlayer/src/main/ets/view/FooterEpisodes.ets(30:7)");
            // Selection bottom bar.
            Row.margin({
                top: { "id": 50332158, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                bottom: { "id": 50332156, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
            // Selection bottom bar.
            Row.width(CommonConstants.FULL_PERCENT);
            // Selection bottom bar.
            Row.height({ "id": 50332157, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(PlayerConstants.PLAYER_TEXT_LIST[0]);
            Text.debugLine("features/videoPlayer/src/main/ets/view/FooterEpisodes.ets(31:9)");
            Text.fontSize({ "id": 50332159, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.fontColor(Color.White);
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
            Text.lineHeight({ "id": 50332160, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.width({ "id": 50332162, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.margin({ right: { "id": 50332161, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(PlayerConstants.PLAYER_TEXT_LIST[1]);
            Text.debugLine("features/videoPlayer/src/main/ets/view/FooterEpisodes.ets(38:9)");
            Text.fontSize({ "id": 50332154, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.fontColor(Color.White);
            Text.fontWeight(FontWeight.Normal);
            Text.lineHeight({ "id": 50332155, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.width({ "id": 50332163, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.opacity(CommonConstants.TEXT_OPACITY[2]);
        }, Text);
        Text.pop();
        // Selection bottom bar.
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ space: CommonConstants.LIST_SPACE });
            List.debugLine("features/videoPlayer/src/main/ets/view/FooterEpisodes.ets(53:7)");
            List.edgeEffect(EdgeEffect.None);
            List.scrollBar(BarState.Off);
            List.width(CommonConstants.FULL_PERCENT);
            List.layoutWeight(1);
            List.padding({ bottom: { "id": 50332122, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
            List.lanes(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD ? PlayerConstants.EPISODE_LIST_LANES[0] :
                PlayerConstants.EPISODE_LIST_LANES[1], { "id": 50332123, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
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
                        ListItem.debugLine("features/videoPlayer/src/main/ets/view/FooterEpisodes.ets(55:11)");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Row.create();
                            Row.debugLine("features/videoPlayer/src/main/ets/view/FooterEpisodes.ets(56:13)");
                            Row.justifyContent(FlexAlign.Center);
                            Row.borderRadius({ "id": 50332127, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Row.backgroundColor({ "id": 50332108, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Row.width(CommonConstants.FULL_PERCENT);
                            Row.height({ "id": 50332124, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                        }, Row);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item);
                            Text.debugLine("features/videoPlayer/src/main/ets/view/FooterEpisodes.ets(57:15)");
                            Text.fontSize({ "id": 50332154, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Text.fontColor(index === 1 ? { "id": 50332109, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : Color.White);
                            Text.fontWeight(FontWeight.Normal);
                        }, Text);
                        Text.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Image.create({ "id": 50331670, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Image.debugLine("features/videoPlayer/src/main/ets/view/FooterEpisodes.ets(62:15)");
                            Image.height({ "id": 50332145, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Image.width({ "id": 50332145, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Image.position({
                                x: { "id": 50332139, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                                y: { "id": 50332142, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
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
    isShowingFooter(): Visibility {
        if (this.isShowingSideBar) {
            if (deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[2]) {
                return (display.isFoldable() && this.foldStatus !== display.FoldStatus.FOLD_STATUS_FOLDED) ?
                    Visibility.Visible : Visibility.None;
            }
            else if (deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0]) {
                return this.currentBreakpoint !== BreakpointConstants.BREAKPOINT_LG ? Visibility.Visible : Visibility.None;
            }
            return Visibility.None;
        }
        return Visibility.None;
    }
    rerender() {
        this.updateDirtyElements();
    }
}
