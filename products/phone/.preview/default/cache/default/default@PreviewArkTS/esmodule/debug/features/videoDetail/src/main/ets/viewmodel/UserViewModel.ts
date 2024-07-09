import { DetailConstants } from "@bundle:com.huawei.videoapplication/phone@videoDetail/ets/constants/DetailConstants";
export class UserViewModel {
    private userList: UserInfo[] = [];
    constructor() {
        this.userList.push(new UserInfo(DetailConstants.USER_INFO_NAMES[0], { "id": 50331787, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, DetailConstants.USER_INFO_COMMENTS[0], undefined, DetailConstants.USER_INFO_DATE));
        this.userList.push(new UserInfo(DetailConstants.USER_INFO_NAMES[1], { "id": 50331665, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, DetailConstants.USER_INFO_COMMENTS[1], { "id": 50331661, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, DetailConstants.USER_INFO_DATE));
        this.userList.push(new UserInfo(DetailConstants.USER_INFO_NAMES[2], { "id": 50331784, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, DetailConstants.USER_INFO_COMMENTS[2], { "id": 50331772, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, DetailConstants.USER_INFO_DATE));
    }
    getRelatedVideoList(): UserInfo[] {
        return this.userList;
    }
    getSelfInfo(): UserInfo {
        return new UserInfo('', { "id": 50331780, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, '', undefined, '');
    }
}
export class UserInfo {
    /**
     * Name of the user.
     */
    private name: string;
    /**
     * Image src of user.
     */
    private imageSrc: Resource;
    /**
     * Comment of user.
     */
    private comment: string;
    /**
     * Image src of the comment.
     */
    private commentImageSrc: Resource | undefined;
    /**
     * Time of the comment.
     */
    private time: string;
    constructor(name: string, imageSrc: Resource, comment: string, commentImageSrc: Resource | undefined, time: string) {
        this.name = name;
        this.imageSrc = imageSrc;
        this.comment = comment;
        this.commentImageSrc = commentImageSrc;
        this.time = time;
    }
    public getName(): string {
        return this.name;
    }
    public getImageSrc(): Resource {
        return this.imageSrc;
    }
    public getComment(): string {
        return this.comment;
    }
    public getCommentImageSrc(): Resource | undefined {
        return this.commentImageSrc;
    }
    public getTime(): string {
        return this.time;
    }
}
