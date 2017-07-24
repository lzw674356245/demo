package view
{
	import laya.utils.Utils;
	
	import ui.TreeUI;
	
	public class TreeView extends TreeUI
	{
		public function TreeView()
		{
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
			var xml:*=Utils.parseXMLFromString(xmlString);
			//设置tree 的数据源。
			tree.xml =xml;
		}
	}
}