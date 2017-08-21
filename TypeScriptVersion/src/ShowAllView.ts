

class ShowAllView extends ui.TestPageUI {

	    nameArr:any=["Button","Box","BitmapFont","CheckBox","Clip","Dialog","FontClip","HTMLDivText","Image","Label","List",
				"ProgressBar","RadioGroup","ScrollBar","Slider","Tab","TextArea","TextInput","Tree","ViewStack"];
     	constructor() {
		    super();
	
       	}
		/**页面初始化*****/
		init():void{
			//为list列表赋值
			this.list.array=this.nameArr;
			// 使用但隐藏垂直滚动条
			this.list.vScrollBarSkin = "";
			//滚动在头或底最大距离
			this.list.scrollBar.elasticDistance = 100;
			
			//单元格渲染，且绑定数据
			this.list.renderHandler=new Laya.Handler(this,this.onRender);
			//选择单元格处理回调	
			this.list.selectHandler=new Laya.Handler(this,this.onSelect);
			//监听打开目标UI事件
			this.event("openUI",this.nameArr[0]);
		}	/**单元格渲染，绑定数据*****/

		onRender(cell:Laya.Button, index:number):void{
			//数据绑定
			cell.label=cell.dataSource;
			//如果当前索引等于选择索引，改变选择状态
			cell.selected=(index==this.list.selectedIndex);
		}
		
		/**选择单元格处理方法
		 * @param index 当前选择单元格索引
		 */		
		onSelect(index:number):void{
			//选择后更新选择状态
			this.list.refresh();
			//更新标题名称
			this.title.text=this.nameArr[index]+"组件示例效果"
			//发送选择打开的UI
			this.event("openUI",this.nameArr[index])
		}
}	