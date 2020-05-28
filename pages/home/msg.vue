<template>
	<view class="home_msg">
		<view class="item" v-for="t in 3" :key="t">
			<view class="time">
				2019年5月17日
			</view>
			<view class="box">
				<view class="title">
					系统消息
				</view>
				<view class="text">
					系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
	page{
		background-color: #EEEEEE;
	}
.home_msg{
	margin: 20rpx 30rpx;
	.item{
		
		.time{
			font-size: 10px;
			text-align: center;
			padding: 10rpx 0 20rpx;
			color: #999;
		}
		.box{
			background-color: #fff;
			border-radius: 10px;
			.title{
				text-align: center;
				padding: 20rpx 0 0;
			}
			.text{
				font-size: 14px;
				color: #666;
				padding: 20rpx 30rpx;
				line-height: 22px;
			}
		}
	}
	
}
</style>
