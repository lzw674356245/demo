/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 

	public class TextAreaUI extends View {
		public var textArea:TextArea;
		public var tips:Label;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1084,"height":680},"child":[{"type":"Box","props":{"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"width":642,"skin":"comp/img_bg.png","sizeGrid":"62,51,62,47","height":441}},{"type":"Image","props":{"y":82,"width":579,"skin":"comp/img_bg2.png","sizeGrid":"15,16,17,15","height":314,"centerX":0}},{"type":"TextArea","props":{"y":101,"wordWrap":true,"width":545,"var":"textArea","vScrollBarSkin":"comp/vscroll.png","multiline":true,"leading":5,"height":277,"fontSize":20,"font":"SimHei","editable":false,"color":"#054adb","centerX":0,"align":"left"}},{"type":"Label","props":{"y":15,"x":208,"width":232,"var":"tips","underlineColor":"#06e1ff","text":"LayaAir引擎介绍","strokeColor":"#1f4cc1","stroke":8,"leading":5,"height":50,"fontSize":30,"font":"Microsoft YaHei","color":"#9ee3ff","bold":true}}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);
		}
	}
}