/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 

	public class ProgressBarUI extends View {
		public var pro:ProgressBar;
		public var tips:Label;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1084,"height":680},"child":[{"type":"ProgressBar","props":{"y":456,"x":218,"width":640,"var":"pro","skin":"comp/progress.png","sizeGrid":"0,9,0,5","height":14}},{"type":"Image","props":{"y":109,"x":218,"width":640,"skin":"comp/img_poster1.jpg","height":345,"centerX":-4}},{"type":"Label","props":{"y":493,"x":283,"width":512,"var":"tips","text":"游戏正在加载中......","height":28,"fontSize":28,"font":"SimHei","color":"#ffffff","bold":true,"align":"center"}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);
		}
	}
}