/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 

	public class TextInputUI extends View {
		public var tips:Label;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1084,"height":680},"child":[{"type":"Box","props":{"x":242,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":597,"skin":"comp/img_bg1.png","sizeGrid":"65,34,36,32","height":378}},{"type":"TextInput","props":{"y":105,"width":500,"valign":"middle","skin":"comp/img_bg2.png","sizeGrid":"24,16,24,22","prompt":"普通文本输入","leading":8,"height":60,"fontSize":25,"font":"SimHei","editable":true,"centerX":2.5}},{"type":"Label","props":{"y":5,"width":140,"visible":true,"var":"tips","text":"文本输入","strokeColor":"#fdfdfd","stroke":3,"height":51,"fontSize":35,"font":"Microsoft YaHei","color":"#047800","centerX":10.5,"bold":true}},{"type":"Button","props":{"y":5,"stateNum":"2","skin":"comp/btn_close.png","right":24}},{"type":"TextInput","props":{"y":184,"width":500,"valign":"middle","type":"password","skin":"comp/img_bg2.png","sizeGrid":"24,16,24,22","prompt":"密码文本输入","padding":"10,10,10,10,10","leading":8,"height":62,"fontSize":25,"font":"SimHei","editable":true,"centerX":3.5}},{"type":"TextInput","props":{"y":264,"wordWrap":false,"width":500,"valign":"middle","type":"number","skin":"comp/img_bg2.png","sizeGrid":"24,16,24,22","prompt":"数字文本输入","padding":"10,10,10,10,10","height":62,"fontSize":25,"font":"SimHei","editable":true,"centerX":5.5}}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);
		}
	}
}