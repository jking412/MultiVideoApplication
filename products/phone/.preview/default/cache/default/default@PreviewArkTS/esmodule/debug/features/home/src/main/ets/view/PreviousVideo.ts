if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface PreviousVideo_Params {
    currentBreakpoint?: string;
    currentTopIndex?: number;
    previousVideoImgListTwo?: VideoImage[];
    pageInfo?: NavPathStack;
    previousVideoImgListOne?: VideoImage[];
}
import { BreakpointConstants, CommonConstants } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { BreakpointType } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { HomeConstants } from "@bundle:com.huawei.videoapplication/phone@home/ets/constants/HomeConstants";
import { VideoImgViewModel } from "@bundle:com.huawei.videoapplication/phone@home/ets/viewmodel/VideoImgViewModel";
import type { VideoImage } from "@bundle:com.huawei.videoapplication/phone@home/ets/viewmodel/VideoImgViewModel";
import { PreviousVideoUtil } from "@bundle:com.huawei.videoapplication/phone@home/ets/utils/PreviousVideoUtil";
import { getTabIndex, SubtitleComponent } from "@bundle:com.huawei.videoapplication/phone@home/ets/view/CommonView";
export class PreviousVideo extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__currentTopIndex = this.createStorageLink('currentTopIndex', 0, "currentTopIndex");
        this.__previousVideoImgListTwo = new ObservedPropertyObjectPU(new VideoImgViewModel().getPreviousVideoTwo(this.currentBreakpoint), this, "previousVideoImgListTwo");
        this.__pageInfo = this.initializeConsume('pageInfo', "pageInfo");
        this.previousVideoImgListOne = new VideoImgViewModel().getPreviousVideoOne();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: PreviousVideo_Params) {
        if (params.previousVideoImgListTwo !== undefined) {
            this.previousVideoImgListTwo = params.previousVideoImgListTwo;
        }
        if (params.previousVideoImgListOne !== undefined) {
            this.previousVideoImgListOne = params.previousVideoImgListOne;
        }
    }
    updateStateVars(params: PreviousVideo_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__currentTopIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__previousVideoImgListTwo.purgeDependencyOnElmtId(rmElmtId);
        this.__pageInfo.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__currentTopIndex.aboutToBeDeleted();
        this.__previousVideoImgListTwo.aboutToBeDeleted();
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
    private __currentTopIndex: ObservedPropertyAbstractPU<number>;
    get currentTopIndex() {
        return this.__currentTopIndex.get();
    }
    set currentTopIndex(newValue: number) {
        this.__currentTopIndex.set(newValue);
    }
    private __previousVideoImgListTwo: ObservedPropertyObjectPU<VideoImage[]>;
    get previousVideoImgListTwo() {
        return this.__previousVideoImgListTwo.get();
    }
    set previousVideoImgListTwo(newValue: VideoImage[]) {
        this.__previousVideoImgListTwo.set(newValue);
    }
    private __pageInfo: ObservedPropertyAbstractPU<NavPathStack>;
    get pageInfo() {
        return this.__pageInfo.get();
    }
    set pageInfo(newValue: NavPathStack) {
        this.__pageInfo.set(newValue);
    }
    private previousVideoImgListOne: VideoImage[];
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/home/src/main/ets/view/PreviousVideo.ets(53:5)");
            Column.tabIndex(getTabIndex(HomeConstants.DIRECTION_LIST[8]));
            Column.padding({ left: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG && this.currentTopIndex === 2 ? { "id": 50332047, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : 0 });
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SubtitleComponent(this, { title: HomeConstants.HOME_SUB_TITLES[2] }, undefined, elmtId, () => { }, { page: "features/home/src/main/ets/view/PreviousVideo.ets", line: 54 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: HomeConstants.HOME_SUB_TITLES[2]
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
                    lg: BreakpointConstants.GRID_ROW_COLUMNS[1]
                },
                gutter: { "id": 50331918, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
            GridRow.debugLine("features/home/src/main/ets/view/PreviousVideo.ets(56:7)");
            GridRow.onBreakpointChange((breakPoints) => {
                this.previousVideoImgListTwo = new VideoImgViewModel().getPreviousVideoTwo(breakPoints);
            });
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
                    GridCol.debugLine("features/home/src/main/ets/view/PreviousVideo.ets(65:11)");
                }, GridCol);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("features/home/src/main/ets/view/PreviousVideo.ets(72:13)");
                    Row.aspectRatio(CommonConstants.PREVIOUS_ONE_ROW_RATIO);
                    Row.width(CommonConstants.FULL_PERCENT);
                    Row.padding({
                        top: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 50332012, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332011, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                        bottom: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 50332012, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332011, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                        left: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 50332012, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332011, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                        right: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 50332012, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332011, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                    });
                    Row.backgroundColor({ "id": 50331803, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Row.borderRadius({ "id": 50331893, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(item.getImgSrc());
                    Image.debugLine("features/home/src/main/ets/view/PreviousVideo.ets(73:15)");
                    Image.objectFit(ImageFit.Fill);
                    Image.margin({ right: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_SM ? { "id": 50332010, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332009, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                    Image.layoutWeight(CommonConstants.THREE);
                    Image.height(CommonConstants.FULL_PERCENT);
                    Image.borderRadius({ "id": 50331876, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("features/home/src/main/ets/view/PreviousVideo.ets(81:15)");
                    Column.alignItems(HorizontalAlign.Start);
                    Column.justifyContent(FlexAlign.Start);
                    Column.layoutWeight(CommonConstants.FOUR);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.getTitle());
                    Text.debugLine("features/home/src/main/ets/view/PreviousVideo.ets(82:17)");
                    Text.fontSize(new BreakpointType({ "id": 50332015, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332014, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332013, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })
                        .getValue(this.currentBreakpoint));
                    Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
                    Text.maxLines(2);
                    Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.getContent());
                    Text.debugLine("features/home/src/main/ets/view/PreviousVideo.ets(89:17)");
                    Text.fontSize(new BreakpointType({ "id": 50332007, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332006, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332005, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })
                        .getValue(this.currentBreakpoint));
                    Text.opacity(CommonConstants.TEXT_OPACITY[1]);
                    Text.fontWeight(FontWeight.Normal);
                    Text.margin({ top: { "id": 50332008, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                    Text.maxLines(1);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.getOtherInfo());
                    Text.debugLine("features/home/src/main/ets/view/PreviousVideo.ets(97:17)");
                    Text.fontSize(new BreakpointType({ "id": 50332007, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332006, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332005, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" })
                        .getValue(this.currentBreakpoint));
                    Text.opacity(CommonConstants.TEXT_OPACITY[1]);
                    Text.fontWeight(FontWeight.Normal);
                    Text.margin({ top: { "id": 50332008, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                    Text.maxLines(1);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("features/home/src/main/ets/view/PreviousVideo.ets(106:17)");
                    Row.width(CommonConstants.FULL_PERCENT);
                    Row.alignItems(VerticalAlign.Bottom);
                    Row.layoutWeight(1);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Button.createWithLabel(index === 0 ? HomeConstants.HOME_BUTTON_TEXT[1] : HomeConstants.HOME_BUTTON_TEXT[2]);
                    Button.debugLine("features/home/src/main/ets/view/PreviousVideo.ets(107:19)");
                    Button.borderRadius({ "id": 50332004, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Button.backgroundColor({ "id": 50331808, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Button.fontWeight(CommonConstants.FONT_WEIGHT_500);
                    Button.fontSize(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332001, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332000, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Button.fontColor(Color.White);
                    Button.height(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332003, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332002, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Button.layoutWeight(1);
                    Button.groupDefaultFocus(index === 0 ? true : false);
                    Button.onClick(() => {
                        this.pageInfo.pushPath({ name: 'VideoDetail' });
                    });
                }, Button);
                Button.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Blank.create();
                    Blank.debugLine("features/home/src/main/ets/view/PreviousVideo.ets(122:19)");
                    Blank.width(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_MD ? { "id": 50331999, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50331998, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                }, Blank);
                Blank.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Button.createWithLabel(HomeConstants.HOME_BUTTON_TEXT[3]);
                    Button.debugLine("features/home/src/main/ets/view/PreviousVideo.ets(126:19)");
                    Button.borderRadius({ "id": 50332004, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Button.backgroundColor({ "id": 50331801, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Button.fontWeight(CommonConstants.FONT_WEIGHT_500);
                    Button.fontSize(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332001, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332000, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Button.fontColor({ "id": 50331808, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Button.height(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332003, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332002, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Button.layoutWeight(1);
                }, Button);
                Button.pop();
                Row.pop();
                Column.pop();
                Row.pop();
                GridCol.pop();
            };
            this.forEachUpdateFunction(elmtId, this.previousVideoImgListOne, forEachItemGenFunction, (item: VideoImage, index: number) => index + JSON.stringify(item), true, true);
        }, ForEach);
        ForEach.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    GridCol.create({
                        span: {
                            sm: BreakpointConstants.GRID_COLUMN_SPANS[6],
                            md: BreakpointConstants.GRID_COLUMN_SPANS[4],
                            lg: BreakpointConstants.GRID_COLUMN_SPANS[4]
                        }
                    });
                    GridCol.debugLine("features/home/src/main/ets/view/PreviousVideo.ets(163:11)");
                }, GridCol);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("features/home/src/main/ets/view/PreviousVideo.ets(170:13)");
                    Column.translate({ y: (((index === 2) || (index === 3)) && (this.currentBreakpoint ===
                            BreakpointConstants.BREAKPOINT_MD)) ? HomeConstants.PREVIOUS_TWO_TRANSLATE_MD : '0' });
                    Column.backgroundColor({ "id": 50331803, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Column.borderRadius({ "id": 50332028, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(item.getImgSrc());
                    Image.debugLine("features/home/src/main/ets/view/PreviousVideo.ets(171:15)");
                    Image.width(CommonConstants.FULL_PERCENT);
                    Image.aspectRatio(PreviousVideoUtil.getImgAspectRatio(this.currentBreakpoint, index));
                    Image.objectFit(ImageFit.Fill);
                    Image.focusable(true);
                    ViewStackProcessor.visualState("normal");
                    Image.border({
                        width: 0,
                        radius: {
                            topLeft: { "id": 50332028, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                            topRight: { "id": 50332028, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                        }
                    });
                    ViewStackProcessor.visualState("focused");
                    Image.border({
                        width: { "id": 50331917, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                        color: { "id": 50331802, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                        radius: {
                            topLeft: { "id": 50332028, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                            topRight: { "id": 50332028, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                        }
                    });
                    ViewStackProcessor.visualState();
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("features/home/src/main/ets/view/PreviousVideo.ets(181:15)");
                    Column.alignItems(HorizontalAlign.Start);
                    Column.height(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332019, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332018, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Column.width(CommonConstants.FULL_PERCENT);
                    Column.padding({
                        top: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332021, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332020, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                        bottom: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332017, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332016, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                        left: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332021, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332020, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                        right: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332021, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332020, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                    });
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.getTitle());
                    Text.debugLine("features/home/src/main/ets/view/PreviousVideo.ets(182:17)");
                    Text.fontWeight(FontWeight.Normal);
                    Text.fontSize(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332030, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332029, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Text.maxLines(1);
                    Text.lineHeight(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332032, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332031, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.getContent());
                    Text.debugLine("features/home/src/main/ets/view/PreviousVideo.ets(189:17)");
                    Text.fontWeight(FontWeight.Normal);
                    Text.fontSize(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332023, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332022, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Text.margin({ top: this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332027, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332026, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                    Text.opacity(CommonConstants.TEXT_OPACITY[0]);
                    Text.maxLines(1);
                    Text.lineHeight(this.currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50332025, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332024, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                }, Text);
                Text.pop();
                Column.pop();
                Column.pop();
                GridCol.pop();
            };
            this.forEachUpdateFunction(elmtId, this.previousVideoImgListTwo, forEachItemGenFunction, (item: VideoImage, index: number) => index + JSON.stringify(item), true, true);
        }, ForEach);
        ForEach.pop();
        GridRow.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
