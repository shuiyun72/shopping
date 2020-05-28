<template>
	<view class="shop_select_body">
		<view class="city_search_sy">
			<view class="full_search_box">
				<view class="full_search">
					<view class="iconfont iconsousuo1"></view>
					<input type="text" v-model="seaText" placeholder="请输入店铺名称" class="input" />
					<view class="iconfont iconguanbi" v-show="seaText != ''" @click="seaText = ''"></view>
				</view>
				<view class="text">
					搜索
				</view>
			</view>
		</view>
		<view class="h20ccc"></view>
		<view class="product_item_sy"  v-for="(tDatial,index) in commodityList" :key="tDatial.id">
			<view class="left">
				<image :src="'../../static/img/'+tDatial.url" mode="widthFix" class="img"></image>
			</view>
			<view class="right">
				<view class="p1">
					<view class="title">
						{{tDatial.title}}
					</view>
					<view class="tj" v-show="tDatial.tj">
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
					<view class="card" :style="{backgroundColor:tDatial.color}">
						{{tDatial.type}}
					</view>
					<view class="mount_pay" :class="{'hidden':tDatial.num<40}">
						月消{{tDatial.num}}
					</view>
				</view>
				<view class="p4" :class="{'hidden':tDatial.info == ''}">
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
	</view>
</template>

<script>
	import {commodityList} from "../../static/const/Goods.js";
	import GradeComSy from "../components/GradedComSy.vue";
	export default {
		components:{
			GradeComSy
		},
		computed:{
			commodityList(){
				return _.filter(this.commodityListL,item=>{
					return item.title.includes(this.seaText)
				})
			}
		},
		data() {
			return {
				seaText: "德克士",
				commodityListL: commodityList

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
