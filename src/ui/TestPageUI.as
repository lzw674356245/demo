/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 
	import laya.display.Text;

	public class TestPageUI extends View {
		public var list:List;
		public var title:Label;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1334,"height":750},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":250,"skin":"comp/img_blank.png","sizeGrid":"4,5,6,5","height":80}},{"type":"Image","props":{"y":80,"x":0,"width":250,"skin":"comp/img_blank.png","sizeGrid":"4,5,6,5","height":670}},{"type":"List","props":{"y":80,"x":0,"width":250,"var":"list","selectedIndex":0,"selectEnable":true,"height":670},"child":[{"type":"Button","props":{"y":0,"x":0,"width":250,"toggle":false,"skin":"comp/btn_choose.png","sizeGrid":"7,14,6,11","renderType":"render","name":"button","labelSize":30,"labelPadding":"-2,0,0,50","labelFont":"Arial","labelColors":"#ffffff,#136ab2,#753909","labelAlign":"left","label":"Button","height":90}}]},{"type":"Text","props":{"y":23,"x":67,"text":"组件导航","fontSize":30,"font":"SimHei","color":"#ffffff"}}]},{"type":"Box","props":{"y":0,"x":250},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1087,"skin":"comp/img_blank.png","sizeGrid":"4,5,6,5","height":80}},{"type":"Label","props":{"width":564,"var":"title","text":"Button组件示例效果","height":30,"fontSize":30,"font":"SimHei","color":"#fdfdfd","centerY":0.5,"centerX":0.5,"align":"center"}}]},{"type":"Rect","props":{"y":0,"x":0,"width":1334,"lineWidth":1,"height":750,"fillColor":"#4c82af"}}]};
		override protected function createChildren():void {
			View.regComponent("Text",Text);
			super.createChildren();
			createView(uiView);
		}
	}
}