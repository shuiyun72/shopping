<template>
	<view class="classify">
		<scroll-view scroll-x="true" class="classify_nav_bar_sy" :scroll-left="scrollL">
			<text v-for="item in classifyList" class="item" :class="{'active':item.id == selectN}" @tap="handTap(item.id)">{{item.title}}</text>
		</scroll-view>
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
		data() {
			return {
				commodityList:commodityList,
				classifyList:[
					{title:"全部",value:"",id:0},
					{title:"美食",value:"",id:1},
					{title:"生活",value:"",id:2},
					{title:"出行",value:"",id:3},
					{title:"住宿",value:"",id:4},
					{title:"休闲娱乐",value:"",id:5},			
					{title:"超市",value:"",id:6},
					{title:"更多",value:"",id:7},
					{title:"更多",value:"",id:8},
					{title:"更多",value:"",id:9},
					{title:"更多",value:"",id:10},
					{title:"更多2",value:"",id:11}
				],
				scrollL:0,
				selectN:1
			};
		},
		methods:{
			handTap(num){
				this.selectN = num;
				this.scrollL = num*40;
			}
		}
	}
</script>

<style lang="less">
.classify_nav_bar_sy{
	width: 100%;
	white-space: nowrap;
	padding: 20rpx 0;
	height: 36px;
	.item{
		font-size: 14px;
		color: #333;
		border-bottom: 2px solid transparent;
		margin: 0rpx 20rpx;
		padding-bottom: 10rpx;
		&.active{
			border-bottom: 2px solid #f00;
			color: #f00;
		}
	}
}
</style>
