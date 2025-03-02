export type Styles = {
	/**
	 * ### 线性
	 * 以相同速度开始至结束的过渡效果 `t`。
	 */
	linear: string;
	/**
	 * ### 助跑线性
	 * 与线性效果几乎相同 `1t`。
	 */
	linearApproach: string;
	/**
	 * ### 缓动
	 * 以慢速开始，然后变快，然后慢速结束的过渡效果。
	 */
	ease: string;
	/**
	 * ### 缓入
	 * 以慢速开始的过渡效果。
	 */
	easeIn: string;
	/**
	 * ### 二次缓入
	 * 二次方的缓动 `t²`。
	 */
	easeInQuad: string;
	/**
	 * ### 三次缓入
	 * 三次方的缓动 `t³`。
	 */
	easeInCubic: string;
	/**
	 * ### 四次缓入
	 * 四次方的缓动 `t⁴`。
	 */
	easeInQuart: string;
	/**
	 * ### 五次缓入
	 * 五次方的缓动 `t⁵`。
	 */
	easeInQuint: string;
	/**
	 * ### 正弦缓入
	 * 正弦曲线的缓动 `sin(t)`。
	 */
	easeInSine: string;
	/**
	 * ### 指数缓入
	 * 指数曲线的缓动 `2ᵗ`。
	 */
	easeInExpo: string;
	/**
	 * ### 圆形缓入
	 * 圆形曲线的缓动 `√(1-t²)`。
	 */
	easeInCirc: string;
	/**
	 * ### 反弹缓入
	 * 超过范围的三次方缓动 `(s+1)t³-st²`。
	 */
	easeInBack: string;
	/**
	 * ### 最大缓入
	 * 将锚点拉到头的缓动 `3t^⅔-2t`。
	 */
	easeInMax: string;
	/**
	 * ### 平滑缓入
	 * 由设计师艾拉精心调整的平滑缓动参数。
	 */
	easeInSmooth: string;
	/**
	 * ### 缓出
	 * 以慢速开始的过渡效果。
	 */
	easeOut: string;
	/**
	 * ### 二次缓出
	 * 二次方的缓动 `t²`。
	 */
	easeOutQuad: string;
	/**
	 * ### 三次缓出
	 * 三次方的缓动 `t³`。
	 */
	easeOutCubic: string;
	/**
	 * ### 四次缓出
	 * 四次方的缓动 `t⁴`。
	 */
	easeOutQuart: string;
	/**
	 * ### 五次缓出
	 * 五次方的缓动 `t⁵`。
	 */
	easeOutQuint: string;
	/**
	 * ### 正弦缓出
	 * 正弦曲线的缓动 `sin(t)`。
	 */
	easeOutSine: string;
	/**
	 * ### 指数缓出
	 * 指数曲线的缓动 `2ᵗ`。
	 */
	easeOutExpo: string;
	/**
	 * ### 圆形缓出
	 * 圆形曲线的缓动 `√(1-t²)`。
	 */
	easeOutCirc: string;
	/**
	 * ### 反弹缓出
	 * 超过范围的三次方缓动 `(s+1)t³-st²`。
	 */
	easeOutBack: string;
	/**
	 * ### 最大缓出
	 * 将锚点拉到头的缓动 `3t^⅔-2t`。
	 */
	easeOutMax: string;
	/**
	 * ### 平滑缓出
	 * 由设计师艾拉精心调整的平滑缓动参数。
	 */
	easeOutSmooth: string;
	/**
	 * ### 流动设计强调用缓出
	 * 微软 Windows 11 Fluent 2 中用于强调用的缓出，如任务栏图标跳动等。
	 */
	easeOutFluentBack: string;
	/**
	 * ### 缓入缓出
	 * 以慢速开始的过渡效果。
	 */
	easeInOut: string;
	/**
	 * ### 二次缓入缓出
	 * 二次方的缓动 `t²`。
	 */
	easeInOutQuad: string;
	/**
	 * ### 三次缓入缓出
	 * 三次方的缓动 `t³`。
	 */
	easeInOutCubic: string;
	/**
	 * ### 四次缓入缓出
	 * 四次方的缓动 `t⁴`。
	 */
	easeInOutQuart: string;
	/**
	 * ### 五次缓入缓出
	 * 五次方的缓动 `t⁵`。
	 */
	easeInOutQuint: string;
	/**
	 * ### 正弦缓入缓出
	 * 正弦曲线的缓动 `sin(t)`。
	 */
	easeInOutSine: string;
	/**
	 * ### 指数缓入缓出
	 * 指数曲线的缓动 `2ᵗ`。
	 */
	easeInOutExpo: string;
	/**
	 * ### 圆形缓入缓出
	 * 圆形曲线的缓动 `√(1-t²)`。
	 */
	easeInOutCirc: string;
	/**
	 * ### 反弹缓入缓出
	 * 超过范围的三次方缓动 `(s+1)t³-st²`。
	 */
	easeInOutBack: string;
	/**
	 * ### 最大缓入缓出
	 * 将锚点拉到头的缓动 `3t^⅔-2t`。
	 */
	easeInOutMax: string;
	/**
	 * ### 平滑缓入缓出
	 * 由设计师艾拉精心调整的平滑缓动参数。
	 */
	easeInOutSmooth: string;
	/**
	 * ### 流动设计点对点缓出
	 * 微软 Windows 11 Fluent 2 中用于点对点的缓出，如窗口最大化、还原等。
	 */
	easeInOutFluent: string;
};

export type ClassNames = keyof Styles;

declare const styles: Readonly<Styles>;

export default styles;
