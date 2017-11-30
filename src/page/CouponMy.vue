<template>
	<div class="wrapper">
		<load-statu v-show="loadShow"/>
		<header-top v-if="$store.state.headTop" head-title="我的优惠劵" :bgWhite="true">
			<div slot="use" class="head-use" @click="jumpUseTap"></div>
		</header-top>
		<div id="pullrefresh" class="mui-scroll-wrapper" :class="{'head-top': $store.state.headTop}">
			<div class="mui-scroll">
				<div class="wrap">
					<div class="search-box">
						<input type="text" v-model="couponCode" />
						<a class="btn" :class="{active: couponCode}">兑换</a>
					</div>
					<div>
						<coupon-item v-for="item in 3" :key="item" />
					</div>
					<a v-if="failHide" class="big-btn" @click="showFailTap">查看已失效的券</a>
					<div v-else>
						<div class="fail-box after-btmline"><span>已失效的券</span></div>
						<coupon-item v-for="item in 3" :fail="true" :key="item" />
					</div>
				</div>
			</div>
		</div>		
	</div>
</template>

<script>
	export default {
		name: 'CouponMy',
		data(){
			return {
				loadShow: false,
				failHide: true,
				couponCode: ''
			}
		},
		mounted(){
			this.$mui('.mui-scroll-wrapper').scroll({
				deceleration: 0.0005
			})
		},
		methods: {
			/*展示失效优惠劵*/
			showFailTap(){
				this.failHide = !this.failHide;
			},
			//进入子级页面
			jumpUseTap(){
				this.$router.push({ name: 'UseDetail'})
			}
		},
		components: {
			'coupon-item': {
				props: ['fail'],
				template: '\
					<div class="coupon-item" :class="{fail: fail}">\
						<div class="left">\
							<p class="money">￥<span>10</span></p>\
							<p>新用户专享</p>\
						</div>\
						<div class="right">\
							<p class="p1">全平台通用</p>\
							<p class="p2">此优惠券用于......</p>\
							<p class="p3">有效期：2017-08-07至2017-08-26</p>\
						</div>\
					</div>\
					'
			}
		}
	}
</script>
<style>
	.coupon-item{
		display: flex;
		height: 180px;		
		margin-bottom: 20px;
		background-color: #fff;
		overflow: hidden;
		border-radius: 10px;
	}
	.coupon-item:last-child{
		margin-bottom: 0;
	}
	.coupon-item.fail{
		background: #fff url(~static/images/i_fail.png) no-repeat 555px 10px/123px 93px;
	}
	.coupon-item.fail .left{
		background: url(~static/images/i_coupon_gray.png) no-repeat center/100% 100%;
	}
	.coupon-item .left{
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex-shrink: 0;		
		width: 220px;
		background: url(~static/images/i_coupon.png) no-repeat center/100% 100%;
		text-align: center;
		font-size: 24px;
	}
	.coupon-item .left p{
		color: #fff;
		margin: 0;
	}
	.coupon-item .money{
		font-size: 28px;
	}
	.coupon-item .money span{
		font-size: 72px;
	}
	.coupon-item .right{
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-left: 20px;
		max-width: 460px;
	}
	.coupon-item .right p{
		color: #333;
		font-size: 24px;
		margin: 0;
		line-height: 2;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.coupon-item .right .p3{
		color: #666;
	}
	.coupon-item .right .p1{
		font-size: 28px;
	}
</style>
<style scoped>
	.wrap{
		padding: 20px 30px 40px;
	}
	.search-box{
		position: relative;
		width: 100%;
		padding-right: 150px;
		margin-bottom: 20px;
	}
	.search-box input{
		display: block;
		width: 100%;
		background-color: #fff;
		margin: 0;
		padding: 10px 20px;
		height: 70px;
		line-height: 50px;
		border-radius: 5px;
		border: 1px solid #ddd;
	}
	.search-box .btn{
		position: absolute;
		top: 0;
		right: 0;
		height: 70px;
		width: 140px;
		background-color: #e3e3e3;
		color: #fff;
		line-height: 70px;
		text-align: center;
		font-size: 28px;
		border-radius: 5px;
	}
	.search-box .btn.active{
		background-color: #ff7000;
	}
	.search-box .btn.active:active{
		opacity: .8;
	}
	.big-btn{
		display: block;
		width: 100%;
		line-height: 80px;
		text-align: center;
		color: #333;
		font-size: 32px;
		border-radius: 5px;
		border: 1px solid #666;
		margin-top: 20px;
	}
	.big-btn:active{
		background-color: #eee;
	}
	.fail-box{
		position: relative;
		height: 80px;
		color: #afafaf;
		font-size: 24px;
		line-height: 80px;
		text-align: center;
	}
	.fail-box span{
		position: relative;
		z-index: 5;
		display: inline-block;
		width: 210px;
		background-color: #f6f6f6;
	}
	.fail-box.after-btmline:after{
		bottom: 50%;
	}
</style>

