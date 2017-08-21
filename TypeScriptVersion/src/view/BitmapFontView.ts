/*
* name;
*/
class BitmapFontView extends ui.BitmapFontUI{
        mFontName:string = "LayaFont";
        mFontName1:string = "LayaFont1";
        mBitmapFont:Laya.BitmapFont;
        mBitmapFont1:Laya.BitmapFont;
		
		constructor(){
            super();
			this.mBitmapFont = new Laya.BitmapFont();
			//加载位图字体需要的资源
			this.mBitmapFont.loadFont("font/FontTest.fnt", Laya.Handler.create(this, this.onLoaded));
			
			this.mBitmapFont1=new Laya.BitmapFont();
			//加载位图字体需要的资源
			this.mBitmapFont1.loadFont("font/FontTest1.fnt", Laya.Handler.create(this, this.onLoaded1));
		}
		
		onLoaded1():void{
			//设置文字间距
			this.mBitmapFont1.setSpaceWidth(10);
			//注册位图字体
			Laya.Text.registerBitmapFont(this.mFontName1,this. mBitmapFont1);
			
			var txt1= new Laya.Text();
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
		
		onLoaded():void{
			//设置文字间距
			this.mBitmapFont.setSpaceWidth(10);
			//注册位图字体
			Laya.Text.registerBitmapFont(this.mFontName, this.mBitmapFont);
			
			var txt= new Laya.Text();
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