import display from "@ohos:display";
export class DisplayUtil {
    static getFoldCreaseRegion(): void {
        if (display.isFoldable()) {
            let foldRegion: display.FoldCreaseRegion = display.getCurrentFoldCreaseRegion();
            let rect: display.Rect = foldRegion.creaseRects[0];
            // Height of the avoidance area in the upper half screen and height of the avoidance area.
            let creaseRegion: number[] = [px2vp(rect.top), px2vp(rect.height)];
            AppStorage.setOrCreate('creaseRegion', creaseRegion);
        }
    }
}
