import { BreakpointConstants } from "@bundle:com.huawei.videoapplication/phone@base/Index";
import { HomeConstants } from "@bundle:com.huawei.videoapplication/phone@home/ets/constants/HomeConstants";
export class PreviousVideoUtil {
    static getImgAspectRatio(currentBreakpoint: string, index: number): number {
        if (currentBreakpoint === BreakpointConstants.BREAKPOINT_SM) {
            switch (index) {
                case 2:
                    return HomeConstants.PREVIOUS_TWO_RATIOS[0];
                case 3:
                    return HomeConstants.PREVIOUS_TWO_RATIOS[1];
                default:
                    return HomeConstants.PREVIOUS_TWO_RATIOS[2];
            }
        }
        else if (currentBreakpoint === BreakpointConstants.BREAKPOINT_MD) {
            switch (index) {
                case 2:
                    return HomeConstants.PREVIOUS_TWO_RATIOS[3];
                case 3:
                    return HomeConstants.PREVIOUS_TWO_RATIOS[2];
                case 4:
                    return HomeConstants.PREVIOUS_TWO_RATIOS[4];
                case 5:
                    return HomeConstants.PREVIOUS_TWO_RATIOS[5];
                default:
                    return HomeConstants.PREVIOUS_TWO_RATIOS[6];
            }
        }
        else {
            switch (index) {
                case 2:
                    return HomeConstants.PREVIOUS_TWO_RATIOS[3];
                case 3:
                    return HomeConstants.PREVIOUS_TWO_RATIOS[2];
                case 4:
                    return HomeConstants.PREVIOUS_TWO_RATIOS[4];
                default:
                    return HomeConstants.PREVIOUS_TWO_RATIOS[6];
            }
        }
    }
}
