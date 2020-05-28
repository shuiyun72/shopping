<template>
	<view class="graded_com_sy">
		<view class="iconfont iconxingxing active" v-for="(t,i) in num" :key="i+80000"></view>
		<view class="iconfont iconxingxing" v-for="(t,i) in (5-num)" :key="i+90000"></view>
		<view class="fen">
			{{num}}分
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			num: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="less">
	.graded_com_sy {
		.iconxingxing {
			display: inline-block;
			color: #D0D2CF;
			font-size: 14px;
			margin: 6rpx;

			&.active {
				color: #FF726B;
			}
		}

		.fen {
			display: inline-block;
			font-size: 14px;
			margin-left: 12rpx;
		}
	}
</style>
