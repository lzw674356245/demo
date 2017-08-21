/*
* name;
*/
class TabView extends ui.TabUI{
    constructor(){
        super();
        //选择时处理
		this.tab.selectHandler=new Laya.Handler(this,this.onSelect);
		//默认选择项目处理
		this.onSelect(this.tab.selectedIndex);
    }
    //选择处理器
	onSelect(index:number):void{
		//还原所有按钮宽度
		for(var i:number=0;i<this.tab._childs.length;i++){
			this.tab._childs[i].width=210;
			//被选择的按钮加宽
			if(i==index){
				this.tab._childs[i].width=250;
			}
		}
	}
}