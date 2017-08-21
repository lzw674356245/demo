var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* name;
*/
var SliderView = (function (_super) {
    __extends(SliderView, _super);
    function SliderView() {
        var _this = _super.call(this) || this;
        /***当前播放的时间字符串***/
        _this.currentStr = "00:00/";
        /***音乐的总时间长度***/
        _this.totalStr = "";
        /***当前音乐播放的时间***/
        _this.playTime = 0;
        /***是否获得音乐总时间***/
        _this.isTotal = false;
        /***是否手动拖拉进度***/
        _this.isHSliderDown = false;
        //不进显示进度条上方或右方的进度值
        Laya.Slider.label.visible = false;
        //		Slider.label.y=50;
        //播放与暂停按钮切换
        _this.btn_play.on(Laya.Event.MOUSE_DOWN, _this, _this.onBtnPlay);
        //进度控制处理方法
        _this.hSlider.changeHandler = new Laya.Handler(_this, _this.onChange);
        _this.hSlider.on(Laya.Event.MOUSE_DOWN, _this, _this.onHSliderDown);
        _this.hSlider.on(Laya.Event.MOUSE_UP, _this, _this.onHSliderUp);
        //音量控制处理方法
        _this.vSlider.changeHandler = new Laya.Handler(_this, _this.onVolume);
        _this.soundChannel = Laya.SoundManager.playMusic("res/bg_0.mp3", 1, Laya.Handler.create(_this, _this.onComplete), 0);
        //播放时间显示循环	
        Laya.timer.loop(1000, _this, _this.onPlayed);
        return _this;
    }
    /***停止拖动进度条***/
    SliderView.prototype.onHSliderUp = function () {
        //继续时间循环
        Laya.timer.loop(1000, this, this.onPlayed);
        //如果按钮是暂停状态
        if (this.btn_play.selected) {
            //先停止清空控制器中音乐后，再从当前拖拉的进度播放音乐（否者播放两次音乐）
            this.soundChannel.stop();
            this.soundChannel = Laya.SoundManager.playMusic("res/bg_0.mp3", 1, Laya.Handler.create(this, this.onComplete), this.playTime);
        }
    };
    /***开始拖动进度条***/
    SliderView.prototype.onHSliderDown = function () {
        //时间循环停止
        Laya.timer.clearAll(this);
    };
    SliderView.prototype.onComplete = function () {
        //按钮状态切换为暂停
        this.btn_play.selected = false;
        //音乐停止
        this.soundChannel.stop();
    };
    /***音量控制***/
    SliderView.prototype.onVolume = function (value) {
        //设置整体播放音量，0-1
        Laya.SoundManager.setMusicVolume(value / 100);
        //设置单曲音量
        //		soundChannel.volume=(value/100);
    };
    /***每秒更新播放进度的各种显示***/
    SliderView.prototype.onPlayed = function () {
        //当前播放的时间
        this.currentTime = new Date(0, 0, 0, 0, 0, parseInt(this.soundChannel.position));
        //当前播放的时间字符串
        this.currentStr = this.addZero(this.currentTime.getMinutes()) + ":" + this.addZero(this.currentTime.getSeconds()) + "/";
        //更新进度条位置
        this.hSlider.value = this.soundChannel.position;
        //如果未获取音乐时长
        if (!this.isTotal) {
            //更新最大进度
            this.hSlider.max = this.soundChannel.duration;
            //总时间长度（通过时间类转化秒成时、分、秒）
            var total = new Date(0, 0, 0, 0, 0, parseInt(this.soundChannel.duration));
            //显示分与秒
            this.totalStr = this.addZero(total.getMinutes()) + ":" + this.addZero(total.getSeconds());
            this.txt_time.text = this.currentStr + this.totalStr;
            this.isTotal = true;
        }
    };
    /***播放暂停按钮切换***/
    SliderView.prototype.onBtnPlay = function () {
        //如果为播放状态
        if (!this.btn_play.selected) {
            //继续时间循环
            Laya.timer.loop(1000, this, this.onPlayed);
            //从暂停的位置播放
            this.soundChannel = Laya.SoundManager.playMusic("res/bg_0.mp3", 1, Laya.Handler.create(this, this.onComplete), this.playTime);
        }
        else {
            //记录当前暂停位置（停止后播放位置会为0）
            this.playTime = this.soundChannel.position;
            //停止播放
            this.soundChannel.stop();
            //时间循环停止
            Laya.timer.clearAll(this);
        }
    };
    /**播放进度手动拖拉控制***/
    SliderView.prototype.onChange = function (value) {
        //更新当前播放的时间
        this.currentTime = new Date(0, 0, 0, 0, 0, value);
        //更新当前播放的时间字符与显示 
        this.currentStr = this.addZero(this.currentTime.getMinutes()) + ":" + this.addZero(this.currentTime.getSeconds()) + "/";
        this.txt_time.text = this.currentStr + this.totalStr;
        //更新音乐播放时间
        this.playTime = value;
    };
    /**小于10加0***/
    SliderView.prototype.addZero = function (num) {
        if (num < 10) {
            var str = "0" + num;
        }
        else {
            return num.toString();
        }
        return str;
    };
    return SliderView;
}(ui.SliderUI));
//# sourceMappingURL=SliderView.js.map