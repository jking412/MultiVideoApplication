import UIAbility from "@ohos:app.ability.UIAbility";
import type AbilityConstant from "@ohos:app.ability.AbilityConstant";
import type Want from "@ohos:app.ability.Want";
import display from "@ohos:display";
import type window from "@ohos:window";
import hilog from "@ohos:hilog";
import { BreakpointConstants, CommonConstants, WindowUtil } from "@bundle:com.huawei.videoapplication/phone@base/Index";
export default class EntryAbility extends UIAbility {
    private windowObj?: window.Window;
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');
    }
    onDestroy() {
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onDestroy');
    }
    onWindowStageCreate(windowStage: window.WindowStage) {
        // Main window is created, set main page for this ability
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');
        windowStage.getMainWindow().then((data: window.Window) => {
            this.windowObj = data;
            this.updateBreakpoint(this.windowObj.getWindowProperties().windowRect.width);
            this.windowObj.on('windowSizeChange', (windowSize: window.Size) => {
                this.updateBreakpoint(windowSize.width);
            });
        });
        let windowUtil: WindowUtil | undefined = WindowUtil.getInstance();
        if (windowUtil !== undefined) {
            windowUtil.setWindowStage(windowStage);
            windowUtil.setMainWindowPortrait();
        }
        windowStage.loadContent('pages/Index', (err, data) => {
            if (err.code) {
                hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
                return;
            }
            hilog.info(0x0000, 'testTag', 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');
        });
    }
    private updateBreakpoint(windowWidth: number): void {
        let windowWidthVp = windowWidth / display.getDefaultDisplaySync().densityPixels;
        let curBp: string = '';
        let videoGridColumn: string = CommonConstants.VIDEO_GRID_COLUMNS[0];
        if (windowWidthVp < BreakpointConstants.BREAKPOINT_RANGES[1]) {
            curBp = BreakpointConstants.BREAKPOINT_SM;
            videoGridColumn = CommonConstants.VIDEO_GRID_COLUMNS[0];
        }
        else if (windowWidthVp < BreakpointConstants.BREAKPOINT_RANGES[2]) {
            curBp = BreakpointConstants.BREAKPOINT_MD;
            videoGridColumn = CommonConstants.VIDEO_GRID_COLUMNS[1];
        }
        else {
            curBp = BreakpointConstants.BREAKPOINT_LG;
            videoGridColumn = CommonConstants.VIDEO_GRID_COLUMNS[2];
        }
        AppStorage.setOrCreate('currentBreakpoint', curBp);
        AppStorage.setOrCreate('videoGridColumn', videoGridColumn);
    }
    onWindowStageDestroy() {
        // Main window is destroyed, release UI related resources
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');
    }
    onForeground() {
        // Ability has brought to foreground
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onForeground');
    }
    onBackground() {
        // Ability has back to background
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onBackground');
    }
}
