/*
* name;
*/
class FontClipView extends ui.FontClipUI{
    /**公历年数**/
	year:number=2017;
	/**12生肖数组**/
	yearArr:Array<string>=["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"];
	yearIndex:number=9;
    constructor(){
        super();
		//年增加帧循环
		Laya.timer.loop(1000,this,this.onLoop);
    }
    onLoop():void{
	    //公元年增加
		this.year++;
			
		//“位图字体切片”年更新
		this.fontClip_num.value=this.year.toString();
		//农历生肖年增加
		this.yearIndex++;
		//12年生肖一轮回
		if(this.yearIndex>11) this.yearIndex=0;
		//文本切片更新，新年快乐更新
		this.fontClip_year.value=this.yearArr[this.yearIndex]+"年快乐";
			
		//大于2500年时间停止
		if(this.year>2030)
		{
			Laya.timer.clearAll(this);
		}
		}
}