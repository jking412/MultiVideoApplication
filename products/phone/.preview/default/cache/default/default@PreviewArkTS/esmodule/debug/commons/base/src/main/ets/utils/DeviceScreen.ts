import display from "@ohos:display";
import { CommonConstants } from "@bundle:com.huawei.videoapplication/phone@base/ets/constants/CommonConstants";
export class DeviceScreen {
    /**
     * Get the screen height.
     *
     * @returns screen height.
     */
    public static getDeviceHeight(): number {
        let displayObject = display.getDefaultDisplaySync();
        let screenPixelHeight = displayObject.height;
        let screenDensityDPI = displayObject.densityDPI;
        return screenPixelHeight * (CommonConstants.SCREEN_DPI_CONSTANT / screenDensityDPI);
    }
    /**
     * Get the screen width.
     *
     * @returns screen width.
     */
    public static getDeviceWidth(): number {
        let displayObject = display.getDefaultDisplaySync();
        let screenPixelWidth = displayObject.width;
        let screenDensityDPI = displayObject.densityDPI;
        return screenPixelWidth * (CommonConstants.SCREEN_DPI_CONSTANT / screenDensityDPI);
    }
}
