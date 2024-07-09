if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SearchHeader_Params {
    isSearching?: boolean;
    searchInput?: string;
    currentTopIndex?: number;
}
import deviceInfo from "@ohos:deviceInfo";
import { CommonConstants } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { SearchConstants } from "@bundle:com.huawei.videoapplication/phone@search/ets/constants/SearchConstants";
export class SearchHeader extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__isSearching = new SynchedPropertySimpleTwoWayPU(params.isSearching, this, "isSearching");
        this.__searchInput = new SynchedPropertySimpleTwoWayPU(params.searchInput, this, "searchInput");
        this.__currentTopIndex = new SynchedPropertySimpleTwoWayPU(params.currentTopIndex, this, "currentTopIndex");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SearchHeader_Params) {
    }
    updateStateVars(params: SearchHeader_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isSearching.purgeDependencyOnElmtId(rmElmtId);
        this.__searchInput.purgeDependencyOnElmtId(rmElmtId);
        this.__currentTopIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__isSearching.aboutToBeDeleted();
        this.__searchInput.aboutToBeDeleted();
        this.__currentTopIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __isSearching: SynchedPropertySimpleTwoWayPU<boolean>;
    get isSearching() {
        return this.__isSearching.get();
    }
    set isSearching(newValue: boolean) {
        this.__isSearching.set(newValue);
    }
    private __searchInput: SynchedPropertySimpleTwoWayPU<string>;
    get searchInput() {
        return this.__searchInput.get();
    }
    set searchInput(newValue: string) {
        this.__searchInput.set(newValue);
    }
    private __currentTopIndex: SynchedPropertySimpleTwoWayPU<number>;
    get currentTopIndex() {
        return this.__currentTopIndex.get();
    }
    set currentTopIndex(newValue: number) {
        this.__currentTopIndex.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/search/src/main/ets/view/SearchHeader.ets(27:5)");
            Row.padding({ top: deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? 0 : { "id": 50332220, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
            Row.height(deviceInfo.deviceType === CommonConstants.DEVICE_TYPES[0] ? { "id": 50332218, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50332219, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Row.width(CommonConstants.FULL_PERCENT);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 50331781, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.debugLine("features/search/src/main/ets/view/SearchHeader.ets(28:7)");
            Image.height({ "id": 50332217, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.width({ "id": 50332217, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.margin({ right: { "id": 50332216, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
            Image.onClick(() => {
                this.isSearching = false;
                this.searchInput = '';
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.Start });
            Stack.debugLine("features/search/src/main/ets/view/SearchHeader.ets(37:7)");
            Stack.alignSelf(ItemAlign.Center);
            Stack.layoutWeight(1);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Search box.
            TextInput.create({ placeholder: SearchConstants.SEARCH_PLACEHOLDER, text: this.searchInput });
            TextInput.debugLine("features/search/src/main/ets/view/SearchHeader.ets(39:9)");
            // Search box.
            TextInput.placeholderFont({
                size: { "id": 50332223, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                weight: FontWeight.Normal
            });
            // Search box.
            TextInput.height({ "id": 50332224, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            // Search box.
            TextInput.fontSize({ "id": 50332223, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            // Search box.
            TextInput.padding({
                left: { "id": 50332225, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
                right: { "id": 50332226, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
            });
            // Search box.
            TextInput.width(CommonConstants.FULL_PERCENT);
            // Search box.
            TextInput.enableKeyboardOnFocus(false);
            // Search box.
            TextInput.onChange((value: string) => {
                this.searchInput = value;
            });
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Search image.
            Image.create({ "id": 50331827, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            Image.debugLine("features/search/src/main/ets/view/SearchHeader.ets(57:9)");
            // Search image.
            Image.width({ "id": 50332222, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            // Search image.
            Image.height({ "id": 50332222, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            // Search image.
            Image.margin({ left: { "id": 50332221, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
        }, Image);
        Stack.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
