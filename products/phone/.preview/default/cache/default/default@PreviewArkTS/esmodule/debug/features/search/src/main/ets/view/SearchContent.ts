if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SearchContent_Params {
    currentBreakpoint?: string;
    currentIndex?: number;
    searchVideoList?: SearchVideoImg[];
}
import { BreakpointConstants, CommonConstants } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { BreakpointType } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { SearchConstants } from "@bundle:com.huawei.videoapplication/phone@search/ets/constants/SearchConstants";
import type { SearchVideoImg } from '../viewmodel/SearchVideoImgViewModel';
export class SearchContent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__currentIndex = new ObservedPropertySimplePU(0, this, "currentIndex");
        this.__searchVideoList = new SynchedPropertyObjectTwoWayPU(params.searchVideoList, this, "searchVideoList");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SearchContent_Params) {
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
    }
    updateStateVars(params: SearchContent_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__searchVideoList.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__currentIndex.aboutToBeDeleted();
        this.__searchVideoList.aboutToBeDeleted();
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
    private __currentIndex: ObservedPropertySimplePU<number>;
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue: number) {
        this.__currentIndex.set(newValue);
    }
    private __searchVideoList: SynchedPropertySimpleOneWayPU<SearchVideoImg[]>;
    get searchVideoList() {
        return this.__searchVideoList.get();
    }
    set searchVideoList(newValue: SearchVideoImg[]) {
        this.__searchVideoList.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.debugLine("features/search/src/main/ets/view/SearchContent.ets(28:5)");
            Scroll.scrollable(ScrollDirection.Vertical);
            Scroll.scrollBar(BarState.Off);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/search/src/main/ets/view/SearchContent.ets(29:7)");
            Column.alignItems(HorizontalAlign.Start);
            Column.width(CommonConstants.FULL_PERCENT);
        }, Column);
        this.searchHistory.bind(this)(this);
        this.searchDiscovery.bind(this)(this);
        this.searchHotTrending.bind(this)(this);
        Column.pop();
        Scroll.pop();
    }
    searchHistory(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/search/src/main/ets/view/SearchContent.ets(43:5)");
            Row.margin({ top: { "id": 50332236, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
            Row.width(CommonConstants.FULL_PERCENT);
            Row.height({ "id": 50332235, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(SearchConstants.SEARCH_SUB_TITLES[0]);
            Text.debugLine("features/search/src/main/ets/view/SearchContent.ets(44:7)");
            Text.fontSize({ "id": 50332234, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("features/search/src/main/ets/view/SearchContent.ets(47:7)");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 50332179, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.debugLine("features/search/src/main/ets/view/SearchContent.ets(48:7)");
            Image.height({ "id": 50332233, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.width({ "id": 50332233, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.opacity(CommonConstants.TEXT_OPACITY[4]);
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/search/src/main/ets/view/SearchContent.ets(57:5)");
            Row.width(CommonConstants.FULL_PERCENT);
            Row.height({ "id": 50332228, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Row.margin({ top: { "id": 50332229, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
        }, Row);
        this.searchContent.bind(this)(parent ? parent : this);
        this.searchContent.bind(this)(parent ? parent : this);
        Row.pop();
    }
    searchContent(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/search/src/main/ets/view/SearchContent.ets(68:5)");
            Row.justifyContent(FlexAlign.Center);
            Row.width({ "id": 50332232, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Row.height({ "id": 50332230, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Row.borderRadius({ "id": 50332231, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Row.backgroundColor({ "id": 50332284, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Row.margin({ right: new BreakpointType({ "id": 50332209, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332208, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332207, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })
                    .getValue(this.currentBreakpoint) });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(SearchConstants.SEARCH_SUB_TITLES[1]);
            Text.debugLine("features/search/src/main/ets/view/SearchContent.ets(69:7)");
            Text.fontSize({ "id": 50332227, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
        }, Text);
        Text.pop();
        Row.pop();
    }
    searchDiscovery(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/search/src/main/ets/view/SearchContent.ets(85:5)");
            Row.height({ "id": 50332215, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Row.width(CommonConstants.FULL_PERCENT);
            Row.margin({ top: { "id": 50332210, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(SearchConstants.SEARCH_SUB_TITLES[2]);
            Text.debugLine("features/search/src/main/ets/view/SearchContent.ets(86:7)");
            Text.fontSize({ "id": 50332234, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("features/search/src/main/ets/view/SearchContent.ets(89:7)");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 50332167, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.debugLine("features/search/src/main/ets/view/SearchContent.ets(90:7)");
            Image.height({ "id": 50332211, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.width({ "id": 50332211, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.margin({ right: { "id": 50332210, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
            Image.fillColor({ "id": 50332286, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create();
            List.debugLine("features/search/src/main/ets/view/SearchContent.ets(100:5)");
            List.width(CommonConstants.FULL_PERCENT);
            List.lanes(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? SearchConstants.SEARCH_LIST_LANES[0] :
                SearchConstants.SEARCH_LIST_LANES[1]);
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
                        ListItem.debugLine("features/search/src/main/ets/view/SearchContent.ets(103:9)");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                            Column.debugLine("features/search/src/main/ets/view/SearchContent.ets(104:11)");
                            Column.padding({ right: this.getDividerPadding(this.currentBreakpoint, index) });
                            Column.height({ "id": 50332212, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Column.width(CommonConstants.FULL_PERCENT);
                            Column.margin({ top: { "id": 50332213, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                            Column.alignItems(HorizontalAlign.Start);
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item);
                            Text.debugLine("features/search/src/main/ets/view/SearchContent.ets(105:13)");
                            Text.fontSize({ "id": 50332214, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
                        }, Text);
                        Text.pop();
                        Column.pop();
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? SearchConstants.SEARCH_DISCOVERY_LARGE :
                SearchConstants.SEARCH_DISCOVERY_LARGE.slice(0, 6), forEachItemGenFunction, (item: string, index: number) => index + JSON.stringify(item), true, true);
        }, ForEach);
        ForEach.pop();
        List.pop();
    }
    searchHotTrending(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ space: new BreakpointType(SearchConstants.HOT_TRENDING_LIST_SPACES[0], SearchConstants.HOT_TRENDING_LIST_SPACES[1], SearchConstants.HOT_TRENDING_LIST_SPACES[2])
                    .getValue(this.currentBreakpoint) });
            List.debugLine("features/search/src/main/ets/view/SearchContent.ets(124:5)");
            List.margin({ top: { "id": 50332264, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
            List.listDirection(Axis.Horizontal);
            List.scrollBar(BarState.Off);
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
                        ListItem.onClick(() => {
                            this.currentIndex = index;
                        });
                        ListItem.debugLine("features/search/src/main/ets/view/SearchContent.ets(128:9)");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                            Column.debugLine("features/search/src/main/ets/view/SearchContent.ets(129:11)");
                            Column.height({ "id": 50332184, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Column.justifyContent(FlexAlign.Start);
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item);
                            Text.debugLine("features/search/src/main/ets/view/SearchContent.ets(130:13)");
                            Text.fontSize({ "id": 50332182, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Text.lineHeight({ "id": 50332183, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
                            Text.fontColor(index === this.currentIndex ? { "id": 50332286, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : Color.Black);
                            Text.opacity(index !== this.currentIndex ? CommonConstants.TEXT_OPACITY[2] : CommonConstants.TEXT_OPACITY[3]);
                            Text.margin({ top: { "id": 50332266, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                        }, Text);
                        Text.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Divider.create();
                            Divider.debugLine("features/search/src/main/ets/view/SearchContent.ets(138:13)");
                            Divider.strokeWidth(SearchConstants.TYPE_TABS_DIVIDER_STROKE_WIDTH);
                            Divider.width({ "id": 50332263, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Divider.color({ "id": 50332286, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Divider.visibility(index === this.currentIndex ? Visibility.Visible : Visibility.None);
                            Divider.margin({ top: { "id": 50332265, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                            Divider.lineCap(LineCapStyle.Round);
                        }, Divider);
                        Column.pop();
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, SearchConstants.SEARCH_TABS, forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        List.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create();
            List.debugLine("features/search/src/main/ets/view/SearchContent.ets(158:5)");
            List.width(CommonConstants.FULL_PERCENT);
            List.height(this.currentBreakpoint !== BreakpointConstants.BREAKPOINT_LG ? { "id": 50332191, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332190, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            List.lanes(new BreakpointType(SearchConstants.SEARCH_LIST_LANES[2], SearchConstants.SEARCH_LIST_LANES[1], SearchConstants.SEARCH_LIST_LANES[0]).getValue(this.currentBreakpoint), { "id": 50332192, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            List.padding({
                top: { "id": 50332193, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                bottom: { "id": 50332193, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
            List.scrollBar(BarState.Off);
            List.edgeEffect(EdgeEffect.None);
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
                        ListItem.height({ "id": 50332194, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                        ListItem.debugLine("features/search/src/main/ets/view/SearchContent.ets(160:9)");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Row.create();
                            Row.debugLine("features/search/src/main/ets/view/SearchContent.ets(161:11)");
                            Row.width(CommonConstants.FULL_PERCENT);
                            Row.height(CommonConstants.FULL_PERCENT);
                        }, Row);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Image.create(item.getImgSrc());
                            Image.debugLine("features/search/src/main/ets/view/SearchContent.ets(162:13)");
                            Image.height({ "id": 50332189, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Image.width({ "id": 50332189, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Image.margin({ right: { "id": 50332188, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                        }, Image);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                            Column.debugLine("features/search/src/main/ets/view/SearchContent.ets(167:13)");
                            Column.layoutWeight(1);
                            Column.alignItems(HorizontalAlign.Start);
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item.getTitle());
                            Text.debugLine("features/search/src/main/ets/view/SearchContent.ets(168:15)");
                            Text.fontSize({ "id": 50332195, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
                            Text.lineHeight({ "id": 50332196, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Text.maxLines(1);
                            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                            Text.margin({ top: { "id": 50332197, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                        }, Text);
                        Text.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item.getContent());
                            Text.debugLine("features/search/src/main/ets/view/SearchContent.ets(175:15)");
                            Text.fontSize({ "id": 50332185, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Text.fontWeight(FontWeight.Normal);
                            Text.lineHeight({ "id": 50332186, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Text.opacity(CommonConstants.TEXT_OPACITY[0]);
                            Text.maxLines(1);
                            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                            Text.margin({ top: { "id": 50332187, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                        }, Text);
                        Text.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Divider.create();
                            Divider.debugLine("features/search/src/main/ets/view/SearchContent.ets(183:15)");
                            Divider.strokeWidth(SearchConstants.DIVIDER_STROKE_WIDTH);
                            Divider.width(CommonConstants.FULL_PERCENT);
                            Divider.opacity(CommonConstants.DIVIDER_OPACITY);
                        }, Divider);
                        Column.pop();
                        Row.pop();
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.searchVideoList, forEachItemGenFunction, (item: SearchVideoImg, index: number) => index + JSON.stringify(item), true, true);
        }, ForEach);
        ForEach.pop();
        List.pop();
    }
    getDividerPadding(breakpoint: string, index: number): string {
        if (breakpoint === BreakpointConstants.BREAKPOINT_LG) {
            if (index % SearchConstants.SEARCH_LIST_LANES[0] !== 2) {
                return SearchConstants.SEARCH_RECOMMEND_DIVIDER_PADDING;
            }
        }
        else {
            if (index % SearchConstants.SEARCH_LIST_LANES[1] === 0) {
                return SearchConstants.SEARCH_RECOMMEND_DIVIDER_PADDING;
            }
        }
        return '0';
    }
    rerender() {
        this.updateDirtyElements();
    }
}
