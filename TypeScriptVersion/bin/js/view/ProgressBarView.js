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
var ProgressBarView = (function (_super) {
    __extends(ProgressBarView, _super);
    function ProgressBarView() {
        var _this = _super.call(this) || this;
        _this.progress = 0;
        //进度增加帧循环
        Laya.timer.loop(150, _this, _this.onLoop);
        return _this;
    }
    ProgressBarView.prototype.onLoop = function () {
        //进度增加
        this.progress++;
        //最高100%进度
        if (this.progress > 100) {
            this.progress = 100;
            this.tips.text = "游戏加载完毕，即将进入游戏...";
            Laya.timer.clearAll(this);
        }
        else {
            this.pro.value = this.progress / 100;
            this.tips.text = "游戏正在加载中，当前进度为：" + this.progress + "%!";
        }
    };
    return ProgressBarView;
}(ui.ProgressBarUI));
//# sourceMappingURL=ProgressBarView.js.map