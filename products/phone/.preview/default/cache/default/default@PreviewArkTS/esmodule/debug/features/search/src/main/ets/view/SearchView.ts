if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SearchView_Params {
    currentBreakpoint?: string;
    currentTopIndex?: number;
    currentIndex?: number;
    searchVideoList?: SearchVideoImg[];
    searchInput?: string;
    isSearching?: boolean;
}
import { BreakpointConstants, BreakpointType, CommonConstants } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { SearchConstants } from "@bundle:com.huawei.videoapplication/phone@search/ets/constants/SearchConstants";
import { SearchVideoImgModel } from "@bundle:com.huawei.videoapplication/phone@search/ets/viewmodel/SearchVideoImgViewModel";
import type { SearchVideoImg } from "@bundle:com.huawei.videoapplication/phone@search/ets/viewmodel/SearchVideoImgViewModel";
import { SearchContent } from "@bundle:com.huawei.videoapplication/phone@search/ets/view/SearchContent";
import { SearchForHua } from "@bundle:com.huawei.videoapplication/phone@search/ets/view/SearchForHua";
import { SearchHeader } from "@bundle:com.huawei.videoapplication/phone@search/ets/view/SearchHeader";
import { SearchResult } from "@bundle:com.huawei.videoapplication/phone@search/ets/view/SearchResult";
export class SearchView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__currentTopIndex = this.createStorageLink('currentTopIndex', 0, "currentTopIndex");
        this.__currentIndex = new ObservedPropertySimplePU(0, this, "currentIndex");
        this.__searchVideoList = new ObservedPropertyObjectPU([], this, "searchVideoList");
        this.__searchInput = new ObservedPropertySimplePU('', this, "searchInput");
        this.__isSearching = new SynchedPropertySimpleTwoWayPU(params.isSearching, this, "isSearching");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SearchView_Params) {
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.searchVideoList !== undefined) {
            this.searchVideoList = params.searchVideoList;
        }
        if (params.searchInput !== undefined) {
            this.searchInput = params.searchInput;
        }
    }
    updateStateVars(params: SearchView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__currentTopIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__searchVideoList.purgeDependencyOnElmtId(rmElmtId);
        this.__searchInput.purgeDependencyOnElmtId(rmElmtId);
        this.__isSearching.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__currentTopIndex.aboutToBeDeleted();
        this.__currentIndex.aboutToBeDeleted();
        this.__searchVideoList.aboutToBeDeleted();
        this.__searchInput.aboutToBeDeleted();
        this.__isSearching.aboutToBeDeleted();
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
    private __currentIndex: ObservedPropertySimplePU<number>;
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue: number) {
        this.__currentIndex.set(newValue);
    }
    private __searchVideoList: ObservedPropertyObjectPU<SearchVideoImg[]>;
    get searchVideoList() {
        return this.__searchVideoList.get();
    }
    set searchVideoList(newValue: SearchVideoImg[]) {
        this.__searchVideoList.set(newValue);
    }
    private __searchInput: ObservedPropertySimplePU<string>;
    get searchInput() {
        return this.__searchInput.get();
    }
    set searchInput(newValue: string) {
        this.__searchInput.set(newValue);
    }
    private __isSearching: SynchedPropertySimpleTwoWayPU<boolean>;
    get isSearching() {
        return this.__isSearching.get();
    }
    set isSearching(newValue: boolean) {
        this.__isSearching.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridRow.create({
                columns: {
                    sm: BreakpointConstants.GRID_ROW_COLUMNS[2],
                    md: BreakpointConstants.GRID_ROW_COLUMNS[0],
                    lg: BreakpointConstants.GRID_ROW_COLUMNS[0]
                }
            });
            GridRow.debugLine("features/search/src/main/ets/view/SearchView.ets(34:5)");
            GridRow.padding({ left: (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG) && (this.currentTopIndex === 2) ? { "id": 50332261, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : 0 });
            GridRow.onBreakpointChange((breakPoints) => {
                this.searchVideoList = new SearchVideoImgModel().getTrendSearchList(breakPoints);
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
            GridCol.debugLine("features/search/src/main/ets/view/SearchView.ets(41:7)");
        }, GridCol);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/search/src/main/ets/view/SearchView.ets(48:9)");
            Column.height(CommonConstants.FULL_PERCENT);
            Column.width(CommonConstants.FULL_PERCENT);
            Column.padding({
                left: new BreakpointType({ "id": 50332279, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332278, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332277, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint),
                right: new BreakpointType({ "id": 50332279, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332278, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332277, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint)
            });
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SearchHeader(this, { isSearching: this.__isSearching, searchInput: this.__searchInput, currentTopIndex: this.__currentTopIndex }, undefined, elmtId, () => { }, { page: "features/search/src/main/ets/view/SearchView.ets", line: 49 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            isSearching: this.isSearching,
                            searchInput: this.searchInput,
                            currentTopIndex: this.currentTopIndex
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SearchHeader" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.layoutWeight(1);
            __Common__.visibility(this.searchInput === SearchConstants.SEARCH_INPUT_LIST[0] || this.searchInput ===
                SearchConstants.SEARCH_INPUT_LIST[1] ? Visibility.None : Visibility.Visible);
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SearchContent(this, { searchVideoList: this.__searchVideoList }, undefined, elmtId, () => { }, { page: "features/search/src/main/ets/view/SearchView.ets", line: 50 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            searchVideoList: this.searchVideoList
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SearchContent" });
        }
        __Common__.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.layoutWeight(1);
            __Common__.visibility(this.searchInput === SearchConstants.SEARCH_INPUT_LIST[0] ? Visibility.Visible :
                Visibility.None);
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SearchForHua(this, { searchInput: this.__searchInput }, undefined, elmtId, () => { }, { page: "features/search/src/main/ets/view/SearchView.ets", line: 54 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            searchInput: this.searchInput
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SearchForHua" });
        }
        __Common__.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.layoutWeight(1);
            __Common__.visibility(this.searchInput === SearchConstants.SEARCH_INPUT_LIST[1] ? Visibility.Visible :
                Visibility.None);
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SearchResult(this, {}, undefined, elmtId, () => { }, { page: "features/search/src/main/ets/view/SearchView.ets", line: 58 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SearchResult" });
        }
        __Common__.pop();
        Column.pop();
        GridCol.pop();
        GridRow.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
