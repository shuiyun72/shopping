<template>
	<view>
		<view class="uni-list uni_list_picker">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					投保城市	
				</view>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="index":range="arrays" range-key="name">
						<view class="uni-input">{{arrays[index].name}} 
						<view class="iconfont iconjiantou"></view>
						</view>
					</picker>
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					投保城市	
				</view>
				<view class="uni-list-cell-db">
					<input type="text" :value="v1" placeholder="1212"/>
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					投保城市	
				</view>
				<view class="uni-list-cell-db">
					<uni-tag text="个人" circle="true"  @tap="isMain=true" :type="isMainType"></uni-tag>
					<uni-tag text="单位" circle="true"  @tap="isMain=false" :type="isMainTypeN"></uni-tag>
				</view>
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		computed:{
			isMainType(){
				return this.isMain?'warning':'default'
			},
			isMainTypeN(){
				return !this.isMain?'warning':'default'
			},
		},
		data() {
			return {
				isMain:true,
				v1:"",
				type: '',
				content: '顶部弹 popup',
				arrays: [{name:'上海市徐汇区'},{name: '美国'}, {name:'巴西'}, {name:'日本'}],
				index:0
			}
		},
		methods: {
			change(e) {
				console.log('是否打开:' + e.show)
			},
			showClick(el){
				console.log(el)
			},
			bindPickerChange(e){
				this.index = e.detail.value
				console.log(this.arrays[this.index].name)	
				console.log(this.isMain)
			},
			togglePopup(type, open) {
				switch (type) {
					case 'top':
						this.content = '顶部弹出 popup'
						break
			
					case 'bottom':
						this.content = '底部弹出 popup'
						break
					case 'center':
						this.content = '居中弹出 popup'
						break
				}
				this.type = type
				this.$nextTick(() => {
					this.$refs['show' + open].open()
				})
			},
		}
	}
</script>

<style lang="less">
.uni_list_picker{
	.uni-list-cell{
		display: flex;
		margin: 20rpx 30rpx;
		justify-content: space-between;
		.uni-list-cell-left{
			font-size: 16px;
			font-weight: bold;
			color: #666;
			line-height: 26px;
		}
		.uni-list-cell-db{
			display: flex;
		}
		input{
			text-align: right;
			padding: 0 20px 0 0;
			font-size: 14px;
		}
		.uni-input{
			font-size: 12px;
			
			color: #ddd;
			display: inline-flex;
			.iconfont{
				font-size: 20px;
				color: #999;
				line-height: 20px;
			}
			.text_t{
				line-height: 22px;
				font-size: 16px;
				color: #666;
			}
		}
	}
}
</style>
