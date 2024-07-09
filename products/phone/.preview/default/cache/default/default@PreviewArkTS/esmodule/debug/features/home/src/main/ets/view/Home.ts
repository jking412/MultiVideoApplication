if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Home_Params {
    currentBottomIndex?: number;
    isSearching?: boolean;
    scrollHeight?: number;
    currentTopIndex?: number;
    currentBreakpoint?: string;
    tabList?: FooterTab[];
    scroller?: Scroller;
    sideScroller?: Scroller;
}
import deviceInfo from "@ohos:deviceInfo";
import { SearchView } from "@bundle:com.huawei.videoapplication/phone@search/Index";
import { BreakpointConstants, CommonConstants } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { FooterTabViewModel } from "@bundle:com.huawei.videoapplication/phone@home/ets/viewmodel/FooterTabViewModel";
import type { FooterTab } from "@bundle:com.huawei.videoapplication/phone@home/ets/viewmodel/FooterTabViewModel";
import { HomeHeader } from "@bundle:com.huawei.videoapplication/phone@home/ets/view/HomeHeader";
import { HomeContent } from "@bundle:com.huawei.videoapplication/phone@home/ets/view/HomeContent";
export class Home extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBottomIndex = new ObservedPropertySimplePU(0, this, "currentBottomIndex");
        this.__isSearching = new ObservedPropertySimplePU(false, this, "isSearching");
        this.__scrollHeight = this.createStorageLink('scrollHeight', 0, "scrollHeight");
        this.__currentTopIndex = this.createStorageLink('currentTopIndex', 0, "currentTopIndex");
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.tabList = new FooterTabViewModel().getTabList();
        this.scroller = new Scroller();
        this.sideScroller = new Scroller();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Home_Params) {
        if (params.currentBottomIndex !== undefined) {
            this.currentBottomIndex = params.currentBottomIndex;
        }
        if (params.isSearching !== undefined) {
            this.isSearching = params.isSearching;
        }
        if (params.tabList !== undefined) {
            this.tabList = params.tabList;
        }
        if (params.scroller !== undefined) {
            this.scroller = params.scroller;
        }
        if (params.sideScroller !== undefined) {
            this.sideScroller = params.sideScroller;
        }
    }
    updateStateVars(params: Home_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBottomIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__isSearching.purgeDependencyOnElmtId(rmElmtId);
        this.__scrollHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__currentTopIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBottomIndex.aboutToBeDeleted();
        this.__isSearching.aboutToBeDeleted();
        this.__scrollHeight.aboutToBeDeleted();
        this.__currentTopIndex.aboutToBeDeleted();
        this.__currentBreakpoint.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentBottomIndex: ObservedPropertySimplePU<number>;
    get currentBottomIndex() {
        return this.__currentBottomIndex.get();
    }
    set currentBottomIndex(newValue: number) {
        this.__currentBottomIndex.set(newValue);
    }
    private __isSearching: ObservedPropertySimplePU<boolean>;
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
    private __currentTopIndex: ObservedPropertyAbstractPU<number>;
    get currentTopIndex() {
        return this.__currentTopIndex.get();
    }
    set currentTopIndex(newValue: number) {
        this.__currentTopIndex.set(newValue);
    }
    private __currentBreakpoint: ObservedPropertyAbstractPU<string>;
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue: string) {
        this.__currentBreakpoint.set(newValue);
    }
    private tabList: FooterTab[];
    private scroller: Scroller;
    private sideScroller: Scroller;
    BottomTabBuilder(item: FooterTab, index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/home/src/main/ets/view/Home.ets(36:5)");
            Column.padding({ bottom: this.currentBreakpoint !== BreakpointConstants.BREAKPOINT_LG && deviceInfo.deviceType !==
                    CommonConstants.DEVICE_TYPES[0] ? { "id": 50331891, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : 0 });
            Column.height(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332065, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } :
                CommonConstants.FULL_PERCENT);
            Column.width(CommonConstants.FULL_PERCENT);
            Column.justifyContent(FlexAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(index !== this.currentBottomIndex ? (this.currentTopIndex === 2 && this.currentBottomIndex === 0 &&
                !this.isSearching ? item.getIconWhite() : item.getIcon()) : item.getIconSelected());
            Image.debugLine("features/home/src/main/ets/view/Home.ets(37:7)");
            Image.width({ "id": 50331939, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.height({ "id": 50331938, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(item.getName());
            Text.debugLine("features/home/src/main/ets/view/Home.ets(41:7)");
            Text.fontSize({ "id": 50332064, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
            Text.fontColor(index === this.currentBottomIndex ? { "id": 50331814, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : (this.currentTopIndex === 2 &&
                this.currentBottomIndex === 0 && !this.isSearching ? Color.White : Color.Black));
            Text.margin({ top: { "id": 50332068, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
            Text.opacity(index === this.currentBottomIndex ? CommonConstants.TEXT_OPACITY[3] : CommonConstants.TEXT_OPACITY[0]);
        }, Text);
        Text.pop();
        Column.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create({
                barPosition: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? BarPosition.Start : BarPosition.End
            });
            Tabs.debugLine("features/home/src/main/ets/view/Home.ets(58:5)");
            Tabs.barWidth(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50331892, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } :
                CommonConstants.FULL_PERCENT);
            Tabs.barHeight(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? CommonConstants.FULL_PERCENT :
                (deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? { "id": 50332067, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332066, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }));
            Tabs.barMode(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? BarMode.Scrollable : BarMode.Fixed, { nonScrollableLayoutStyle: LayoutStyle.ALWAYS_CENTER });
            Tabs.vertical(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG);
            Tabs.barBackgroundColor(this.currentTopIndex === 2 && this.currentBottomIndex === 0 ?
                (this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50331811, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50331804, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }) : { "id": 50331813, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Tabs.barOverlap(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG && this.currentTopIndex === 2 ? true :
                false);
            Tabs.onChange((index: number) => {
                this.currentBottomIndex = index;
            });
            Tabs.scrollable(false);
            Tabs.expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM]);
            Tabs.height(CommonConstants.FULL_PERCENT);
            Tabs.width(CommonConstants.FULL_PERCENT);
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (this.currentTopIndex === 2) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                // The immersive design of the home page is displayed when the top tab is switched to 2.
                                Stack.create();
                                Stack.debugLine("features/home/src/main/ets/view/Home.ets(64:11)");
                                // The immersive design of the home page is displayed when the top tab is switched to 2.
                                Stack.height(CommonConstants.FULL_PERCENT);
                                // The immersive design of the home page is displayed when the top tab is switched to 2.
                                Stack.width(CommonConstants.FULL_PERCENT);
                                // The immersive design of the home page is displayed when the top tab is switched to 2.
                                Stack.alignContent(Alignment.Top);
                            }, Stack);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Scroll.create(this.sideScroller);
                                Scroll.debugLine("features/home/src/main/ets/view/Home.ets(65:13)");
                                Scroll.scrollBar(BarState.Off);
                                Scroll.height(CommonConstants.FULL_PERCENT);
                                Scroll.onScroll(() => {
                                    this.scrollHeight = this.sideScroller.currentOffset().yOffset;
                                });
                            }, Scroll);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Column.create();
                                Column.debugLine("features/home/src/main/ets/view/Home.ets(66:15)");
                                Column.width(CommonConstants.FULL_PERCENT);
                            }, Column);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                __Common__.create();
                                __Common__.visibility(!this.isSearching ? Visibility.Visible : Visibility.None);
                            }, __Common__);
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new HomeContent(this, {}, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/Home.ets", line: 67 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {};
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                    }
                                }, { name: "HomeContent" });
                            }
                            __Common__.pop();
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                __Common__.create();
                                __Common__.visibility(!this.isSearching ? Visibility.None : Visibility.Visible);
                            }, __Common__);
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new SearchView(this, { isSearching: this.__isSearching }, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/Home.ets", line: 70 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {
                                                isSearching: this.isSearching
                                            };
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                    }
                                }, { name: "SearchView" });
                            }
                            __Common__.pop();
                            Column.pop();
                            Scroll.pop();
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                __Common__.create();
                                __Common__.visibility(!this.isSearching ? Visibility.Visible : Visibility.None);
                                __Common__.padding({ left: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332047, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : 0 });
                            }, __Common__);
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new HomeHeader(this, { isSearching: this.__isSearching }, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/Home.ets", line: 82 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {
                                                isSearching: this.isSearching
                                            };
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                    }
                                }, { name: "HomeHeader" });
                            }
                            __Common__.pop();
                            // The immersive design of the home page is displayed when the top tab is switched to 2.
                            Stack.pop();
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                // Non-immersive design for the home page.
                                Column.create();
                                Column.debugLine("features/home/src/main/ets/view/Home.ets(92:11)");
                                // Non-immersive design for the home page.
                                Column.height(CommonConstants.FULL_PERCENT);
                                // Non-immersive design for the home page.
                                Column.width(CommonConstants.FULL_PERCENT);
                            }, Column);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                __Common__.create();
                                __Common__.visibility(!this.isSearching ? Visibility.Visible : Visibility.None);
                            }, __Common__);
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new HomeHeader(this, { isSearching: this.__isSearching }, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/Home.ets", line: 93 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {
                                                isSearching: this.isSearching
                                            };
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                    }
                                }, { name: "HomeHeader" });
                            }
                            __Common__.pop();
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Scroll.create(this.scroller);
                                Scroll.debugLine("features/home/src/main/ets/view/Home.ets(96:13)");
                                Scroll.layoutWeight(1);
                                Scroll.scrollBar(BarState.Off);
                            }, Scroll);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Column.create();
                                Column.debugLine("features/home/src/main/ets/view/Home.ets(97:15)");
                                Column.width(CommonConstants.FULL_PERCENT);
                            }, Column);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                __Common__.create();
                                __Common__.visibility(!this.isSearching ? Visibility.Visible : Visibility.None);
                            }, __Common__);
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new HomeContent(this, {}, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/Home.ets", line: 98 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {};
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                    }
                                }, { name: "HomeContent" });
                            }
                            __Common__.pop();
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                __Common__.create();
                                __Common__.visibility(!this.isSearching ? Visibility.None : Visibility.Visible);
                            }, __Common__);
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new SearchView(this, { isSearching: this.__isSearching }, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/Home.ets", line: 101 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {
                                                isSearching: this.isSearching
                                            };
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {});
                                    }
                                }, { name: "SearchView" });
                            }
                            __Common__.pop();
                            Column.pop();
                            Scroll.pop();
                            // Non-immersive design for the home page.
                            Column.pop();
                        });
                    }
                }, If);
                If.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.BottomTabBuilder.call(this, this.tabList[0], 0);
                } });
            TabContent.debugLine("features/home/src/main/ets/view/Home.ets(61:7)");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create();
            TabContent.tabBar({ builder: () => {
                    this.BottomTabBuilder.call(this, this.tabList[1], 1);
                } });
            TabContent.debugLine("features/home/src/main/ets/view/Home.ets(115:7)");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create();
            TabContent.tabBar({ builder: () => {
                    this.BottomTabBuilder.call(this, this.tabList[2], 2);
                } });
            TabContent.debugLine("features/home/src/main/ets/view/Home.ets(119:7)");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create();
            TabContent.tabBar({ builder: () => {
                    this.BottomTabBuilder.call(this, this.tabList[3], 3);
                } });
            TabContent.debugLine("features/home/src/main/ets/view/Home.ets(123:7)");
        }, TabContent);
        TabContent.pop();
        Tabs.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
