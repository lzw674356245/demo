package view
{
	import laya.ui.Button;
	import laya.utils.Handler;
	
	import ui.TabUI;
	
	public class TabView extends TabUI
	{
		public function TabView()
		{
			//选择时处理
			this.tab.selectHandler=new Handler(this,onSelect);
			//默认选择项目处理
			onSelect(this.tab.selectedIndex);
		}
		
		//选择处理器
		private function onSelect(index:int):void
		{
			//还原所有按钮宽度
			for(var i:int=0;i<this.tab._childs.length;i++)
			{
				this.tab._childs[i].width=210;
				//被选择的按钮加宽
				if(i==index)
				{
					this.tab._childs[i].width=250;
				}
			}
		}
	}
}