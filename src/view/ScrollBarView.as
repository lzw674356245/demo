package view
{
	import ui.ScrollBarUI;
	
	public class ScrollBarView extends ScrollBarUI
	{
		public function ScrollBarView()
		{
			
			//为第二个容器panel2代码方式创建滚动条
			//创建隐藏的横向滚动条
			this.panel2.hScrollBarSkin="";
			//横向滚动条橡皮筋回弹时间
			this.panel2.hScrollBar.elasticBackTime=100;
			//横向滚动条橡皮筋最大距离
			this.panel2.hScrollBar.elasticDistance=100;
			
			//创建隐藏的纵向滚动条
			this.panel2.vScrollBarSkin="";
			//纵向滚动条橡皮筋回弹时间
			this.panel2.vScrollBar.elasticBackTime=100;
			//纵向滚动条橡皮筋最大距离
			this.panel2.vScrollBar.elasticDistance=100;

		}
	}
}