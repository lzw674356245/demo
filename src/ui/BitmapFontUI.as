/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 

	public class BitmapFontUI extends View {
		public var box:Box;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1084,"height":680},"child":[{"type":"Box","props":{"width":500,"var":"box","height":300,"centerY":0,"centerX":0}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);
		}
	}
}