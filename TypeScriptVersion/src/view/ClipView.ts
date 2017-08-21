/**
* name 
*/
class ClipView extends ui.ClipUI{
	    score:number=0;
		constructor(){
			super();
			//积分增加帧循环
			Laya.timer.loop(150,this,this.onLoop);
		}
		
        onLoop():void{
						//积分增加
			this.score++;
			//clip个位
			this.clip1.index=parseInt(this.score%100%10);
			//clip十位
			this.clip2.index=parseInt((this.score)%100/10);
			//clip百位
			this.clip3.index=parseInt((this.score)/100);
			
			
			//重新开始
			if(this.score>240) this.score=0;
			
			//切片更新，图标上阶位更新
			this.clip_step.index=parseInt(this.score/30);
			
			//提示更新
			this.tips.text='恭喜您段位达到了“传说'+(this.clip_step.index+1)+'阶”！！';
		}

}