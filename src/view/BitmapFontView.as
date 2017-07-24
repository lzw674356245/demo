package view
{
	import laya.display.BitmapFont;
	import laya.display.Text;
	import laya.utils.Handler;
	
	import ui.BitmapFontUI;
	
	public class BitmapFontView extends BitmapFontUI
	{
		private var mFontName:String = "LayaFont";
		private var mFontName1:String = "LayaFont1";
		private var mBitmapFont:BitmapFont;
		private var mBitmapFont1:BitmapFont;
		
		public function BitmapFontView()
		{
			mBitmapFont = new BitmapFont();
			//加载位图字体需要的资源
			mBitmapFont.loadFont("font/FontTest.fnt", Handler.create(this, onLoaded));
			
			mBitmapFont1=new BitmapFont();
			//加载位图字体需要的资源
			mBitmapFont1.loadFont("font/FontTest1.fnt", Handler.create(this, onLoaded1));
		}
		
		private function onLoaded1():void
		{
			//设置文字间距
			mBitmapFont1.setSpaceWidth(10);
			//注册位图字体
			Text.registerBitmapFont(mFontName1, mBitmapFont1);
			
			var txt1:Text = new Text();
			txt1.text = "LayaBox位图字体1测试";
			//设置宽度，高度自动匹配
			txt1.width = 500;
			txt1.align = "center";
			//使用我们注册的字体
			txt1.font = this.mFontName1;
			//字体大小在此修改无用，需创建位图字体时设置 
			txt1.fontSize = 100; 
			txt1.y=100;
			this.box.addChild(txt1);
			
		}
		
		private function onLoaded():void
		{
			//设置文字间距
			mBitmapFont.setSpaceWidth(10);
			//注册位图字体
			Text.registerBitmapFont(mFontName, mBitmapFont);
			
			var txt:Text = new Text();
			txt.text = "LayaBox位图字体测试";
			//设置宽度，高度自动匹配
			txt.width = 500;
			txt.align = "center";
			//使用我们注册的字体
			txt.font = this.mFontName;
			//字体大小在此修改无用，需创建位图字体时设置 
			txt.fontSize = 100;
			this.box.addChild(txt);
		}
	}
}