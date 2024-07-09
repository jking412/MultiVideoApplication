import deviceInfo from "@ohos:deviceInfo";
import window from "@ohos:window";
import { CommonConstants } from "@bundle:com.huawei.videoapplication/phone@base/ets/constants/CommonConstants";
import Logger from "@bundle:com.huawei.videoapplication/phone@base/ets/utils/Logger";
@Observed
export class WindowUtil {
    private windowStage?: window.WindowStage;
    private mainWindowClass?: window.Window;
    static getInstance(): WindowUtil | undefined {
        if (!AppStorage.get<WindowUtil>(CommonConstants.WINDOW_UTIL)) {
            AppStorage.setOrCreate(CommonConstants.WINDOW_UTIL, new WindowUtil());
        }
        else {
            Logger.info(`AppStorage does not have windowUtil`);
        }
        return AppStorage.get<WindowUtil>(CommonConstants.WINDOW_UTIL);
    }
    setWindowStage(windowStage: window.WindowStage): void {
        this.windowStage = windowStage;
    }
    setMainWindowPortrait(): void {
        if (this.windowStage === undefined) {
            Logger.error(`WindowStage is undefined`);
            return;
        }
        // Obtain the main window of the application.
        this.windowStage.getMainWindow((err, windowClass: window.Window) => {
            this.mainWindowClass = windowClass;
            if (err.code) {
                Logger.error(`Failed to obtain the main window. Code:${err.code}, message:${err.message}`);
                return;
            }
            if (deviceInfo.deviceType !== CommonConstants.DEVICE_TYPES[0] && deviceInfo.deviceType !==
                CommonConstants.DEVICE_TYPES[1]) {
                // Set portrait display.
                this.mainWindowClass.setPreferredOrientation(window.Orientation.PORTRAIT);
            }
        });
    }
    setMainWindowOrientation(orientation: window.Orientation): void {
        if (this.mainWindowClass === undefined) {
            Logger.error(`MainWindowClass is undefined`);
            return;
        }
        // Setting orientation.
        this.mainWindowClass.setPreferredOrientation(orientation);
    }
    disableWindowSystemBar(): void {
        if (this.mainWindowClass === undefined) {
            Logger.error(`MainWindowClass is undefined`);
            return;
        }
        // Set the status bar and navigation bar to be invisible in full-screen mode.
        this.mainWindowClass.setWindowSystemBarEnable([]);
    }
    enableWindowSystemBar(): void {
        if (this.mainWindowClass === undefined) {
            Logger.error(`MainWindowClass is undefined`);
            return;
        }
        this.mainWindowClass.setWindowSystemBarEnable(['status', 'navigation']);
    }
    setFullScreen(): void {
        if (this.mainWindowClass === undefined) {
            Logger.error(`MainWindowClass is undefined`);
            return;
        }
        // Set full-screen display.
        this.mainWindowClass.setWindowLayoutFullScreen(true, (err) => {
            if (err.code) {
                Logger.error('Failed to set the window layout to full-screen mode. Cause:' + JSON.stringify(err));
                return;
            }
            Logger.info('Succeeded in setting the window layout to full-screen mode.');
        });
    }
    getMainWindow(): window.Window | undefined {
        return this.mainWindowClass;
    }
    offWindowSizeChange(): void {
        if (this.mainWindowClass === undefined) {
            Logger.error(`MainWindowClass is undefined`);
            return;
        }
        this.mainWindowClass?.off('windowSizeChange');
    }
}
