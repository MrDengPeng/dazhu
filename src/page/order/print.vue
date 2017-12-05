<template>
	<div class="order-print">
		<section class="hotel-info">
			<h4>XXX酒店</h4>
			<p class="room">
				<span class="roomNum">305</span>
				海洋之星
			</p>
			<p class="distance">距我1.2km，此处显示详细地址</p>
		</section>
		<section class="account-info mt10">
			<h5 class="account-title font32">账户情况</h5>
			<ul class="account-list">
				<li>
					<span>账户余额：</span>
					￥100
				</li>
				<li>
					<span>可住时长：</span>
					1小时50分钟
				</li>
			</ul>
		</section>
		<bookInfo :isShowDel='true'>
			<template slot="book-title">
				<div class="guest-title">
					<h5 class="font32">入住人</h5>
					<span class="addGuest"></span>
				</div>
			</template>
		</bookInfo>
		<section class="commit-bar">
			<div class="price lf">
				<p>最低消费<span class="font36">￥25</span></p>
				<p>预付金300</p>
			</div>
			<div class="commit-order-btn font34 lf">
				提交订单
			</div>
		</section>
	</div>
</template>
<script type="text/javascript">
	import bookInfo from 'components/order/bookInfo'
	export default{
		components:{
			bookInfo
		}
	}
</script>
<style type="text/less" lang="less" scope>
	@import '~assets/style/mixin';
	.order-print{
		p{
			margin-bottom: 0;
		}
		.hotel-info{
			.size(9.626667rem,5.893333rem);
			background: url('~static/images/print_bg@2x.png') no-repeat;
			background-size: 100% 100%;
			margin: 0 auto;
		}
		.account-info{	
			background: #fff;
			.account-title{
				padding: 0 0.4rem;
				.size(100%,1.08rem);
				line-height: 1.08rem;
				color: #505050;
				border-bottom: 1px solid #ddd;/*no*/
				font-weight: bold;
			}
			.account-list{
				padding: 0 0.4rem 0.466667rem;
				li{
					.font(28);
					.lineh(1);
					margin-top: 0.266667rem;
					color: @font3;
					span{
						display: inline-block;
						color: #afafaf;
					}
				}
			}
		}
		.commit-bar{
			position: fixed;
			bottom: 0;
			.size(100%,1.173333rem);
			.price{
				.size(50%,100%);
				padding-left: 0.4rem;
				background: @bg;
				p{
					.font(24);
					color: @font6;
					&:first-child{
						.lineh(1);
						margin-top: 0.133333rem;
						color: #242424;
						span{
							padding-left: 0.066667rem;
							color: #ff2a00;
						}
					}
				}
			}
			.commit-order-btn{
				.linear-btn(50%,1.173333rem);
			}
		}
	}
</style>