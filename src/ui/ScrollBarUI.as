/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 

	public class ScrollBarUI extends View {
		public var panel1:Panel;
		public var panel2:Panel;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1084,"height":680},"child":[{"type":"Label","props":{"y":101,"x":263,"visible":true,"text":"默认滚动条示例","fontSize":25,"font":"SimHei","color":"#f8ff5f","bold":true}},{"type":"Label","props":{"y":101,"x":595,"visible":true,"text":"滚动条隐藏及橡皮筋效果","fontSize":25,"font":"SimHei","color":"#f8ff5f","bold":true}},{"type":"Rect","props":{"y":157,"x":195,"width":320,"lineWidth":2,"lineColor":"#3594e0","height":450,"fillColor":"#f3f4f4"}},{"type":"Panel","props":{"y":174,"x":216,"width":280,"var":"panel1","vScrollBarSkin":"comp/vscroll.png","height":420,"hScrollBarSkin":"comp/hscroll.png"},"child":[{"type":"Image","props":{"y":0,"x":-5,"skin":"comp/img_poster.jpg"}},{"type":"Image","props":{"y":508,"x":-5,"skin":"comp/img_poster.jpg"}}]},{"type":"Panel","props":{"y":170,"x":596,"width":280,"var":"panel2","height":420},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"comp/img_poster.jpg"}}]},{"type":"Rect","props":{"y":157,"x":575,"width":320,"lineWidth":2,"lineColor":"#3594e0","height":450,"fillColor":"#ffffff"}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);
		}
	}
}