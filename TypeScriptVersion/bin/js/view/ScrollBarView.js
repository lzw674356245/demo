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
var ScrollBarView = (function (_super) {
    __extends(ScrollBarView, _super);
    function ScrollBarView() {
        var _this = _super.call(this) || this;
        //为第二个容器panel2代码方式创建滚动条
        //创建隐藏的横向滚动条
        _this.panel2.hScrollBarSkin = "";
        //横向滚动条橡皮筋回弹时间
        _this.panel2.hScrollBar.elasticBackTime = 100;
        //横向滚动条橡皮筋最大距离
        _this.panel2.hScrollBar.elasticDistance = 100;
        //创建隐藏的纵向滚动条
        _this.panel2.vScrollBarSkin = "";
        //纵向滚动条橡皮筋回弹时间
        _this.panel2.vScrollBar.elasticBackTime = 100;
        //纵向滚动条橡皮筋最大距离
        _this.panel2.vScrollBar.elasticDistance = 100;
        return _this;
    }
    return ScrollBarView;
}(ui.ScrollBarUI));
//# sourceMappingURL=ScrollBarView.js.map