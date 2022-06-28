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
				<view style="margin-right:30px ;">
					<!-- <van-icon name="tosend" size="30px" /> -->
					<image src="../../static/image/历史.png" style="width: 24px;height: 30px;"></image>
					<view style="font-size: 10px;margin-top: 5rpx;">历史记录</view>
				</view>
				<view>
					<!-- <van-icon name="tosend" size="30px" /> -->
					<image
						src="../../static/image/帮助，反馈，帮助与反馈.png"
						style="width: 30px;height: 30px;"
					></image>
					<view style="font-size: 10px;margin-top: 5rpx;">反馈</view>
				</view>
			</view>
		</view>
		<view style="margin: auto;">
			<image class="img" src="../../static/image/Snipaste_2022-06-27_20-16-29.png"></image>
		</view>
		<!-- dialog -->
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
			flag: false
			// type: '未设置'
		};
	},
	onLoad() {},
	methods: {
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
	display: flex;
}

.avatar-wrapper {
	margin-right: 20rpx;
}

.avatar {
	width: 112rpx;
	height: 112rpx;
	border-radius: 50%;
}

.img {
	width: 350px;
	height: 350px;
	border-radius: 50%;
}
</style>
