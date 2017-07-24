package  {
	import laya.events.Event;
	import laya.ui.Box;
	import laya.ui.Button;
	import laya.ui.Label;
	import laya.utils.Handler;
	
	import ui.TestPageUI;
	
	public class ShowAllView extends TestPageUI 
	{
		/***list列表数组***/
		private var nameArr:Array=["Button","Box","BitmapFont","CheckBox","Clip","Dialog","FontClip","HTMLDivText","Image","Label","List",
				"ProgressBar","RadioGroup","ScrollBar","Slider","Tab","TextArea","TextInput","Tree","ViewStack"];
		
		public function ShowAllView()
		{
			
		}
		
		/**页面初始化*****/
		public function init():void
		{
			//为list列表赋值
			list.array=nameArr;
			// 使用但隐藏垂直滚动条
			list.vScrollBarSkin = "";
			//滚动在头或底最大距离
			list.scrollBar.elasticDistance = 100;
			
			//单元格渲染，且绑定数据
			list.renderHandler=new Handler(this,onRender);
			//选择单元格处理回调	
			list.selectHandler=new Handler(this,onSelect);
			//监听打开目标UI事件
			this.event("openUI",nameArr[0]);
		}
			
			
		/**单元格渲染，绑定数据*****/
		private function onRender(cell:Button, index:int):void
		{
			//数据绑定
			cell.label=cell.dataSource;
			//如果当前索引等于选择索引，改变选择状态
			cell.selected=(index==list.selectedIndex);
		}
		
		/**选择单元格处理方法
		 * @param index 当前选择单元格索引
		 */		
		private function onSelect(index:int):void
		{
			//选择后更新选择状态
			list.refresh();
			//更新标题名称
			this.title.text=nameArr[index]+"组件示例效果"
			//发送选择打开的UI
			this.event("openUI",nameArr[index])
		}
	}
}