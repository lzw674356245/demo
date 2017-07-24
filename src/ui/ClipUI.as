/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 

	public class ClipUI extends View {
		public var clip_step:Clip;
		public var tips:Label;
		public var clip3:Clip;
		public var clip2:Clip;
		public var clip1:Clip;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1084,"height":680,"cacheAs":"normal"},"child":[{"type":"Box","props":{"width":414,"height":387,"centerY":-19.5,"centerX":0},"child":[{"type":"Image","props":{"y":127,"x":31,"width":350,"skin":"comp/img_steps.png","height":230}},{"type":"Clip","props":{"y":304,"x":141,"skin":"comp/clip_steps.png","index":10,"clipX":13}},{"type":"Clip","props":{"y":307,"x":234,"width":48,"var":"clip_step","skin":"comp/clip_stepsNum.png","interval":500,"index":0,"height":44,"clipX":9}},{"type":"Label","props":{"y":58,"x":29,"visible":true,"var":"tips","text":"恭喜您段位达到了“传说1阶”！","fontSize":25,"font":"SimHei","color":"#5ff2ff","bold":true}},{"type":"Box","props":{"y":3,"x":29},"child":[{"type":"Label","props":{"y":3,"text":"积分正在增长中：","fontSize":30,"font":"SimHei","color":"#ffffff","bold":true}},{"type":"Clip","props":{"y":-9,"x":238,"var":"clip3","skin":"comp/clip_num.png","clipX":10}},{"type":"Clip","props":{"y":-9,"x":273,"var":"clip2","skin":"comp/clip_num.png","clipX":10}},{"type":"Clip","props":{"y":-9,"x":309,"var":"clip1","skin":"comp/clip_num.png","clipX":10}}]}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);
		}
	}
}