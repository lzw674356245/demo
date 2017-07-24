package view
{
	import laya.events.Event;
	import laya.ui.Box;
	import laya.ui.Button;
	import laya.utils.Handler;
	
	import ui.ComboBoxUI;
	
	public class ComboBoxView extends ComboBoxUI
	{
		/***自定义list数据（与comboBox的labels相对应）****/
		private var listData:Array=[{label:"item0"},{label:"item1"},{label:"item2"},{label:"item3"}]
		
		public function ComboBoxView()
		{
			//自定义list赋值
			this.myList.array=listData;
			//自定义list单元格渲染
			this.myList.renderHandler=new Handler(this,onRender);
			//自定义list单元格选择
			this.myList.selectHandler=new Handler(this,onSelect);
			
			//用自定议list替换组件中list
			this.comboBox1.list=this.myList;
			
		}
		
		/****自定义list单元格渲染****/
		private function onRender(cell:Box,index:int):void
		{
			//为单元格中按钮赋值
			var button:Button=cell.getChildByName("button") as Button;
			button.label=listData[index].label;
			
			//如果单元格与选择的单元格索引相同，则选择项为true
			button.selected=(index==this.myList.selectedIndex);
		}
		
		/****选择list单元格渲染****/
		private function onSelect(index:int):void
		{
			//点击选择后会更新selectedIndex属性
			//然后刷新数据，执行renderhandler回调
			myList.refresh();
		}
	}
}