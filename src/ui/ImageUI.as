/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 

	public class ImageUI extends View {
		public var tips:Label;
		public var tips:Label;
		public var tips:Label;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1084,"height":680,"cacheAs":"bitmap"},"child":[{"type":"Image","props":{"y":174,"x":165,"width":225,"skin":"comp/img_poster.jpg","height":376}},{"type":"Label","props":{"y":105,"x":187,"visible":true,"var":"tips","text":"默认Image图片","fontSize":25,"font":"SimHei","color":"#f8ff5f","bold":true}},{"type":"Label","props":{"y":105,"x":474,"visible":true,"var":"tips","text":"Image九宫格拉伸1","fontSize":25,"font":"SimHei","color":"#f8ff5f","bold":true}},{"type":"Label","props":{"y":105,"x":773,"visible":true,"var":"tips","text":"Image九宫格拉伸2","fontSize":25,"font":"SimHei","color":"#f8ff5f","bold":true}},{"type":"Image","props":{"y":178,"x":472,"width":207,"skin":"comp/img_bg1.png","sizeGrid":"70,35,38,39","height":373}},{"type":"Image","props":{"y":175,"x":770,"width":218,"skin":"comp/img_bg3.png","sizeGrid":"37,37,38,37,1","height":377}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);
		}
	}
}