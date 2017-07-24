package laya.d3.animation {
	
	/**
	 * @private
	 */
	public class AnimationNode {
		public var path:Uint16Array;
		public var componentType:String;
		public var propertyName:String;
		public var lerpType:int;
		public var keyFrames:Vector.<KeyFrame>;
		public var extenData:ArrayBuffer;
		public var dataOffset:int;
		
		//public var playTime:Number;//兼容
		//public var keyframeWidth:int;//兼容
	}
}