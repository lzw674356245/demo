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
/**
* name
*/
var ClipView = (function (_super) {
    __extends(ClipView, _super);
    function ClipView() {
        var _this = _super.call(this) || this;
        _this.score = 0;
        //积分增加帧循环
        Laya.timer.loop(150, _this, _this.onLoop);
        return _this;
    }
    ClipView.prototype.onLoop = function () {
        //积分增加
        this.score++;
        //clip个位
        this.clip1.index = parseInt(this.score % 100 % 10);
        //clip十位
        this.clip2.index = parseInt((this.score) % 100 / 10);
        //clip百位
        this.clip3.index = parseInt((this.score) / 100);
        //重新开始
        if (this.score > 240)
            this.score = 0;
        //切片更新，图标上阶位更新
        this.clip_step.index = parseInt(this.score / 30);
        //提示更新
        this.tips.text = '恭喜您段位达到了“传说' + (this.clip_step.index + 1) + '阶”！！';
    };
    return ClipView;
}(ui.ClipUI));
//# sourceMappingURL=ClipView.js.map