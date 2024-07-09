if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface HomeHeader_Params {
    isShowingBorder?: boolean;
    isSearching?: boolean;
    scrollHeight?: number;
    currentBreakpoint?: string;
    currentTopIndex?: number;
}
import deviceInfo from "@ohos:deviceInfo";
import { BreakpointConstants, CommonConstants } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { BreakpointType } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { HomeConstants } from "@bundle:com.huawei.videoapplication/phone@home/ets/constants/HomeConstants";
import { getTabIndex } from "@bundle:com.huawei.videoapplication/phone@home/ets/view/CommonView";
export class HomeHeader extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__isShowingBorder = new ObservedPropertySimplePU(false, this, "isShowingBorder");
        this.__isSearching = new SynchedPropertySimpleTwoWayPU(params.isSearching, this, "isSearching");
        this.__scrollHeight = this.createStorageLink('scrollHeight', 0, "scrollHeight");
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__currentTopIndex = this.createStorageLink('currentTopIndex', 0, "currentTopIndex");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: HomeHeader_Params) {
        if (params.isShowingBorder !== undefined) {
            this.isShowingBorder = params.isShowingBorder;
        }
    }
    updateStateVars(params: HomeHeader_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isShowingBorder.purgeDependencyOnElmtId(rmElmtId);
        this.__isSearching.purgeDependencyOnElmtId(rmElmtId);
        this.__scrollHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__currentTopIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__isShowingBorder.aboutToBeDeleted();
        this.__isSearching.aboutToBeDeleted();
        this.__scrollHeight.aboutToBeDeleted();
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__currentTopIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __isShowingBorder: ObservedPropertySimplePU<boolean>;
    get isShowingBorder() {
        return this.__isShowingBorder.get();
    }
    set isShowingBorder(newValue: boolean) {
        this.__isShowingBorder.set(newValue);
    }
    private __isSearching: SynchedPropertySimpleTwoWayPU<boolean>;
    get isSearching() {
        return this.__isSearching.get();
    }
    set isSearching(newValue: boolean) {
        this.__isSearching.set(newValue);
    }
    private __scrollHeight: ObservedPropertyAbstractPU<number>;
    get scrollHeight() {
        return this.__scrollHeight.get();
    }
    set scrollHeight(newValue: number) {
        this.__scrollHeight.set(newValue);
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
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/home/src/main/ets/view/HomeHeader.ets(61:5)");
            Column.width(CommonConstants.FULL_PERCENT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridRow.create({
                columns: {
                    sm: BreakpointConstants.GRID_ROW_COLUMNS[2],
                    md: BreakpointConstants.GRID_ROW_COLUMNS[0],
                    lg: BreakpointConstants.GRID_ROW_COLUMNS[0]
                }
            });
            GridRow.debugLine("features/home/src/main/ets/view/HomeHeader.ets(62:7)");
            GridRow.backgroundColor(this.scrollHeight >= new BreakpointType(HomeConstants.BACKGROUND_CHANGE_HEIGHT[0], HomeConstants.BACKGROUND_CHANGE_HEIGHT[1], HomeConstants.BACKGROUND_CHANGE_HEIGHT[2])
                .getValue(this.currentBreakpoint) && this.currentTopIndex === 2 ? { "id": 50331804, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } :
                Color.Transparent);
            GridRow.padding({
                left: { "id": 50332045, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                right: { "id": 50332045, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
        }, GridRow);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridCol.create({
                span: {
                    sm: BreakpointConstants.GRID_COLUMN_SPANS[5],
                    md: BreakpointConstants.GRID_COLUMN_SPANS[2],
                    lg: BreakpointConstants.GRID_COLUMN_SPANS[2]
                }
            });
            GridCol.debugLine("features/home/src/main/ets/view/HomeHeader.ets(69:9)");
            GridCol.padding({ top: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? 0 : { "id": 50332046, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
            GridCol.height(deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? { "id": 50332043, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332044, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
        }, GridCol);
        this.TopTabBar.bind(this)(this);
        GridCol.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridCol.create({
                span: {
                    sm: BreakpointConstants.GRID_COLUMN_SPANS[5],
                    md: BreakpointConstants.GRID_COLUMN_SPANS[3],
                    lg: BreakpointConstants.GRID_COLUMN_SPANS[3]
                }
            });
            GridCol.debugLine("features/home/src/main/ets/view/HomeHeader.ets(83:9)");
            GridCol.padding({ top: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM || deviceInfo.deviceType ===
                    CommonConstants.DEVICE_TYPES[0] ? 0 : { "id": 50332046, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
            GridCol.height(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM || deviceInfo.deviceType ===
                CommonConstants.DEVICE_TYPES[0] ? { "id": 50332043, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332044, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
        }, GridCol);
        this.searchBar.bind(this)(this);
        GridCol.pop();
        GridRow.pop();
        Column.pop();
    }
    TopTabBar(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/home/src/main/ets/view/HomeHeader.ets(112:5)");
            Row.height({ "id": 50332070, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Row.width(CommonConstants.FULL_PERCENT);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/home/src/main/ets/view/HomeHeader.ets(113:7)");
            Column.alignItems(HorizontalAlign.Center);
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({
                space: new BreakpointType(HomeConstants.SEARCH_TAB_LIST_SPACES[0], HomeConstants.SEARCH_TAB_LIST_SPACES[1], HomeConstants.SEARCH_TAB_LIST_SPACES[2]).getValue(this.currentBreakpoint)
            });
            List.debugLine("features/home/src/main/ets/view/HomeHeader.ets(114:9)");
            List.tabIndex(getTabIndex(HomeConstants.DIRECTION_LIST[1]));
            List.scrollBar(BarState.Off);
            List.listDirection(Axis.Horizontal);
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
                            top: this.currentTopIndex === index ? { "id": 50332079, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332078, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                            bottom: this.currentTopIndex === index ? { "id": 50332075, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332074, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                        });
                        ListItem.onClick(() => {
                            this.currentTopIndex = index;
                            this.scrollHeight = 0;
                        });
                        ListItem.debugLine("features/home/src/main/ets/view/HomeHeader.ets(119:13)");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                            Column.debugLine("features/home/src/main/ets/view/HomeHeader.ets(120:15)");
                            ViewStackProcessor.visualState("normal");
                            Column.border({
                                width: 0,
                                radius: { "id": 50332069, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                            });
                            ViewStackProcessor.visualState("focused");
                            Column.border({
                                width: { "id": 50331917, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                                color: { "id": 50331802, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                                radius: { "id": 50332069, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                            });
                            ViewStackProcessor.visualState();
                            Column.height(index === this.currentTopIndex ? { "id": 50332077, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332076, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item);
                            Text.debugLine("features/home/src/main/ets/view/HomeHeader.ets(121:17)");
                            Text.fontSize(this.currentTopIndex === index ? { "id": 50332042, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332041, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Text.fontWeight(this.currentTopIndex === index ? CommonConstants.FONT_WEIGHT_700 :
                                CommonConstants.FONT_WEIGHT_500);
                            Text.width(this.currentTopIndex === index ? { "id": 50332081, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332080, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Text.textAlign(TextAlign.Center);
                            Text.fontColor(this.currentTopIndex === 2 ? Color.White : { "id": 50331807, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Text.focusable(true);
                            Text.groupDefaultFocus(index === 0 ? true : false);
                        }, Text);
                        Text.pop();
                        Column.pop();
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, HomeConstants.TOP_TOPIC_LIST, forEachItemGenFunction, (item: number, index: number) => index + JSON.stringify(item), true, true);
        }, ForEach);
        ForEach.pop();
        List.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 50331795, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.debugLine("features/home/src/main/ets/view/HomeHeader.ets(159:7)");
            Image.width({ "id": 50332073, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.height({ "id": 50332073, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.margin({ left: { "id": 50332072, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
            Image.fillColor(this.currentTopIndex === 2 ? Color.White : Color.Black);
            Image.visibility(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? Visibility.Visible : Visibility.None);
        }, Image);
        Row.pop();
    }
    searchBar(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/home/src/main/ets/view/HomeHeader.ets(172:5)");
            Row.padding({ left: this.currentBreakpoint !== BreakpointConstants.BREAKPOINT_SM ? { "id": 50332034, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : '0' });
            Row.justifyContent(FlexAlign.Center);
            Row.width(CommonConstants.FULL_PERCENT);
            Row.height(CommonConstants.FULL_PERCENT);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.Start });
            Stack.debugLine("features/home/src/main/ets/view/HomeHeader.ets(173:7)");
            Stack.tabIndex(getTabIndex(HomeConstants.DIRECTION_LIST[1]));
            Stack.alignSelf(ItemAlign.Center);
            Stack.layoutWeight(1);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: HomeConstants.SEARCH_PLACEHOLDER });
            TextInput.debugLine("features/home/src/main/ets/view/HomeHeader.ets(174:9)");
            TextInput.placeholderFont({
                size: { "id": 50332037, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                weight: FontWeight.Normal
            });
            TextInput.placeholderColor(this.currentTopIndex === 2 ? Color.White : { "id": 50331807, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            TextInput.height({ "id": 50332038, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            TextInput.fontSize({ "id": 50332037, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            TextInput.padding({
                left: { "id": 50332039, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                right: { "id": 50332040, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
            TextInput.width(CommonConstants.FULL_PERCENT);
            TextInput.onClick(() => {
                this.isSearching = true;
            });
            TextInput.onSubmit((enterKey: EnterKeyType) => {
                if (enterKey === EnterKeyType.Go) {
                    this.isSearching = true;
                }
            });
            ViewStackProcessor.visualState("normal");
            TextInput.border({
                width: 0,
                radius: { "id": 50331965, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
            ViewStackProcessor.visualState("focused");
            TextInput.border({
                width: { "id": 50331917, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                color: { "id": 50331802, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                radius: { "id": 50331965, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
            ViewStackProcessor.visualState();
            TextInput.enterKeyType(EnterKeyType.Go);
            TextInput.enableKeyboardOnFocus(false);
            TextInput.backgroundColor(this.currentTopIndex === 2 ? { "id": 50331809, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : '');
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Search image.
            Image.create(this.currentTopIndex === 2 && this.currentBreakpoint ? { "id": 50331815, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50331827, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.debugLine("features/home/src/main/ets/view/HomeHeader.ets(204:9)");
            // Search image.
            Image.width({ "id": 50332036, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            // Search image.
            Image.height({ "id": 50332036, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            // Search image.
            Image.margin({ left: { "id": 50332035, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
        }, Image);
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // History image.
            Image.create(this.currentTopIndex === 2 ? { "id": 50331796, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50331862, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.debugLine("features/home/src/main/ets/view/HomeHeader.ets(215:7)");
            // History image.
            Image.width({ "id": 50331920, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            // History image.
            Image.height({ "id": 50331920, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            // History image.
            Image.margin({ left: { "id": 50331919, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.currentTopIndex === 2 ? { "id": 50331868, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50331795, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.debugLine("features/home/src/main/ets/view/HomeHeader.ets(220:7)");
            Image.width({ "id": 50331920, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.height({ "id": 50331920, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.margin({ left: { "id": 50331919, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
            Image.visibility(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? Visibility.None : Visibility.Visible);
        }, Image);
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
