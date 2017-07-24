package view
{
	
	import laya.events.Event;
	
	import ui.ClipUI;
	
	public class ClipView extends ClipUI
	{
		/**积分数**/
		private var score:int=0;
		
		public function ClipView()
		{
			//积发增加帧循环
			Laya.timer.loop(150,this,onLoop);
		}
		
		private function onLoop():void
		{
			//积分增加
			score++;
			//clip个位
			this.clip1.index=score%100%10;
			//clip十位
			this.clip2.index=parseInt(score%100/10);
			//clip百位
			this.clip3.index=parseInt(score/100);
			
			
			//重新开始
			if(score>240) score=0;
			
			//切片更新，图标上阶位更新
			this.clip_step.index=parseInt(score/30);
			
			//提示更新
			this.tips.text='恭喜您段位达到了“传说'+(clip_step.index+1)+'阶”！！';
		}
	}
}