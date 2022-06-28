<template>
	<view class="content">
		<view style="margin: auto; font-size: 25px;">作业帮口算</view>
		<view class="text-area">
			<view class="left">
				<view class="avatar-wrapper">
					<image
						src="https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0"
						class="avatar"
					></image>
				</view>
				<view>
					<view style="font-weight: 700; font-size: 18px;">微信用户</view>
					<view style="margin-top: 10rpx;" @click="openDialog">{{ type }}</view>
				</view>
			</view>
			<view class="right">
				<!-- <view></view> -->
				<van-icon name="tosend" size="30px" />
				<view style="font-size: 10px;margin-top: 5rpx;">口算历史</view>
			</view>
		</view>
		<view class="card">
			<van-tabs>
				<van-tab title="AI智能练习" class="smart">
					<view style="margin: 50rpx 0 20rpx;">
						<image
							src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_mini%2Cc_zoom%2Cw_640%2Fimages%2F20170819%2Ff4db5f72c8234b29a60e8e60526d49c9.gif&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658891585&t=0869bf0ec957f39a5d42eb39f95c9da7"
							class="img"
						></image>
					</view>
					<view style="font-weight: bold; font-size: 20px;">用人工智能高效提升口算能力</view>
					<view style="font-size: 14px; margin: 15rpx 0 30rpx;">自动匹配学习进度，智能识别薄弱环节</view>
					<view class="btn">
						<van-button round block color="#349fff" @click="goCalculate">立即口算</van-button>
					</view>
					<view style="color: #f5a623; font-size: 12px;">已有4402503人使用AI智能练习</view>
				</van-tab>
				<van-tab title="知识点练习"><view>222</view></van-tab>
			</van-tabs>
		</view>
		<Dialog v-if="flag" @close="close" @closed="closed" />
	</view>
</template>

<script>
import Dialog from '@/components/dialog.vue';
import { mapState } from 'vuex';

export default {
	computed: {
		...mapState('class', ['type'])
	},
	components: {
		Dialog
	},
	data() {
		return {
			flag: true
			// type: '未设置'
		};
	},
	onLoad() {},
	methods: {
		// 跳转口算页
		goCalculate() {
			uni.navigateTo({
				url: '/subpkg/pages/calculate/calculate'
			});
		},
		close() {
			// 关闭 dialog
			this.flag = false;
			// 显示隐藏的 tabbar
			uni.showTabBar();
		},
		closed() {
			// 关闭 dialog
			this.flag = false;
			// 显示隐藏的 tabbar
			uni.showTabBar();
		},
		// 打开 dialog
		openDialog() {
			this.flag = true;
			uni.hideTabBar();
		}
	}
};
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	padding: 20rpx;
}

.text-area {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 40rpx;
	/* background-color: skyblue; */
}

.left {
	display: flex;
}

.right {
	text-align: center;
}

.avatar-wrapper {
	margin-right: 20rpx;
}

.avatar {
	width: 112rpx;
	height: 112rpx;
	border-radius: 50%;
}

.card {
	height: 800rpx;
	margin-top: 30rpx;
	border-radius: 10rpx;
	box-shadow: 5px 5px 5px 5px #cdcfcf;
}

.smart {
	text-align: center;
}

.img {
	width: 250rpx;
	height: 250rpx;
	border-radius: 50%;
}

.btn {
	width: 480rpx;
	margin: auto;
	margin-bottom: 20rpx;
}
</style>
