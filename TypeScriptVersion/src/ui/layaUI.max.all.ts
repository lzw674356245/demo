
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class BitmapFontUI extends View {
		public box:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1084,"height":680},"child":[{"type":"Box","props":{"width":500,"var":"box","height":300,"centerY":0,"centerX":0}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.BitmapFontUI.uiView);
        }
    }
}

module ui {
    export class BoxUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1084,"height":680,"cacheAs":"bitmap"},"child":[{"type":"Box","props":{"y":66,"centerX":0},"child":[{"type":"Image","props":{"y":37,"width":703,"skin":"comp/img_bg2.png","sizeGrid":"14,17,14,13","height":120}},{"type":"HBox","props":{"y":69,"x":27,"space":25,"align":"middle"},"child":[{"type":"Button","props":{"y":-3,"x":382,"width":200,"skin":"comp/button.png","sizeGrid":"20,24,28,30","labelSize":25,"labelPadding":"-2","label":"button3","height":60}},{"type":"Button","props":{"y":-1,"x":189,"width":200,"skin":"comp/button.png","sizeGrid":"20,24,28,30","labelSize":25,"labelPadding":"-2","label":"button2","height":60}},{"type":"Button","props":{"y":161,"width":200,"toggle":true,"skin":"comp/button.png","sizeGrid":"20,24,28,30","selected":true,"labelSize":25,"labelPadding":"-2","label":"button1","height":60}}]},{"type":"Label","props":{"y":-7,"text":"HBox横向适配","fontSize":30,"font":"SimHei","color":"#fdfdfd","centerX":-0.15625,"bold":true}}]},{"type":"Box","props":{"y":255,"x":198},"child":[{"type":"Image","props":{"y":41,"width":271,"skin":"comp/img_bg2.png","sizeGrid":"14,17,14,13","height":270}},{"type":"Box","props":{"y":61,"x":24},"child":[{"type":"Button","props":{"y":6,"x":9,"width":200,"toggle":true,"skin":"comp/button.png","sizeGrid":"20,24,28,30","selected":true,"labelSize":25,"labelPadding":"-3","label":"button1","height":60}},{"type":"Button","props":{"y":104,"x":28,"width":200,"skin":"comp/button.png","sizeGrid":"20,24,28,30","labelSize":25,"labelPadding":"-3","label":"button2","height":60}},{"type":"Button","props":{"y":167,"width":200,"skin":"comp/button.png","sizeGrid":"20,24,28,30","labelSize":25,"labelPadding":"-3","label":"button3","height":60}}]},{"type":"Label","props":{"y":-4,"text":"Box自由搭配","fontSize":30,"font":"SimHei","color":"#ffffff","centerX":0,"bold":true}}]},{"type":"Box","props":{"y":249,"x":613},"child":[{"type":"Label","props":{"x":41,"text":"VBox纵向适配","fontSize":30,"font":"SimHei","color":"#ffffff","bold":true}},{"type":"Image","props":{"y":48,"width":271,"skin":"comp/img_bg2.png","sizeGrid":"14,17,14,13","height":270}},{"type":"VBox","props":{"y":70,"x":40,"space":25,"align":"center"},"child":[{"type":"Button","props":{"x":9,"width":200,"toggle":true,"skin":"comp/button.png","sizeGrid":"20,24,28,30","selected":true,"labelSize":25,"labelPadding":"-3","label":"button1","height":60}},{"type":"Button","props":{"y":98,"x":28,"width":200,"skin":"comp/button.png","sizeGrid":"20,24,28,30","labelSize":25,"labelPadding":"-3","label":"button2","height":60}},{"type":"Button","props":{"y":161,"width":200,"skin":"comp/button.png","sizeGrid":"20,24,28,30","labelSize":25,"labelPadding":"-3","label":"button3","height":60}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.BoxUI.uiView);
        }
    }
}

module ui {
    export class ButtonUI extends View {

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":1084,"height":680,"cacheAs":"bitmap"},"child":[{"type":"Box","props":{"centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":0,"x":0,"width":250,"skin":"comp/button.png","sizeGrid":"22,27,37,29","labelSize":30,"labelPadding":"0,0,2,0","labelFont":"SimHei","labelColors":"#057d31","label":"默认按钮","height":80}},{"type":"Button","props":{"y":0,"x":342,"width":250,"toggle":true,"skin":"comp/button.png","sizeGrid":"22,27,37,29","labelSize":30,"labelPadding":"0,0,2,0","labelFont":"SimHei","labelColors":"#057d31","label":"Toggle按钮","height":80}},{"type":"Button","props":{"y":109,"x":342,"width":250,"toggle":true,"skin":"comp/button.png","sizeGrid":"22,27,37,29","labelSize":30,"labelPadding":"0,0,2,0","labelFont":"SimHei","labelColors":"#057d31","label":"Disabled按钮","height":80,"disabled":true}},{"type":"Button","props":{"y":218,"x":342,"width":250,"skin":"comp/button.png","sizeGrid":"22,27,37,29","labelSize":30,"labelPadding":"0,0,2,0","labelFont":"SimHei","labelColors":"#057d31","label":"Gray按钮","height":80,"gray":true}},{"type":"Button","props":{"y":109,"x":0,"width":250,"skin":"comp/button.png","sizeGrid":"22,27,37,29","labelStrokeColor":"#ffffff","labelStroke":2,"labelSize":30,"labelPadding":"0,0,2,0","labelFont":"SimHei","labelColors":"#057d31","label":"描边按钮","height":80}},{"type":"Button","props":{"y":218,"x":0,"width":250,"skin":"comp/button.png","sizeGrid":"22,27,37,29","labelSize":30,"labelPadding":"0,0,2,20","labelFont":"SimHei","labelColors":"#057d31","label":"图标按钮","height":80},"child":[{"type":"Image","props":{"y":19,"x":31,"width":46,"skin":"comp/img_icon.png","height":39}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ButtonUI.uiView);
        }
    }
}

module ui {
    export class CheckBoxUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1084,"height":680,"cacheAs":"bitmap"},"child":[{"type":"Box","props":{"centerY":-10,"centerX":10},"child":[{"type":"CheckBox","props":{"y":0,"x":0,"skin":"comp/checkbox.png","labelSize":30,"labelPadding":"16,0,0,20","labelFont":"SimHei","labelColors":"#ffffff,#f7fd74,#ff8c05","labelBold":true,"label":"默认复选框"}},{"type":"CheckBox","props":{"y":125,"x":0,"skin":"comp/checkbox.png","selected":true,"labelSize":30,"labelPadding":"16,0,0,20","labelFont":"SimHei","labelColors":"#ffffff,#f7fd74,#ff8c05","labelBold":true,"label":"Selected复选框"}},{"type":"CheckBox","props":{"y":0,"x":358,"skin":"comp/checkbox.png","labelSize":30,"labelPadding":"16,0,0,20","labelFont":"SimHei","labelColors":"#057d31","labelBold":true,"label":"Desabled复选框","disabled":true}},{"type":"CheckBox","props":{"y":125,"x":358,"skin":"comp/checkbox.png","labelSize":30,"labelPadding":"16,0,0,20","labelFont":"SimHei","labelColors":"#057d31","labelBold":true,"label":"Gray复选框","gray":true}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.CheckBoxUI.uiView);
        }
    }
}

module ui {
    export class ClipUI extends View {
		public clip_step:Laya.Clip;
		public tips:Laya.Label;
		public clip3:Laya.Clip;
		public clip2:Laya.Clip;
		public clip1:Laya.Clip;

        public static  uiView:any ={"type":"View","props":{"width":1084,"height":680,"cacheAs":"normal"},"child":[{"type":"Box","props":{"width":414,"height":387,"centerY":-19.5,"centerX":0},"child":[{"type":"Image","props":{"y":127,"x":31,"width":350,"skin":"comp/img_steps.png","height":230}},{"type":"Clip","props":{"y":304,"x":141,"skin":"comp/clip_steps.png","index":10,"clipX":13}},{"type":"Clip","props":{"y":307,"x":234,"width":48,"var":"clip_step","skin":"comp/clip_stepsNum.png","interval":500,"index":0,"height":44,"clipX":9}},{"type":"Label","props":{"y":58,"x":29,"visible":true,"var":"tips","text":"恭喜您段位达到了“传说1阶”！","fontSize":25,"font":"SimHei","color":"#5ff2ff","bold":true}},{"type":"Box","props":{"y":3,"x":29},"child":[{"type":"Label","props":{"y":3,"text":"积分正在增长中：","fontSize":30,"font":"SimHei","color":"#ffffff","bold":true}},{"type":"Clip","props":{"y":-9,"x":238,"var":"clip3","skin":"comp/clip_num.png","clipX":10}},{"type":"Clip","props":{"y":-9,"x":273,"var":"clip2","skin":"comp/clip_num.png","clipX":10}},{"type":"Clip","props":{"y":-9,"x":309,"var":"clip1","skin":"comp/clip_num.png","clipX":10}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ClipUI.uiView);
        }
    }
}

module ui {
    export class DialogUI extends Dialog {
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"Dialog","props":{"width":500,"height":400,"cacheAs":"bitmap"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":500,"skin":"comp/img_bg.png","sizeGrid":"55,48,51,50","height":400}},{"type":"Image","props":{"y":76,"width":464,"skin":"comp/img_bg2.png","sizeGrid":"19,22,16,18","height":278,"centerX":0}},{"type":"Label","props":{"y":8,"width":223,"visible":true,"text":"Dialog对话框","strokeColor":"#0143b9","stroke":5,"height":50,"fontSize":35,"font":"Microsoft YaHei","color":"#e1ff08","centerX":-2.5,"bold":true}},{"type":"Button","props":{"y":15,"x":431,"var":"btn_close","stateNum":2,"skin":"comp/btn_close.png","name":"btn_close"}},{"type":"Label","props":{"y":107,"x":42,"wordWrap":true,"width":419,"text":"    Dialog 组件是一个弹出对话框，实现对话框弹出，拖动，模式窗口功能。 可以通过UIConfig设置弹出框背景透明度，模式窗口点击边缘是否关闭等。 \\n    通过设置zOrder属性，可以更改弹出的层次，通过设置manager.popupEffect和manager.closeEffect可以设置弹出效果和关闭效果。","leading":10,"height":214,"fontSize":20,"font":"SimHei","color":"#2d63c3","bold":true,"align":"left"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.DialogUI.uiView);
        }
    }
}

module ui {
    export class FontClipUI extends View {
		public fontClip_num:Laya.FontClip;
		public fontClip_year:Laya.FontClip;

        public static  uiView:any ={"type":"View","props":{"width":1084,"height":680,"cacheAs":"normal"},"child":[{"type":"Image","props":{"width":615,"skin":"comp/img_bg.png","sizeGrid":"50,39,50,39","height":275,"centerY":0.5,"centerX":1.5}},{"type":"Image","props":{"y":244,"x":282,"width":527,"skin":"comp/img_bg2.png","sizeGrid":"22,21,26,19","height":200}},{"type":"Label","props":{"y":284,"x":313,"width":216,"text":"FontClip数字：","height":43,"fontSize":30,"font":"Microsoft YaHei","color":"#007adb","bold":true}},{"type":"Label","props":{"y":363,"x":312,"width":216,"text":"FontClip中文：","height":40,"fontSize":30,"font":"Microsoft YaHei","color":"#007adb","bold":true}},{"type":"FontClip","props":{"y":283,"x":557,"var":"fontClip_num","value":"2017","skin":"comp/clip_num.png","sheet":"0123456789"}},{"type":"FontClip","props":{"y":359,"x":559,"var":"fontClip_year","value":"鸡年快乐","skin":"comp/fontClip_year.png","sheet":"鼠牛虎兔龙蛇马羊 猴鸡狗猪年快乐"}},{"type":"FontClip","props":{"y":282,"x":710,"value":"年","skin":"comp/fontClip_year.png","sheet":"鼠牛虎兔龙蛇马羊 猴鸡狗猪年快乐"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.FontClipUI.uiView);
        }
    }
}

module ui {
    export class HTMLDivTextUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1084,"height":680,"cacheAs":"bitmap"},"child":[{"type":"HTMLDivElement","props":{"y":221,"x":303,"width":523,"innerHTML":"<span style='color:#FFFF00;font-size:30px;font-weight:bold'>HTMLDivElement</span> <span  style='color:#ea9b25;font-size:30px;font-weight:bold'>创建的</span> <span  style='color:#01e854;font-size:40px;font-weight:bold'>HTML</span> <span  style='color:#ea9b25;font-size:30px;font-weight:bold'>文本</span>","height":54}},{"type":"HTMLDivElement","props":{"y":338,"x":264,"width":600,"innerHTML":"\t<span  style='color:#FFFF00;font-size:30px;font-weight:bold'>HTMLDivElement</span> \t<img src='comp/img_face.png' style='width:40px; height:40px'></img> \t<span style='color:#6ad2e3;font-weight:bold;font-size:40px;font-family:黑体;'>图文混排</span> \t<img src='comp/img_face.png' style='width:40px; height:40px'></img> \t<span  style='color:#FFFF00;font-size:30px;font-weight:bold'>效果!!!!</span>","height":49}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("HTMLDivElement",laya.html.dom.HTMLDivElement);

            super.createChildren();
            this.createView(ui.HTMLDivTextUI.uiView);
        }
    }
}

module ui {
    export class ImageUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1084,"height":680,"cacheAs":"bitmap"},"child":[{"type":"Image","props":{"y":174,"x":165,"width":225,"skin":"comp/img_poster.jpg","height":376}},{"type":"Label","props":{"y":105,"x":187,"visible":true,"text":"默认Image图片","name":"tips","fontSize":25,"font":"SimHei","color":"#f8ff5f","bold":true}},{"type":"Label","props":{"y":105,"x":474,"visible":true,"text":"Image九宫格拉伸1","name":"tips","fontSize":25,"font":"SimHei","color":"#f8ff5f","bold":true}},{"type":"Label","props":{"y":105,"x":773,"visible":true,"text":"Image九宫格拉伸2","name":"tips","fontSize":25,"font":"SimHei","color":"#f8ff5f","bold":true}},{"type":"Image","props":{"y":178,"x":472,"width":207,"skin":"comp/img_bg1.png","sizeGrid":"70,35,38,39","height":373}},{"type":"Image","props":{"y":175,"x":770,"width":218,"skin":"comp/img_bg3.png","sizeGrid":"37,37,38,37,1","height":377}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ImageUI.uiView);
        }
    }
}

module ui {
    export class LabelUI extends View {
		public tips:Laya.Label;
		public tips:Laya.Label;
		public tips:Laya.Label;
		public tips:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1084,"height":680,"cacheAs":"bitmap"},"child":[{"type":"Image","props":{"width":800,"skin":"comp/img_bg.png","sizeGrid":"50,39,50,39","height":412,"centerY":0,"centerX":1}},{"type":"Box","props":{"y":0,"x":0,"centerY":-5,"centerX":0},"child":[{"type":"Label","props":{"visible":true,"text":"LayaAIr Label","fontSize":45,"font":"Arial","color":"#ffffff","bold":true}},{"type":"Label","props":{"y":1,"x":362,"visible":true,"var":"tips","text":"LayaAIr Label","fontSize":45,"font":"Arial","color":"#0fff04","bold":true}},{"type":"Label","props":{"y":91,"x":0,"width":304,"visible":true,"text":"LayaAIr Label","italic":true,"height":64,"fontSize":45,"font":"Microsoft YaHei","color":"#f8ff5f","bold":true}},{"type":"Label","props":{"y":92,"x":362,"width":295,"visible":true,"var":"tips","text":"LayaAIr Label","strokeColor":"#50e7fb","stroke":4,"height":59,"fontSize":45,"font":"Arial","color":"#003347","bold":true}},{"type":"Label","props":{"y":181,"x":0,"width":318,"visible":true,"var":"tips","text":" LayaAIr Label","height":54,"fontSize":45,"font":"Arial","color":"#ffe005","borderColor":"#ff0624","bold":true,"bgColor":"#ab6a24"}},{"type":"Label","props":{"y":182,"x":362,"width":295,"var":"tips","underlineColor":"#ebff06","underline":true,"text":"LayaAIr Label","strokeColor":"#fff514","stroke":4,"leading":5,"height":57,"fontSize":45,"font":"Arial","color":"#009511","bold":true}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.LabelUI.uiView);
        }
    }
}

module ui {
    export class ListUI extends View {
		public list:Laya.List;
		public tips:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1084,"height":680},"child":[{"type":"Box","props":{"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"width":600,"skin":"comp/img_bg.png","sizeGrid":"55,48,51,50","height":540}},{"type":"Image","props":{"y":69,"width":558,"skin":"comp/img_bg2.png","sizeGrid":"19,22,16,18","height":446,"centerX":0}},{"type":"List","props":{"y":97,"x":60,"width":493,"var":"list","height":400},"child":[{"type":"Box","props":{"renderType":"render"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":470,"skin":"comp/img_itemBg.png","sizeGrid":"22,19,26,23","height":80}},{"type":"Clip","props":{"x":23,"skin":"comp/clip_rank.png","name":"rank","clipX":10,"centerY":0}},{"type":"Image","props":{"y":8,"x":89,"width":64,"skin":"comp/img_headBg.png","height":64}},{"type":"Clip","props":{"y":10,"x":91,"width":60,"skin":"comp/clip_head.png","name":"head","height":60,"clipX":10}},{"type":"Label","props":{"y":11,"x":182,"visible":true,"text":"昵称:宝贝无敌","name":"userName","fontSize":25,"font":"SimHei","color":"#fff749","bold":false}},{"type":"Label","props":{"y":47,"x":183,"visible":true,"text":"积分:6705","name":"score","fontSize":25,"font":"SimHei","color":"#005570","bold":true}},{"type":"CheckBox","props":{"y":14,"x":389,"skin":"comp/checkbox.png","scaleY":0.8,"scaleX":0.8,"name":"checkBox"}}]},{"type":"VScrollBar","props":{"y":-1,"x":472,"skin":"comp/vscroll.png","showButtons":false,"name":"scrollBar"}}]},{"type":"Label","props":{"y":13,"width":140,"visible":true,"var":"tips","text":"积分排名","strokeColor":"#0143b9","stroke":5,"height":50,"fontSize":35,"font":"Microsoft YaHei","color":"#e1ff08","centerX":0,"bold":true}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ListUI.uiView);
        }
    }
}

module ui {
    export class ProgressBarUI extends View {
		public pro:Laya.ProgressBar;
		public tips:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1084,"height":680},"child":[{"type":"ProgressBar","props":{"y":456,"x":218,"width":640,"var":"pro","skin":"comp/progress.png","sizeGrid":"0,9,0,5","height":14}},{"type":"Image","props":{"y":109,"x":218,"width":640,"skin":"comp/img_poster1.jpg","height":345,"centerX":-4}},{"type":"Label","props":{"y":493,"x":283,"width":512,"var":"tips","text":"游戏正在加载中......","height":28,"fontSize":28,"font":"SimHei","color":"#ffffff","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ProgressBarUI.uiView);
        }
    }
}

module ui {
    export class RadioGroupUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1084,"height":680,"cacheAs":"bitmap"},"child":[{"type":"Box","props":{"x":146,"width":360,"height":380,"centerY":-12},"child":[{"type":"Label","props":{"y":0,"width":282,"visible":true,"text":"默认RadioGroup","height":49,"fontSize":35,"font":"Microsoft YaHei","color":"#f8ff5f","centerX":0,"bold":true}},{"type":"Image","props":{"y":71,"x":0,"width":358,"skin":"comp/img_bg2.png","sizeGrid":"12,16,15,15","height":303}},{"type":"RadioGroup","props":{"y":116,"x":52,"width":254,"space":35,"skin":"comp/radiogroup.png","selectedIndex":0,"labels":"第一人称视角,第三人称视角,角色全部隐藏","labelSize":28,"labelPadding":"8,0,0,20","labelFont":"SimHei","labelColors":"#2850a4,#50d426,#fb7308","labelBold":true,"labelAlign":"center","height":219,"direction":"vertical"}}]},{"type":"Box","props":{"width":360,"height":380,"centerY":-12,"centerX":224},"child":[{"type":"Label","props":{"y":0,"visible":true,"text":"自定义RadioGroup","fontSize":35,"font":"Microsoft YaHei","color":"#f8ff5f","centerX":0,"bold":true}},{"type":"Image","props":{"y":71,"x":0,"width":358,"skin":"comp/img_bg2.png","sizeGrid":"12,16,15,15","height":303}},{"type":"RadioGroup","props":{"y":131,"x":76,"selectedIndex":0},"child":[{"type":"Radio","props":{"y":0,"x":0,"skin":"comp/radio.png","selected":true,"name":"item0","labelSize":25,"labelPadding":"10,0,0,20","labelFont":"SimHei","labelColors":"#2850a4,#50d426,#fb7308","label":"自定义选项1"}},{"type":"Radio","props":{"y":71,"x":0,"skin":"comp/radiogroup.png","name":"item1","labelSize":25,"labelPadding":"10,0,0,20","labelFont":"SimHei","labelColors":"#2850a4,#50d426,#fb7308","label":"自定义选项2"}},{"type":"Radio","props":{"y":137,"x":1,"skin":"comp/checkbox.png","name":"item2","labelSize":25,"labelPadding":"10,0,0,20","labelFont":"SimHei","labelColors":"#2850a4,#50d426,#fb7308","label":"自定义选项3"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.RadioGroupUI.uiView);
        }
    }
}

module ui {
    export class ScrollBarUI extends View {
		public panel1:Laya.Panel;
		public panel2:Laya.Panel;

        public static  uiView:any ={"type":"View","props":{"width":1084,"height":680},"child":[{"type":"Label","props":{"y":101,"x":263,"visible":true,"text":"默认滚动条示例","fontSize":25,"font":"SimHei","color":"#f8ff5f","bold":true}},{"type":"Label","props":{"y":101,"x":595,"visible":true,"text":"滚动条隐藏及橡皮筋效果","fontSize":25,"font":"SimHei","color":"#f8ff5f","bold":true}},{"type":"Rect","props":{"y":157,"x":195,"width":320,"lineWidth":2,"lineColor":"#3594e0","height":450,"fillColor":"#f3f4f4"}},{"type":"Panel","props":{"y":174,"x":216,"width":280,"var":"panel1","vScrollBarSkin":"comp/vscroll.png","height":420,"hScrollBarSkin":"comp/hscroll.png"},"child":[{"type":"Image","props":{"y":0,"x":-5,"skin":"comp/img_poster.jpg"}},{"type":"Image","props":{"y":508,"x":-5,"skin":"comp/img_poster.jpg"}}]},{"type":"Panel","props":{"y":170,"x":596,"width":280,"var":"panel2","height":420},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"comp/img_poster.jpg"}}]},{"type":"Rect","props":{"y":157,"x":575,"width":320,"lineWidth":2,"lineColor":"#3594e0","height":450,"fillColor":"#ffffff"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ScrollBarUI.uiView);
        }
    }
}

module ui {
    export class SliderUI extends View {
		public btn_play:Laya.Button;
		public txt_time:Laya.Label;
		public singName:Laya.Label;
		public hSlider:Laya.HSlider;
		public vSlider:Laya.VSlider;

        public static  uiView:any ={"type":"View","props":{"width":1084,"height":680},"child":[{"type":"Box","props":{"width":598,"height":160,"centerY":-10,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":596,"skin":"comp/img_bg.png","sizeGrid":"30,36,30,38","height":155}},{"type":"Button","props":{"y":35,"x":20,"var":"btn_play","toggle":true,"skin":"comp/btn_play.png","selected":true}},{"type":"Image","props":{"y":33,"x":135,"width":400,"skin":"comp/img_bg2.png","sizeGrid":"15,19,18,18","height":57}},{"type":"Label","props":{"y":49,"x":387,"width":136,"var":"txt_time","text":"00:00/--:--","height":26,"fontSize":25,"font":"Arial","color":"#234a9c","bold":true}},{"type":"Label","props":{"y":49,"x":153,"width":192,"var":"singName","text":"游戏背景音乐","height":26,"fontSize":25,"font":"SimHei","color":"#9c3623","bold":true}},{"type":"HSlider","props":{"y":111,"x":134,"width":400,"var":"hSlider","skin":"comp/hslider.png","sizeGrid":"19,14,20,16","showLabel":false,"min":0,"max":100,"height":50}}]},{"type":"VSlider","props":{"y":245,"x":962,"width":40,"var":"vSlider","value":100,"skin":"comp/vslider.png","sizeGrid":"12,0,11,0","showLabel":false,"min":100,"max":-50,"height":161}},{"type":"Label","props":{"y":252,"x":883,"wordWrap":true,"width":27,"valign":"middle","text":"音量调节","leading":5,"height":109,"fontSize":25,"font":"SimHei","color":"#ffffff"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.SliderUI.uiView);
        }
    }
}

module ui {
    export class TabUI extends View {
		public tab:Laya.Tab;

        public static  uiView:any ={"type":"View","props":{"width":1084,"height":680,"cacheAs":"normal"},"child":[{"type":"Label","props":{"y":150,"x":199,"width":194,"visible":true,"text":"默认Tab","height":64,"fontSize":40,"font":"Microsoft YaHei","color":"#f8ff5f","bold":true}},{"type":"Label","props":{"y":304,"x":192,"width":194,"visible":true,"text":"自定义Tab","height":64,"fontSize":40,"font":"Microsoft YaHei","color":"#f8ff5f","bold":true}},{"type":"Tab","props":{"y":148,"x":458,"width":474,"skin":"comp/tab.png","selectedIndex":0,"scaleY":1,"scaleX":0.9,"labels":"服装,武器,配饰","labelSize":30,"labelFont":"SimHei","labelColors":"#0864ad,#ffd945,#ffffff","labelBold":true,"height":63}},{"type":"Tab","props":{"y":302,"x":452,"width":215,"var":"tab","space":0,"selectedIndex":1,"height":210,"direction":"vertical"},"child":[{"type":"Button","props":{"y":0,"x":0,"width":210,"skin":"comp/button.png","sizeGrid":"23,30,33,31","name":"item0","labelSize":25,"labelPadding":"0,0,0,20","labelFont":"SimHei","label":"Tab选择1","height":70},"child":[{"type":"Image","props":{"y":16,"x":20,"skin":"comp/img_team0.png"}}]},{"type":"Button","props":{"y":1,"x":196,"width":210,"skin":"comp/button.png","sizeGrid":"23,23,33,26","name":"item1","labelSize":25,"labelPadding":"0,0,0,20","labelFont":"SimHei","label":"Tab选择2","height":70},"child":[{"type":"Image","props":{"y":16,"x":20,"skin":"comp/img_team1.png"}}]},{"type":"Button","props":{"y":1,"x":392,"width":210,"skin":"comp/button.png","sizeGrid":"23,23,33,26","name":"item2","labelSize":25,"labelPadding":"0,0,0,20","labelFont":"SimHei","label":"Tab选择3","height":70},"child":[{"type":"Image","props":{"y":14,"x":20,"skin":"comp/img_team3.png"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.TabUI.uiView);
        }
    }
}

module ui {
    export class TestAllUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1084,"height":680},"child":[{"type":"Image","props":{"y":25,"x":47,"width":997,"skin":"comp/img_bg.png","sizeGrid":"33,35,35,32","height":618}},{"type":"VBox","props":{"y":84,"x":69,"space":20,"align":"center"},"child":[{"type":"Button","props":{"x":9,"width":200,"toggle":true,"skin":"comp/button.png","sizeGrid":"20,24,28,30","selected":true,"labelSize":25,"labelPadding":"-3","label":"button1","height":60}},{"type":"Button","props":{"y":98,"x":28,"width":200,"skin":"comp/button.png","sizeGrid":"20,24,28,30","labelSize":25,"labelPadding":"-3","label":"button2","height":60}},{"type":"Button","props":{"y":161,"width":200,"skin":"comp/button.png","sizeGrid":"20,24,28,30","labelSize":25,"labelPadding":"-3","label":"button3","height":60}}]},{"type":"Box","props":{"y":373,"x":85,"width":240,"height":217},"child":[{"type":"CheckBox","props":{"y":0,"x":0,"skin":"comp/checkbox.png","labelSize":30,"labelPadding":"14,0,0,20","labelFont":"SimHei","labelColors":"#ffffff,#f7fd74,#ffb904","labelBold":true,"label":"复选框"}},{"type":"CheckBox","props":{"y":70,"x":0,"skin":"comp/checkbox.png","selected":true,"labelSize":30,"labelPadding":"14,0,0,20","labelFont":"SimHei","labelColors":"#ffffff,#f7fd74,#ffb904","labelBold":true,"label":"已选择"}},{"type":"CheckBox","props":{"y":141,"x":0,"skin":"comp/checkbox.png","labelSize":30,"labelPadding":"14,0,0,20","labelFont":"SimHei","labelColors":"#ffffff,#f7fd74,#ffb904","labelBold":true,"label":"变灰设置","gray":true}}]},{"type":"FontClip","props":{"y":76,"x":300,"value":"2017","skin":"comp/clip_num.png","sheet":"0123456789","direction":"horizontal"}},{"type":"FontClip","props":{"y":77,"x":454,"value":"年","skin":"comp/fontClip_year.png","sheet":"鼠牛虎兔龙蛇马羊 猴鸡狗猪年快乐"}},{"type":"Box","props":{"y":19,"x":1254},"child":[{"type":"Image","props":{"width":542,"skin":"comp/img_bg2.png","sizeGrid":"16,19,18,16","height":460}},{"type":"List","props":{"y":28,"x":26,"width":493,"selectEnable":false,"height":400},"child":[{"type":"Box","props":{"renderType":"render"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":470,"skin":"comp/img_itemBg.png","sizeGrid":"22,19,26,23","height":80}},{"type":"Clip","props":{"x":23,"skin":"comp/clip_rank.png","name":"rank","clipX":10,"centerY":0}},{"type":"Image","props":{"y":8,"x":89,"width":64,"skin":"comp/img_headBg.png","height":64}},{"type":"Clip","props":{"y":10,"x":91,"width":60,"skin":"comp/clip_head.png","name":"head","height":60,"clipX":10}},{"type":"Label","props":{"y":11,"x":182,"visible":true,"text":"昵称:宝贝无敌","name":"userName","fontSize":25,"font":"SimHei","color":"#fff749","bold":false}},{"type":"Label","props":{"y":47,"x":183,"visible":true,"text":"积分:6705","name":"score","fontSize":25,"font":"SimHei","color":"#005570","bold":true}},{"type":"CheckBox","props":{"y":14,"x":389,"skin":"comp/checkbox.png","scaleY":0.8,"scaleX":0.8,"name":"checkBox"}}]},{"type":"VScrollBar","props":{"y":-1,"x":472,"skin":"comp/vscroll.png","showButtons":false,"name":"scrollBar"}}]}]},{"type":"ProgressBar","props":{"y":514,"x":586,"width":300,"skin":"comp/progress.png","sizeGrid":"0,9,0,5","pivotX":0,"height":14}},{"type":"Label","props":{"y":141,"x":303,"visible":true,"text":"LayaAIr Label","fontSize":35,"font":"Arial","color":"#0fff04","bold":true}},{"type":"Label","props":{"y":200,"x":303,"width":239,"visible":true,"text":"LayaAIr Label","strokeColor":"#50e7fb","stroke":4,"height":41,"fontSize":35,"font":"Arial","color":"#036d97","bold":true}},{"type":"Label","props":{"y":254,"x":303,"width":236,"underlineColor":"#f9f9f4","underline":true,"text":"LayaAIr Label","strokeColor":"#ececec","stroke":4,"leading":5,"height":50,"fontSize":35,"font":"Arial","color":"#0591ff","bold":true}},{"type":"RadioGroup","props":{"y":376,"x":338,"width":210,"space":20,"skin":"comp/radio.png","selectedIndex":0,"labels":"单选框1,单选框2,单选框3","labelSize":30,"labelPadding":"8,0,0,20","labelFont":"SimHei","labelColors":"#2850a4,#50d426,#ffb904","labelBold":true,"labelAlign":"center","height":219,"direction":"vertical"}},{"type":"HSlider","props":{"y":434,"x":580,"width":300,"skin":"comp/hslider.png","sizeGrid":"19,14,20,16","showLabel":true,"min":0,"max":100,"height":20}},{"type":"Image","props":{"y":136,"x":576,"width":421,"skin":"comp/img_blank.png","sizeGrid":"6,5,7,4","height":160}},{"type":"Tab","props":{"y":80,"x":576,"width":470,"skin":"comp/tab.png","selectedIndex":0,"scaleY":1,"scaleX":0.9,"labels":"服装,武器,配饰","labelSize":26,"labelFont":"SimHei","labelColors":"#0864ad,#ffd945,#ffffff","height":63}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.TestAllUI.uiView);
        }
    }
}

module ui {
    export class TestPageUI extends View {
		public list:Laya.List;
		public title:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":750},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":250,"skin":"comp/img_blank.png","sizeGrid":"4,5,6,5","height":80}},{"type":"Image","props":{"y":80,"x":0,"width":250,"skin":"comp/img_blank.png","sizeGrid":"4,5,6,5","height":670}},{"type":"List","props":{"y":80,"x":0,"width":250,"var":"list","selectedIndex":0,"selectEnable":true,"height":670},"child":[{"type":"Button","props":{"y":0,"x":0,"width":250,"toggle":false,"skin":"comp/btn_choose.png","sizeGrid":"7,14,6,11","renderType":"render","name":"button","labelSize":30,"labelPadding":"-2,0,0,50","labelFont":"Arial","labelColors":"#ffffff,#136ab2,#753909","labelAlign":"left","label":"Button","height":90}}]},{"type":"Text","props":{"y":23,"x":67,"text":"组件导航","fontSize":30,"font":"SimHei","color":"#ffffff"}}]},{"type":"Box","props":{"y":0,"x":250},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1087,"skin":"comp/img_blank.png","sizeGrid":"4,5,6,5","height":80}},{"type":"Label","props":{"width":564,"var":"title","text":"Button组件示例效果","height":30,"fontSize":30,"font":"SimHei","color":"#fdfdfd","centerY":0.5,"centerX":0.5,"align":"center"}}]},{"type":"Rect","props":{"y":0,"x":0,"width":1334,"lineWidth":1,"height":750,"fillColor":"#4c82af"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.TestPageUI.uiView);
        }
    }
}

module ui {
    export class TextAreaUI extends View {
		public textArea:Laya.TextArea;
		public tips:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1084,"height":680},"child":[{"type":"Box","props":{"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"width":642,"skin":"comp/img_bg.png","sizeGrid":"62,51,62,47","height":441}},{"type":"Image","props":{"y":82,"width":579,"skin":"comp/img_bg2.png","sizeGrid":"15,16,17,15","height":314,"centerX":0}},{"type":"TextArea","props":{"y":101,"wordWrap":true,"width":545,"var":"textArea","vScrollBarSkin":"comp/vscroll.png","multiline":true,"leading":5,"height":277,"fontSize":20,"font":"SimHei","editable":false,"color":"#054adb","centerX":0,"align":"left"}},{"type":"Label","props":{"y":15,"x":208,"width":232,"var":"tips","text":"LayaAir引擎介绍","stroke":8,"leading":5,"height":50,"fontSize":30,"font":"Microsoft YaHei","color":"#9ee3ff","bold":true}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.TextAreaUI.uiView);
        }
    }
}

module ui {
    export class TextInputUI extends View {
		public tips:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1084,"height":680},"child":[{"type":"Box","props":{"x":242,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":597,"skin":"comp/img_bg1.png","sizeGrid":"65,34,36,32","height":378}},{"type":"TextInput","props":{"y":105,"width":500,"valign":"middle","skin":"comp/img_bg2.png","sizeGrid":"24,16,24,22","prompt":"普通文本输入","leading":8,"height":60,"fontSize":25,"font":"SimHei","editable":true,"centerX":2.5}},{"type":"Label","props":{"y":5,"width":140,"visible":true,"var":"tips","text":"文本输入","strokeColor":"#fdfdfd","stroke":3,"height":51,"fontSize":35,"font":"Microsoft YaHei","color":"#047800","centerX":10.5,"bold":true}},{"type":"Button","props":{"y":5,"stateNum":2,"skin":"comp/btn_close.png","right":24}},{"type":"TextInput","props":{"y":184,"width":500,"valign":"middle","type":"password","skin":"comp/img_bg2.png","sizeGrid":"24,16,24,22","prompt":"密码文本输入","padding":"10,10,10,10,10","leading":8,"height":62,"fontSize":25,"font":"SimHei","editable":true,"centerX":3.5}},{"type":"TextInput","props":{"y":264,"wordWrap":false,"width":500,"valign":"middle","type":"number","skin":"comp/img_bg2.png","sizeGrid":"24,16,24,22","prompt":"数字文本输入","padding":"10,10,10,10,10","height":62,"fontSize":25,"font":"SimHei","editable":true,"centerX":5.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.TextInputUI.uiView);
        }
    }
}

module ui {
    export class TreeUI extends View {
		public tree:Laya.Tree;

        public static  uiView:any ={"type":"View","props":{"width":1084,"height":680},"child":[{"type":"Image","props":{"width":385,"skin":"comp/img_bg.png","sizeGrid":"43,39,36,39","height":504,"centerY":0,"centerX":0.5}},{"type":"Box","props":{"y":132,"x":380},"child":[{"type":"Rect","props":{"width":324,"height":416,"fillColor":"#c2e0fb"}}]},{"type":"Tree","props":{"y":132,"x":380,"width":324,"var":"tree","spaceLeft":10,"spaceBottom":5,"scrollBarSkin":"comp/vscroll.png","height":416,"centerY":0,"centerX":0},"child":[{"type":"Box","props":{"renderType":"render"},"child":[{"type":"Clip","props":{"y":0,"x":0,"width":288,"skin":"comp/clip_selectBox.png","name":"selectBox","height":63,"clipY":2}},{"type":"Clip","props":{"y":0,"x":0,"width":64,"skin":"comp/clip_tree_arrow.png","name":"arrow","height":64,"clipY":2}},{"type":"Clip","props":{"y":1,"x":56,"skin":"comp/clip_tree_folder.png","name":"folder","clipY":3}},{"type":"Label","props":{"y":20,"x":148,"width":94,"text":"文件夹","name":"label","height":25,"fontSize":25,"font":"SimHei","color":"#1839a1","bold":true}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.TreeUI.uiView);
        }
    }
}

module ui {
    export class ViewStackUI extends View {
		public tab:Laya.Tab;
		public viewStack:Laya.ViewStack;

        public static  uiView:any ={"type":"View","props":{"width":1084,"height":680,"cacheAs":"bitmap"},"child":[{"type":"Box","props":{"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":578,"skin":"comp/img_bg.png","sizeGrid":"60,51,50,51","height":411}},{"type":"Image","props":{"y":74,"x":27,"width":525,"skin":"comp/img_bg2.png","sizeGrid":"15,16,17,15","height":304}},{"type":"Tab","props":{"y":35,"x":41,"var":"tab","space":0,"skin":"comp/tab_1.png","selectedIndex":0,"labels":"雪人,糖罐,绿树","labelSize":18,"labelPadding":"0,0,0,-3","labelColors":"#31ffcd,#0445a6","labelBold":true,"direction":"horizontal"}},{"type":"ViewStack","props":{"y":138,"x":127,"var":"viewStack"},"child":[{"type":"Box","props":{"y":10,"x":6,"name":"item0"},"child":[{"type":"Image","props":{"y":0,"x":26,"skin":"comp/img_snowman.png","name":"item0"}},{"type":"Label","props":{"y":19,"x":196,"width":45,"text":"雪人","height":16,"fontSize":20,"font":"SimHei","color":"#ff0905","bold":true}},{"type":"Label","props":{"y":48,"x":196,"wordWrap":true,"width":117,"text":"雪人中藏着让人疯狂的大礼包，击毁它，有一定机率获得，看您的运气了！！","leading":3,"height":99,"fontSize":16,"font":"SimHei","color":"#067bbc"}}]},{"type":"Box","props":{"y":8,"x":11,"name":"item1"},"child":[{"type":"Image","props":{"y":0,"x":-11,"skin":"comp/img_sweets.png","name":"item1"}},{"type":"Label","props":{"y":19,"x":189,"width":45,"text":"糖罐","height":16,"fontSize":20,"font":"SimHei","color":"#ff0905","bold":true}},{"type":"Label","props":{"y":48,"x":189,"wordWrap":true,"width":117,"text":"如果您遇到它，恭喜您可以得到大量的体力了，它让您的攻击时间大大的加长!","leading":3,"height":99,"fontSize":16,"font":"SimHei","color":"#067bbc"}}]},{"type":"Box","props":{"x":1,"name":"item2"},"child":[{"type":"Image","props":{"y":0,"x":4,"width":146,"skin":"comp/img_tree.png","name":"item2","height":204}},{"type":"Label","props":{"y":26,"x":198,"width":45,"text":"绿树","height":16,"fontSize":20,"font":"SimHei","color":"#ff0905","bold":true}},{"type":"Label","props":{"y":55,"x":198,"wordWrap":true,"width":117,"text":"周边有敌人，但您的血量很少的时候，赶快躲到它后面去吧，暂时是一个安全港湾！","leading":3,"height":99,"fontSize":16,"font":"SimHei","color":"#067bbc"}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ViewStackUI.uiView);
        }
    }
}
