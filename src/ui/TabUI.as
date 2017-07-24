/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 

	public class TabUI extends View {
		public var tab:Tab;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1084,"height":680,"cacheAs":"normal"},"child":[{"type":"Label","props":{"y":150,"x":199,"width":194,"visible":true,"text":"默认Tab","height":64,"fontSize":40,"font":"Microsoft YaHei","color":"#f8ff5f","bold":true}},{"type":"Label","props":{"y":304,"x":192,"width":194,"visible":true,"text":"自定义Tab","height":64,"fontSize":40,"font":"Microsoft YaHei","color":"#f8ff5f","bold":true}},{"type":"Tab","props":{"y":148,"x":458,"width":474,"skin":"comp/tab.png","selectedIndex":0,"scaleY":1,"scaleX":0.9,"labels":"服装,武器,配饰","labelSize":30,"labelFont":"SimHei","labelColors":"#0864ad,#ffd945,#ffffff","labelBold":true,"height":63}},{"type":"Tab","props":{"y":302,"x":452,"width":215,"var":"tab","space":0,"selectedIndex":1,"height":210,"direction":"vertical"},"child":[{"type":"Button","props":{"y":0,"x":0,"width":210,"skin":"comp/button.png","sizeGrid":"23,30,33,31","name":"item0","labelSize":25,"labelPadding":"0,0,0,20","labelFont":"SimHei","label":"Tab选择1","height":70},"child":[{"type":"Image","props":{"y":16,"x":20,"skin":"comp/img_team0.png"}}]},{"type":"Button","props":{"y":1,"x":196,"width":210,"skin":"comp/button.png","sizeGrid":"23,23,33,26","name":"item1","labelSize":25,"labelPadding":"0,0,0,20","labelFont":"SimHei","label":"Tab选择2","height":70},"child":[{"type":"Image","props":{"y":16,"x":20,"skin":"comp/img_team1.png"}}]},{"type":"Button","props":{"y":1,"x":392,"width":210,"skin":"comp/button.png","sizeGrid":"23,23,33,26","name":"item2","labelSize":25,"labelPadding":"0,0,0,20","labelFont":"SimHei","label":"Tab选择3","height":70},"child":[{"type":"Image","props":{"y":14,"x":20,"skin":"comp/img_team3.png"}}]}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);
		}
	}
}