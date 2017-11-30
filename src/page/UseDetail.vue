<template>
	<div class="wrapper">
		<load-statu v-show="loadShow"/>
		<header-top v-if="$store.state.headTop" head-title="优惠券使用说明" :bgWhite="true" />
		<div id="pullrefresh" class="mui-scroll-wrapper" :class="{'head-top': $store.state.headTop}">
			<div class="mui-scroll">
				<div class="use-item">
					<div class="tit after-btmline">1.优惠券本质</div>
					<div class="text">使用场景：满减券、打折券、满赠券、全场通用券等。</div>
				</div>
				<div class="use-item">
					<div class="tit after-btmline">2.优惠券价值</div>
					<div class="text">是优惠，不是现金。平台上的优惠券是指下单可以优惠金额的券，使用即作废。不是那种可以充值到账户的现金券，也不是可以使用多张的折扣。</div>
				</div>
				<div class="use-item">
					<div class="tit after-btmline">3.发放</div>
					<div class="text">发放分为用户主动领取、系统自动发放。新建优惠券的时候，已经提供了一个显示到前端的属性，称之为领券。比如给每一个批次的优惠券生成链接，发给用户让他们去领。另外：注册自动返券，下单自动返券，邀请成功自动返券，分享了这家酒店之后，得到一个优惠券，属于系统自动发放的类型。</div>
				</div>
				<div class="use-item">
					<div class="tit after-btmline">4.使用</div>
					<div class="text">采用生成订单再用券。每个订单最多使用一张优惠券，一张优惠券只能使用一次。</div>
				</div>
				<div class="use-item">
					<div class="tit after-btmline">5.过期</div>
					<div class="text">优惠券在规定的时间内不使用的话将过期。</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'UseDetail',
		data(){
			return {
				loadShow: false
			}
		},
		mounted(){
			this.$mui('.mui-scroll-wrapper').scroll({
				deceleration: 0.0005
			})
		},
		methods: {
			
		},
		components: {
			
		}
	}
</script>

<style scoped>
	.tit.after-btmline:after{
		left: 30px;
	}
	.use-item{
		background-color: #fff;
		margin-bottom: 20px;
		color: #333;
		font-size: 28px;
	}
	.use-item .tit{
		position: relative;
		line-height: 80px;
		font-size: 34px;
		padding: 0 30px;
	}
	.use-item .text{
		line-height: 40px;
		padding: 20px 30px;
		
	}
</style>