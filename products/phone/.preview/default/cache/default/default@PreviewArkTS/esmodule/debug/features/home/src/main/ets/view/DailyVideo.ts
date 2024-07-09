if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface DailyVideo_Params {
    currentBreakpoint?: string;
    windowWidth?: number;
    currentTopIndex?: number;
    isShowingMainBorder?: boolean;
    dailyVideoImgList?: VideoImage[];
    mainDailyVideoImg?: VideoImage;
}
import { BreakpointConstants, CommonConstants } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { BreakpointType } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { HomeConstants } from "@bundle:com.huawei.videoapplication/phone@home/ets/constants/HomeConstants";
import { VideoImgViewModel } from "@bundle:com.huawei.videoapplication/phone@home/ets/viewmodel/VideoImgViewModel";
import type { VideoImage } from "@bundle:com.huawei.videoapplication/phone@home/ets/viewmodel/VideoImgViewModel";
import { getTabIndex, SubtitleComponent, VideoImgComponent, VideoImgPlay, VideoImgRating } from "@bundle:com.huawei.videoapplication/phone@home/ets/view/CommonView";
export class DailyVideo extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__windowWidth = this.createStorageLink('windowWidth', 0, "windowWidth");
        this.__currentTopIndex = this.createStorageLink('currentTopIndex', 0, "currentTopIndex");
        this.__isShowingMainBorder = new ObservedPropertySimplePU(false, this, "isShowingMainBorder");
        this.dailyVideoImgList = new VideoImgViewModel().getDailyVideoImgList();
        this.mainDailyVideoImg = new VideoImgViewModel().getMainDailyVideoImg();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: DailyVideo_Params) {
        if (params.isShowingMainBorder !== undefined) {
            this.isShowingMainBorder = params.isShowingMainBorder;
        }
        if (params.dailyVideoImgList !== undefined) {
            this.dailyVideoImgList = params.dailyVideoImgList;
        }
        if (params.mainDailyVideoImg !== undefined) {
            this.mainDailyVideoImg = params.mainDailyVideoImg;
        }
    }
    updateStateVars(params: DailyVideo_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__windowWidth.purgeDependencyOnElmtId(rmElmtId);
        this.__currentTopIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowingMainBorder.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__windowWidth.aboutToBeDeleted();
        this.__currentTopIndex.aboutToBeDeleted();
        this.__isShowingMainBorder.aboutToBeDeleted();
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
    private __isShowingMainBorder: ObservedPropertySimplePU<boolean>;
    get isShowingMainBorder() {
        return this.__isShowingMainBorder.get();
    }
    set isShowingMainBorder(newValue: boolean) {
        this.__isShowingMainBorder.set(newValue);
    }
    private dailyVideoImgList: VideoImage[];
    private mainDailyVideoImg: VideoImage;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/home/src/main/ets/view/DailyVideo.ets(53:5)");
            Column.padding({ left: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG && this.currentTopIndex === 2 ? { "id": 50332047, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : 0 });
            Column.margin({ top: { "id": 50331973, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SubtitleComponent(this, { title: HomeConstants.HOME_SUB_TITLES[1] }, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/DailyVideo.ets", line: 54 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: HomeConstants.HOME_SUB_TITLES[1]
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SubtitleComponent" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridRow.create({
                columns: {
                    sm: BreakpointConstants.GRID_ROW_COLUMNS[2],
                    md: BreakpointConstants.GRID_ROW_COLUMNS[0],
                    lg: BreakpointConstants.GRID_ROW_COLUMNS[0]
                },
                gutter: { "id": 50331918, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
            GridRow.debugLine("features/home/src/main/ets/view/DailyVideo.ets(56:7)");
        }, GridRow);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Main video section.
            GridCol.create({
                span: {
                    sm: BreakpointConstants.GRID_COLUMN_SPANS[5],
                    md: BreakpointConstants.GRID_COLUMN_SPANS[1],
                    lg: BreakpointConstants.GRID_COLUMN_SPANS[1]
                }
            });
            GridCol.debugLine("features/home/src/main/ets/view/DailyVideo.ets(65:9)");
        }, GridCol);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/home/src/main/ets/view/DailyVideo.ets(72:11)");
            Column.tabIndex(getTabIndex(HomeConstants.DIRECTION_LIST[6]));
            Column.width(CommonConstants.FULL_PERCENT);
            Column.height(this.getDailyVideoHeight(this.currentBreakpoint, this.windowWidth, true));
            Column.borderRadius({ "id": 50331893, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Column.backgroundColor({ "id": 50331803, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.Bottom });
            Stack.debugLine("features/home/src/main/ets/view/DailyVideo.ets(73:13)");
            Stack.width(CommonConstants.FULL_PERCENT);
            Stack.layoutWeight(5);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.mainDailyVideoImg.getImgSrc() !== undefined ? this.mainDailyVideoImg.getImgSrc() : '');
            Image.debugLine("features/home/src/main/ets/view/DailyVideo.ets(74:15)");
            Image.focusable(true);
            Image.objectFit(ImageFit.Fill);
            Image.width(CommonConstants.FULL_PERCENT);
            Image.height(CommonConstants.FULL_PERCENT);
            Image.draggable(false);
            ViewStackProcessor.visualState("normal");
            Image.border({
                width: 0,
                radius: {
                    topLeft: { "id": 50331897, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                    topRight: { "id": 50331897, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                }
            });
            ViewStackProcessor.visualState("focused");
            Image.border({
                width: { "id": 50331917, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                color: { "id": 50331802, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                radius: {
                    topLeft: { "id": 50331897, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                    topRight: { "id": 50331897, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                }
            });
            ViewStackProcessor.visualState();
        }, Image);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new VideoImgPlay(this, {}, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/DailyVideo.ets", line: 84 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "VideoImgPlay" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/home/src/main/ets/view/DailyVideo.ets(86:15)");
            Row.alignItems(VerticalAlign.Top);
            Row.justifyContent(FlexAlign.Start);
            Row.width(CommonConstants.FULL_PERCENT);
            Row.height(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50331990, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50331989, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.mainDailyVideoImg.getTitle());
            Text.debugLine("features/home/src/main/ets/view/DailyVideo.ets(87:17)");
            Text.fontSize(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50331992, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50331991, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.fontColor(Color.White);
            Text.fontWeight(CommonConstants.FONT_WEIGHT_700);
            Text.margin({ left: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50331974, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50331973, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
            Text.layoutWeight(1);
            Text.maxLines(1);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.mainDailyVideoImg.getRating());
            Text.debugLine("features/home/src/main/ets/view/DailyVideo.ets(97:17)");
            Text.fontSize(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50331978, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50331977, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Normal);
            Text.fontColor(Color.White);
            Text.height(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50331980, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50331979, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.width(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50331988, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50331987, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.margin({
                right: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50331984, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50331983, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                top: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50331986, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50331985, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
            Text.backgroundColor({ "id": 50331806, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.borderRadius(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50331982, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50331981, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.textAlign(TextAlign.Center);
        }, Text);
        Text.pop();
        Row.pop();
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/home/src/main/ets/view/DailyVideo.ets(126:13)");
            Row.alignItems(VerticalAlign.Center);
            Row.padding({
                left: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332057, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332056, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                right: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332057, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332056, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
            Row.layoutWeight(2);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 50331843, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.debugLine("features/home/src/main/ets/view/DailyVideo.ets(127:15)");
            Image.height(new BreakpointType({ "id": 50332052, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332051, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332050, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })
                .getValue(this.currentBreakpoint));
            Image.width(new BreakpointType({ "id": 50332055, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332054, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332053, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })
                .getValue(this.currentBreakpoint));
            Image.borderRadius({ "id": 50331898, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/home/src/main/ets/view/DailyVideo.ets(136:15)");
            Column.margin({
                left: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332049, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332048, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                right: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332049, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332048, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
            Column.alignItems(HorizontalAlign.Start);
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.mainDailyVideoImg.getOtherInfo());
            Text.debugLine("features/home/src/main/ets/view/DailyVideo.ets(137:17)");
            Text.fontSize(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50331976, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50331975, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Normal);
            Text.maxLines(1);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.mainDailyVideoImg.getContent());
            Text.debugLine("features/home/src/main/ets/view/DailyVideo.ets(142:17)");
            Text.opacity(CommonConstants.TEXT_OPACITY[0]);
            Text.fontSize(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50331972, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50331971, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.fontWeight(FontWeight.Normal);
            Text.maxLines(1);
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(HomeConstants.HOME_BUTTON_TEXT[0]);
            Button.debugLine("features/home/src/main/ets/view/DailyVideo.ets(158:15)");
            Button.fontSize(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50331967, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50331966, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Button.fontColor({ "id": 50331814, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Button.fontWeight(CommonConstants.FONT_WEIGHT_500);
            Button.height(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50331968, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50331968, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Button.width(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50331970, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50331970, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Button.borderRadius({ "id": 50331969, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Button.backgroundColor({ "id": 50331801, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
        }, Button);
        Button.pop();
        Row.pop();
        Column.pop();
        // Main video section.
        GridCol.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Sub video section.
            GridCol.create({
                span: {
                    sm: BreakpointConstants.GRID_COLUMN_SPANS[5],
                    md: BreakpointConstants.GRID_COLUMN_SPANS[1],
                    lg: BreakpointConstants.GRID_COLUMN_SPANS[1]
                }
            });
            GridCol.debugLine("features/home/src/main/ets/view/DailyVideo.ets(188:9)");
        }, GridCol);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Grid.create();
            Grid.debugLine("features/home/src/main/ets/view/DailyVideo.ets(195:11)");
            Grid.tabIndex(getTabIndex(HomeConstants.DIRECTION_LIST[7]));
            Grid.height(this.getDailyVideoHeight(this.currentBreakpoint, this.windowWidth, false));
            Grid.width(CommonConstants.FULL_PERCENT);
            Grid.columnsTemplate(CommonConstants.VIDEO_GRID_COLUMNS[0]);
            Grid.rowsTemplate(CommonConstants.VIDEO_GRID_COLUMNS[0]);
            Grid.rowsGap({ "id": 50331896, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Grid.columnsGap({ "id": 50331896, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
        }, Grid);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        GridItem.create(() => { }, false);
                        GridItem.debugLine("features/home/src/main/ets/view/DailyVideo.ets(197:15)");
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation2(itemCreation2, GridItem);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                            Column.debugLine("features/home/src/main/ets/view/DailyVideo.ets(198:17)");
                            Column.alignItems(HorizontalAlign.Start);
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Stack.create({ alignContent: Alignment.Bottom });
                            Stack.debugLine("features/home/src/main/ets/view/DailyVideo.ets(199:19)");
                            Stack.width(CommonConstants.FULL_PERCENT);
                            Stack.aspectRatio(HomeConstants.VIDEO_DIALOG_ASPECT_RATIO);
                        }, Stack);
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new VideoImgComponent(this, { imgSrc: item.getImgSrc() }, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/DailyVideo.ets", line: 200 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            imgSrc: item.getImgSrc()
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                            }, { name: "VideoImgComponent" });
                        }
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new VideoImgPlay(this, {}, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/DailyVideo.ets", line: 201 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {};
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                            }, { name: "VideoImgPlay" });
                        }
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new VideoImgRating(this, { rating: item.getRating() }, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/DailyVideo.ets", line: 202 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            rating: item.getRating()
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                            }, { name: "VideoImgRating" });
                        }
                        Stack.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item.getTitle());
                            Text.debugLine("features/home/src/main/ets/view/DailyVideo.ets(208:19)");
                            Text.fontSize(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50331900, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50331899, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Text.fontWeight(FontWeight.Normal);
                            Text.lineHeight(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332095, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332094, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Text.margin({ top: { "id": 50331901, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                            Text.fontColor(this.currentTopIndex === 2 ? Color.White : { "id": 50331807, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                        }, Text);
                        Text.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item.getContent());
                            Text.debugLine("features/home/src/main/ets/view/DailyVideo.ets(217:19)");
                            Text.fontSize({ "id": 50331894, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Text.fontWeight(FontWeight.Normal);
                            Text.lineHeight({ "id": 50332083, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Text.margin({ top: { "id": 50331895, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                            Text.opacity(CommonConstants.TEXT_OPACITY[0]);
                            Text.fontColor(this.currentTopIndex === 2 ? Color.White : { "id": 50331807, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                            Text.visibility(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? Visibility.Visible :
                                Visibility.None);
                        }, Text);
                        Text.pop();
                        Column.pop();
                        GridItem.pop();
                    };
                    observedDeepRender();
                }
            };
            this.forEachUpdateFunction(elmtId, this.dailyVideoImgList, forEachItemGenFunction, (item: VideoImage, index: number) => index + JSON.stringify(item), false, true);
        }, ForEach);
        ForEach.pop();
        Grid.pop();
        // Sub video section.
        GridCol.pop();
        GridRow.pop();
        Column.pop();
    }
    getDailyVideoHeight(currentBreakpoint: string, windowWidth: number, isMain: boolean): string {
        // Obtain the window width and subtract the blank parts on both sides.
        let result: number = px2vp(windowWidth) - new BreakpointType(HomeConstants.VIDEO_GRID_MARGIN[0], HomeConstants.VIDEO_GRID_MARGIN[1], HomeConstants.VIDEO_GRID_MARGIN[2]).getValue(this.currentBreakpoint) -
            HomeConstants.VIDEO_GRID_ITEM_SPACE;
        // Calculate the width of a single image based on the number of grid columns.
        if (currentBreakpoint === BreakpointConstants.BREAKPOINT_LG) {
            result = (result - HomeConstants.LG_SIDEBAR_WIDTH) / HomeConstants.TWO;
        }
        else if (currentBreakpoint === BreakpointConstants.BREAKPOINT_MD) {
            result /= HomeConstants.TWO;
        }
        else {
            result /= 1;
        }
        // Calculate the height of a single image and title, and calculate the total height of the grid layout.
        result = (result - HomeConstants.VIDEO_GRID_ITEM_SPACE) / HomeConstants.VIDEO_DIALOG_ASPECT_RATIO;
        if (currentBreakpoint === BreakpointConstants.BREAKPOINT_SM && !isMain) {
            return (result + HomeConstants.DAILY_VIDEO_DESCRIPTION_HEIGHT[0] + HomeConstants.HEIGHT_UNIT);
        }
        else {
            return (result + HomeConstants.DAILY_VIDEO_DESCRIPTION_HEIGHT[1] + HomeConstants.HEIGHT_UNIT);
        }
    }
    rerender() {
        this.updateDirtyElements();
    }
}
