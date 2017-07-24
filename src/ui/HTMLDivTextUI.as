/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 
	import laya.html.dom.HTMLDivElement;

	public class HTMLDivTextUI extends View {

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1084,"height":680,"cacheAs":"bitmap"},"child":[{"type":"HTMLDivElement","props":{"y":221,"x":303,"width":523,"innerHTML":"<span style='color:#FFFF00;font-size:30px;font-weight:bold'>HTMLDivElement</span> <span  style='color:#ea9b25;font-size:30px;font-weight:bold'>创建的</span> <span  style='color:#01e854;font-size:40px;font-weight:bold'>HTML</span> <span  style='color:#ea9b25;font-size:30px;font-weight:bold'>文本</span>","height":54}},{"type":"HTMLDivElement","props":{"y":338,"x":264,"width":600,"innerHTML":"\t<span  style='color:#FFFF00;font-size:30px;font-weight:bold'>HTMLDivElement</span> \t<img src='comp/img_face.png' style='width:40px; height:40px'></img> \t<span style='color:#6ad2e3;font-weight:bold;font-size:40px;font-family:黑体;'>图文混排</span> \t<img src='comp/img_face.png' style='width:40px; height:40px'></img> \t<span  style='color:#FFFF00;font-size:30px;font-weight:bold'>效果!!!!</span>","height":49}}]};
		override protected function createChildren():void {
			View.regComponent("HTMLDivElement",HTMLDivElement);
			super.createChildren();
			createView(uiView);
		}
	}
}