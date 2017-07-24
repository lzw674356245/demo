/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 

	public class RadioGroupUI extends View {

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1084,"height":680,"cacheAs":"bitmap"},"child":[{"type":"Box","props":{"x":146,"width":360,"height":380,"centerY":-12},"child":[{"type":"Label","props":{"y":0,"width":282,"visible":true,"text":"默认RadioGroup","height":49,"fontSize":35,"font":"Microsoft YaHei","color":"#f8ff5f","centerX":0,"bold":true}},{"type":"Image","props":{"y":71,"x":0,"width":358,"skin":"comp/img_bg2.png","sizeGrid":"12,16,15,15","height":303}},{"type":"RadioGroup","props":{"y":116,"x":52,"width":254,"space":35,"skin":"comp/radiogroup.png","selectedIndex":0,"labels":"第一人称视角,第三人称视角,角色全部隐藏","labelSize":28,"labelPadding":"8,0,0,20","labelFont":"SimHei","labelColors":"#2850a4,#50d426,#fb7308","labelBold":true,"labelAlign":"center","height":219,"direction":"vertical"}}]},{"type":"Box","props":{"width":360,"height":380,"centerY":-12,"centerX":224},"child":[{"type":"Label","props":{"y":0,"visible":true,"text":"自定义RadioGroup","fontSize":35,"font":"Microsoft YaHei","color":"#f8ff5f","centerX":0,"bold":true}},{"type":"Image","props":{"y":71,"x":0,"width":358,"skin":"comp/img_bg2.png","sizeGrid":"12,16,15,15","height":303}},{"type":"RadioGroup","props":{"y":131,"x":76,"selectedIndex":0},"child":[{"type":"Radio","props":{"y":0,"x":0,"skin":"comp/radio.png","selected":true,"name":"item0","labelSize":25,"labelPadding":"10,0,0,20","labelFont":"SimHei","labelColors":"#2850a4,#50d426,#fb7308","label":"自定义选项1"}},{"type":"Radio","props":{"y":71,"x":0,"skin":"comp/radiogroup.png","name":"item1","labelSize":25,"labelPadding":"10,0,0,20","labelFont":"SimHei","labelColors":"#2850a4,#50d426,#fb7308","label":"自定义选项2"}},{"type":"Radio","props":{"y":137,"x":1,"skin":"comp/checkbox.png","name":"item2","labelSize":25,"labelPadding":"10,0,0,20","labelFont":"SimHei","labelColors":"#2850a4,#50d426,#fb7308","label":"自定义选项3"}}]}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);
		}
	}
}