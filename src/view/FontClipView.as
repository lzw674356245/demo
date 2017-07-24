package view
{
	import ui.FontClipUI;
	
	public class FontClipView extends FontClipUI
	{
		/**公历年数**/
		private var year:int=2017;
		/**12生肖数组**/
		private var yearArr:Array=["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"];
		private var yearIndex:int=9;
		
		public function FontClipView()
		{
			//年增加帧循环
			Laya.timer.loop(1000,this,onLoop);
		}
		private function onLoop():void
		{
			//公元年增加
			year++;
			
			//“位图字体切片”年更新
			this.fontClip_num.value=year.toString();
			//农历生肖年增加
			yearIndex++;
			//12年生肖一轮回
			if(yearIndex>11) yearIndex=0;
			//文本切片更新，新年快乐更新
			this.fontClip_year.value=yearArr[yearIndex]+"年快乐";
			trace(yearArr[yearIndex]+"年快乐",this.fontClip_year.value)
			
			//大于2500年时间停止
			if(year>2030)
			{
				Laya.timer.clearAll(this);
			}
		}
	}
}