/*
* name;
*/
class ViewStackView extends ui.ViewStackUI{
    constructor(){
        super();
        this.tab.selectHandler=new Laya.Handler(this,this.onSelect);
        this.onSelect(0);
    }

    onSelect(index:number):void{
        this.viewStack.selectedIndex=index;
    }
}