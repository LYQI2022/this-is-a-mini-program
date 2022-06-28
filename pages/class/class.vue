<template>
	<view class="content">
		<!-- <Dialog :show="dialogShow"></Dialog> -->
		<view class="m-clock">
			<text class="minutes">{{ minutes }}</text>
			<text class="split">:</text>
			<text class="seconds">{{ seconds }}</text>
		</view>
		<view class="text-area" v-if="currentQuestion.question">
			<view class="tips">{{ questions.length }}/20</view>
			<text class="text">{{ currentQuestion.question.split('?')[0] }}</text>
			<text class="input">{{ userAnswer }}</text>
			<text class="text">{{ currentQuestion.question.split('?')[1] }}</text>
		</view>
		<view class="title">{{ currentQuestion.title }}</view>
		<view class="m-keyboard">
			<view
				v-for="item in keyborads"
				class="item"
				:class="{
					zero: item === 0,
					clear: item === 'clear',
					confirm: item === 'confirm'
				}"
				:key="item"
				@click="handleInput(item)"
			>
				{{ item === 'clear' ? '清除' : item === 'confirm' ? '确认' : item }}
			</view>
		</view>
	</view>
</template>

<script>
// import Dialog from '../../components/dialog.vue';
export default {
	// components: {
	// 	Dialog
	// },
	data() {
		return {
			times: 0,
			questions: [],
			currentQuestion: {},
			userAnswer: '',
			keyborads: [1, 2, 3, 'clear', 4, 5, 6, 'confirm', 7, 8, 9, 0, '.'],
			dialogShow: false
		};
	},
	computed: {
		minutes() {
			return Math.floor(this.times / 60) < 10 ? '0' + Math.floor(this.times / 60) : Math.floor(this.times / 60);
		},
		seconds() {
			return this.times % 60 < 10 ? '0' + (this.times % 60) : this.times % 60;
		}
	},
	onLoad() {
		this.questions.push(this.add());
		this.currentQuestion = this.questions[0];
		this.countTimes();
	},
	methods: {
		// 计时函数
		countTimes() {
			setTimeout(() => {
				this.times++;
				this.countTimes();
			}, 1000);
		},
		// 出题函数
		add(type = 1) {
			const num1 = Math.round(Math.random() * 10);
			const num2 = Math.round(Math.random() * 20);
			const result = num1 + num2;
			if (type === 1) {
				return {
					question: `${num1} + ${num2} = ?`,
					answer: result,
					userAnswer: '',
					title: '两个数的加法',
					example: '3 + 5 = ?'
				};
			} else {
				return {
					question: `${num1} + ? = ${result}`,
					answer: num2,
					userAnswer: '',
					title: '两个数的加法',
					example: '3 + 5 = ?'
				};
			}
		},
		// 下一题
		nextQuestion() {
			this.userAnswer = '';
			// 小于20题继续出题,否则跳转结果页
			if (this.questions.length < 20) {
				let random = Math.round(Math.random()) + 1;
				this.questions.push(this.add(random));
				this.currentQuestion = this.questions[this.questions.length - 1];
			} else {
				uni.setStorageSync('currentQuestions', this.questions);
				uni.navigateTo({
					url: '/pages/result/result'
				});
			}
		},
		// 处理用户输入
		handleInput(value) {
			// 如果是清除按钮点击
			if (value === 'clear') {
				this.userAnswer = '';
				return;
			}
			// 如果是确认按钮点击
			if (value === 'confirm') {
				this.currentQuestion.userAnswer = this.userAnswer;
				this.userAnswer = '';
				this.nextQuestion();
				return;
			}
			this.userAnswer += value;
			if (this.userAnswer.length === (this.currentQuestion.answer + '').length) {
				if (this.userAnswer * 1 === this.currentQuestion.answer) {
					this.currentQuestion.isCorrect = true;
				}
				this.currentQuestion.userAnswer = this.userAnswer;
				this.userAnswer = '';
				this.nextQuestion();
			}
		}
	}
};
</script>

<style>
.content {
	margin-top: 150px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.m-clock {
	position: absolute;
	top: 30px;
	left: 25px;
	padding: 0 5px;
	background: #fff;
	border: 1px solid #f5f5f5;
	border-radius: 10px;
	line-height: 2;
	font-size: 15px;
	color: #45b7ff;
}
.split {
	margin: 0 3px;
}

.text-area {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	line-height: 95px;
	width: 230px;
	text-align: center;
	background: #169df3;
	border-radius: 15px;
}
.text-area .tips {
	position: absolute;
	top: -6px;
	left: 18px;
	background: #333;
	font-size: 10px;
	padding: 2px;
	line-height: 10px;
}
.text-area .tips::after {
	content: '';
	position: absolute;
	left: -6px;
	top: 0;
	border: 3px solid transparent;
	border-right: 3px solid #333;
	border-bottom: 3px solid #333;
}
.text-area .input {
	width: 30px;
	height: 30px;
	margin: 0 5px;
	border: 2px solid #eee;
	border-radius: 2px;
	text-align: center;
	font-weight: bold;
	color: #000;
	line-height: 30px;
}
.btn {
	margin-top: 80px;
	width: 120px;
	line-height: 40px;
}

.title {
	line-height: 3;
	border-top: none;
	width: 180px;
	text-align: center;
	box-shadow: 0 0 2px #ddd;
	border-radius: 0 0 10px 10px;
	font-size: 36rpx;
	color: #8f8f94;
	background-color: #fff;
}
.m-keyboard {
	position: fixed;
	bottom: 30px;
	left: 0;
	right: 0;
	display: grid;
	grid-template-columns: repeat(4, 25%);
}
.m-keyboard .item {
	margin: 5px;
	box-shadow: 0 0 3px #ccc;
	border-radius: 3px;
	background: #fff;
	line-height: 40px;
	text-align: center;
}
.item.confirm {
	grid-column-start: 4;
	grid-column-end: 4;
	grid-row-start: 2;
	grid-row-end: 5;
	color: #fff;
	background: #08f;
	line-height: 120px;
}
.item.zero {
	grid-column-start: 1;
	grid-column-end: 3;
}
</style>
