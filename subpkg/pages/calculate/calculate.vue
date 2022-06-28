<template>
	<view class="content">
		<view>
			<van-icon name="arrow-left" @click="goIndex" class="icon" />
			<text class="time">{{ minute }}:{{ second }}</text>
		</view>
		<view class="top">
			<text>1</text>
			<text>+</text>
			<text>2</text>
			<text>=</text>
			<text class="text">3</text>
		</view>
		<view class="center">10以内的加减法</view>
		<view class="bottom">
			<view>1</view>
			<view>2</view>
		</view>
		<!-- 隐藏的 dialog -->
		<view class="m-dialog" v-if="dialog">
			<view class="mask"></view>
			<view class="dialog-content">
				<image class="img" src="../../../static/image/小熊猫头.png"></image>
				<view class="title">要离开吗？</view>
				<view class="hint">退出练习后将不保留答题记录哦</view>
				<view class="select">
					<view class="btn" @click="backHome">退出练习</view>
					<view class="btn" style="background-color: #369fff;color: #fff;" @click="dialog = false">
						继续练习
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			dialog: false,
			minute: '0' + 0, // 分
			second: '0' + 0, // 秒
			num: 1
		};
	},
	onLoad() {
		this.setInterval();
	},
	methods: {
		// 显示隐藏的 dialog
		goIndex() {
			this.dialog = true;
		},
		// 返回上一个页面
		backHome() {
			uni.navigateBack();
		},
		// 定时器
		setInterval() {
			let minute = this.minute;
			let second = this.second;
			setInterval(() => {
				second++;
				// console.log(typeof second);
				if (second >= 60) {
					second = 0;
					minute++;
					// 分钟
					if (minute < 10) {
						// 小于10补零
						minute = '0' + minute;
					} else {
						minute = minute;
					}
				} else {
					second = second;
				}

				// console.log(minute);
				// 秒钟
				if (second < 10) {
					// 小于10补零
					second = '0' + second;
					// console.log(typeof second);
				} else {
					second = second;
				}
				this.minute = minute;
				this.second = second;
			}, 1000);
		}
	}
};
</script>

<style>
page {
	background-color: #f1f6fc;
}
.content {
	padding: 15px;
}

.icon {
	font-size: 20px;
	font-weight: 700;
}

.time {
	background-color: #fff;
	display: inline-block;
	width: 70px;
	height: 30px;
	text-align: center;
	line-height: 30px;
	border-radius: 15px;
	color: #44a6ff;
	font-weight: 700;
	margin-left: 5px;
	vertical-align: baseline;
}

.top {
	width: 100%;
	background-color: #2793f5;
	height: 130px;
	border-radius: 20px;
	color: #fff;
	text-align: center;
	line-height: 130px;
	font-size: 35px;
	margin-top: 40px;
	position: relative;
	top: 40px;
}

.text {
	border: 3px solid #abd7ff;
	width: 40px;
	height: 40px;
	line-height: 40px;
	display: inline-block;
	border-radius: 15px;
	background-color: #fff;
	color: #333;
}

.center {
	width: 90%;
	background-color: #fff;
	margin: auto;
	text-align: center;
	height: 100px;
	font-size: 16px;
	line-height: 150px;
	border-radius: 20px;
}

.dialog-content {
	position: fixed;
	bottom: 0px;
	right: 0;
	left: 0;
	background-color: #fff;
	border-radius: 15px;
	padding: 15px;
	z-index: 9999;
	text-align: center;
}

.mask {
	position: fixed;
	top: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	right: 0;
	left: 0;
	z-index: 999;
}

.img {
	width: 70px;
	height: 50px;
	border-radius: 50%;
	position: absolute;
	top: -33px;
	left: 20px;
}

.title {
	font-size: 20px;
	font-weight: 700;
}

.hint {
	color: #7d7d7d;
	margin: 20px 0 40px;
}

.select {
	display: flex;
	justify-content: space-around;
	margin-bottom: 20px;
}

.btn {
	width: 150px;
	height: 45px;
	line-height: 45px;
	border-radius: 25px;
	border: 1px solid #ccc;
	font-size: 18px;
}
</style>
