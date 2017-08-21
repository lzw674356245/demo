/*
* name;
*/
class ListView extends ui.ListUI{
    //列表数据
	data:any = [  {rank:0,head:1,userName:"昵称:宝贝无敌",score:"积分:8900",checkBox:false},
					{rank:1,head:0,userName:"昵称:我是大将军",score:"积分:7560",checkBox:false},
					{rank:2,head:7,userName:"昵称:霹雳先生",score:"积分:7035",checkBox:false},
					{rank:3,head:3,userName:"昵称:爱我雪球",score:"积分:6822",checkBox:false},
					{rank:4,head:5,userName:"昵称:智商无限",score:"积分:6124",checkBox:false},
					{rank:5,head:6,userName:"昵称:亲亲爱爱",score:"积分:5300",checkBox:false},
					{rank:6,head:4,userName:"昵称:为所欲为",score:"积分:5050",checkBox:false},
					{rank:7,head:9,userName:"昵称:哈哈哈嘻哈",score:"积分:4953",checkBox:false},
					{rank:8,head:2,userName:"昵称:穿越大军",score:"积分:4822",checkBox:false},
					{rank:9,head:8,userName:"昵称:战无不胜",score:"积分:4563",checkBox:false}];
    constructor(){
        super();
        this.list.array=this.data;
		//滚动在头或底回弹时间
		this.list.scrollBar.elasticBackTime = 150;
		//滚动在头或底最大距离
		this.list.scrollBar.elasticDistance = 100;
		//滚动条缩放变窄
		this.list.scrollBar.scaleX=.8;
			
		//单元格渲染（在list刷新时触发，例如滚动时）
		this.list.renderHandler=new Laya.Handler(this,this.onRender);
			
		//单元格鼠标事件
        this.list.mouseHandler=new Laya.Handler(this,this.onMouse);
		//list.mouseHandler=new Handler(this,onMouse);
	}
	/**
	 * 单元格渲染
	* @param cell   渲染的单元格
    * @param index  数组的索引编号（单元格编号）
	*/		
	onRender(cell:Laya.Box,index:number):void{

		//从单元格中获取checkBox组件（需在IDE中将该组件名字取名为"checkBox"才行）
		var checkBox:Laya.CheckBox=cell.getChildByName("checkBox") as Laya.CheckBox;
		//绑定数据(list在滚动时会即时从array中刷新数据)
		checkBox.selected=this.data[index].checkBox;
	}
		
		
	/**
	* 单元格点击事件
	* @param e  触发的事件
	* @param index   触发事件的单元格编号
     */		
	onMouse(e:Event,index:number):void{

		//如果点击的对象是CheckBox类型
		if(e.target instanceof Laya.CheckBox) {
		    var checkBox:Laya.CheckBox=e.target as Laya.CheckBox;
		    //修改单元可数据为是否选择
		    //注：直接修改对象属性是无效的，一定是修改数据才行，list是通过数据去驱动属性
			this.data[index].checkBox=!checkBox.selected;
		}
			 
		//刷新数据列表(引擎会自动调用onRender渲染单元格)
		this.list.refresh();
	}	
}