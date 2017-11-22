<template>
	<div class="room">
		<div class="room-type font32">
			<span class="room-num">{{ roomDetail.houseNumber }}</span>{{ roomDetail.houseName }}
		</div>
		<div class="banner">
			
		</div>
		<div class="room-info">
			<ul class="room-dev font24">
				<li>
					<span>上网</span>
					{{ roomDetail.network }}
				</li>
				<li>
					<span>卫浴</span>
					{{ roomDetail.network }}
				</li>
				<li>
					<span>窗户</span>
					{{ roomDetail.isWindow == 1?"有":"无" }}
				</li>
				<li>
					<span>可住</span>
					{{ roomDetail.toLive }} 人
				</li>
				<li>
					<span>床型</span>
					{{ roomDetail.bedType }}
				</li>
				<li>
					<span>楼层</span>
					4层
				</li>
				<li>
					<span>其他</span>
					{{ roomDetail.other }}
				</li>
			</ul>
			<ul class="room-fee font28">
				<li>
					最低消费：￥{{ roomDetail.houseDeposit }}
				</li>
				<li>
					预付金：￥300
				</li>
				<li>
					计时价：￥{{ roomDetail.timeMoney }}
				</li>
			</ul>
			<div class="rules">
				<h5 class="rules-fee">计费规则</h5>
				<p>
					起住价为 <span>{{ roomDetail.houseDeposit }}元</span>，之后每个小时 <span>{{ roomDetail.timeMoney }}元</span>
				</p>
				<h5 class="rules-cancel">
					取消订单规则
				</h5>
				<p>
					在订单提交成功的1个小时内，可以在入住页面取消订单，逾期不可取消，每天有一次免费取消机会，超出将收取最低消费的30%手续费
				</p>
			</div>

		</div>
		<div class="book-btn font34">
			预定
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name: "room",
		created(){

		},
		data(){
			return{
				roomDetail:{
						    "id": 76,
						    "houseStatus": "1",
						    "housePrice": 88,
						    "houseNumber": "502",
						    "houseName": "五年级2班",
						    "money": 1000,
						    "timeMoney": 3.52,
						    "liveHouse": "278小时50分钟",
						    "houseImg": [
						      "http://139.159.250.82:8089/photos/37/1497429466812.jpg",
						      "http://139.159.250.82:8089/photos/37/1497429524707.jpg",
						      "http://139.159.250.82:8089/photos/37/1497429632956.jpg"
						    ],
						    "houseExplain": "房间WiFi密码：123456789。\n有问题请联系公寓值班人员，祝您入住愉快。",
						    "houseDeposit": 22,
						    "network": "WIFI和宽带",
						    "bathroom": "独立",
						    "isWindow": "1",
						    "toLive": "2",
						    "bedType": "1.8米大床",
						    "other": "房间有电视，洗衣机等"
						  }
			}
		}
	}
</script>
<style type="text/less" lang="less" scoped>
	@import '~assets/style/mixin';
	.room{
		position: relative;
		background-color: #fff;
		padding-bottom: 2.466667rem;

		.room-type{
			color: @font6;
			padding: 0 0.4rem;
			.size(100%,1.066667rem);
			line-height: 1.066667rem;
			.room-num{
				margin-right: 0.333333rem;
			}
		}
		.banner{

		}
		.room-info{
			padding: 0 0.4rem;
			.room-dev{
				.flex(space-between,center);
				flex-wrap: wrap;
				li{
					line-height: 1;
					color: @font3;
					margin-top: 0.333333rem;
					&:nth-child(odd){
						width: 4.6rem
					}
					&:nth-child(even){
						flex: 1;
					}
					span{
						color: #afafaf;
						padding-right: 0.2rem;
					}
				}		
			}
			.room-fee{
				.flex(space-between,center);
				flex-wrap: wrap;
				background: #fff8f2;
				color: @font6;
				margin-top: 0.333333rem;
				padding: 0 0.266667rem 0.333333rem;
				li{
					line-height: 1;
					color: @font3;
					margin-top: 0.293333rem;
					width: 50%;
				}
			}
			.rules{
				h5{
					.font(28);
					color: @title;
					font-weight: 550;
					position: relative;
					padding-left:0.2rem;
					margin-top: 0.466667rem;

					&:before{
					    content: " ";
					    position: absolute;
					    left: 0;
					    top: 50%;
					    .size(4px,0.266667rem);
					    bottom: 0;
					    background-color: @base;
					    color: @base;
					    -webkit-transform-origin: 100% 0;
					    transform-origin: 100% 0;
					    -webkit-transform: scaleX(0.5) translate(0,-50%);
					    transform: scaleX(0.5) translate(0,-50%);
					}
				}
				p{
					.font(24);
					color: @font3;
					margin-top: 0.266667rem;
					line-height: 1.3;
					span{
						color: @base;
					}
				}
			}
		}
		.book-btn{
			.linear-btn(100%,1.173333rem);
			position: absolute;
			bottom: 0;
		}
	}
</style>