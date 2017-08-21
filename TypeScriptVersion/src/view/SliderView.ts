/*
* name;
*/
class SliderView extends ui.SliderUI{
    /***slider中的进度显示条***/
	image:Laya.Image;
	/***当前播放的时间字符串***/
	currentStr:string="00:00/";
	/***当前播放的时间***/
	currentTime:Date;
	/***音乐的总时间长度***/
	totalStr:string="";
		
	/***H5声音控制器***/
	soundChannel:Laya.SoundChannel;
		
	/***当前音乐播放的时间***/
	playTime:number=0;
	/***是否获得音乐总时间***/
	isTotal:boolean=false;
	/***是否手动拖拉进度***/
	isHSliderDown:boolean=false;
    constructor(){
        super();
        //不进显示进度条上方或右方的进度值
		Laya.Slider.label.visible=false;
//		Slider.label.y=50;
			
		//播放与暂停按钮切换
		this.btn_play.on(Laya.Event.MOUSE_DOWN,this,this.onBtnPlay)
			
		//进度控制处理方法
		this.hSlider.changeHandler=new Laya.Handler(this,this.onChange);	
		this.hSlider.on(Laya.Event.MOUSE_DOWN,this,this.onHSliderDown);
		this.hSlider.on(Laya.Event.MOUSE_UP,this,this.onHSliderUp) 
		//音量控制处理方法
		this.vSlider.changeHandler=new Laya.Handler(this,this.onVolume);
			
		this.soundChannel=Laya.SoundManager.playMusic("res/bg_0.mp3",1,Laya.Handler.create(this,this.onComplete),0);
			
			
		//播放时间显示循环	
		Laya.timer.loop(1000,this,this.onPlayed);
    }
    /***停止拖动进度条***/
	onHSliderUp():void{
		//继续时间循环
		Laya.timer.loop(1000,this,this.onPlayed);
		//如果按钮是暂停状态
		if(this.btn_play.selected){
			//先停止清空控制器中音乐后，再从当前拖拉的进度播放音乐（否者播放两次音乐）
			this.soundChannel.stop();
			this.soundChannel=Laya.SoundManager.playMusic("res/bg_0.mp3",1,Laya.Handler.create(this,this.onComplete),this.playTime);
		}
	}
	/***开始拖动进度条***/
	onHSliderDown():void{
		//时间循环停止
		Laya.timer.clearAll(this);
	}
		
	onComplete():void{
		//按钮状态切换为暂停
		this.btn_play.selected=false;
		//音乐停止
		this.soundChannel.stop();
	}

	/***音量控制***/
	onVolume(value:number):void{
	    //设置整体播放音量，0-1
		Laya.SoundManager.setMusicVolume(value/100);
		//设置单曲音量
//		soundChannel.volume=(value/100);
	}
		
	/***每秒更新播放进度的各种显示***/
	onPlayed():void{
		//当前播放的时间
		this.currentTime=new Date(0,0,0,0,0,parseInt(this.soundChannel.position));
		//当前播放的时间字符串
		this.currentStr=this.addZero(this.currentTime.getMinutes()) +":"+this.addZero(this.currentTime.getSeconds())+"/";
		//更新进度条位置
		this.hSlider.value=this.soundChannel.position;
			
		//如果未获取音乐时长
		if(!this.isTotal){
			//更新最大进度
			this.hSlider.max=this.soundChannel.duration;
			//总时间长度（通过时间类转化秒成时、分、秒）
			var total:Date=new Date(0,0,0,0,0,parseInt(this.soundChannel.duration));
			//显示分与秒
			this.totalStr=this.addZero(total.getMinutes()) +":"+this.addZero(total.getSeconds());	
			this.txt_time.text=this.currentStr+this.totalStr;
			this.isTotal=true;
		}
	}
		
	/***播放暂停按钮切换***/
	onBtnPlay():void{
		//如果为播放状态
		if(!this.btn_play.selected){
			//继续时间循环
			Laya.timer.loop(1000,this,this.onPlayed);
			//从暂停的位置播放
			this.soundChannel=Laya.SoundManager.playMusic("res/bg_0.mp3",1,Laya.Handler.create(this,this.onComplete),this.playTime);
		}else{//如果为暂停状态
			//记录当前暂停位置（停止后播放位置会为0）
			this.playTime=this.soundChannel.position;
			//停止播放
				this.soundChannel.stop();
			//时间循环停止
			Laya.timer.clearAll(this);
		}
	}		
		
	/**播放进度手动拖拉控制***/
	onChange(value:number):void{
		//更新当前播放的时间
		this.currentTime=new Date(0,0,0,0,0,value);
		//更新当前播放的时间字符与显示 
		this.currentStr=this.addZero(this.currentTime.getMinutes()) +":"+this.addZero(this.currentTime.getSeconds())+"/";
		this.txt_time.text=this.currentStr+this.totalStr;
			
		//更新音乐播放时间
		this.playTime=value;
	}
		
	/**小于10加0***/
	addZero(num:number):string{
		if(num<10) {
			var str:string="0"+num;
		}else{
			return num.toString();
		}
			return str;
	}
}