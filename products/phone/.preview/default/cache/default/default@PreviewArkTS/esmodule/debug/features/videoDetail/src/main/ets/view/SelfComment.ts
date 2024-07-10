if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SelfComment_Params {
    selfInfo?: UserInfo;
    commentsList?: UserInfo[];
    message?: string;
}
import deviceInfo from "@ohos:deviceInfo";
import { CommonConstants } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { DetailConstants } from "@bundle:com.huawei.videoapplication/phone@videoDetail/ets/constants/DetailConstants";
import { UserInfo, UserViewModel } from "@bundle:com.huawei.videoapplication/phone@videoDetail/ets/viewmodel/UserViewModel";
export class SelfComment extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.selfInfo = new UserViewModel().getSelfInfo();
        this.__commentsList = this.initializeConsume("commentsList", "commentsList");
        this.__message = new ObservedPropertySimplePU("", this, "message");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SelfComment_Params) {
        if (params.selfInfo !== undefined) {
            this.selfInfo = params.selfInfo;
        }
        if (params.message !== undefined) {
            this.message = params.message;
        }
    }
    updateStateVars(params: SelfComment_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__commentsList.purgeDependencyOnElmtId(rmElmtId);
        this.__message.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__commentsList.aboutToBeDeleted();
        this.__message.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private selfInfo: UserInfo;
    private __commentsList: ObservedPropertyAbstractPU<UserInfo[]>;
    get commentsList() {
        return this.__commentsList.get();
    }
    set commentsList(newValue: UserInfo[]) {
        this.__commentsList.set(newValue);
    }
    private __message: ObservedPropertySimplePU<string>;
    get message() {
        return this.__message.get();
    }
    set message(newValue: string) {
        this.__message.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/videoDetail/src/main/ets/view/SelfComment.ets(29:5)");
            Row.shadow({
                radius: DetailConstants.SHADOW_RADIUS,
                color: { "id": 50331779, "type": 10001, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                offsetY: DetailConstants.SHADOW_OFFSET_Y
            });
            Row.height(deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? { "id": 50331751, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50331752, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Row.width(CommonConstants.FULL_PERCENT);
            Row.alignItems(VerticalAlign.Center);
            Row.backgroundColor(Color.White);
            Row.padding({
                right: { "id": 50331754, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                bottom: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? 0 : { "id": 50331753, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.selfInfo.getImageSrc());
            Image.debugLine("features/videoDetail/src/main/ets/view/SelfComment.ets(30:7)");
            Image.height({ "id": 50331750, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.width({ "id": 50331750, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.borderRadius({ "id": 50331748, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.margin({
                left: { "id": 50331747, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                right: { "id": 50331749, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.Start });
            Stack.debugLine("features/videoDetail/src/main/ets/view/SelfComment.ets(39:7)");
            Stack.alignSelf(ItemAlign.Center);
            Stack.layoutWeight(1);
            Stack.borderRadius({ "id": 50331756, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Stack.height({ "id": 50331755, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/videoDetail/src/main/ets/view/SelfComment.ets(40:9)");
            Row.width(CommonConstants.FULL_PERCENT);
            Row.height(CommonConstants.FULL_PERCENT);
            Row.justifyContent(FlexAlign.End);
            Row.alignItems(VerticalAlign.Center);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 50331782, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.debugLine("features/videoDetail/src/main/ets/view/SelfComment.ets(41:11)");
            Image.height({ "id": 50331742, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.width({ "id": 50331742, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.margin({ right: { "id": 50331741, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 50331774, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.debugLine("features/videoDetail/src/main/ets/view/SelfComment.ets(51:9)");
            Image.height({ "id": 50331740, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.width({ "id": 50331740, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.margin({
                top: { "id": 50331738, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                bottom: { "id": 50331738, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                left: { "id": 50331738, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                right: { "id": 50331739, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ text: { value: this.message, changeEvent: newValue => { this.message = newValue; } }, placeholder: DetailConstants.COMMENT_PLACEHOLDER });
            TextInput.debugLine("features/videoDetail/src/main/ets/view/SelfComment.ets(61:9)");
            TextInput.placeholderFont({
                size: { "id": 50331743, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                weight: FontWeight.Normal
            });
            TextInput.height({ "id": 50331744, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            TextInput.fontSize({ "id": 50331743, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            TextInput.padding({
                left: { "id": 50331745, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                right: { "id": 50331746, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
            TextInput.width(CommonConstants.FULL_PERCENT);
            TextInput.onChange((value: string) => {
                this.message = value;
            });
            TextInput.onKeyEvent((event?: KeyEvent) => {
                if (event?.keyCode === 2054) {
                    this.commentsList.push(new UserInfo(DetailConstants.USER_INFO_NAMES[0], { "id": 50331787, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, this.message, undefined, DetailConstants.USER_INFO_DATE));
                    this.message = "";
                }
            });
        }, TextInput);
        Stack.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
