/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 

	public class ButtonUI extends View {

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"y":0,"x":0,"width":1084,"height":680,"cacheAs":"bitmap"},"child":[{"type":"Box","props":{"centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":0,"x":0,"width":250,"skin":"comp/button.png","sizeGrid":"22,27,37,29","labelSize":30,"labelPadding":"0,0,2,0","labelFont":"SimHei","labelColors":"#057d31","label":"默认按钮","height":80}},{"type":"Button","props":{"y":0,"x":342,"width":250,"toggle":true,"skin":"comp/button.png","sizeGrid":"22,27,37,29","labelSize":30,"labelPadding":"0,0,2,0","labelFont":"SimHei","labelColors":"#057d31","label":"Toggle按钮","height":80}},{"type":"Button","props":{"y":109,"x":342,"width":250,"toggle":true,"skin":"comp/button.png","sizeGrid":"22,27,37,29","labelSize":30,"labelPadding":"0,0,2,0","labelFont":"SimHei","labelColors":"#057d31","label":"Disabled按钮","height":80,"disabled":true}},{"type":"Button","props":{"y":218,"x":342,"width":250,"skin":"comp/button.png","sizeGrid":"22,27,37,29","labelSize":30,"labelPadding":"0,0,2,0","labelFont":"SimHei","labelColors":"#057d31","label":"Gray按钮","height":80,"gray":true}},{"type":"Button","props":{"y":109,"x":0,"width":250,"skin":"comp/button.png","sizeGrid":"22,27,37,29","labelStrokeColor":"#ffffff","labelStroke":2,"labelSize":30,"labelPadding":"0,0,2,0","labelFont":"SimHei","labelColors":"#057d31","label":"描边按钮","height":80}},{"type":"Button","props":{"y":218,"x":0,"width":250,"skin":"comp/button.png","sizeGrid":"22,27,37,29","labelSize":30,"labelPadding":"0,0,2,20","labelFont":"SimHei","labelColors":"#057d31","label":"图标按钮","height":80},"child":[{"type":"Image","props":{"y":19,"x":31,"width":46,"skin":"comp/img_icon.png","height":39}}]}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);
		}
	}
}