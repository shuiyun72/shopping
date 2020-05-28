<template>
	<view class="city_search">
		<view class="city_search_sy">
			<view class="full_search_box">
				<view class="full_search">
					<view class="iconfont iconsousuo1"></view>
					<input type="text" v-model="seaText" placeholder="请输入城市名" class="input" />
				</view>
				<!-- <view class="text">
				搜索
			</view> -->
			</view>
		</view>
		<view class="text_title">
			当前定位
		</view>
		<view class="adress_box">
			<view class="btn this" @tap="selectCity('郑州')">
				<view class="iconfont iconlocation"></view>
				<view class="text">郑州</view>
			</view>
		</view>
		<view class="text_title">
			{{City.hot.title}}
		</view>
		<view class="adress_box">
			<view class="btn" v-for="(t,i) in City.hot.lists" :key="i+1200" @tap="selectCity(t)">
				<view class="text">{{t}}</view>
			</view>
		</view>
		<view v-for="(t,i) in City.city" :key="i+1300">
			<view class="text_title_city" @tap="selectCityTitle">
				{{t.title}}
			</view>
			<view class="city_title" v-for="(tc,ic) in t.lists" :key="i+1300+ic*20" @tap="selectCity(tc)">
				{{tc}}
			</view>
		</view>
		<view class="side_sear">
			<view class="item" v-for="(t,i) in City.city" :key="i+1900" @click="showSear(i)">
				{{t.title}}
			</view>
		</view>

	</view>
</template>

<script>
	import {
		city as City
	} from '../../static/const/city.js';
	export default {
		data() {
			return {
				seaText: "",
				City: City
			}
		},
		methods: {
			selectCityTitle(el){
				console.log(el)
			},
			selectCity(el) {
				console.log(el)
				this.$store.commit('setCity', el);
				uni.switchTab({
					url: '/pages/home/home'
				});
			},
			showSear(num){
				uni.createSelectorQuery().select(".city_search").boundingClientRect(cityBox=>{
					uni.createSelectorQuery().selectAll(".text_title_city").boundingClientRect(cityChild=>{
						let newArray = _.map(cityChild,res=>{
							return res.top - cityBox.top;
						})
						uni.pageScrollTo({
							duration:300,
							scrollTop:newArray[num]
						})
					}).exec()
				}).exec()
				
			}
		}
	}
</script>

<style lang="less">
.side_sear{
		position:fixed;
		top:160rpx;
		right: 0;
		.item{
			padding:3px 6px;
			margin-bottom: 3px;
			background-color: #eee;
			font-size: 12px;
			text-align: center;
		}				
	}
</style>
