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
var TextAreaView = (function (_super) {
    __extends(TextAreaView, _super);
    function TextAreaView() {
        var _this = _super.call(this) || this;
        _this.textArea.text = Laya.Loader.getRes("layaair.txt");
        _this.textArea.vScrollBar.scrollSize = 50;
        return _this;
    }
    return TextAreaView;
}(ui.TextAreaUI));
//# sourceMappingURL=TextAreaView.js.map