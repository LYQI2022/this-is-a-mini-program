<template>
	<view class="content">
		<view class="m-dialog">
			<view class="mask"></view>
			<view class="dialog-content">
				<image src="../static/image/小熊猫头.png" class="img"></image>
				<view class="top">
					<view class="btn-noset" @click="closed">暂不设置</view>
					<view class="title">选择年级</view>
				</view>
				<view class="grades">
					<view class="row">
						<view
							:class="name === item ? 'active' : 'grade'"
							v-for="(item, index) in num"
							:key="item"
							@click="hAdd(item)"
						>
							{{ item }}
						</view>
						<!-- <view class="grade">二年级</view>
						<view class="grade">三年级</view> -->
					</view>
					<!-- <view class="row">
						<view class="grade">四年级</view>
						<view class="grade">五年级</view>
						<view class="grade">六年级</view>
					</view> -->
				</view>
				<view class="confirm" @click="close">确定</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			num: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级'],
			name: '未设置'
		};
	},
	methods: {
		// 确定按钮，通知父组件关闭 dialog
		close() {
			this.$store.commit('class/updateType', this.name);
			this.$emit('close');
		},
		// 暂未设置
		closed() {
			this.$store.commit('class/updateType', '未设置');
			this.$emit('closed');
		},
		hAdd(item) {
			this.name = item;
		}
	}
};
</script>

<style>
.dialog-content {
	position: fixed;
	bottom: 0px;
	right: 0;
	left: 0;
	background-color: #fff;
	border-radius: 15px;
	padding: 15px;
	z-index: 9999;
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

.top {
	position: relative;
}

.btn-noset {
	position: absolute;
	font-size: 13px;
}

.title {
	text-align: center;
	font-weight: bold;
	font-size: 20px;
}

.row {
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
}

.row .grade {
	background-color: skyblue;
	width: 90px;
	line-height: 40px;
	text-align: center;
	border-radius: 20px;
	margin-top: 20px;
}

.active {
	background-color: #ecf6ff;
	width: 90px;
	line-height: 40px;
	text-align: center;
	border-radius: 20px;
	margin-top: 20px;
	color: #44a6ff;
}

.confirm {
	line-height: 45px;
	background-color: #0a8aff;
	width: auto;
	text-align: center;
	margin-top: 30px;
	border-radius: 20px;
	margin-bottom: 20px;
	color: #fff;
	font-size: 20px;
}

.img {
	width: 70px;
	height: 50px;
	border-radius: 50%;
	position: absolute;
	top: -33px;
}

.active {
}
</style>
