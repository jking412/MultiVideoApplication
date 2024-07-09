if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SearchResult_Params {
    currentBreakpoint?: string;
    resultTabIndex?: number;
    pageInfo?: NavPathStack;
}
import { BreakpointConstants, CommonConstants } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { BreakpointType } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { SearchConstants } from "@bundle:com.huawei.videoapplication/phone@search/ets/constants/SearchConstants";
import { SearchVideoImgModel } from "@bundle:com.huawei.videoapplication/phone@search/ets/viewmodel/SearchVideoImgViewModel";
import type { SearchVideoImg } from "@bundle:com.huawei.videoapplication/phone@search/ets/viewmodel/SearchVideoImgViewModel";
export class SearchResult extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__resultTabIndex = new ObservedPropertySimplePU(0, this, "resultTabIndex");
        this.__pageInfo = this.initializeConsume('pageInfo', "pageInfo");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SearchResult_Params) {
        if (params.resultTabIndex !== undefined) {
            this.resultTabIndex = params.resultTabIndex;
        }
    }
    updateStateVars(params: SearchResult_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__resultTabIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__pageInfo.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__resultTabIndex.aboutToBeDeleted();
        this.__pageInfo.aboutToBeDeleted();
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
    private __resultTabIndex: ObservedPropertySimplePU<number>;
    get resultTabIndex() {
        return this.__resultTabIndex.get();
    }
    set resultTabIndex(newValue: number) {
        this.__resultTabIndex.set(newValue);
    }
    private __pageInfo: ObservedPropertyAbstractPU<NavPathStack>;
    get pageInfo() {
        return this.__pageInfo.get();
    }
    set pageInfo(newValue: NavPathStack) {
        this.__pageInfo.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.debugLine("features/search/src/main/ets/view/SearchResult.ets(28:5)");
            Scroll.scrollBar(BarState.Off);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/search/src/main/ets/view/SearchResult.ets(29:7)");
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.typeTabs.bind(this)(this);
        this.resultVideos.bind(this)(this);
        Column.pop();
        Scroll.pop();
    }
    typeTabs(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/search/src/main/ets/view/SearchResult.ets(40:5)");
            Row.alignItems(VerticalAlign.Center);
            Row.width(CommonConstants.FULL_PERCENT);
            Row.height({ "id": 50332273, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Row.margin({ top: { "id": 50332274, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create();
            List.debugLine("features/search/src/main/ets/view/SearchResult.ets(41:7)");
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
                        ListItem.debugLine("features/search/src/main/ets/view/SearchResult.ets(43:11)");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                            Column.debugLine("features/search/src/main/ets/view/SearchResult.ets(44:13)");
                            Column.width({ "id": 50332268, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Column.height(CommonConstants.FULL_PERCENT);
                            Column.margin({ right: index !== SearchConstants.SEARCH_RESULT_TAB_LIST.length - 1 ? { "id": 50332267, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : 0 });
                            Column.onClick(() => {
                                this.resultTabIndex = index;
                            });
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item);
                            Text.debugLine("features/search/src/main/ets/view/SearchResult.ets(45:15)");
                            Text.fontSize({ "id": 50332272, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Text.fontWeight(index === this.resultTabIndex ? CommonConstants.FONT_WEIGHT_500 : FontWeight.Normal);
                            Text.fontColor(index === this.resultTabIndex ? { "id": 50332286, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332285, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Text.lineHeight({ "id": 50332275, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Text.margin({ top: { "id": 50332276, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                        }, Text);
                        Text.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Divider.create();
                            Divider.debugLine("features/search/src/main/ets/view/SearchResult.ets(53:15)");
                            Divider.strokeWidth(SearchConstants.TYPE_TABS_DIVIDER_STROKE_WIDTH);
                            Divider.width(item.length === SearchConstants.SEARCH_INDEX[0] ? { "id": 50332271, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332270, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Divider.color({ "id": 50332286, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Divider.margin({ top: { "id": 50332269, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                            Divider.lineCap(LineCapStyle.Round);
                            Divider.visibility(index === this.resultTabIndex ? Visibility.Visible : Visibility.None);
                        }, Divider);
                        Column.pop();
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, SearchConstants.SEARCH_RESULT_TAB_LIST, forEachItemGenFunction, (item: string, index: number) => index + JSON.stringify(item), true, true);
        }, ForEach);
        ForEach.pop();
        List.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("features/search/src/main/ets/view/SearchResult.ets(75:7)");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 50332180, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.debugLine("features/search/src/main/ets/view/SearchResult.ets(77:7)");
            Image.height({ "id": 50332262, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.width({ "id": 50332262, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.opacity(CommonConstants.TEXT_OPACITY[4]);
        }, Image);
        Row.pop();
    }
    resultVideos(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/search/src/main/ets/view/SearchResult.ets(90:5)");
            Row.height({ "id": 50332256, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Row.margin({
                top: { "id": 50332257, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                bottom: { "id": 50332257, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(SearchConstants.SEARCH_RESULT_TITLE);
            Text.debugLine("features/search/src/main/ets/view/SearchResult.ets(91:7)");
            Text.fontSize({ "id": 50332254, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridRow.create({
                columns: {
                    sm: BreakpointConstants.GRID_ROW_COLUMNS[2],
                    md: BreakpointConstants.GRID_ROW_COLUMNS[0],
                    lg: BreakpointConstants.GRID_ROW_COLUMNS[1]
                },
                gutter: { "id": 50331918, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
            GridRow.debugLine("features/search/src/main/ets/view/SearchResult.ets(101:5)");
            GridRow.margin({ bottom: { "id": 50332200, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
        }, GridRow);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    GridCol.create({
                        span: {
                            sm: BreakpointConstants.GRID_COLUMN_SPANS[5],
                            md: BreakpointConstants.GRID_COLUMN_SPANS[1],
                            lg: BreakpointConstants.GRID_COLUMN_SPANS[3]
                        }
                    });
                    GridCol.debugLine("features/search/src/main/ets/view/SearchResult.ets(110:9)");
                }, GridCol);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("features/search/src/main/ets/view/SearchResult.ets(117:11)");
                    Row.aspectRatio(CommonConstants.PREVIOUS_ONE_ROW_RATIO);
                    Row.height(new BreakpointType({ "id": 50332203, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332202, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332201, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })
                        .getValue(this.currentBreakpoint));
                    Row.width(CommonConstants.FULL_PERCENT);
                    Row.padding({
                        top: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 50332205, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332204, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                        bottom: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 50332205, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332204, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                        left: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 50332205, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332204, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                        right: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 50332205, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332204, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                    });
                    Row.backgroundColor({ "id": 50332284, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Row.borderRadius({ "id": 50332206, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(item.getImgSrc());
                    Image.debugLine("features/search/src/main/ets/view/SearchResult.ets(118:13)");
                    Image.objectFit(ImageFit.Fill);
                    Image.margin({ right: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 50332010, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332009, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                    Image.layoutWeight(CommonConstants.THREE);
                    Image.height(CommonConstants.FULL_PERCENT);
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("features/search/src/main/ets/view/SearchResult.ets(125:13)");
                    Column.alignItems(HorizontalAlign.Start);
                    Column.justifyContent(FlexAlign.Start);
                    Column.layoutWeight(3);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.getTitle());
                    Text.debugLine("features/search/src/main/ets/view/SearchResult.ets(126:15)");
                    Text.fontSize(new BreakpointType({ "id": 50332260, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332259, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332258, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })
                        .getValue(this.currentBreakpoint));
                    Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
                    Text.maxLines(2);
                    Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.getContent());
                    Text.debugLine("features/search/src/main/ets/view/SearchResult.ets(133:15)");
                    Text.fontSize(new BreakpointType({ "id": 50332252, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332251, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332250, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })
                        .getValue(this.currentBreakpoint));
                    Text.lineHeight(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332199, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332198, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Text.opacity(CommonConstants.TEXT_OPACITY[1]);
                    Text.fontWeight(FontWeight.Normal);
                    Text.margin({ top: { "id": 50332253, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                    Text.maxLines(1);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.getOtherInfo());
                    Text.debugLine("features/search/src/main/ets/view/SearchResult.ets(143:15)");
                    Text.fontSize(new BreakpointType({ "id": 50332252, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332251, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332250, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })
                        .getValue(this.currentBreakpoint));
                    Text.lineHeight(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332199, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332198, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Text.opacity(CommonConstants.TEXT_OPACITY[1]);
                    Text.fontWeight(FontWeight.Normal);
                    Text.margin({ top: { "id": 50332255, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                    Text.maxLines(1);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("features/search/src/main/ets/view/SearchResult.ets(154:15)");
                    Row.width(CommonConstants.FULL_PERCENT);
                    Row.alignItems(VerticalAlign.Bottom);
                    Row.layoutWeight(1);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Button.createWithLabel(SearchConstants.SEARCH_RESULT_BUTTON_TEXTS[0]);
                    Button.debugLine("features/search/src/main/ets/view/SearchResult.ets(155:17)");
                    Button.backgroundColor({ "id": 50332282, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Button.fontWeight(CommonConstants.FONT_WEIGHT_500);
                    Button.borderRadius({ "id": 50332249, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Button.fontSize(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332246, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332245, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Button.height(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332248, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332247, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Button.fontColor(Color.White);
                    Button.layoutWeight(1);
                    Button.onClick(() => {
                        this.pageInfo.pushPath({ name: 'VideoDetail' });
                    });
                }, Button);
                Button.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Blank.create();
                    Blank.debugLine("features/search/src/main/ets/view/SearchResult.ets(169:17)");
                    Blank.width(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD ? { "id": 50332244, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332243, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                }, Blank);
                Blank.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Button.createWithLabel(SearchConstants.SEARCH_RESULT_BUTTON_TEXTS[1]);
                    Button.debugLine("features/search/src/main/ets/view/SearchResult.ets(173:17)");
                    Button.backgroundColor({ "id": 50332283, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Button.fontWeight(CommonConstants.FONT_WEIGHT_500);
                    Button.borderRadius({ "id": 50332249, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Button.fontSize(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332246, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332245, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Button.height(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332248, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332247, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Button.fontColor({ "id": 50332282, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Button.layoutWeight(1);
                }, Button);
                Button.pop();
                Row.pop();
                Column.pop();
                Row.pop();
                GridCol.pop();
            };
            this.forEachUpdateFunction(elmtId, new SearchVideoImgModel().getSearchResultImgList(), forEachItemGenFunction, (item: SearchVideoImg, index: number) => index + JSON.stringify(item), true, true);
        }, ForEach);
        ForEach.pop();
        GridRow.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
