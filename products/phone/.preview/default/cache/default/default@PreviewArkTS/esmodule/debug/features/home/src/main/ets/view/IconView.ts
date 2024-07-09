if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface IconView_Params {
    currentBreakpoint?: string;
    windowWidth?: number;
    currentTopIndex?: number;
    iconList?: VideoIcon[];
}
import { BreakpointConstants, CommonConstants } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { BreakpointType } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { HomeConstants } from "@bundle:com.huawei.videoapplication/phone@home/ets/constants/HomeConstants";
import { IconViewModel } from "@bundle:com.huawei.videoapplication/phone@home/ets/viewmodel/IconViewModel";
import type { VideoIcon } from "@bundle:com.huawei.videoapplication/phone@home/ets/viewmodel/IconViewModel";
import { getTabIndex } from "@bundle:com.huawei.videoapplication/phone@home/ets/view/CommonView";
export class IconView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__windowWidth = this.createStorageLink('windowWidth', 0, "windowWidth");
        this.__currentTopIndex = this.createStorageLink('currentTopIndex', 0, "currentTopIndex");
        this.iconList = new IconViewModel().getIconList();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: IconView_Params) {
        if (params.iconList !== undefined) {
            this.iconList = params.iconList;
        }
    }
    updateStateVars(params: IconView_Params) {
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
    private iconList: VideoIcon[];
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Icon swiper.
            Column.create();
            Column.debugLine("features/home/src/main/ets/view/IconView.ets(46:5)");
            // Icon swiper.
            Column.padding({
                left: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50331934, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50331933, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
            // Icon swiper.
            Column.margin({ top: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50331932, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50331931, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
            // Icon swiper.
            Column.visibility(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG && this.currentTopIndex === 2 ?
                Visibility.None : Visibility.Visible);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Swiper.create();
            Swiper.debugLine("features/home/src/main/ets/view/IconView.ets(47:7)");
            Swiper.tabIndex(getTabIndex(HomeConstants.DIRECTION_LIST[3]));
            Swiper.displayCount(new BreakpointType(CommonConstants.FOUR, HomeConstants.SIX, HomeConstants.EIGHT)
                .getValue(this.currentBreakpoint));
            Swiper.nextMargin(this.getNextMargin(this.windowWidth, this.currentBreakpoint));
            Swiper.indicator(false);
            Swiper.width(CommonConstants.FULL_PERCENT);
            Swiper.loop(false);
            Swiper.effectMode(EdgeEffect.None);
            Swiper.displayMode(SwiperDisplayMode.AUTO_LINEAR);
        }, Swiper);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("features/home/src/main/ets/view/IconView.ets(49:11)");
                    Column.alignItems(HorizontalAlign.Center);
                    Column.height({ "id": 50331937, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(item.getImage());
                    Image.debugLine("features/home/src/main/ets/view/IconView.ets(50:13)");
                    Image.width({ "id": 50331930, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Image.height({ "id": 50331930, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Image.margin({ bottom: { "id": 50331929, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                    Image.focusable(true);
                    Image.groupDefaultFocus(index === 0 ? true : false);
                    ViewStackProcessor.visualState("normal");
                    Image.border({
                        width: 0,
                        radius: { "id": 50331928, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                    });
                    ViewStackProcessor.visualState("focused");
                    Image.border({
                        width: { "id": 50331917, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                        color: { "id": 50331802, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                        radius: { "id": 50331928, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                    });
                    ViewStackProcessor.visualState();
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.getName());
                    Text.debugLine("features/home/src/main/ets/view/IconView.ets(61:13)");
                    Text.fontSize({ "id": 50331936, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Text.fontWeight(FontWeight.Normal);
                    Text.lineHeight({ "id": 50331935, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Text.fontColor(this.currentTopIndex === 2 ? Color.White : Color.Black);
                }, Text);
                Text.pop();
                Column.pop();
            };
            this.forEachUpdateFunction(elmtId, this.iconList, forEachItemGenFunction, (item: VideoIcon) => JSON.stringify(item), true, false);
        }, ForEach);
        ForEach.pop();
        Swiper.pop();
        // Icon swiper.
        Column.pop();
    }
    getNextMargin(windowWidth: number, currentBreakpoint: string): string {
        // Obtain the window width and subtract the blank parts on both sides.
        let result: number = px2vp(windowWidth) - new BreakpointType(HomeConstants.VIDEO_GRID_MARGIN[0], HomeConstants.VIDEO_GRID_MARGIN[1], HomeConstants.VIDEO_GRID_MARGIN[2]).getValue(this.currentBreakpoint) /
            HomeConstants.TWO;
        if (currentBreakpoint === BreakpointConstants.BREAKPOINT_SM) {
            result = result / HomeConstants.DISPLAYED_ICON_NUMBER[0];
        }
        else if (currentBreakpoint === BreakpointConstants.BREAKPOINT_MD) {
            result = result / HomeConstants.DISPLAYED_ICON_NUMBER[1];
        }
        else {
            result = (result - HomeConstants.LG_SIDEBAR_WIDTH) / HomeConstants.DISPLAYED_ICON_NUMBER[2];
        }
        return result + HomeConstants.HEIGHT_UNIT;
    }
    rerender() {
        this.updateDirtyElements();
    }
}
