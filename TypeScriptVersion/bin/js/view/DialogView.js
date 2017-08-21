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
var DialogView = (function (_super) {
    __extends(DialogView, _super);
    function DialogView() {
        var _this = _super.call(this) || this;
        //实例化提示信息管理类，否则无法产生提示
        var tip = new Laya.TipManager();
        //动画方式打开对话框
        _this.popup();
        //在对话框中，鼠标可点击触发拖动的区域
        _this.dragArea = "0,0,500,60";
        //提示信息
        _this.toolTip = "左键点击标题栏可以进行拖动！";
        //点击关闭按钮	
        _this.btn_close.on(Laya.Event.MOUSE_UP, _this, _this.onClose);
        return _this;
    }
    DialogView.prototype.onClose = function () {
        //动画关闭对话框
        this.close();
    };
    return DialogView;
}(ui.DialogUI));
//# sourceMappingURL=DialogView.js.map