<template>
	<section class="order-status">
		<template>
			<p class="status">
				待付款
			</p>
			<p class="status-tip font28 mt30">
				超时后，订单将自动取消
			</p>
			<p class="interval mt40">
				09:30
			</p>
			<div class="comfirm mt60 font32">
				确认
			</div>
			<div class="cancel mt30">
				<p class="cancel-tips font24">在订单提交成功的1小时内，可以在入住页面取消订单，逾期不可取消，每天有一次免费取消机会，超出部分收取最低消费的30%手续费。</p>
				<div class="cancel-order-btn font28" @click="cancelOrder()">
					取消订单
				</div>
			</div>
		</template>
		<template>
			<p class="status">
				订单已完成
			</p>
			<p class="status-tip font28 mt30">
				订单已完成，欢迎下次光临
			</p>
			<div class="comfirm mt60 font32">
				再次预定
			</div>
		</template>
	</section>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{

			}
		},
		methods:{
			cancelOrder(){

			}
		}
	}
</script>
<style type="text/less" lang="less" scoped>
	@import '~assets/style/mixin';

	.order-status{
		padding: 1.933333rem 0.4rem 0.533333rem;
		background: @bg;
		.flex(flex-start,center);
		flex-direction:column;
		p{
			margin-bottom: 0;
			.lineh(1);
		}
		.status{
			.font(48);
			color: @base;
		}
		.status-tip{
			color: @font3;
		}
		.interval{
			color: @base;
			.font(60);
		}
		.comfirm{
			.linear-btn(100%,1.066667rem);
		}
		.cancel{
			.flex(space-between,center);

			.cancel-tips{
				line-height: 1.3;
				flex: 1;
			}
			.cancel-order-btn{
				.size(2.666667rem,0.8rem);
				line-height: 0.8rem;
				border: 1px solid @base;/*no*/
				color: @base;
				text-align: center;
				border-radius: 0.066667rem;
				margin-left: 0.6rem;
			}
		}
	}
</style>