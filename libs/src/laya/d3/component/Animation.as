package laya.d3.component {
	import laya.d3.animation.AnimationClip;
	import laya.d3.animation.BoneNode;
	import laya.d3.core.Avatar;
	
	/**
	 * <code>Animation</code> 类用于创建动画组件。
	 */
	public class Animation extends Component3D {
		/**@private */
		public var clips:Vector.<AnimationClip>;
		/**@private */
		public var avatar:Avatar;
		
		/**
		 * 创建一个 <code>Animation</code> 实例。
		 */
		public function Animation() {
			super();
			clips = new Vector.<AnimationClip>();
		}	
	}

}