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
var ViewStackView = (function (_super) {
    __extends(ViewStackView, _super);
    function ViewStackView() {
        var _this = _super.call(this) || this;
        _this.tab.selectHandler = new Laya.Handler(_this, _this.onSelect);
        _this.onSelect(0);
        return _this;
    }
    ViewStackView.prototype.onSelect = function (index) {
        this.viewStack.selectedIndex = index;
    };
    return ViewStackView;
}(ui.ViewStackUI));
//# sourceMappingURL=ViewStackView.js.map