/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 

	public class SliderUI extends View {
		public var btn_play:Button;
		public var txt_time:Label;
		public var singName:Label;
		public var hSlider:HSlider;
		public var vSlider:VSlider;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1084,"height":680},"child":[{"type":"Box","props":{"width":598,"height":160,"centerY":-10,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":596,"skin":"comp/img_bg.png","sizeGrid":"30,36,30,38","height":155}},{"type":"Button","props":{"y":35,"x":20,"var":"btn_play","toggle":true,"skin":"comp/btn_play.png","selected":true}},{"type":"Image","props":{"y":33,"x":135,"width":400,"skin":"comp/img_bg2.png","sizeGrid":"15,19,18,18","height":57}},{"type":"Label","props":{"y":49,"x":387,"width":136,"var":"txt_time","text":"00:00/--:--","height":26,"fontSize":25,"font":"Arial","color":"#234a9c","bold":true}},{"type":"Label","props":{"y":49,"x":153,"width":192,"var":"singName","text":"游戏背景音乐","height":26,"fontSize":25,"font":"SimHei","color":"#9c3623","bold":true}},{"type":"HSlider","props":{"y":111,"x":134,"width":400,"var":"hSlider","skin":"comp/hslider.png","sizeGrid":"19,14,20,16","showLabel":false,"min":0,"max":100,"height":50}}]},{"type":"VSlider","props":{"y":245,"x":962,"width":40,"var":"vSlider","value":100,"skin":"comp/vslider.png","sizeGrid":"12,0,11,0","showLabel":false,"min":100,"max":-50,"height":161}},{"type":"Label","props":{"y":252,"x":883,"wordWrap":true,"width":27,"valign":"middle","text":"音量调节","leading":5,"height":109,"fontSize":25,"font":"SimHei","color":"#ffffff"}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);
		}
	}
}