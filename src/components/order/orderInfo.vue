<template>
	<section class="order-info mt10">
		<h5 class="order-title font32">订单信息</h5>
		<ul class="order-list">
			<li>
				<span>订单编号</span>
				123456
			</li>
			<li>
				<span>最低消费</span>
				￥120
			</li>
			<li>
				<span>计时价</span>
				￥7.75
			</li>
			<li>
				<span>预付金</span>
				300
			</li>
			<li>
				<span>入住时间</span>
				2017-11-20
			</li>
			<li>
				<span>退房时间</span>
				2017-11-21
			</li>
			<li>
				<span>消费金额</span>
				￥198
			</li>
		</ul>
	</section>
</template>
<style type="text/less" lang="less" scope>
	@import '~assets/style/mixin';
	.order-info{
		background: #fff;
		.order-title{
			padding: 0 0.4rem;
			.size(100%,1.08rem);
			line-height: 1.08rem;
			color: #505050;
			border-bottom: 1px solid #ddd;/*no*/
			font-weight: bold;
		}
		.order-list{
			padding: 0 0.4rem 0.466667rem;
			li{
				.font(28);
				.lineh(1);
				margin-top: 0.266667rem;
				color: @font3;
				span{
					display: inline-block;
					width: 1.8rem;
					color: #afafaf;
				}
			}
		}
	}
</style>