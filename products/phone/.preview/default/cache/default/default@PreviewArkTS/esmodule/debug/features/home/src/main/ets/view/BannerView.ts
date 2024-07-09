if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface BannerText_Params {
    banner?: Banner;
    currentBreakpoint?: string;
    index?: number;
}
interface BannerView_Params {
    currentBreakpoint?: string;
    windowWidth?: number;
    currentTopIndex?: number;
    bannerImgList?: Banner[];
    bannerDataSource?: BannerDataSource;
}
import { BreakpointConstants, CommonConstants } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { BreakpointType } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { HomeConstants } from "@bundle:com.huawei.videoapplication/phone@home/ets/constants/HomeConstants";
import { BannerViewModel } from "@bundle:com.huawei.videoapplication/phone@home/ets/viewmodel/BannerViewModel";
import type { Banner } from "@bundle:com.huawei.videoapplication/phone@home/ets/viewmodel/BannerViewModel";
import { getTabIndex } from "@bundle:com.huawei.videoapplication/phone@home/ets/view/CommonView";
class BannerDataSource implements IDataSource {
    private bannerImgList: Banner[] = [];
    constructor(bannerImgList: Banner[]) {
        this.bannerImgList = bannerImgList;
    }
    totalCount(): number {
        return this.bannerImgList.length;
    }
    getData(index: number): Banner {
        return this.bannerImgList[index];
    }
    registerDataChangeListener(listener: DataChangeListener): void {
    }
    unregisterDataChangeListener() {
    }
}
export class BannerView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__windowWidth = this.createStorageLink('windowWidth', 0, "windowWidth");
        this.__currentTopIndex = this.createStorageLink('currentTopIndex', 0, "currentTopIndex");
        this.bannerImgList = new BannerViewModel().getBannerList();
        this.bannerDataSource = new BannerDataSource([]);
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: BannerView_Params) {
        if (params.bannerImgList !== undefined) {
            this.bannerImgList = params.bannerImgList;
        }
        if (params.bannerDataSource !== undefined) {
            this.bannerDataSource = params.bannerDataSource;
        }
    }
    updateStateVars(params: BannerView_Params) {
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
    private bannerImgList: Banner[];
    private bannerDataSource: BannerDataSource;
    aboutToAppear(): void {
        this.bannerDataSource = new BannerDataSource(this.bannerImgList);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/home/src/main/ets/view/BannerView.ets(72:5)");
            Column.width(CommonConstants.FULL_PERCENT);
            Column.padding({ left: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG && this.currentTopIndex === 2 ? { "id": 50332047, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : 0 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Banner layout.
            Row.create();
            Row.debugLine("features/home/src/main/ets/view/BannerView.ets(74:7)");
            // Banner layout.
            Row.width(CommonConstants.FULL_PERCENT);
            // Banner layout.
            Row.margin({
                top: { "id": 50331877, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                bottom: { "id": 50331877, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
            // Banner layout.
            Row.padding({
                left: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 50331878, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : '0',
                right: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 50331878, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : '0'
            });
            // Banner layout.
            Row.visibility(this.currentTopIndex === 2 ? Visibility.None : Visibility.Visible);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Swiper.create();
            Swiper.debugLine("features/home/src/main/ets/view/BannerView.ets(75:9)");
            Swiper.tabIndex(getTabIndex(HomeConstants.DIRECTION_LIST[2]));
            Swiper.index(2);
            Swiper.displayCount(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? 1 : HomeConstants.TWO);
            Swiper.itemSpace(HomeConstants.SWIPER_ITEM_SPACE);
            Swiper.indicator(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? Indicator.dot()
                .itemWidth({ "id": 50332059, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })
                .itemHeight({ "id": 50332059, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })
                .selectedItemWidth({ "id": 50332063, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })
                .selectedItemHeight({ "id": 50332059, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })
                .color({ "id": 50331812, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })
                .selectedColor(Color.White) : false);
            Swiper.loop(true);
            Swiper.width(CommonConstants.FULL_PERCENT);
            Swiper.visibility((this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG) && (this.currentTopIndex === 1) ?
                Visibility.None : Visibility.Visible);
            Swiper.effectMode(EdgeEffect.None);
            Swiper.prevMargin(new BreakpointType({ "id": 50332062, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332061, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332060, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })
                .getValue(this.currentBreakpoint));
            Swiper.nextMargin(new BreakpointType({ "id": 50332062, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332061, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332060, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })
                .getValue(this.currentBreakpoint));
        }, Swiper);
        {
            const __lazyForEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Stack.create();
                    Stack.debugLine("features/home/src/main/ets/view/BannerView.ets(77:13)");
                    Stack.height(item.getBannerImg().getHeight().getValue(this.currentBreakpoint));
                    Stack.width(CommonConstants.FULL_PERCENT);
                    Stack.aspectRatio(new BreakpointType(HomeConstants.BANNER_RATIOS[0], HomeConstants.BANNER_RATIOS[1], HomeConstants.BANNER_RATIOS[2]).getValue(this.currentBreakpoint));
                }, Stack);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? item.getBannerImg().getImgSrcSm() :
                        item.getBannerImg().getImgSrc());
                    Image.debugLine("features/home/src/main/ets/view/BannerView.ets(78:15)");
                    Image.objectFit(ImageFit.Fill);
                    Image.borderRadius({ "id": 50331876, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Image.height(CommonConstants.FULL_PERCENT);
                    Image.width(CommonConstants.FULL_PERCENT);
                    Image.focusable(true);
                    Image.groupDefaultFocus(index === 0 ? true : false);
                    ViewStackProcessor.visualState("normal");
                    Image.border({
                        width: 0,
                        radius: { "id": 50331872, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                    });
                    ViewStackProcessor.visualState("focused");
                    Image.border({
                        width: { "id": 50331917, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                        color: { "id": 50331802, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                        radius: { "id": 50331872, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                    });
                    ViewStackProcessor.visualState();
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("features/home/src/main/ets/view/BannerView.ets(91:15)");
                    Column.padding({
                        left: !item.getDescription().getIsLeftCenter().getValue(this.currentBreakpoint) ?
                            item.getDescription().getLeftPosition().getValue(this.currentBreakpoint)[0] : '0',
                        top: !item.getDescription().getIsTopCenter().getValue(this.currentBreakpoint) ?
                            item.getDescription().getTopPosition().getValue(this.currentBreakpoint)[0] : '0'
                    });
                    Column.alignItems(item.getDescription().getIsLeftCenter().getValue(this.currentBreakpoint) ?
                        HorizontalAlign.Center : HorizontalAlign.Start);
                    Column.justifyContent(!item.getDescription().getIsTopCenter().getValue(this.currentBreakpoint) ?
                        FlexAlign.Start : FlexAlign.Center);
                    Column.height(CommonConstants.FULL_PERCENT);
                    Column.width(CommonConstants.FULL_PERCENT);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.getDescription().getIsLeftCenter().getValue(this.currentBreakpoint) ?
                        item.getDescription().getDescription()[0] + item.getDescription().getDescription()[1] :
                        item.getDescription().getDescription()[0]);
                    Text.debugLine("features/home/src/main/ets/view/BannerView.ets(92:17)");
                    Text.fontSize(item.getDescription().getFontSize().getValue(this.currentBreakpoint)[0]);
                    Text.fontWeight(item.getDescription().getFontWeight()[0]);
                    Text.lineHeight(item.getDescription().getLineHeight().getValue(this.currentBreakpoint)[0]);
                    Text.fontColor(Color.White);
                    Text.letterSpacing(HomeConstants.BANNER_TEXT_LETTER_SPACES[2]);
                    Text.maxLines(1);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.getDescription().getDescription()[1]);
                    Text.debugLine("features/home/src/main/ets/view/BannerView.ets(102:17)");
                    Text.fontSize(item.getDescription().getFontSize().getValue(this.currentBreakpoint)[0]);
                    Text.fontWeight(item.getDescription().getFontWeight()[0]);
                    Text.lineHeight(item.getDescription().getLineHeight().getValue(this.currentBreakpoint)[0]);
                    Text.fontColor(Color.White);
                    Text.letterSpacing(HomeConstants.BANNER_TEXT_LETTER_SPACES[2]);
                    Text.maxLines(1);
                    Text.visibility(item.getDescription().getIsLeftCenter().getValue(this.currentBreakpoint) ?
                        Visibility.None : Visibility.Visible);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.getDescription().getDescription()[2]);
                    Text.debugLine("features/home/src/main/ets/view/BannerView.ets(112:17)");
                    Text.fontSize(item.getDescription().getFontSize().getValue(this.currentBreakpoint)[1]);
                    Text.fontWeight(item.getDescription().getFontWeight()[1]);
                    Text.lineHeight(item.getDescription().getLineHeight().getValue(this.currentBreakpoint)[1]);
                    Text.fontColor(Color.White);
                    Text.margin({
                        top: item.getDescription().getTopPosition().getValue(this.currentBreakpoint)[1]
                    });
                    Text.letterSpacing(HomeConstants.BANNER_TEXT_LETTER_SPACES[1]);
                    Text.maxLines(1);
                }, Text);
                Text.pop();
                Column.pop();
                Stack.pop();
            };
            const __lazyForEachItemIdFunc = (item: Banner, index: number) => index + JSON.stringify(item);
            LazyForEach.create("1", this, this.bannerDataSource, __lazyForEachItemGenFunction, __lazyForEachItemIdFunc);
            LazyForEach.pop();
        }
        Swiper.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Switch the tab to switch the banner display effect.
            Row.create({ space: HomeConstants.BANNER_ROW_SPACE });
            Row.debugLine("features/home/src/main/ets/view/BannerView.ets(171:9)");
            // Switch the tab to switch the banner display effect.
            Row.height(this.getBannerNewHeight(this.windowWidth));
            // Switch the tab to switch the banner display effect.
            Row.width(CommonConstants.FULL_PERCENT);
            // Switch the tab to switch the banner display effect.
            Row.visibility((this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG) && (this.currentTopIndex === 1) ?
                Visibility.Visible : Visibility.None);
            // Switch the tab to switch the banner display effect.
            Row.padding({
                left: { "id": 50331878, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                right: { "id": 50331878, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.layoutWeight(CommonConstants.FOUR);
            __Common__.height(CommonConstants.FULL_PERCENT);
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new BannerText(this, {
                        banner: this.bannerImgList[2],
                        index: 0
                    }, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/BannerView.ets", line: 172 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            banner: this.bannerImgList[2],
                            index: 0
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "BannerText" });
        }
        __Common__.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.layoutWeight(CommonConstants.FOUR);
            __Common__.height(CommonConstants.FULL_PERCENT);
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new BannerText(this, {
                        banner: this.bannerImgList[1],
                        index: 1
                    }, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/BannerView.ets", line: 179 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            banner: this.bannerImgList[1],
                            index: 1
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "BannerText" });
        }
        __Common__.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/home/src/main/ets/view/BannerView.ets(186:11)");
            Column.layoutWeight(CommonConstants.THREE);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.margin({ bottom: { "id": 50331993, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
            __Common__.layoutWeight(1);
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new BannerText(this, {
                        banner: this.bannerImgList[0],
                        index: 2
                    }, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/BannerView.ets", line: 187 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            banner: this.bannerImgList[0],
                            index: 2
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "BannerText" });
        }
        __Common__.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.margin({ top: { "id": 50331993, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
            __Common__.layoutWeight(1);
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new BannerText(this, {
                        banner: this.bannerImgList[4],
                        index: 3
                    }, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/BannerView.ets", line: 194 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            banner: this.bannerImgList[4],
                            index: 3
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "BannerText" });
        }
        __Common__.pop();
        Column.pop();
        // Switch the tab to switch the banner display effect.
        Row.pop();
        // Banner layout.
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/home/src/main/ets/view/BannerView.ets(223:7)");
            Row.margin({
                top: { "id": 50331946, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
            Row.padding({
                left: { "id": 50331921, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                right: { "id": 50331921, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
            Row.height(new BreakpointType({ "id": 50331945, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331944, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331943, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint));
            Row.width(CommonConstants.FULL_PERCENT);
            Row.visibility(this.currentTopIndex === 2 ? Visibility.Visible : Visibility.None);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Immersive layout.
            Column.create();
            Column.debugLine("features/home/src/main/ets/view/BannerView.ets(225:9)");
            // Immersive layout.
            Column.padding({
                left: new BreakpointType({ "id": 50331949, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331948, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331947, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })
                    .getValue(this.currentBreakpoint),
                top: new BreakpointType({ "id": 50331952, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331951, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331950, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })
                    .getValue(this.currentBreakpoint)
            });
            // Immersive layout.
            Column.height(CommonConstants.FULL_PERCENT);
            // Immersive layout.
            Column.width(CommonConstants.FULL_PERCENT);
            // Immersive layout.
            Column.alignItems(new BreakpointType(true, false, false).getValue(this.currentBreakpoint) ?
                HorizontalAlign.Center : HorizontalAlign.Start);
            // Immersive layout.
            Column.justifyContent(!this.bannerImgList[2].getDescription().getIsTopCenter().getValue(this.currentBreakpoint) ?
                FlexAlign.Start : FlexAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.bannerImgList[2].getDescription().getIsLeftCenter().getValue(this.currentBreakpoint) ?
                this.bannerImgList[2].getDescription().getDescription()[0] +
                    this.bannerImgList[2].getDescription().getDescription()[1] :
                this.bannerImgList[2].getDescription().getDescription()[0]);
            Text.debugLine("features/home/src/main/ets/view/BannerView.ets(226:11)");
            Text.fontSize(new BreakpointType({ "id": 50331955, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331954, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331953, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })
                .getValue(this.currentBreakpoint));
            Text.fontWeight(this.bannerImgList[2].getDescription().getFontWeight()[0]);
            Text.lineHeight(new BreakpointType({ "id": 50331958, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331957, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331956, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })
                .getValue(this.currentBreakpoint));
            Text.fontColor(Color.White);
            Text.letterSpacing(HomeConstants.BANNER_TEXT_LETTER_SPACES[2]);
            Text.maxLines(1);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.bannerImgList[2].getDescription().getDescription()[1]);
            Text.debugLine("features/home/src/main/ets/view/BannerView.ets(241:11)");
            Text.fontSize(new BreakpointType({ "id": 50331955, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331954, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331953, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })
                .getValue(this.currentBreakpoint));
            Text.fontWeight(this.bannerImgList[2].getDescription().getFontWeight()[0]);
            Text.lineHeight(new BreakpointType({ "id": 50331958, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331957, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331956, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })
                .getValue(this.currentBreakpoint));
            Text.fontColor(Color.White);
            Text.letterSpacing(HomeConstants.BANNER_TEXT_LETTER_SPACES[2]);
            Text.maxLines(1);
            Text.visibility(this.bannerImgList[2].getDescription().getIsLeftCenter().getValue(this.currentBreakpoint) ?
                Visibility.None : Visibility.Visible);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.bannerImgList[2].getDescription().getDescription()[2]);
            Text.debugLine("features/home/src/main/ets/view/BannerView.ets(255:11)");
            Text.fontSize(new BreakpointType({ "id": 50331961, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331960, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331959, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })
                .getValue(this.currentBreakpoint));
            Text.fontWeight(this.bannerImgList[2].getDescription().getFontWeight()[1]);
            Text.lineHeight(new BreakpointType({ "id": 50331964, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331963, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331962, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })
                .getValue(this.currentBreakpoint));
            Text.fontColor(Color.White);
            Text.margin({
                top: this.bannerImgList[2].getDescription().getTopPosition().getValue(this.currentBreakpoint)[1]
            });
            Text.letterSpacing(HomeConstants.BANNER_TEXT_LETTER_SPACES[1]);
            Text.maxLines(1);
        }, Text);
        Text.pop();
        // Immersive layout.
        Column.pop();
        Row.pop();
        Column.pop();
    }
    getBannerNewHeight(windowWidth: number): string {
        // Obtain the window width and subtract the blank parts on both sides.
        let result: number = px2vp(windowWidth) - new BreakpointType(HomeConstants.VIDEO_GRID_MARGIN[0], HomeConstants.VIDEO_GRID_MARGIN[1], HomeConstants.VIDEO_GRID_MARGIN[2]).getValue(this.currentBreakpoint) -
            HomeConstants.LG_SIDEBAR_WIDTH;
        // Calculate the width of a single image based on the percent.
        result = (result - HomeConstants.VIDEO_GRID_ITEM_SPACE * HomeConstants.TWO) * CommonConstants.FOUR /
            HomeConstants.ELEVEN;
        // Calculate the total height of the grid layout.
        return result / HomeConstants.NEW_BANNER_ASPECT_RATIO + HomeConstants.HEIGHT_UNIT;
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class BannerText extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.banner = new BannerViewModel().getBannerList()[0];
        this.currentBreakpoint = BreakpointConstants.BREAKPOINT_LG;
        this.index = 0;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: BannerText_Params) {
        if (params.banner !== undefined) {
            this.banner = params.banner;
        }
        if (params.currentBreakpoint !== undefined) {
            this.currentBreakpoint = params.currentBreakpoint;
        }
        if (params.index !== undefined) {
            this.index = params.index;
        }
    }
    updateStateVars(params: BannerText_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private banner: Banner;
    private currentBreakpoint: string;
    private index: number;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.debugLine("features/home/src/main/ets/view/BannerView.ets(322:5)");
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(((this.index === 0) || (this.index === 1)) ? this.banner.getBannerImg().getImgSrcSm() :
                this.banner.getBannerImg().getImgSrc());
            Image.debugLine("features/home/src/main/ets/view/BannerView.ets(323:7)");
            Image.width(CommonConstants.FULL_PERCENT);
            Image.height(CommonConstants.FULL_PERCENT);
            Image.objectFit(ImageFit.Fill);
            Image.borderRadius({ "id": 50331876, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/home/src/main/ets/view/BannerView.ets(330:7)");
            Column.padding({
                left: !this.banner.getDescription().getIsLeftCenter().getValue(this.currentBreakpoint) ?
                    this.banner.getDescription().getLeftPosition().getValue(this.currentBreakpoint)[0] : '0',
                top: !this.banner.getDescription().getIsTopCenter().getValue(this.currentBreakpoint) ?
                    this.banner.getDescription().getTopPosition().getValue(this.currentBreakpoint)[0] : '0'
            });
            Column.alignItems(this.banner.getDescription().getIsLeftCenter().getValue(this.currentBreakpoint) ?
                HorizontalAlign.Center : HorizontalAlign.Start);
            Column.justifyContent(!this.banner.getDescription().getIsTopCenter().getValue(this.currentBreakpoint) ?
                FlexAlign.Start : FlexAlign.Center);
            Column.width(CommonConstants.FULL_PERCENT);
            Column.height(CommonConstants.FULL_PERCENT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.banner.getDescription().getIsLeftCenter().getValue(this.currentBreakpoint) ?
                this.banner.getDescription().getDescription()[0] + this.banner.getDescription().getDescription()[1] :
                this.banner.getDescription().getDescription()[0]);
            Text.debugLine("features/home/src/main/ets/view/BannerView.ets(331:9)");
            Text.fontSize(this.banner.getDescription().getFontSize().getValue(this.currentBreakpoint)[0]);
            Text.fontWeight(this.banner.getDescription().getFontWeight()[0]);
            Text.lineHeight(this.banner.getDescription().getLineHeight().getValue(this.currentBreakpoint)[0]);
            Text.fontColor(Color.White);
            Text.letterSpacing(HomeConstants.BANNER_TEXT_LETTER_SPACES[2]);
            Text.maxLines(1);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.banner.getDescription().getDescription()[1]);
            Text.debugLine("features/home/src/main/ets/view/BannerView.ets(341:9)");
            Text.fontSize(this.banner.getDescription().getFontSize().getValue(this.currentBreakpoint)[0]);
            Text.fontWeight(this.banner.getDescription().getFontWeight()[0]);
            Text.lineHeight(this.banner.getDescription().getLineHeight().getValue(this.currentBreakpoint)[0]);
            Text.fontColor(Color.White);
            Text.letterSpacing(HomeConstants.BANNER_TEXT_LETTER_SPACES[2]);
            Text.maxLines(1);
            Text.visibility(this.banner.getDescription().getIsLeftCenter().getValue(this.currentBreakpoint) ?
                Visibility.None : Visibility.Visible);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.banner.getDescription().getDescription()[2]);
            Text.debugLine("features/home/src/main/ets/view/BannerView.ets(351:9)");
            Text.fontSize(this.banner.getDescription().getFontSize().getValue(this.currentBreakpoint)[1]);
            Text.fontWeight(this.banner.getDescription().getFontWeight()[1]);
            Text.lineHeight(this.banner.getDescription().getLineHeight().getValue(this.currentBreakpoint)[1]);
            Text.fontColor(Color.White);
            Text.margin({
                top: this.banner.getDescription().getTopPosition().getValue(this.currentBreakpoint)[1]
            });
            Text.letterSpacing(HomeConstants.BANNER_TEXT_LETTER_SPACES[1]);
            Text.maxLines(1);
        }, Text);
        Text.pop();
        Column.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
