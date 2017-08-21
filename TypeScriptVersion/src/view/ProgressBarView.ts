/*
* name;
*/
class ProgressBarView extends ui.ProgressBarUI{
    progress:number=0;
    constructor(){
        super();
        //进度增加帧循环
		Laya.timer.loop(150,this,this.onLoop);
    }
    onLoop():void{
		//进度增加
		this.progress++;
		//最高100%进度
		if(this.progress>100){
			this.progress=100;
			this.tips.text="游戏加载完毕，即将进入游戏...";
			Laya.timer.clearAll(this);	
		}else{
			this.pro.value=this.progress/100;
			this.tips.text="游戏正在加载中，当前进度为："+this.progress+"%!"
		}
    }
}
