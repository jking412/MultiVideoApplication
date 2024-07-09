/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export class FooterTabViewModel {
    private tabList: FooterTab[] = [];
    constructor() {
        this.tabList.push(new FooterTab({ "id": 50331790, "type": 10003, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331830, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331856, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331849, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }));
        this.tabList.push(new FooterTab({ "id": 50331789, "type": 10003, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331857, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331832, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332105, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }));
        this.tabList.push(new FooterTab({ "id": 50331791, "type": 10003, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331834, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50332106, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331852, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }));
        this.tabList.push(new FooterTab({ "id": 50331792, "type": 10003, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331831, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331822, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }, { "id": 50331800, "type": 20000, params: [], "bundleName": "com.huawei.videoapplication", "moduleName": "phone" }));
    }
    getTabList(): FooterTab[] {
        return this.tabList;
    }
}
export class FooterTab {
    /**
     * Name of the tab.
     */
    private name: Resource;
    /**
     * Icon of the tab.
     */
    private icon: Resource;
    /**
     * Icon selected.
     */
    private iconSelected: Resource;
    /**
     * White icon.
     */
    private iconWhite: Resource;
    constructor(name: Resource, icon: Resource, iconSelected: Resource, iconWhite: Resource) {
        this.name = name;
        this.icon = icon;
        this.iconSelected = iconSelected;
        this.iconWhite = iconWhite;
    }
    getName(): Resource {
        return this.name;
    }
    getIcon(): Resource {
        return this.icon;
    }
    getIconSelected(): Resource {
        return this.iconSelected;
    }
    getIconWhite(): Resource {
        return this.iconWhite;
    }
}
