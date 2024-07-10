if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface IconImage_Params {
    image?: Resource | null;
    change?: Resource | null;
    icon?: Resource | null;
}
interface AllComments_Params {
    currentBreakpoint?: string;
    commentImgHeight?: string;
    commentImgWidth?: string;
    commentsList?: UserInfo[];
}
import { BreakpointConstants, CommonConstants } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { BreakpointType } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { DetailConstants } from "@bundle:com.huawei.videoapplication/phone@videoDetail/ets/constants/DetailConstants";
import type { UserInfo } from '../viewmodel/UserViewModel';
export class AllComments extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.__commentImgHeight = new SynchedPropertySimpleTwoWayPU(params.commentImgHeight, this, "commentImgHeight");
        this.__commentImgWidth = new SynchedPropertySimpleTwoWayPU(params.commentImgWidth, this, "commentImgWidth");
        this.__commentsList = this.initializeConsume("commentsList", "commentsList");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: AllComments_Params) {
    }
    updateStateVars(params: AllComments_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__commentImgHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__commentImgWidth.purgeDependencyOnElmtId(rmElmtId);
        this.__commentsList.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__commentImgHeight.aboutToBeDeleted();
        this.__commentImgWidth.aboutToBeDeleted();
        this.__commentsList.aboutToBeDeleted();
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
    private __commentImgHeight: SynchedPropertySimpleTwoWayPU<string>;
    get commentImgHeight() {
        return this.__commentImgHeight.get();
    }
    set commentImgHeight(newValue: string) {
        this.__commentImgHeight.set(newValue);
    }
    private __commentImgWidth: SynchedPropertySimpleTwoWayPU<string>;
    get commentImgWidth() {
        return this.__commentImgWidth.get();
    }
    set commentImgWidth(newValue: string) {
        this.__commentImgWidth.set(newValue);
    }
    private __commentsList: ObservedPropertyAbstractPU<UserInfo[]>;
    get commentsList() {
        return this.__commentsList.get();
    }
    set commentsList(newValue: UserInfo[]) {
        this.__commentsList.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/videoDetail/src/main/ets/view/AllComments.ets(30:5)");
            Column.width(CommonConstants.FULL_PERCENT);
            Column.backgroundColor(Color.White);
            Column.justifyContent(FlexAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/videoDetail/src/main/ets/view/AllComments.ets(31:7)");
            Row.padding({
                left: { "id": 50331696, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                right: { "id": 50331696, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
            Row.height({ "id": 50331695, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Row.width(CommonConstants.FULL_PERCENT);
        }, Row);
        this.TitleText.bind(this)(DetailConstants.SUB_TITLES[0], this);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/videoDetail/src/main/ets/view/AllComments.ets(41:7)");
            Column.alignItems(HorizontalAlign.Start);
            Column.padding({
                left: { "id": 50331676, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                right: { "id": 50331676, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
            Column.width(CommonConstants.FULL_PERCENT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("features/videoDetail/src/main/ets/view/AllComments.ets(43:11)");
                    Row.height({ "id": 50331695, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Row.width(CommonConstants.FULL_PERCENT);
                    Row.margin({ top: { "id": 50331694, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                    Row.alignItems(VerticalAlign.Center);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(item.getImageSrc());
                    Image.debugLine("features/videoDetail/src/main/ets/view/AllComments.ets(44:13)");
                    Image.height({ "id": 50331693, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Image.width({ "id": 50331693, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Image.margin({ right: { "id": 50331692, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                }, Image);
                this.TitleText.bind(this)(item.getName(), this);
                Row.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("features/videoDetail/src/main/ets/view/AllComments.ets(56:11)");
                    Row.margin({ top: { "id": 50331679, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                    Row.width(CommonConstants.FULL_PERCENT);
                    Row.justifyContent(FlexAlign.Start);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.getComment());
                    Text.debugLine("features/videoDetail/src/main/ets/view/AllComments.ets(57:13)");
                    Text.margin({ left: { "id": 50331678, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                    Text.opacity(CommonConstants.TEXT_OPACITY[2]);
                    Text.fontSize({ "id": 50331677, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Text.lineHeight({ "id": 50331680, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
                }, Text);
                Text.pop();
                Row.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("features/videoDetail/src/main/ets/view/AllComments.ets(68:11)");
                    Row.padding({ left: { "id": 50331691, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                    Row.margin({ top: { "id": 50331690, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                    Row.width(CommonConstants.FULL_PERCENT);
                    Row.justifyContent(FlexAlign.Start);
                    Row.visibility(item.getCommentImageSrc() === undefined ? Visibility.None : Visibility.Visible);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(item.getCommentImageSrc());
                    Image.debugLine("features/videoDetail/src/main/ets/view/AllComments.ets(69:13)");
                    Image.width(new BreakpointType(DetailConstants.COMMENT_IMAGE_WIDTH[0], DetailConstants.COMMENT_IMAGE_WIDTH[1], this.commentImgWidth).getValue(this.currentBreakpoint));
                    Image.height(new BreakpointType(DetailConstants.COMMENT_IMAGE_HEIGHT[0], DetailConstants.COMMENT_IMAGE_HEIGHT[1], this.commentImgHeight).getValue(this.currentBreakpoint));
                    Image.borderRadius({ "id": 50331689, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Image.aspectRatio(DetailConstants.COMMENT_IMAGE_ASPECT_RATIO);
                }, Image);
                Row.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("features/videoDetail/src/main/ets/view/AllComments.ets(83:11)");
                    Row.margin({ top: { "id": 50331687, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                    Row.width(CommonConstants.FULL_PERCENT);
                    Row.justifyContent(FlexAlign.Start);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.getTime());
                    Text.debugLine("features/videoDetail/src/main/ets/view/AllComments.ets(84:13)");
                    Text.opacity(CommonConstants.TEXT_OPACITY[2]);
                    Text.fontSize({ "id": 50331681, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Text.lineHeight({ "id": 50331682, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Text.fontWeight(FontWeight.Normal);
                    Text.margin({ left: { "id": 50331683, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Blank.create();
                    Blank.debugLine("features/videoDetail/src/main/ets/view/AllComments.ets(91:13)");
                }, Blank);
                Blank.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    __Common__.create();
                    __Common__.margin({ right: { "id": 50331686, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                }, __Common__);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new IconImage(this, { image: { "id": 50331659, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, icon: { "id": 50331659, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } }, undefined, elmtId, () => { }, { page: "features/videoDetail/src/main/ets/view/AllComments.ets", line: 93 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    image: { "id": 50331659, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                                    icon: { "id": 50331659, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "IconImage" });
                }
                __Common__.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    __Common__.create();
                    __Common__.margin({ right: { "id": 50331686, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
                }, __Common__);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new IconImage(this, { image: { "id": 50331674, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, change: { "id": 50332288, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, icon: { "id": 50331674, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } }, undefined, elmtId, () => { }, { page: "features/videoDetail/src/main/ets/view/AllComments.ets", line: 95 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    image: { "id": 50331674, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                                    change: { "id": 50332288, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                                    icon: { "id": 50331674, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "IconImage" });
                }
                __Common__.pop();
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new IconImage(this, { image: { "id": 50331666, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, icon: { "id": 50331666, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } }, undefined, elmtId, () => { }, { page: "features/videoDetail/src/main/ets/view/AllComments.ets", line: 97 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    image: { "id": 50331666, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                                    icon: { "id": 50331666, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "IconImage" });
                }
                Row.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Divider.create();
                    Divider.debugLine("features/videoDetail/src/main/ets/view/AllComments.ets(103:11)");
                    Divider.color(Color.Black);
                    Divider.opacity(CommonConstants.DIVIDER_OPACITY);
                    Divider.margin({
                        top: { "id": 50331685, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
                    });
                    Divider.height({ "id": 50331684, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
                    Divider.width(CommonConstants.FULL_PERCENT);
                    Divider.visibility(index === this.commentsList.length - 1 ? Visibility.None : Visibility.Visible);
                }, Divider);
            };
            this.forEachUpdateFunction(elmtId, this.commentsList, forEachItemGenFunction, (item: UserInfo, index: number) => index + JSON.stringify(item), true, true);
        }, ForEach);
        ForEach.pop();
        Column.pop();
        Column.pop();
    }
    TitleText(content: string, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(content);
            Text.debugLine("features/videoDetail/src/main/ets/view/AllComments.ets(128:5)");
            Text.fontSize({ "id": 50331697, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.lineHeight({ "id": 50331698, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_500);
        }, Text);
        Text.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class IconImage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__image = new ObservedPropertyObjectPU(null, this, "image");
        this.__change = new ObservedPropertyObjectPU(null, this, "change");
        this.__icon = new ObservedPropertyObjectPU(null, this, "icon");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: IconImage_Params) {
        if (params.image !== undefined) {
            this.image = params.image;
        }
        if (params.change !== undefined) {
            this.change = params.change;
        }
        if (params.icon !== undefined) {
            this.icon = params.icon;
        }
    }
    updateStateVars(params: IconImage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__image.purgeDependencyOnElmtId(rmElmtId);
        this.__change.purgeDependencyOnElmtId(rmElmtId);
        this.__icon.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__image.aboutToBeDeleted();
        this.__change.aboutToBeDeleted();
        this.__icon.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __image: ObservedPropertyObjectPU<Resource | null>;
    get image() {
        return this.__image.get();
    }
    set image(newValue: Resource | null) {
        this.__image.set(newValue);
    }
    private __change: ObservedPropertyObjectPU<Resource | null>;
    get change() {
        return this.__change.get();
    }
    set change(newValue: Resource | null) {
        this.__change.set(newValue);
    }
    private __icon: ObservedPropertyObjectPU<Resource | null>;
    get icon() {
        return this.__icon.get();
    }
    set icon(newValue: Resource | null) {
        this.__icon.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.icon);
            Image.debugLine("features/videoDetail/src/main/ets/view/AllComments.ets(142:5)");
            Image.height({ "id": 50331688, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.width({ "id": 50331688, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.onClick(() => {
                if (this.icon == this.image) {
                    this.icon = this.change;
                }
                else {
                    this.icon = this.image;
                }
            });
        }, Image);
    }
    rerender() {
        this.updateDirtyElements();
    }
}
