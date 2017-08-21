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
var ShowAllView = (function (_super) {
    __extends(ShowAllView, _super);
    function ShowAllView() {
        var _this = _super.call(this) || this;
        _this.nameArr = ["Button", "Box", "BitmapFont", "CheckBox", "Clip", "Dialog", "FontClip", "HTMLDivText", "Image", "Label", "List",
            "ProgressBar", "RadioGroup", "ScrollBar", "Slider", "Tab", "TextArea", "TextInput", "Tree", "ViewStack"];
        return _this;
    }
    /**页面初始化*****/
    ShowAllView.prototype.init = function () {
        //为list列表赋值
        this.list.array = this.nameArr;
        // 使用但隐藏垂直滚动条
        this.list.vScrollBarSkin = "";
        //滚动在头或底最大距离
        this.list.scrollBar.elasticDistance = 100;
        //单元格渲染，且绑定数据
        this.list.renderHandler = new Laya.Handler(this, this.onRender);
        //选择单元格处理回调	
        this.list.selectHandler = new Laya.Handler(this, this.onSelect);
        //监听打开目标UI事件
        this.event("openUI", this.nameArr[0]);
    }; /**单元格渲染，绑定数据*****/
    ShowAllView.prototype.onRender = function (cell, index) {
        //数据绑定
        cell.label = cell.dataSource;
        //如果当前索引等于选择索引，改变选择状态
        cell.selected = (index == this.list.selectedIndex);
    };
    /**选择单元格处理方法
     * @param index 当前选择单元格索引
     */
    ShowAllView.prototype.onSelect = function (index) {
        //选择后更新选择状态
        this.list.refresh();
        //更新标题名称
        this.title.text = this.nameArr[index] + "组件示例效果";
        //发送选择打开的UI
        this.event("openUI", this.nameArr[index]);
    };
    return ShowAllView;
}(ui.TestPageUI));
//# sourceMappingURL=ShowAllView.js.map