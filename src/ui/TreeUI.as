/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 

	public class TreeUI extends View {
		public var tree:Tree;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1084,"height":680},"child":[{"type":"Image","props":{"width":385,"skin":"comp/img_bg.png","sizeGrid":"43,39,36,39","height":504,"centerY":0,"centerX":0.5}},{"type":"Box","props":{"y":132,"x":380},"child":[{"type":"Rect","props":{"width":324,"height":416,"fillColor":"#c2e0fb"}}]},{"type":"Tree","props":{"y":132,"x":380,"width":324,"var":"tree","spaceLeft":10,"spaceBottom":5,"scrollBarSkin":"comp/vscroll.png","height":416,"centerY":0,"centerX":0},"child":[{"type":"Box","props":{"renderType":"render"},"child":[{"type":"Clip","props":{"y":0,"x":0,"width":288,"skin":"comp/clip_selectBox.png","name":"selectBox","height":63,"clipY":2}},{"type":"Clip","props":{"y":0,"x":0,"width":64,"skin":"comp/clip_tree_arrow.png","name":"arrow","height":64,"clipY":2}},{"type":"Clip","props":{"y":1,"x":56,"skin":"comp/clip_tree_folder.png","name":"folder","clipY":3}},{"type":"Label","props":{"y":20,"x":148,"width":94,"text":"文件夹","name":"label","height":25,"fontSize":25,"font":"SimHei","color":"#1839a1","bold":true}}]}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);
		}
	}
}