package view
{
	import laya.events.Event;
	import laya.media.SoundChannel;
	import laya.media.SoundManager;
	import laya.ui.Image;
	import laya.ui.Slider;
	import laya.utils.Handler;
	
	import ui.SliderUI;
	
	public class SliderView extends SliderUI
	{
		/***slider中的进度显示条***/
		private var image:Image;
		/***当前播放的时间字符串***/
		private var currentStr:String="00:00/";
		/***当前播放的时间***/
		private var currentTime:Date;
		/***音乐的总时间长度***/
		private var totalStr:String="";
		
		/***H5声音控制器***/
		private var soundChannel:SoundChannel;
		
		/***当前音乐播放的时间***/
		private var playTime:Number=0;
		/***是否获得音乐总时间***/
		private var isTotal:Boolean=false;
		/***是否手动拖拉进度***/
		private var isHSliderDown:Boolean=false;
		
		public function SliderView()
		{
			//不进显示进度条上方或右方的进度值
			Slider.label.visible=false;
//			Slider.label.y=50;
			
			//播放与暂停按钮切换
			this.btn_play.on(Event.MOUSE_DOWN,this,onBtnPlay)
			
			//进度控制处理方法
			this.hSlider.changeHandler=new Handler(this,onChange);	
			this.hSlider.on(Event.MOUSE_DOWN,this,onHSliderDown);
			this.hSlider.on(Event.MOUSE_UP,this,onHSliderUp) 
			//音量控制处理方法
			this.vSlider.changeHandler=new Handler(this,onVolume);
			
			soundChannel=SoundManager.playMusic("res/bg_0.mp3",1,Handler.create(this,onComplete),0);
			
			
			//播放时间显示循环	
			Laya.timer.loop(1000,this,onPlayed);
		}
		
		/***停止拖动进度条***/
		private function onHSliderUp():void
		{
			//继续时间循环
			Laya.timer.loop(1000,this,onPlayed);
			//如果按钮是暂停状态
			if(this.btn_play.selected)
			{
				//先停止清空控制器中音乐后，再从当前拖拉的进度播放音乐（否者播放两次音乐）
				soundChannel.stop();
				soundChannel=SoundManager.playMusic("res/bg_0.mp3",1,Handler.create(this,onComplete),playTime);
			}
		}
		/***开始拖动进度条***/
		private function onHSliderDown():void
		{
			//时间循环停止
			Laya.timer.clearAll(this);
		}
		
		private function onComplete():void
		{
			//按钮状态切换为暂停
			this.btn_play.selected=false;
			//音乐停止
			soundChannel.stop();
		}
		
		/***音量控制***/
		private function onVolume(value:Number):void
		{
			//设置整体播放音量，0-1
			SoundManager.setMusicVolume(value/100);
			//设置单曲音量
//			soundChannel.volume=(value/100);
		}
		
		/***每秒更新播放进度的各种显示***/
		private function onPlayed():void
		{
			//当前播放的时间
			currentTime=new Date(0,0,0,0,0,parseInt(soundChannel.position));
			//当前播放的时间字符串
			currentStr=addZero(currentTime.getMinutes()) +":"+addZero(currentTime.getSeconds())+"/";
			//更新进度条位置
			this.hSlider.value=soundChannel.position;
			
			//如果未获取音乐时长
			if(!isTotal)
			{
				//更新最大进度
				this.hSlider.max=soundChannel.duration;
				//总时间长度（通过时间类转化秒成时、分、秒）
				var total:Date=new Date(0,0,0,0,0,parseInt(soundChannel.duration));
				//显示分与秒
				totalStr=addZero(total.getMinutes()) +":"+addZero(total.getSeconds());	
				this.txt_time.text=currentStr+totalStr;
				isTotal=true;
			}
		}
		
		/***播放暂停按钮切换***/
		private function onBtnPlay():void
		{
			//如果为播放状态
			if(!this.btn_play.selected)
			{
				//继续时间循环
				Laya.timer.loop(1000,this,onPlayed);
				//从暂停的位置播放
				soundChannel=SoundManager.playMusic("res/bg_0.mp3",1,Handler.create(this,onComplete),playTime);
			}else//如果为暂停状态
			{
				//记录当前暂停位置（停止后播放位置会为0）
				playTime=soundChannel.position;
				//停止播放
				soundChannel.stop();
				//时间循环停止
				Laya.timer.clearAll(this);
			}
		}		
		
		/**播放进度手动拖拉控制***/
		private function onChange(value:Number):void
		{
			//更新当前播放的时间
			currentTime=new Date(0,0,0,0,0,value);
			//更新当前播放的时间字符与显示 
			currentStr=addZero(currentTime.getMinutes()) +":"+addZero(currentTime.getSeconds())+"/";
			this.txt_time.text=currentStr+totalStr;
			
			//更新音乐播放时间
			this.playTime=value;
		}
		
		/**小于10加0***/
		private function addZero(num:Number):String
		{
			if(num<10) 
			{
				var str:String="0"+num;
			}else
			{
				return num.toString();
			}
			return str;
		}
	}
}