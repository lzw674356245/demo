/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 

	public class CheckBoxUI extends View {

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1084,"height":680,"cacheAs":"bitmap"},"child":[{"type":"Box","props":{"centerY":-10,"centerX":10},"child":[{"type":"CheckBox","props":{"y":0,"x":0,"skin":"comp/checkbox.png","labelSize":30,"labelPadding":"16,0,0,20","labelFont":"SimHei","labelColors":"#ffffff,#f7fd74,#ff8c05","labelBold":true,"label":"默认复选框"}},{"type":"CheckBox","props":{"y":125,"x":0,"skin":"comp/checkbox.png","selected":true,"labelSize":30,"labelPadding":"16,0,0,20","labelFont":"SimHei","labelColors":"#ffffff,#f7fd74,#ff8c05","labelBold":true,"label":"Selected复选框"}},{"type":"CheckBox","props":{"y":0,"x":358,"skin":"comp/checkbox.png","labelSize":30,"labelPadding":"16,0,0,20","labelFont":"SimHei","labelColors":"#057d31","labelBold":true,"label":"Desabled复选框","disabled":true}},{"type":"CheckBox","props":{"y":125,"x":358,"skin":"comp/checkbox.png","labelSize":30,"labelPadding":"16,0,0,20","labelFont":"SimHei","labelColors":"#057d31","labelBold":true,"label":"Gray复选框","gray":true}}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);
		}
	}
}