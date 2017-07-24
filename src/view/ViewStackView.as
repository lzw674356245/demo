package view
{
	import laya.utils.Handler;
	
	import ui.ViewStackUI;
	
	public class ViewStackView extends ViewStackUI
	{
		public function ViewStackView()
		{
			this.tab.selectHandler=new Handler(this,onSelect);
			onSelect(this.tab.selectedIndex);
		}
		private function onSelect(index:int):void
		{
			this.viewStack.selectedIndex=index
		}
	}
}