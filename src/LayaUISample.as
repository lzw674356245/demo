package {
	import laya.debug.DebugPanel;
	import laya.debug.view.nodeInfo.nodetree.DebugPage;
	import laya.display.Stage;
	import laya.net.Loader;
	import laya.ui.Dialog;
	import laya.ui.View;
	import laya.utils.ClassUtils;
	import laya.utils.Handler;
	import laya.webgl.WebGL;
	
	//无自写代码UI,由IDE生成。本项目中需手动导入，因为是动态生成类名
	import ui.BoxUI;
	import ui.ButtonUI;
	import ui.CheckBoxUI;
	import ui.HTMLDivTextUI;
	import ui.ImageUI;
	import ui.LabelUI;
	import ui.RadioGroupUI;
	import ui.TextInputUI;
	import ui.TestAllUI;
	
	//自写代码UI，本项目中需手动导入，因为是动态生成类名
	import view.BitmapFontView;
	import view.ClipView;
	import view.DialogView;
	import view.FontClipView;
	import view.ListView;
	import view.ProgressBarView;
	import view.ScrollBarView;
	import view.SliderView;
	import view.TabView;
	import view.TextAreaView;
	import view.TreeView;
	import view.ViewStackView;

	
	public class LayaUISample 
	{
		private var assetArr:Array=[{url: "res/atlas/comp.json", type: Loader.ATLAS},
									{url: "comp/cake.png"},
									{url: "comp/clip_head.png"},
									{url: "comp/clip_steps.png"},
									{url: "comp/clip_stepsNum.png"},
									{url: "layaair.txt"},
									{url: "res/bg_0.mp3"}]
		
		/**当前已打开的UI*/
		private var currentUI:View
		
		public function LayaUISample() 
		{
			//初始化引擎
			Laya.init(1334, 750, WebGL);
//			DebugPanel.init();
			//画布垂直居中对齐
			Laya.stage.alignV = Stage.ALIGN_MIDDLE;
			//画布水平居中对齐
			Laya.stage.alignH = Stage.ALIGN_CENTER;
			//等比缩放
			Laya.stage.scaleMode = Stage.SCALE_EXACTFIT;
			//自动横屏，游戏的水平方向始终与浏览器屏幕较短边保持垂直
			Laya.stage.screenMode = "horizontal";
			//背景颜色
//			Laya.stage.bgColor = "#232628";
			
			//加载引擎需要的资源
			Laya.loader.load(assetArr, Handler.create(this, onLoaded));
		}
		
		/**资源加载完成，创建主UI*/	
		private function onLoaded():void
		{
			
			//实例UI界面
			var testView:ShowAllView = new ShowAllView();
			//加载到舞台
			Laya.stage.addChild(testView);
			//监听打开目标UI事件
			testView.on("openUI",this,onOpenUI);
			//页面初始化
			testView.init();

		}
		
		/**打开指定的UI*/		
		private function onOpenUI(uiName:String):void
		{
			//根据指定的UI名称实例化UI
			var openUI:*
			var UIClass:*=ClassUtils.getClass("view."+uiName+"View")

			//如果找到此类
			if(UIClass)
			{
				openUI=new UIClass();
			}else
			{
				openUI=ClassUtils.getInstance("ui."+uiName+"UI");
			}

			//如果为空，返回
			if(!openUI) return;
			
			//移除当前打开的UI
			if(currentUI!=null)
			{ 
				currentUI.removeSelf();
				currentUI.destroy();
			}
			 
			//更新当前打开的UI
			currentUI=openUI;
			
			//如果UI是Dialog类型的，不需要设置位置和加载到舞台，用Dialog自己的方法动画打开
			if(openUI is DialogView) return;
			
			//设置位置
			openUI.pos(250,80);
			//加载新UI到舞台
			Laya.stage.addChild(openUI);

		}
	}
}