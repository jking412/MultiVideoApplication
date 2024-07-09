import { DetailConstants } from "@bundle:com.huawei.videoapplication/phone@videoDetail/ets/constants/DetailConstants";
export class CurrentOffsetUtil {
    static scrollToTop(offset: string): boolean {
        if (offset === DetailConstants.SCROLL_TO_TOP) {
            return true;
        }
        return false;
    }
}
