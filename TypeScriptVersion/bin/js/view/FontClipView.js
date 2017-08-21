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
var FontClipView = (function (_super) {
    __extends(FontClipView, _super);
    function FontClipView() {
        var _this = _super.call(this) || this;
        /**公历年数**/
        _this.year = 2017;
        /**12生肖数组**/
        _this.yearArr = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
        _this.yearIndex = 9;
        //年增加帧循环
        Laya.timer.loop(1000, _this, _this.onLoop);
        return _this;
    }
    FontClipView.prototype.onLoop = function () {
        //公元年增加
        this.year++;
        //“位图字体切片”年更新
        this.fontClip_num.value = this.year.toString();
        //农历生肖年增加
        this.yearIndex++;
        //12年生肖一轮回
        if (this.yearIndex > 11)
            this.yearIndex = 0;
        //文本切片更新，新年快乐更新
        this.fontClip_year.value = this.yearArr[this.yearIndex] + "年快乐";
        //大于2500年时间停止
        if (this.year > 2030) {
            Laya.timer.clearAll(this);
        }
    };
    return FontClipView;
}(ui.FontClipUI));
//# sourceMappingURL=FontClipView.js.map