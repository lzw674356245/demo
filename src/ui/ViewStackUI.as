/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 

	public class ViewStackUI extends View {
		public var tab:Tab;
		public var viewStack:ViewStack;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1084,"height":680,"cacheAs":"bitmap"},"child":[{"type":"Box","props":{"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":578,"skin":"comp/img_bg.png","sizeGrid":"60,51,50,51","height":411}},{"type":"Image","props":{"y":74,"x":27,"width":525,"skin":"comp/img_bg2.png","sizeGrid":"15,16,17,15","height":304}},{"type":"Tab","props":{"y":35,"x":41,"var":"tab","space":0,"skin":"comp/tab_1.png","selectedIndex":0,"labels":"雪人,糖罐,绿树","labelSize":18,"labelPadding":"0,0,0,-3","labelColors":"#31ffcd,#0445a6","labelBold":true,"direction":"horizontal"}},{"type":"ViewStack","props":{"y":138,"x":127,"var":"viewStack"},"child":[{"type":"Box","props":{"y":10,"x":6,"name":"item0"},"child":[{"type":"Image","props":{"y":0,"x":26,"skin":"comp/img_snowman.png","name":"item0"}},{"type":"Label","props":{"y":19,"x":196,"width":45,"text":"雪人","height":16,"fontSize":20,"font":"SimHei","color":"#ff0905","bold":true}},{"type":"Label","props":{"y":48,"x":196,"wordWrap":true,"width":117,"text":"雪人中藏着让人疯狂的大礼包，击毁它，有一定机率获得，看您的运气了！！","leading":3,"height":99,"fontSize":16,"font":"SimHei","color":"#067bbc"}}]},{"type":"Box","props":{"y":8,"x":11,"name":"item1"},"child":[{"type":"Image","props":{"y":0,"x":-11,"skin":"comp/img_sweets.png","name":"item1"}},{"type":"Label","props":{"y":19,"x":189,"width":45,"text":"糖罐","height":16,"fontSize":20,"font":"SimHei","color":"#ff0905","bold":true}},{"type":"Label","props":{"y":48,"x":189,"wordWrap":true,"width":117,"text":"如果您遇到它，恭喜您可以得到大量的体力了，它让您的攻击时间大大的加长!","leading":3,"height":99,"fontSize":16,"font":"SimHei","color":"#067bbc"}}]},{"type":"Box","props":{"x":1,"name":"item2"},"child":[{"type":"Image","props":{"y":0,"x":4,"width":146,"skin":"comp/img_tree.png","name":"item2","height":204}},{"type":"Label","props":{"y":26,"x":198,"width":45,"text":"绿树","height":16,"fontSize":20,"font":"SimHei","color":"#ff0905","bold":true}},{"type":"Label","props":{"y":55,"x":198,"wordWrap":true,"width":117,"text":"周边有敌人，但您的血量很少的时候，赶快躲到它后面去吧，暂时是一个安全港湾！","leading":3,"height":99,"fontSize":16,"font":"SimHei","color":"#067bbc"}}]}]}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);
		}
	}
}