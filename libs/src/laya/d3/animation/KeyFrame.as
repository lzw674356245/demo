package laya.d3.animation {
	
	/**
	 * @private
	 */
	public class KeyFrame {
		public var startTime:Number;
		public var data:Float32Array;//= new Float32Array();
		public var duration:Number;//待定
		
		
		public var dData:Float32Array;//= new Float32Array();//兼容
		public var nextData:Float32Array;//= new Float32Array();//兼容
		public var interpolationData:Array;//私有插值方式 [type0(插值类型),Data0(插值数据,可为空)，type1(插值类型),Data1(插值数据,可为空)] 注意：254全线性插值，255全不插值//兼容
	
	}

}