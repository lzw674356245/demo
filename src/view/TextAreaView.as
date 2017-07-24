package view
{
	import laya.net.Loader;
	import laya.utils.Handler;
	
	import ui.TextAreaUI;
	
	public class TextAreaView extends TextAreaUI
	{
		public function TextAreaView()
		{
			this.textArea.text=Loader.getRes("layaair.txt");
			this.textArea.vScrollBar.scrollSize=50;
		}
	}
}