/*
* name;
*/
class DialogView extends ui.DialogUI{
    constructor(){
        super();
        //实例化提示信息管理类，否则无法产生提示
		var tip:Laya.TipManager=new Laya.TipManager();
		//动画方式打开对话框
		this.popup();
		//在对话框中，鼠标可点击触发拖动的区域
		this.dragArea="0,0,500,60";
		//提示信息
		this.toolTip="左键点击标题栏可以进行拖动！"
				
		//点击关闭按钮	
		this.btn_close.on(Laya.Event.MOUSE_UP,this,this.onClose)
    }
    onClose():void{
			//动画关闭对话框
			this.close();
		}
}