<template>
	<view class="login">
		<image class="login_logo" src="../../static/img/logo.jpg" mode="center"></image>
		<view class="icon_input_sy">
			<view class="iconfont iconshouji"></view>
			<input class="input" type="text"  v-model="phone" placeholder="请输入手机号"/>
		</view>
		<view class="icon_input_sy">
			<view class="iconfont iconicon_anquan"></view>
			<input class="input" type="text"  v-model="yzm" placeholder="请输入验证码"/>
			<view class="yzm">
				<view class="span">
					发送验证码
				</view> 
			</view>
		</view>
		<view class="login_p3">
			<button class="red2_btn">确定</button>
		</view>
		<view class="login_p4">
			<text class="t">选择第三方登录</text>
			<image src="../../static/img/wx.jpg" mode="center" class="img"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone:"",
				yzm:""
			};
		}
	}
</script>

<style lang="less">
.wm {
	margin: 0 auto
}

.t_center {
	text-align: center;
}

.login {
	padding: 0 60rpx 0 60rpx;
}

.login_logo {
	height: 300rpx;
	width: 630rpx;
}
.icon_input_sy{
	display: flex;
	border-bottom: 3rpx solid #eee;
	padding: 50rpx 12rpx 12rpx;
	.iconfont{
		font-size: 20px;
	}
	.input{
		font-size: 14px;
		padding: 4rpx 10rpx 4rpx;
		margin-left: 12rpx;
		width: 300rpx;
	}
	.yzm{
		font-size: 12px;
		color: #FF647C;
		border-left: 6rpx solid #ddd;
		height: 40rpx;
		padding-left: 26rpx;
		.span{
			padding-top: 2rpx;
		}
		
	}
}
.login_p3{
	padding: 150rpx 0 100rpx;
}
.red2_btn{
	background-color: #ff3152;
	color: #fff;
	border-radius: 10px;
}
.login_p4{
	text-align: center;
	.t{
		font-size: 14px;
		color: #999;
		
	}
	.img{
		height: 200rpx;
		width: 100%;
	}
}
</style>
