<template>
	<view class="product_item_sy">
		<view class="left">
			<image :src="'../../static/img/'+tDatial.url" mode="widthFix" class="img"></image>
		</view>
		<view class="right">
			<view class="p1">
				<view class="title">
					{{tDatial.title}}
				</view>
				<view class="tj">
					推荐
				</view>
			</view>
			<view class="p2">
				<GradeComSy :num="tDatial.star"></GradeComSy>
				<view class="distance">
					{{tDatial.distance}}km
				</view>
			</view>
			<view class="p3">
				<view class="card">
					{{tDatial.type}}
				</view>
				<view class="mount_pay">
					月消{{tDatial.num}}
				</view>
			</view>
			<view class="p4">
				{{tDatial.info}}
			</view>
			<view class="p5">
				<view class="iconfont iconlocation"></view>
				<view class="address">
					{{tDatial.address}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import GradeComSy from "../components/GradedComSy.vue";
	export default {
		props: {
			tDatialL: {
				type: String,
				default:""
			}
		},
		components: {
			GradeComSy
		},
		computed: {
			tDatial() {
				return this.tDatialL == "" ? {} : JSON.parse(this.tDatialL);
			}
		},
		mounted() {
			console.log(this.tDatialL)
			console.log(this.sss)
		},

		data() {
			return {

			}
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
