/*
* name;
*/
class TextAreaView extends ui.TextAreaUI{
    constructor(){
        super();
        this.textArea.text=Laya.Loader.getRes("layaair.txt");
		this.textArea.vScrollBar.scrollSize=50;
    }
}