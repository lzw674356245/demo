/*
* name;
*/
class TreeView extends ui.TreeUI{
    constructor(){
        super();
        //树结构数据源
		var xmlString:String="<data>"+
									"<dir label='文件夹1' isOpen='true'>"+
										"<file label='文档1 ' isOpen='true'/>"+
										"<file label='文档2 ' isOpen='true'/>"+
										"<file label='文档3 ' isOpen='true'/>"+
										"<file label='文档4 ' isOpen='true'/>"+
										"<file label='文档5 ' isOpen='true'/>"+
									"</dir>"+
									"<dir label='文件夹2' isOpen='true'>"+
										"<file label='文档1 ' isOpen='true'/>"+
										"<file label='文档2 ' isOpen='true'/>"+
										"<file label='文档3 ' isOpen='true'/>"+
										"<file label='文档4 ' isOpen='true'/>"+
										"<file label='文档5 ' isOpen='true'/>"+
									"</dir>"+
							"</data>";
			//解析xml字符。 
			var xml:any=Laya.Utils.parseXMLFromString(xmlString);
			//设置tree 的数据源。
			this.tree.xml =xml;
    }
}