if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SearchForHua_Params {
    currentBreakpoint?: string;
    searchInput?: string;
}
import { BreakpointConstants, CommonConstants } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { Logger } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { SearchConstants } from "@bundle:com.huawei.videoapplication/phone@search/ets/constants/SearchConstants";
export class SearchForHua extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__searchInput = new SynchedPropertySimpleTwoWayPU(params.searchInput, this, "searchInput");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SearchForHua_Params) {
    }
    updateStateVars(params: SearchForHua_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__searchInput.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__searchInput.aboutToBeDeleted();
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
    private __searchInput: SynchedPropertySimpleTwoWayPU<string>;
    get searchInput() {
        return this.__searchInput.get();
    }
    set searchInput(newValue: string) {
        this.__searchInput.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/search/src/main/ets/view/SearchForHua.ets(26:5)");
            Column.layoutWeight(1);
            Column.padding({ top: { "id": 50332241, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create();
            List.debugLine("features/search/src/main/ets/view/SearchForHua.ets(27:7)");
            List.lanes(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? SearchConstants.SEARCH_LIST_LANES[1] :
                SearchConstants.SEARCH_LIST_LANES[2]);
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
                        ListItem.debugLine("features/search/src/main/ets/view/SearchForHua.ets(29:11)");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                            Column.debugLine("features/search/src/main/ets/view/SearchForHua.ets(30:13)");
                            Column.alignItems(HorizontalAlign.Start);
                            Column.margin({ right: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG && index %
                                    SearchConstants.SEARCH_INDEX[0] === 0 ? { "id": 50332238, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : 0 });
                            Column.height({ "id": 50332237, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Column.onClick(() => {
                                if (index === SearchConstants.SEARCH_INDEX[1]) {
                                    this.searchInput = item;
                                }
                                else {
                                    Logger.info(`Please click on the third list item`);
                                }
                            });
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item);
                            Text.debugLine("features/search/src/main/ets/view/SearchForHua.ets(31:15)");
                            Text.fontSize({ "id": 50332240, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
                            Text.height({ "id": 50332242, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                        }, Text);
                        Text.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Divider.create();
                            Divider.debugLine("features/search/src/main/ets/view/SearchForHua.ets(36:15)");
                            Divider.color(Color.Black);
                            Divider.height({ "id": 50332239, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Divider.opacity(CommonConstants.DIVIDER_OPACITY);
                            Divider.width(CommonConstants.FULL_PERCENT);
                        }, Divider);
                        Column.pop();
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, SearchConstants.HUA_LIST, forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        List.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
