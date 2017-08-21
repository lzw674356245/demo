var LayaUISample = (function () {
    function LayaUISample() {
        /**资源数组*/
        this.assetArr = [{ url: "res/atlas/comp.json", type: Laya.Loader.ATLAS },
            { url: "comp/cake.png" },
            { url: "comp/clip_head.png" },
            { url: "comp/clip_steps.png" },
            { url: "comp/clip_stepsNum.png" },
            { url: "layaair.txt" },
            { url: "res/bg_0.mp3" }];
        //初始化引擎
        Laya.init(1334, 750, Laya.WebGL);
        //画布垂直居中对其
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        //画布水平居中对齐
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        //等比缩放
        Laya.stage.scaleMode = Laya.Stage.SCALE_EXACTFIT;
        //自动横屏，游戏的水平方向始终与浏览器屏幕较短边保持垂直
        Laya.stage.scaleMode = "horizontal";
        //加载引擎所需要的资源
        Laya.loader.load(this.assetArr, Laya.Handler.create(this, this.onLoaded));
    }
    /**资源加载完成，创建主UI*/
    LayaUISample.prototype.onLoaded = function () {
        //实例UI界面
        var testView = new ShowAllView();
        //加载到舞台
        Laya.stage.addChild(testView);
        //注册class映射
        this.rigisterClass();
        //监听打开目标UI事件
        testView.on("openUI", this, this.onOpenUI);
        //页面初始化
        testView.init();
    };
    /**打开指定的UI */
    LayaUISample.prototype.onOpenUI = function (uiName) {
        //根据指定的UI名称实例化UI
        var openUI;
        var UIClass = Laya.ClassUtils.getClass(uiName + "View");
        //如果有此类
        if (UIClass) {
            openUI = new UIClass();
        }
        else {
            openUI = Laya.ClassUtils.getInstance(uiName);
        }
        //如果为空，返回
        if (!openUI) {
            return;
        }
        //移除当前打开的UI
        if (this.currentUI != null) {
            this.currentUI.removeSelf();
            this.currentUI.destroy();
        }
        //更新当前打开的UI
        this.currentUI = openUI;
        //如果UI是Dialog类型的，不需要设置位置和加载到舞台，用Dialog自己的方法动画打开
        if (openUI instanceof Laya.Dialog)
            return;
        //设置位置
        openUI.pos(250, 80);
        //加载新UI到舞台
        Laya.stage.addChild(openUI);
    };
    LayaUISample.prototype.rigisterClass = function () {
        //view
        Laya.ClassUtils.regClass("ClipView", ClipView);
        Laya.ClassUtils.regClass("BitmapFontView", BitmapFontView);
        Laya.ClassUtils.regClass("ViewStackView", ViewStackView);
        Laya.ClassUtils.regClass("DialogView", DialogView);
        Laya.ClassUtils.regClass("FontClipView", FontClipView);
        Laya.ClassUtils.regClass("ListView", ListView);
        Laya.ClassUtils.regClass("ProgressBarView", ProgressBarView);
        Laya.ClassUtils.regClass("ScrollBarView", ScrollBarView);
        Laya.ClassUtils.regClass("SliderView", SliderView);
        Laya.ClassUtils.regClass("TabView", TabView);
        Laya.ClassUtils.regClass("TextAreaView", TextAreaView);
        Laya.ClassUtils.regClass("TreeView", TreeView);
        //ui
        Laya.ClassUtils.regClass("Box", ui.BoxUI);
        Laya.ClassUtils.regClass("BitmapFont", ui.BitmapFontUI);
        Laya.ClassUtils.regClass("Button", ui.ButtonUI);
        Laya.ClassUtils.regClass("CheckBox", ui.CheckBoxUI);
        Laya.ClassUtils.regClass("Clip", ui.ClipUI);
        Laya.ClassUtils.regClass("Dialog", ui.DialogUI);
        Laya.ClassUtils.regClass("FontClip", ui.FontClipUI);
        Laya.ClassUtils.regClass("HTMLDivText", ui.HTMLDivTextUI);
        Laya.ClassUtils.regClass("Image", ui.ImageUI);
        Laya.ClassUtils.regClass("Label", ui.LabelUI);
        Laya.ClassUtils.regClass("List", ui.ListUI);
        Laya.ClassUtils.regClass("ProgressBar", ui.ProgressBarUI);
        Laya.ClassUtils.regClass("RadioGroup", ui.RadioGroupUI);
        Laya.ClassUtils.regClass("ScrollBar", ui.ScrollBarUI);
        Laya.ClassUtils.regClass("Slider", ui.SliderUI);
        Laya.ClassUtils.regClass("Tab", ui.TabUI);
        Laya.ClassUtils.regClass("TestPage", ui.TestPageUI);
        Laya.ClassUtils.regClass("TextArea", ui.TextAreaUI);
        Laya.ClassUtils.regClass("TextInput", ui.TextInputUI);
        Laya.ClassUtils.regClass("Tree", ui.TreeUI);
        Laya.ClassUtils.regClass("ViewStack", ui.ViewStackUI);
    };
    return LayaUISample;
}());
new LayaUISample;
//# sourceMappingURL=LayaUISample.js.map