package laya.d3.animation {
	import laya.utils.Byte;
	
	/**
	 * @private
	 */
	public class AnimationParser01 {
		/**@private */
		private static var _animationClip:AnimationClip;
		/**@private */
		private static var _reader:Byte;
		/**@private */
		private static var _strings:Array = [];
		/**@private */
		private static var _BLOCK:Object = {count: 0};
		/**@private */
		private static var _DATA:Object = {offset: 0, size: 0};
		
		/**
		 * @private
		 */
		private static function READ_DATA():void {
			_DATA.offset = _reader.getUint32();
			_DATA.size = _reader.getUint32();
		}
		
		/**
		 * @private
		 */
		private static function READ_BLOCK():void {
			var count:uint = _BLOCK.count = _reader.getUint16();
			var blockStarts:Array = _BLOCK.blockStarts = [];
			var blockLengths:Array = _BLOCK.blockLengths = [];
			for (var i:int = 0; i < count; i++) {
				blockStarts.push(_reader.getUint32());
				blockLengths.push(_reader.getUint32());
			}
		}
		
		/**
		 * @private
		 */
		private static function READ_STRINGS():void {
			var offset:uint = _reader.getUint32();
			var count:uint = _reader.getUint16();
			var prePos:int = _reader.pos;
			_reader.pos = offset + _DATA.offset;
			
			for (var i:int = 0; i < count; i++)
				_strings[i] = _reader.readUTFString();
			
			_reader.pos = prePos;
		}
		
		/**
		 * @private
		 */
		public static function parse(templet:AnimationClip, reader:Byte):void {
			_animationClip = templet;
			_reader = reader;
			var arrayBuffer:ArrayBuffer = reader.__getBuffer();
			READ_DATA();
			READ_BLOCK();
			READ_STRINGS();
			for (var i:int = 0, n:int = _BLOCK.count; i < n; i++) {
				var index:int = reader.getUint16();
				var blockName:String = _strings[index];
				var fn:Function = AnimationParser01["READ_" + blockName];
				if (fn == null)
					throw new Error("model file err,no this function:" + index + " " + blockName);
				else
					fn.call();
			}
		}
		
		public static function READ_ANIMATIONS():void {
			var i:int, j:int, k:int;
			var reader:Byte = _reader;
			var buffer:ArrayBuffer = reader.__getBuffer();
			
			var lengths:Vector.<int> = new Vector.<int>();
			var lenghthTypeCount:int = reader.getUint8();
			lengths.length = lenghthTypeCount;
			for (i = 0; i < lenghthTypeCount; i++)
				lengths[i] = reader.getUint16();
			
			var ani:AnimationClip = _animationClip;
			var nodes:Vector.<AnimationNode> = ani._nodes = new Vector.<AnimationNode>;
			ani.name = _strings[reader.getUint16()];
			ani._bone3DMap = {};
			ani._playTime = reader.getFloat32();
			var boneCount:int = ani._nodes.length = reader.getInt16();
			//ani.totalKeyframeDatasLength = 0;
			for (i = 0; i < boneCount; i++) {
				var node:AnimationNode = nodes[i] = /*[IF-FLASH]*/ new AnimationNode();
				//[IF-SCRIPT] {};
				//node.keyframeWidth = keyframeWidth;//TODO:存在骨骼里是否合并，需要优化到动画中更合理。
				
				
				var pathLength:int = reader.getUint16();
				var paths:Uint16Array = new Uint16Array(pathLength);
				for (j = 0; j < boneCount; j++) 
					paths[i] = reader.getUint16();
					
				node.componentType=_strings[reader.getUint16()];
				node.propertyName=_strings[reader.getUint16()];
				node.keyFrames = new Vector.<KeyFrame>();
				
				//node.interpolationMethod = interpolationMethod;//TODO:
				//ani.totalKeyframeDatasLength += keyframeWidth;
				//node.playTime = ani.playTime;//节点总时间可能比总时长大，次处修正
			}
			
			var keyframeCount:int = reader.getUint16();
			for (j = 0; j < keyframeCount; j++) {
				var startTime:Number = reader.getFloat32();
				var boneLength:int = reader.getUint16();
				for (k = 0; k < boneLength; k++) {
					var boneIndex:int = reader.getUint16();
					var keyFrame:KeyFrame =/*[IF-FLASH]*/ new KeyFrame();
					//[IF-SCRIPT] {};
					keyFrame.startTime = startTime;
					var dataLength:int = lengths[reader.getUint8()];
					var offset:int = reader.pos;
					keyFrame.data = new Float32Array(buffer.slice(offset, offset + dataLength));
					nodes[boneIndex].keyFrames.push(keyFrame);
				}
				//node.keyFrame.length = keyframeCount;//未设置,无法一下读取到、
				//duration、dData、nextData
				//_templet._calculateKeyFrame(node, keyframeCount, keyframeWidth);
			}
		}
	}
}