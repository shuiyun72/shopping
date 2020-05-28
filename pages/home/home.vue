<template>
	<view class="home">
		<!-- 搜索头部 -->
		<view class="uni_searchbar_sy">
			<view class="address" @tap="selectSearch('address')">
				<text class="text">{{thisCity}}</text>
				<view class="iconfont iconai-arrow-down"></view>
			</view>

			<view class="search_input" @tap="selectSearch('shop')">
				<view class="iconfont iconsousuo"></view>
				<input class="input" type="text" v-model="s1" placeholder="请输入店铺名称" />
			</view>
			<view class="iconfont_msg" @tap="selectSearch('msg')">
				<view class="iconfont iconxiaoxi1"></view>
				<view class="msg_point"></view>
			</view>
		</view>
		<!-- 自定义轮播 -->
		<view class="wm_wrap_box_sy">
			<swiper class="swiper" circular :indicator-dots="false" :autoplay="true" :interval="5000" :duration="500" @change="swiperChange">
				<swiper-item v-for="(t,i) in lunboImg" :key="i+'img'">
					<navigator url="./cate">
					<view class="body">
						<image :src="'../../static/img/'+t.url" mode="widthFix" class="h_p1"></image>
					</view>
					</navigator>
				</swiper-item>
			</swiper>
			<view class="swiper_dot_box">
				<view class="swiper_dot" v-for="(t,i) in lunboImg" :key="i+'dot'" :class="{'active':i==swiperActive}"></view>
			</view>
		</view>
		<!-- 分类区域 -->
		<scroll-view class="classify_nav_sy" scroll-x="true" scroll-left="0">
			<view class="item" v-for="(t,i) in classifyNavL" :key="i+'fl'">
				<navigator url="../classify/classify">
				<view class="img_box">
					<image :src="'../../static/img/'+t.url" mode="widthFix" class="img"></image>
				</view>
				<text>{{t.text}}</text>
				</navigator>
			</view>
		</scroll-view>
		<!-- 礼包 -->
		<view class="gift_bag_sy">
			<swiper class="swiper" circular :indicator-dots="false" :autoplay="true" :interval="5000" :duration="500">
				<swiper-item v-for="(t,i) in giftBagList" :key="i+'img'">
					<view class="gift_body">
						<image :src="'../../static/img/'+t.url" mode="widthFix" class="img"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 默认title -->
		<view class="title_sy">
			<navigator url="../main/main">
			<view class="bd"></view>
			<text>推荐商户</text>
			</navigator>
		</view>
		
			<uni-section title="推荐商户" type="line"></uni-section>
		
		<view class="tuijian_sy">
			<view class="full_img">
				<image :src="'../../static/img/'+tuijianJson.tUrl" mode="widthFix" class="img"></image>
				<text>{{tuijianJson.title}}</text>
			</view>
			<view class="d_flex">
				<view class="item" v-for="(t,i) in tuijianJson.children" :key="i+'xxj'">
					<image :src="'../../static/img/'+t.url" mode="widthFix" class="img"></image>
					<view class="text">{{t.text}}</view>
				</view>
			</view>
		</view>
		<view class="title_sy">
			<view class="bd"></view>
			<text>热门商户</text>
		</view>
		<view class="tab_screen_sy">
			<view class="item_box">
				<view class="item" v-for="(t,i) in tabScreen" :key="i+10000" @tap="screenClick(i)">
					<text class="text">{{t.title}}</text>
					<view class="iconfont iconai-arrow-down"></view>
				</view>
			</view>
		</view>
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

		<view class="load_mord">
			加载更多
		</view>
		<view class="full_c0" v-show="isShowDia" @tap="isShowDia = false"></view>
		<view class="top_select_box_sy" v-show="isShowDia">
			<view class="tab_screen_sy">
				<view class="item_box">
					<view class="item" v-for="(t,i) in tabScreen" :key="i+10000" @tap="screenClick(i)" :class="{'active':i==screenClickSelect}">
						<text class="text">{{t.title}}</text>
						<view class="iconfont iconai-arrow-down" v-show="i!=screenClickSelect"></view>
						<view class="iconfont iconjiantoushang" v-show="i==screenClickSelect"></view>
					</view>
				</view>
				<view class="select_box_body">
					<view v-for="(item,index) in ['美食','生活','出行','住宿','休闲娱乐']" :key="index+2003" class="select_c" :class="{'active_c':index==screenFL}" v-show="screenClickSelect == 0">
						{{item}}
					</view>
					<view v-for="(item,index) in ['由高到低','由低到高']" :key="index+2103" class="select_c" :class="{'active_c':index==screenFL}" v-show="screenClickSelect == 1">
						{{item}}
					</view>
					<view v-for="(item,index) in ['由近到远','由远到近']" :key="index+2203" class="select_c" :class="{'active_c':index==screenFL}" v-show="screenClickSelect == 2">
						{{item}}
					</view>
				</view>
			</view>
			<view class="select_foot">
				<button type="default" class="btn" size="mini">重置</button>
				<button type="warn"  class="btn" size="mini" @tap="isShowDia = false">确认</button>
			</view>
		</view>
		<uni-section title="基础用法" type="line"></uni-section>
		<view class="example-body">
			<uni-goods-nav @click="onClick"  @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import { commodityList } from "../../static/const/Goods.js";
	import GradeComSy from "../components/GradedComSy.vue";
	export default {
		components: {
			GradeComSy
		},
		computed: {
			thisCity() {
				return this.$store.state.city
			}
		},
		mounted(){

		},
		data() {
			return {
				//顶部弹窗
				isShowDia:false,
				//顶部弹窗分类
				screenFL:0,
				//顶部被选择的项
				screenClickSelect:0,
				//轮播备选的项
				swiperActive: 0,
				
				commodityList:commodityList,
				s1: "",
				
				tabScreen: [{
						title: "店铺分类",
						type: 1
					},
					{
						title: "销量",
						type: 2
					},
					{
						title: "距离",
						type: 3
					},
				],
				lunboImg: [{
						url: "bg1.jpg"
					},
					{
						url: "bg1.jpg"
					},
					{
						url: "bg1.jpg"
					},
				],
				giftBagList: [{
					url: "lb1.jpg"
				}],
				tuijianJson: {
					title: "喜阳阳缤纷饰品店",
					tUrl: "tuijia1.jpg",
					children: [{
							url: "t2.jpg",
							text: "MISS U甜品屋"
						},
						{
							url: "t3.jpg",
							text: "仟吉纸杯蛋糕店"
						},
						{
							url: "t4.jpg",
							text: "鹿角鲜榨饮品店"
						}
					]
				},
				classifyNavL: [{
						url: "n1.jpg",
						text: "餐饮",
						color: ""
					},
					{
						url: "n2.jpg",
						text: "超市",
						color: ""
					},
					{
						url: "n3.jpg",
						text: "服饰",
						color: ""
					},
					{
						url: "n4.jpg",
						text: "住宿",
						color: ""
					},
					{
						url: "n1.jpg",
						text: "丽人",
						color: ""
					},
					{
						url: "n2.jpg",
						text: "休闲",
						color: ""
					},
					{
						url: "n3.jpg",
						text: "家居",
						color: ""
					},
					{
						url: "n4.jpg",
						text: "其他",
						color: ""
					}
				]
			};
		},
		methods: {
			buttonClick(el){
				console.log(el)
			},
			onClick(el){
				console.log(el)
			},
			//轮播事件
			swiperChange(el) {
				// console.log(el.detail)
				this.swiperActive = el.detail.current;
				
			},
			//分类筛选
			screenClick(num) {
				this.screenClickSelect = num
				this.isShowDia = true;
			},

			selectSearch(el) {
				console.log("ss")
				if (el == 'address') {
					uni.navigateTo({
						url: '/pages/selectCom/selectCity'
					});
				} else
				if (el == 'shop') {
					uni.navigateTo({
						url: '/pages/selectCom/selectShop'
					});
				}
				if (el == 'msg') {
					uni.navigateTo({
						url: '/pages/home/msg'
					});
				}
			}
		}
	}
</script>

<style lang="less">
	.full_c0{
		position: fixed;
		top:0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,.2);
		z-index:59;
	}
	.top_select_box_sy{
		position: fixed;
		top:0;
		left: 0;
		background-color: #fff;
		width: 100%;
		z-index:60;
		.item.active{
			.text{
				color: #f00;
			}
		}
		.select_box_body{
			padding: 20px 0 20px 30px;
		.select_c{
			font-size: 14px;
			padding: 8px 0;
			&.active_c{
				color: #f00;
			}
		}
		}
		.select_foot{
			display: flex;
			.btn{
				flex:1
			}
		}
	}


</style>
