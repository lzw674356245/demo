var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* name;
*/
var TabView = (function (_super) {
    __extends(TabView, _super);
    function TabView() {
        var _this = _super.call(this) || this;
        //选择时处理
        _this.tab.selectHandler = new Laya.Handler(_this, _this.onSelect);
        //默认选择项目处理
        _this.onSelect(_this.tab.selectedIndex);
        return _this;
    }
    //选择处理器
    TabView.prototype.onSelect = function (index) {
        //还原所有按钮宽度
        for (var i = 0; i < this.tab._childs.length; i++) {
            this.tab._childs[i].width = 210;
            //被选择的按钮加宽
            if (i == index) {
                this.tab._childs[i].width = 250;
            }
        }
    };
    return TabView;
}(ui.TabUI));
//# sourceMappingURL=TabView.js.map