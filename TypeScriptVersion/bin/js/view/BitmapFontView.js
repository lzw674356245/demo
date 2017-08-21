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
var BitmapFontView = (function (_super) {
    __extends(BitmapFontView, _super);
    function BitmapFontView() {
        var _this = _super.call(this) || this;
        _this.mFontName = "LayaFont";
        _this.mFontName1 = "LayaFont1";
        _this.mBitmapFont = new Laya.BitmapFont();
        //加载位图字体需要的资源
        _this.mBitmapFont.loadFont("font/FontTest.fnt", Laya.Handler.create(_this, _this.onLoaded));
        _this.mBitmapFont1 = new Laya.BitmapFont();
        //加载位图字体需要的资源
        _this.mBitmapFont1.loadFont("font/FontTest1.fnt", Laya.Handler.create(_this, _this.onLoaded1));
        return _this;
    }
    BitmapFontView.prototype.onLoaded1 = function () {
        //设置文字间距
        this.mBitmapFont1.setSpaceWidth(10);
        //注册位图字体
        Laya.Text.registerBitmapFont(this.mFontName1, this.mBitmapFont1);
        var txt1 = new Laya.Text();
        txt1.text = "LayaBox位图字体1测试";
        //设置宽度，高度自动匹配
        txt1.width = 500;
        txt1.align = "center";
        //使用我们注册的字体
        txt1.font = this.mFontName1;
        //字体大小在此修改无用，需创建位图字体时设置 
        txt1.fontSize = 100;
        txt1.y = 100;
        this.box.addChild(txt1);
    };
    BitmapFontView.prototype.onLoaded = function () {
        //设置文字间距
        this.mBitmapFont.setSpaceWidth(10);
        //注册位图字体
        Laya.Text.registerBitmapFont(this.mFontName, this.mBitmapFont);
        var txt = new Laya.Text();
        txt.text = "LayaBox位图字体测试";
        //设置宽度，高度自动匹配
        txt.width = 500;
        txt.align = "center";
        //使用我们注册的字体
        txt.font = this.mFontName;
        //字体大小在此修改无用，需创建位图字体时设置 
        txt.fontSize = 100;
        this.box.addChild(txt);
    };
    return BitmapFontView;
}(ui.BitmapFontUI));
//# sourceMappingURL=BitmapFontView.js.map