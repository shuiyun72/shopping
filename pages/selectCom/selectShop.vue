<template>
	<view class="shop_select_body">
		<view class="city_search_sy">
			<view class="full_search_box">
				<view class="full_search">
					<view class="iconfont iconsousuo1"></view>
					<input type="text" v-model="seaText" placeholder="请输入店铺名称" class="input" />
					<view class="iconfont iconguanbi" v-show="seaText != ''" @click="seaText = ''"></view>
				</view>
				<navigator url="./selectShop2" tag="viex" class="text">	
					搜索
				</navigator>
			</view>
		</view>
		<view class="flex_title">
			<view class="left">
				历史记录
			</view>
			<view class="delete">
				<view class="iconfont iconqingkongshanchu"></view>
				<text class="text">清空</text>
			</view>
		</view>
		<view class="shop_show_title" v-for="(t,i) in commodityList">
			{{t.title}}
		</view>
	</view>
</template>

<script>
	import {
		commodityList
	} from "../../static/const/Goods.js";

	export default {
		data() {
			return {
				seaText: "",
				commodityList:commodityList
			}
		},

		methods: {
			selectCity(el) {
				this.$store.commit('setCity', el);
				uni.switchTab({
					url: '/pages/home/home'
				});
			}
		}
	}
</script>

<style lang="less">
	
</style>
