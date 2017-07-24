package view
{
	import ui.ProgressBarUI;
	
	public class ProgressBarView extends ProgressBarUI
	{
		private var progress:int=0;
		
		public function ProgressBarView()
		{
			//进度增加帧循环
			Laya.timer.loop(150,this,onLoop);
		}
		
		private function onLoop():void
		{
			//进度增加
			progress++;
			//最高100%进度
			if(progress>100)
			{
				progress=100;
				this.tips.text="游戏加载完毕，即将进入游戏..."
				Laya.timer.clearAll();
				
			}else
			{
				this.pro.value=progress/100;
				this.tips.text="游戏正在加载中，当前进度为："+progress+"%!"
			}

		}
	}
}