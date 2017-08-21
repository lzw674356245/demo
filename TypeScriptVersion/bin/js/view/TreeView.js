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
var TreeView = (function (_super) {
    __extends(TreeView, _super);
    function TreeView() {
        var _this = _super.call(this) || this;
        //树结构数据源
        var xmlString = "<data>" +
            "<dir label='文件夹1' isOpen='true'>" +
            "<file label='文档1 ' isOpen='true'/>" +
            "<file label='文档2 ' isOpen='true'/>" +
            "<file label='文档3 ' isOpen='true'/>" +
            "<file label='文档4 ' isOpen='true'/>" +
            "<file label='文档5 ' isOpen='true'/>" +
            "</dir>" +
            "<dir label='文件夹2' isOpen='true'>" +
            "<file label='文档1 ' isOpen='true'/>" +
            "<file label='文档2 ' isOpen='true'/>" +
            "<file label='文档3 ' isOpen='true'/>" +
            "<file label='文档4 ' isOpen='true'/>" +
            "<file label='文档5 ' isOpen='true'/>" +
            "</dir>" +
            "</data>";
        //解析xml字符。 
        var xml = Laya.Utils.parseXMLFromString(xmlString);
        //设置tree 的数据源。
        _this.tree.xml = xml;
        return _this;
    }
    return TreeView;
}(ui.TreeUI));
//# sourceMappingURL=TreeView.js.map