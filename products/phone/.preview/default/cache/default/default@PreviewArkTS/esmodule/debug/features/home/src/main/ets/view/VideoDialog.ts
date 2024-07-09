if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface VideoDialog_Params {
    currentBreakpoint?: string;
    xComponentController?: XComponentController;
    surfaceId?: string;
    avPlayerUtil?: AvPlayerUtil;
    avPlayer?: media.AVPlayer;
    context?: common.UIAbilityContext;
    url?: resourceManager.RawFileDescriptor;
    playState?: boolean;
    controller?: CustomDialogController;
    onError?: (err: BusinessError) => void;
    onStateChange?: (state: media.AVPlayerState) => void;
}
import type resourceManager from "@ohos:resourceManager";
import type common from "@ohos:app.ability.common";
import media from "@ohos:multimedia.media";
import type { BusinessError } from "@ohos:base";
import { AvPlayerUtil, BreakpointConstants, CommonConstants } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { BreakpointType, Logger } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { HomeConstants } from "@bundle:com.huawei.videoapplication/phone@home/ets/constants/HomeConstants";
function MenuItemFunction(img: Resource, text: string, parent = null) {
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Row.create();
        Row.debugLine("features/home/src/main/ets/view/VideoDialog.ets(25:3)");
        Row.height({ "id": 50331911, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
    }, Row);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Image.create(img);
        Image.debugLine("features/home/src/main/ets/view/VideoDialog.ets(26:5)");
        Image.width({ "id": 50331910, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
        Image.height({ "id": 50331910, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
        Image.margin({ right: { "id": 50331909, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
    }, Image);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Text.create(text);
        Text.debugLine("features/home/src/main/ets/view/VideoDialog.ets(30:5)");
        Text.layoutWeight(1);
        Text.fontSize({ "id": 50331915, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
        Text.fontWeight(FontWeight.Normal);
    }, Text);
    Text.pop();
    Row.pop();
}
export function RightClickMenu(currentBreakpoint: string, parent = null) {
    const __currentBreakpoint__ = currentBreakpoint;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, currentBreakpoint = __currentBreakpoint__) => {
        Column.create();
        Column.debugLine("features/home/src/main/ets/view/VideoDialog.ets(39:3)");
        Column.borderRadius({ "id": 50331916, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
        Column.backgroundColor(Color.White);
        Column.width(currentBreakpoint === BreakpointConstants.BREAKPOINT_LG ? { "id": 50331914, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } : { "id": 50331913, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
        Column.padding({
            left: { "id": 50331912, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" },
            right: { "id": 50331912, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }
        });
    }, Column);
    MenuItemFunction.bind(this)({ "id": 50331855, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, HomeConstants.VIDEO_DIALOG_OPTIONS[0], parent ? parent : this);
    MenuItemFunction.bind(this)({ "id": 50331854, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, HomeConstants.VIDEO_DIALOG_OPTIONS[1], parent ? parent : this);
    MenuItemFunction.bind(this)({ "id": 50331673, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, HomeConstants.VIDEO_DIALOG_OPTIONS[2], parent ? parent : this);
    Column.pop();
}
export class VideoDialog extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('currentBreakpoint', BreakpointConstants.BREAKPOINT_LG, "currentBreakpoint");
        this.xComponentController = new XComponentController();
        this.surfaceId = '';
        this.avPlayerUtil = new AvPlayerUtil();
        this.avPlayer = undefined;
        this.context = getContext(this) as common.UIAbilityContext;
        this.url = undefined;
        this.playState = true;
        this.controller = undefined;
        this.onError = (err: BusinessError) => {
            Logger.error(`Invoke avPlayer failed, code is ${err.code}, message is ${err.message}`);
            if (this.avPlayer === undefined) {
                Logger.error(`AvPlayer is undefined`);
                return;
            }
            this.avPlayer.reset();
        };
        this.onStateChange = async (state: media.AVPlayerState) => {
            if (this.avPlayer === undefined) {
                Logger.error(`AvPlayer is undefined`);
                return;
            }
            switch (state) {
                case CommonConstants.AV_PLAYER_IDLE_STATE:
                    this.url = await this.context.createModuleContext(CommonConstants.VIDEO_DETAIL_HSP_NAME).resourceManager
                        .getRawFd(CommonConstants.PRODUCT_VIDEO_NAME);
                    this.avPlayer.fdSrc = this.url;
                    Logger.info('AVPlayer state idle called.');
                    break;
                case CommonConstants.AV_PLAYER_INITIALIZED_STATE:
                    // This status is reported after the AVPlayer sets the playback source.
                    Logger.info('AVPlayer initialized called.');
                    this.avPlayer.surfaceId = this.surfaceId;
                    this.avPlayer.prepare().then(() => {
                        Logger.info('AVPlayer prepare succeeded.');
                    }, (err: BusinessError) => {
                        Logger.error(`Invoke prepare failed, code is ${err.code}, message is ${err.message}`);
                        if (this.avPlayer === undefined) {
                            Logger.error(`AvPlayer is undefined`);
                            return;
                        }
                        this.avPlayer.reset();
                    });
                    break;
                case CommonConstants.AV_PLAYER_PREPARED_STATE:
                    // Report the state machine after the prepare interface is successfully invoked.
                    this.avPlayer.videoScaleType = media.VideoScaleType.VIDEO_SCALE_TYPE_FIT;
                    Logger.info('AVPlayer state prepared called.');
                    this.avPlayer.play();
                    break;
                case CommonConstants.AV_PLAYER_PLAYING_STATE:
                    // Trigger the state machine to report after the play interface is successfully invoked.
                    Logger.info('AVPlayer state playing called.');
                    this.playState = true;
                    break;
                case CommonConstants.AV_PLAYER_PAUSED_STATE:
                    // Trigger the state machine to report after the pause function is successfully invoked.
                    Logger.info('AVPlayer state paused called.');
                    this.playState = false;
                    break;
                case CommonConstants.AV_PLAYER_COMPLETED_STATE:
                    // Trigger the state machine to report after the playback ends.
                    Logger.info('AVPlayer state completed called.');
                    this.avPlayer.stop();
                    break;
                case CommonConstants.AV_PLAYER_STOPPED_STATE:
                    // Trigger the state machine to report after the stop interface is successfully invoked.
                    Logger.info('AVPlayer state stopped called.');
                    break;
                case CommonConstants.AV_PLAYER_RELEASE_STATE:
                    Logger.info('AVPlayer state released called.');
                    break;
                case CommonConstants.AV_PLAYER_ERROR_STATE:
                    Logger.error('AVPlayer state error called.');
                    break;
                default:
                    Logger.info('AVPlayer state unknown called.');
                    break;
            }
        };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: VideoDialog_Params) {
        if (params.xComponentController !== undefined) {
            this.xComponentController = params.xComponentController;
        }
        if (params.surfaceId !== undefined) {
            this.surfaceId = params.surfaceId;
        }
        if (params.avPlayerUtil !== undefined) {
            this.avPlayerUtil = params.avPlayerUtil;
        }
        if (params.avPlayer !== undefined) {
            this.avPlayer = params.avPlayer;
        }
        if (params.context !== undefined) {
            this.context = params.context;
        }
        if (params.url !== undefined) {
            this.url = params.url;
        }
        if (params.playState !== undefined) {
            this.playState = params.playState;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.onError !== undefined) {
            this.onError = params.onError;
        }
        if (params.onStateChange !== undefined) {
            this.onStateChange = params.onStateChange;
        }
    }
    updateStateVars(params: VideoDialog_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
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
    private xComponentController: XComponentController;
    private surfaceId: string;
    private avPlayerUtil: AvPlayerUtil;
    private avPlayer?: media.AVPlayer;
    private context: common.UIAbilityContext;
    private url?: resourceManager.RawFileDescriptor;
    private playState: boolean;
    private controller?: CustomDialogController;
    setController(ctr: CustomDialogController) {
        this.controller = ctr;
    }
    private onError: (err: BusinessError) => void;
    private onStateChange: (state: media.AVPlayerState) => void;
    aboutToAppear() {
        this.createAvPlayer();
    }
    aboutToDisappear() {
        if (this.avPlayer === undefined) {
            Logger.error(`AvPlayer is undefined`);
            return;
        }
        try {
            this.avPlayer.off('error');
            this.avPlayer.off('stateChange');
        }
        catch (exception) {
            Logger.error('Failed to unregister callback. Code: ' + JSON.stringify(exception));
        }
        this.avPlayer.release();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/home/src/main/ets/view/VideoDialog.ets(156:5)");
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/home/src/main/ets/view/VideoDialog.ets(157:7)");
            Column.margin({ bottom: { "id": 50331905, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" } });
            Column.height(new BreakpointType({ "id": 50331904, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331903, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331902, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint));
            Column.width(new BreakpointType({ "id": 50331908, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331907, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331906, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }).getValue(this.currentBreakpoint));
            Column.aspectRatio(HomeConstants.VIDEO_DIALOG_ASPECT_RATIO);
            Column.onClick(() => {
                if (this.avPlayer === undefined) {
                    Logger.error(`AvPlayer is undefined`);
                    return;
                }
                if (this.avPlayer.state === CommonConstants.AV_PLAYER_STOPPED_STATE) {
                    this.avPlayer.prepare();
                    return;
                }
                if (!this.playState) {
                    this.avPlayer.play();
                }
                else {
                    this.avPlayer.pause();
                }
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            XComponent.create({
                id: '',
                type: HomeConstants.X_COMPONENT_TYPE,
                controller: this.xComponentController
            }, "com.huawei.videoapplication/phone");
            XComponent.debugLine("features/home/src/main/ets/view/VideoDialog.ets(158:9)");
            XComponent.borderRadius({ "id": 50332097, "type": 10002, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" });
            XComponent.onLoad(() => {
                this.xComponentController.setXComponentSurfaceSize({ surfaceWidth: CommonConstants.X_COMPONENT_SURFACE_WIDTH, surfaceHeight: CommonConstants.X_COMPONENT_SURFACE_HEIGHT });
                this.surfaceId = this.xComponentController.getXComponentSurfaceId();
            });
            XComponent.width(CommonConstants.FULL_PERCENT);
            XComponent.height(CommonConstants.FULL_PERCENT);
        }, XComponent);
        Column.pop();
        RightClickMenu.bind(this)(this.currentBreakpoint, this);
        Column.pop();
    }
    async createAvPlayer(): Promise<void> {
        this.avPlayer = await media.createAVPlayer();
        // Entering the idle state.
        this.url = await this.context.createModuleContext(CommonConstants.VIDEO_DETAIL_HSP_NAME).resourceManager
            .getRawFd(CommonConstants.PRODUCT_VIDEO_NAME);
        this.avPlayer.fdSrc = this.url;
        this.setAVPlayerCallback();
        // Initialize the playback status.
        this.playState = false;
    }
    // Registering the avplayer callback function.
    setAVPlayerCallback(): void {
        if (this.avPlayer === undefined) {
            Logger.error(`AvPlayer is undefined`);
            return;
        }
        this.avPlayer.on('error', this.onError);
        // Callback function for state machine changes.
        this.avPlayer.on('stateChange', this.onStateChange);
    }
    rerender() {
        this.updateDirtyElements();
    }
}
