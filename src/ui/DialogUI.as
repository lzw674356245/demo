/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 

	public class DialogUI extends Dialog {
		public var btn_close:Button;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"Dialog","props":{"width":500,"height":400,"cacheAs":"bitmap"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":500,"skin":"comp/img_bg.png","sizeGrid":"55,48,51,50","height":400}},{"type":"Image","props":{"y":76,"width":464,"skin":"comp/img_bg2.png","sizeGrid":"19,22,16,18","height":278,"centerX":0}},{"type":"Label","props":{"y":8,"width":223,"visible":true,"text":"Dialog对话框","strokeColor":"#0143b9","stroke":5,"height":50,"fontSize":35,"font":"Microsoft YaHei","color":"#e1ff08","centerX":-2.5,"bold":true}},{"type":"Button","props":{"y":15,"x":431,"var":"btn_close","stateNum":"2","skin":"comp/btn_close.png","name":"btn_close"}},{"type":"Label","props":{"y":107,"x":42,"wordWrap":true,"width":419,"text":"    Dialog 组件是一个弹出对话框，实现对话框弹出，拖动，模式窗口功能。 可以通过UIConfig设置弹出框背景透明度，模式窗口点击边缘是否关闭等。 \\n    通过设置zOrder属性，可以更改弹出的层次，通过设置manager.popupEffect和manager.closeEffect可以设置弹出效果和关闭效果。","leading":10,"height":214,"fontSize":20,"font":"SimHei","color":"#2d63c3","bold":true,"align":"left"}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);
		}
	}
}