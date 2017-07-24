/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 

	public class FontClipUI extends View {
		public var fontClip_num:FontClip;
		public var fontClip_year:FontClip;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1084,"height":680,"cacheAs":"normal"},"child":[{"type":"Image","props":{"width":615,"skin":"comp/img_bg.png","sizeGrid":"50,39,50,39","height":275,"centerY":0.5,"centerX":1.5}},{"type":"Image","props":{"y":244,"x":282,"width":527,"skin":"comp/img_bg2.png","sizeGrid":"22,21,26,19","height":200}},{"type":"Label","props":{"y":284,"x":313,"width":216,"text":"FontClip数字：","height":43,"fontSize":30,"font":"Microsoft YaHei","color":"#007adb","bold":true}},{"type":"Label","props":{"y":363,"x":312,"width":216,"text":"FontClip中文：","height":40,"fontSize":30,"font":"Microsoft YaHei","color":"#007adb","bold":true}},{"type":"FontClip","props":{"y":283,"x":557,"var":"fontClip_num","value":"2017","skin":"comp/clip_num.png","sheet":"0123456789"}},{"type":"FontClip","props":{"y":359,"x":559,"var":"fontClip_year","value":"鸡年快乐","skin":"comp/fontClip_year.png","sheet":"鼠牛虎兔龙蛇马羊 猴鸡狗猪年快乐"}},{"type":"FontClip","props":{"y":282,"x":710,"value":"年","skin":"comp/fontClip_year.png","sheet":"鼠牛虎兔龙蛇马羊 猴鸡狗猪年快乐"}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);
		}
	}
}