/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 

	public class ListUI extends View {
		public var list:List;
		public var tips:Label;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1084,"height":680},"child":[{"type":"Box","props":{"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"width":600,"skin":"comp/img_bg.png","sizeGrid":"55,48,51,50","height":540}},{"type":"Image","props":{"y":69,"width":558,"skin":"comp/img_bg2.png","sizeGrid":"19,22,16,18","height":446,"centerX":0}},{"type":"List","props":{"y":97,"x":60,"width":493,"var":"list","selectEnable":false,"height":400},"child":[{"type":"Box","props":{"renderType":"render"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":470,"skin":"comp/img_itemBg.png","sizeGrid":"22,19,26,23","height":80}},{"type":"Clip","props":{"x":23,"skin":"comp/clip_rank.png","name":"rank","clipX":10,"centerY":0}},{"type":"Image","props":{"y":8,"x":89,"width":64,"skin":"comp/img_headBg.png","height":64}},{"type":"Clip","props":{"y":10,"x":91,"width":60,"skin":"comp/clip_head.png","name":"head","height":60,"clipX":10}},{"type":"Label","props":{"y":11,"x":182,"visible":true,"text":"昵称:宝贝无敌","name":"userName","fontSize":25,"font":"SimHei","color":"#fff749","bold":false}},{"type":"Label","props":{"y":47,"x":183,"visible":true,"text":"积分:6705","name":"score","fontSize":25,"font":"SimHei","color":"#005570","bold":true}},{"type":"CheckBox","props":{"y":14,"x":389,"skin":"comp/checkbox.png","scaleY":0.8,"scaleX":0.8,"name":"checkBox"}}]},{"type":"VScrollBar","props":{"y":-1,"x":472,"skin":"comp/vscroll.png","showButtons":false,"name":"scrollBar"}}]},{"type":"Label","props":{"y":13,"width":140,"visible":true,"var":"tips","text":"积分排名","strokeColor":"#0143b9","stroke":5,"height":50,"fontSize":35,"font":"Microsoft YaHei","color":"#e1ff08","centerX":0,"bold":true}}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);
		}
	}
}