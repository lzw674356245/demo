package laya.d3.animation {
	import laya.ani.math.BezierLerp;
	import laya.d3.animation.AnimationParser01;
	import laya.events.Event;
	import laya.maths.MathUtil;
	import laya.resource.Resource;
	import laya.utils.Byte;
	
	/**
	 * <code>AnimationTemplet</code> 类用于动画模板资源。
	 */
	public class AnimationClip extends Resource {
		/*[DISABLE-ADD-VARIABLE-DEFAULT-VALUE]*/
		public static var interpolation:Array = /*[STATIC SAFE]*/ [_LinearInterpolation_0, _QuaternionInterpolation_1, _AngleInterpolation_2, _RadiansInterpolation_3, _Matrix4x4Interpolation_4, _NoInterpolation_5, _BezierInterpolation_6, _BezierInterpolation_7];
		
		/**
		 * @private
		 */
		private static function _LinearInterpolation_0(bone:AnimationNode, index:int, out:Float32Array, outOfs:int, data:Float32Array, dt:Number, dData:Float32Array, duration:Number, nextData:Float32Array, interData:Array = null):int {
			out[outOfs] = data[index] + dt * dData[index];
			return 1;
		}
		
		/**
		 * @private
		 */
		private static function _QuaternionInterpolation_1(bone:*, index:int, out:Float32Array, outOfs:int, data:Float32Array, dt:Number, dData:Float32Array, duration:Number, nextData:Float32Array, interData:Array = null):int {
			var amount:Number = duration === 0 ? 0 : dt / duration;
			MathUtil.slerpQuaternionArray(data, index, nextData, index, amount, out, outOfs);//(dt/duration)为amount比例
			return 4;
		}
		
		/**
		 * @private
		 */
		private static function _AngleInterpolation_2(bone:AnimationNode, index:int, out:Float32Array, outOfs:int, data:Float32Array, dt:Number, dData:Float32Array, duration:Number, nextData:Float32Array, interData:Array = null):int {
			return 0;
		}
		
		/**
		 * @private
		 */
		private static function _RadiansInterpolation_3(bone:AnimationNode, index:int, out:Float32Array, outOfs:int, data:Float32Array, dt:Number, dData:Float32Array, duration:Number, nextData:Float32Array, interData:Array = null):int {
			return 0;
		}
		
		/**
		 * @private
		 */
		private static function _Matrix4x4Interpolation_4(bone:*, index:int, out:Float32Array, outOfs:int, data:Float32Array, dt:Number, dData:Float32Array, duration:Number, nextData:Float32Array, interData:Array = null):int {
			for (var i:int = 0; i < 16; i++, index++)
				out[outOfs + i] = data[index] + dt * dData[index];
			return 16;
		}
		
		/**
		 * @private
		 */
		private static function _NoInterpolation_5(bone:AnimationNode, index:int, out:Float32Array, outOfs:int, data:Float32Array, dt:Number, dData:Float32Array, duration:Number, nextData:Float32Array, interData:Array = null):int {
			out[outOfs] = data[index];
			return 1;
		}
		
		/**
		 * @private
		 */
		private static function _BezierInterpolation_6(bone:AnimationNode, index:int, out:Float32Array, outOfs:int, data:Float32Array, dt:Number, dData:Float32Array, duration:Number, nextData:Float32Array, interData:Array = null, offset:int = 0):int {
			out[outOfs] = data[index] + (nextData[index] - data[index]) * BezierLerp.getBezierRate(dt / duration, interData[offset], interData[offset + 1], interData[offset + 2], interData[offset + 3]);
			return 5;
		}
		
		/**
		 * @private
		 */
		private static function _BezierInterpolation_7(bone:AnimationNode, index:int, out:Float32Array, outOfs:int, data:Float32Array, dt:Number, dData:Float32Array, duration:Number, nextData:Float32Array, interData:Array = null, offset:int = 0):int {
			//interData=[x0,y0,x1,y1,start,d,offTime,allTime]
			out[outOfs] = interData[offset + 4] + interData[offset + 5] * BezierLerp.getBezierRate((dt * 0.001 + interData[offset + 6]) / interData[offset + 7], interData[offset], interData[offset + 1], interData[offset + 2], interData[offset + 3]);
			return 9;
		}
		
		/**
		 * 加载动画模板。
		 * @param url 动画模板地址。
		 */
		public static function load(url:String):AnimationClip {
			return Laya.loader.create(url, null, null, AnimationClip);
		}
		
		/**@private */
		public var _aniVersion:String;
		/**@private */
		public var _nodes:Vector.<AnimationNode>;
		/**@private */
		public var _playTime:Number;
		///**@private */
		//public var _bone3DMap:*;
		/**@private */
		public var _publicExtData:ArrayBuffer;//公共扩展数据
		/**@private */
		public var _useParent:Boolean;//是否采用对象树数据格式
		/**@private */
		protected var unfixedCurrentFrameIndexes:Uint32Array;
		/**@private */
		protected var unfixedCurrentTimes:Float32Array;
		/**@private */
		protected var unfixedKeyframes:Vector.<KeyFrame>;
		/**@private */
		public var _aniClassName:String;
		/**@private */
		public var _animationDatasCache:*;
		
		public function AnimationClip() {
			_nodes = new Vector.<AnimationNode>();
		}
		
		/**
		 * @private
		 */
		public function _endLoaded():void {
			_loaded = true;
			event(Event.LOADED, this);
		}
		
		/**
		 * @private
		 */
		public function _calculateKeyFrame(node:AnimationNode, keyframeCount:int, keyframeDataCount:int):void {
			var keyFrames:Vector.<KeyFrame> = node.keyFrames;
			keyFrames[keyframeCount] = keyFrames[0];
			for (var i:int = 0; i < keyframeCount; i++) {
				var keyFrame:KeyFrame = keyFrames[i];
				for (var j:int = 0; j < keyframeDataCount; j++) {
					keyFrame.dData[j] = (keyFrame.duration === 0) ? 0 : (keyFrames[i + 1].data[j] - keyFrame.data[j]) / keyFrame.duration;//末帧dData数据为0
					keyFrame.nextData[j] = keyFrames[i + 1].data[j];
				}
			}
			keyFrames.length--;
		}
		
		/**
		 * @inheritDoc
		 */
		override public function onAsynLoaded(url:String, data:*, params:Array):void {
			var reader:Byte = new Byte(data);
			_aniVersion = reader.readUTFString();
			switch (_aniVersion) {
			case "LAYAANIMATION:01": 
				AnimationParser01.parse(this, reader);
				break;
			}
			
			_endLoaded();
		}
		
		
		public function getAniDuration():int {
			return _playTime;
		}
		
		public function getNodes():* {
			return _nodes;
		}
		
		//public function getNodeIndexWithName(name:String):int {
			//return _bone3DMap[name];
		//}
		
		public function getNodeCount():int {
			return _nodes.length;
		}
		
		//public function getTotalkeyframesLength(aniIndex:int):int {
			//return _anis[aniIndex].totalKeyframeDatasLength;
		//}
		
		public function getAnimationDataWithCache(key:*, cacheDatas:*, aniIndex:int, frameIndex:int):Float32Array {
			var aniDatas:Object = cacheDatas[aniIndex];
			if (!aniDatas) {
				return null;
			} else {
				var keyDatas:Array = aniDatas[key];
				if (!keyDatas)
					return null;
				else {
					return keyDatas[frameIndex];
				}
			}
		}
		
		public function setAnimationDataWithCache(key:*, cacheDatas:Array, aniIndex:int, frameIndex:Number, data:*):void {
			var aniDatas:Object = (cacheDatas[aniIndex]) || (cacheDatas[aniIndex] = {});
			var aniDatasCache:Array = (aniDatas[key]) || (aniDatas[key] = []);
			aniDatasCache[frameIndex] = data;
		}
		
		public function getOriginalData(originalData:Float32Array, nodesFrameIndices:Array, frameIndex:int, playCurTime:Number):void {
			var nodes:Vector.<AnimationNode> =_nodes;
			
			var j:int = 0;
			for (var i:int = 0, n:int = nodes.length, outOfs:int = 0; i < n; i++) {
				var node:AnimationNode = nodes[i];
				
				var key:KeyFrame;
				key = node.keyFrames[nodesFrameIndices[i][frameIndex]];
				
				node.dataOffset = outOfs;
				
				var dt:Number = playCurTime - key.startTime;
				
				var lerpType:int = node.lerpType;
				if (lerpType) {
					switch (lerpType) {
					case 0: 
					case 1: 
						//for (j = 0; j < node.keyframeWidth; )//TODO:
							//j += node.interpolationMethod[j](node, j, originalData, outOfs + j, key.data, dt, key.dData, key.duration, key.nextData);
						break;
					case 2: 
						var interpolationData:Array = key.interpolationData;
						var interDataLen:int = interpolationData.length;
						var dataIndex:int = 0;
						for (j = 0; j < interDataLen; ) {
							var type:int = interpolationData[j];
							switch (type) {
							case 6: 
								j += interpolation[type](node, dataIndex, originalData, outOfs + dataIndex, key.data, dt, key.dData, key.duration, key.nextData, interpolationData, j + 1);
								break;
							case 7: 
								j += interpolation[type](node, dataIndex, originalData, outOfs + dataIndex, key.data, dt, key.dData, key.duration, key.nextData, interpolationData, j + 1);
								break;
							default: 
								j += interpolation[type](node, dataIndex, originalData, outOfs + dataIndex, key.data, dt, key.dData, key.duration, key.nextData);
								
							}
							dataIndex++;
						}
						break;
					}
				} else {//TODO:
					//for (j = 0; j < node.keyframeWidth; )
						//j += node.interpolationMethod[j](node, j, originalData, outOfs + j, key.data, dt, key.dData, key.duration, key.nextData);
				}
				
				//outOfs += node.keyframeWidth;
			}
		}
		
		public function getNodesCurrentFrameIndex(playCurTime:Number):Uint32Array {
			var nodes:Vector.<AnimationNode> = _nodes;
			
			if (!unfixedCurrentFrameIndexes) {//TODO:需确认
				unfixedCurrentFrameIndexes = new Uint32Array(nodes.length);
				unfixedCurrentTimes = new Float32Array(nodes.length);
			}
			
			for (var i:int = 0, n:int = nodes.length, outOfs:int = 0; i < n; i++) {
				var node:AnimationNode = nodes[i];
				if (playCurTime < unfixedCurrentTimes[i])
					unfixedCurrentFrameIndexes[i] = 0;
				unfixedCurrentTimes[i] = playCurTime;
				
				while ((unfixedCurrentFrameIndexes[i] < node.keyFrames.length)) {
					if (node.keyFrames[unfixedCurrentFrameIndexes[i]].startTime > unfixedCurrentTimes[i])
						break;
					
					unfixedCurrentFrameIndexes[i]++;
				}
				unfixedCurrentFrameIndexes[i]--;
			}
			return unfixedCurrentFrameIndexes;
		}
		
		public function getOriginalDataUnfixedRate(originalData:Float32Array, playCurTime:Number):void {
			var nodes:Vector.<AnimationNode> = _nodes;
			
			if (!unfixedCurrentFrameIndexes) {//TODO:需确认
				unfixedCurrentFrameIndexes = new Uint32Array(nodes.length);
				unfixedCurrentTimes = new Float32Array(nodes.length);
				unfixedKeyframes = new Vector.<KeyFrame>(nodes.length);
			}
			
			var j:int = 0;
			for (var i:int = 0, n:int = nodes.length, outOfs:int = 0; i < n; i++) {
				var node:AnimationNode = nodes[i];
				
				if (playCurTime < unfixedCurrentTimes[i])
					unfixedCurrentFrameIndexes[i] = 0;
				
				unfixedCurrentTimes[i] = playCurTime;
				
				while (unfixedCurrentFrameIndexes[i] < node.keyFrames.length) {
					if (node.keyFrames[unfixedCurrentFrameIndexes[i]].startTime > unfixedCurrentTimes[i])
						break;
					
					unfixedKeyframes[i] = node.keyFrames[unfixedCurrentFrameIndexes[i]];
					unfixedCurrentFrameIndexes[i]++;
				}
				
				var key:KeyFrame = unfixedKeyframes[i];
				node.dataOffset = outOfs;
				var dt:Number = playCurTime - key.startTime;
				var lerpType:int = node.lerpType;
				if (lerpType) {
					switch (node.lerpType) {
					case 0: 
					case 1: 
						//for (j = 0; j < node.keyframeWidth; )//TODO:
							//j += node.interpolationMethod[j](node, j, originalData, outOfs + j, key.data, dt, key.dData, key.duration, key.nextData);
						break;
					case 2: 
						var interpolationData:Array = key.interpolationData;
						var interDataLen:int = interpolationData.length;
						var dataIndex:int = 0;
						for (j = 0; j < interDataLen; ) {
							var type:int = interpolationData[j];
							switch (type) {
							case 6: 
								j += interpolation[type](node, dataIndex, originalData, outOfs + dataIndex, key.data, dt, key.dData, key.duration, key.nextData, interpolationData, j + 1);
								break;
							case 7: 
								j += interpolation[type](node, dataIndex, originalData, outOfs + dataIndex, key.data, dt, key.dData, key.duration, key.nextData, interpolationData, j + 1);
								break;
							default: 
								j += interpolation[type](node, dataIndex, originalData, outOfs + dataIndex, key.data, dt, key.dData, key.duration, key.nextData);
								
							}
							dataIndex++;
						}
						break;
					}
				} else {
					//for (j = 0; j < node.keyframeWidth; )//TODO:
						//j += node.interpolationMethod[j](node, j, originalData, outOfs + j, key.data, dt, key.dData, key.duration, key.nextData);
				}
				
				//outOfs += node.keyframeWidth;
			}
		}
		
		override public function dispose():void {
			if (resourceManager)
				resourceManager.removeResource(this);
			super.dispose();
		}
	
	}
}

