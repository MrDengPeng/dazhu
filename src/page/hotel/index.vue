<template>
	<div class="hotel-room">
		<banner class="banner">
			<template slot="pic">
				<div class="mui-slider-item" v-for="picItem in hotelMsg.hotelRunImg">
					<img :src="picItem" data-preview-src="" data-preview-group="1" >
				</div>
			</template>
			<template slot="title" scope="props">
				<div class="banner-title">
					<p class="font36">{{hotelMsg.hotelName}}</p>
					<div class="index font30">
						<span class="icon-pic"></span>
						{{ props.text }}
						/
						{{ hotelMsg.hotelRunImg.length }}
					</div>
				</div>
			</template>
		</banner>
		<div class="hotel-info">
			<div class="location">
				<div class="font28 hotel-addr">
					据我{{ hotelMsg.distance }}KM，{{ hotelMsg.hotelAddress }}
				</div>
				<div class="arrow-item map font24">
					地图/导航
					<span class="arrow-link"></span>
				</div>
			</div>
			<div class="user-comment">
				<p>
					<span class="font36 base-color">{{ hotelMsg.evaluate }}分</span>
					<span class="font28 base-color">很好</span>
					<span class="font24">{{ hotelMsg.evaluateYes }}用户好评</span>	
				</p>
				<div class="evaluation-num arrow-item font24 base-color">
					{{ hotelMsg.evaluateCount }}条评价
					<span class="arrow-link"></span>
				</div>
			</div>
			<div class="merchant-detail mt10">
				<p class="font28">
					商家详情
				</p>
				
				<a :href="'+86' + hotelMsg.hotelTel"><span class="icon-phone"></span></a>
				<span class="icon-service"></span>
			</div>
			<div class="hotel-facilities">
				<p>酒店设施</p>
				<ul>
					<li v-for="service in hotelMsg.goodsDtos">
						<div class="icon">
							<img :src="service.goodLogo">
						</div>
						<p>{{ service.goodName }}</p>
					</li>
				</ul>
			</div>
			<div class="hotel-intro" v-if="hotelMsg.hotelExplain">
				<p class="font22">
					{{ hotelMsg.hotelExplain }}
					<span></span>
				</p>
			</div>
			<ul class="room-list mt10">
			<li class="room-item" v-for="roomItem in roomList">
				<div class="room-pic">
					<img :src="roomItem.houseTitleImg">
				</div>
				<div class="room-info">
					<ul>
						<li class="font32">
							<span class="room-num">{{ roomItem.houseNumber }}</span>
							<span class="room-name">{{ roomItem.houseName }}</span>
						</li>
						<li class=" minimum font24 mt20">
							最低消费：￥{{ roomItem.houseDeposit }}
						</li>
						<li class="mt20 font24">预付金：￥300</li>
						<li class="special-prize base-color font20 mt15">
							<span v-for="(type,index) in roomItem.activity">{{type}}</span>
						</li>
					</ul>
				</div>
				<div class="room-book">
					<p class="prize-hour font24">
						计时价:<span class="font36">￥{{ roomItem.timeMoney }}</span>
					</p>
					<div class="book-btn font28 mt30" :class="{disabled:roomItem.displayFlag == 1}">预定</div>
				</div>
			</li>
		</ul>
		</div>
		
	</div>
</template>
<script type="text/javascript">
	import banner from 'components/swiper';
	export default{
		name : "hotelDetail",
		components:{
			banner
		},
		created(){
			this.$post('hotel/getHotel',{
				id: 22,
				token: 'Mzd8eGJwa3NmejljZXwxODkzODg4NjA1Mw==',
				latitude: 22.5086750000,
				longitude: 113.9559500000,
				bySearch: 0
			}).then(res => {console.log(res.data)});
			// this.$callNative('changeFavor')
        },
        mounted(){
        },
		data(){
			return{
				hotel:{},
				hotelMsg: {
						    "id": 22,
						    "hotelName": "时租公寓（萍乡店）",
						    "hotelAddress": "在这里",
						    "hotelStart": "5",
						    "hotelTel": "13635924636",
						    "mobile": "18779900426",
						    "hotelRunImg": [
						      "http://139.159.250.82:8089/photos/6/1492064014048.jpg",
						      "http://139.159.250.82:8089/photos/6/1492064026676.jpg",
						      "http://139.159.250.82:8089/photos/6/1492064030573.jpg",
						      "http://139.159.250.82:8089/photos/37/1510541513708.jpg"
						    ],
						    "hotelExplain": "时租公寓（萍乡学院店）主营特色公寓房型。\n公寓房间WiFi密码：123456789。\n祝您入住愉快。",
						    "hotelXcoordinate": 113.960908,
						    "hotelYcoordinate": 22.536655,
						    "evaluateYes": "90.9%",
						    "evaluateCount": 99,
						    "evaluate": "3.9",
						    "goodsDtos": [
						      {
						        "goodLogo": "http://139.159.250.82:8089/photos/6/1460456153206.jpg",
						        "goodName": "停车场"
						      },
						      {
						        "goodLogo": "http://139.159.250.82:8089/photos/6/1460456214357.jpg",
						        "goodName": "游泳池"
						      },
						      {
						        "goodLogo": "http://139.159.250.82:8089/photos/6/1460456816749.jpg",
						        "goodName": "电影"
						      },
						      {
						        "goodLogo": "http://139.159.250.82:8089/photos/6/1492678506840.jpg",
						        "goodName": "超市"
						      }
						    ],
						    "followStatus":0,
						    "hotelTitleImg": "http://139.159.250.82:8089/photos/37/1498639250725.jpg",
						    "addressDeatil": "",
						    "distance": "336",
						    "services": [
						      {
						        "id": "152",
						        "mobile": "15970579816",
						        "nickName": "暂无昵称",
						        "onOffDuty": "0"
						      },
						      {
						        "id": "157",
						        "mobile": "18279974108",
						        "nickName": "黄萍安",
						        "onOffDuty": "1"
						      },
						      {
						        "id": "192",
						        "mobile": "15979268219",
						        "nickName": "暂无昵称",
						        "onOffDuty": "0"
						      },
						      {
						        "id": "198",
						        "mobile": "13160692150",
						        "nickName": "暂无昵称",
						        "onOffDuty": "0"
						      },
						      {
						        "id": "201",
						        "mobile": "13548852852",
						        "nickName": "暂无昵称",
						        "onOffDuty": "0"
						      }
						    ]
						  },
				roomList:[
						    {
						      "id": 105,
						      "houseTitleImg": "http://139.159.250.82:8089/photos/37/1493455528994.jpg",
						      "housePrice": 60,
						      "houseNumber": "101",
						      "houseName": "一年级1班",
						      "houseDeposit": 15,
						      "type": "待完善",
						      "timeMoney": 2,
						      "activity": [
						        "特价"
						      ],
						      "houseStatus": "3",
						      "theRoomCardType": 0,
						      "displayFlag": "0"
						    },
						    {
						      "id": 105,
						      "houseTitleImg": "http://139.159.250.82:8089/photos/37/1493455528994.jpg",
						      "housePrice": 60,
						      "houseNumber": "101",
						      "houseName": "一年级1班",
						      "houseDeposit": 15,
						      "type": "待完善",
						      "timeMoney": 2,
						      "activity": ["特价","促销","促销","押金"],
						      "houseStatus": "3",
						      "theRoomCardType": 0,
						      "displayFlag": "0"
						    },
						    {
						      "id": 105,
						      "houseTitleImg": "http://139.159.250.82:8089/photos/37/1493455528994.jpg",
						      "housePrice": 60,
						      "houseNumber": "101",
						      "houseName": "一年级1班",
						      "houseDeposit": 15,
						      "type": "待完善",
						      "timeMoney": 2,
						      "activity": [
						        "特价"
						      ],
						      "houseStatus": "3",
						      "theRoomCardType": 0,
						      "displayFlag": "0"
						    }
						],
				slideIndex:1
			}
		},
		methods:{
			changeFavor(){
				let status = this.hotelMsg.followStatus == 0 ? 1 : 0;
				this.$set(this.hotelMsg,'followStatus',status);
			}
			
		}
	}
</script>
<style type="text/less" lang="less">
	@import '~assets/style/mixin';
	.banner{
		.banner-title{
			position: absolute;
			bottom: 0;
			width: 100%;
			padding: 0 0.4rem 0.4rem;
			.flex(space-between,center);
			color: #fff;
			&>p{
				color: #fff;
				margin-bottom: 0;
			}
			.index{
				color: #fff;
				font-weight: 500;
				.icon-pic{
					display: inline-block;
					.size(0.333333rem,0.293333rem);
					margin-right:0.133333rem; 
					.bgicon();
					background-position: -4.133333rem -0.613333rem;
				}
			}
		}
	}
	
</style>
<style type='text/less' lang="less" scoped>    
	@import '~assets/style/mixin'; 	
	.base-color{
		color: @base;
	}
	
	
	.hotel-room{
		background: #fff;
		height: 100%;
		// background: #824a4a;
		.hotel-info{
			background: #f6f6f6;
			&>div{
				padding: 0 0.4rem;
				background: #fff;
			}

			.location{
				width:	100%;
				height:1.6rem;
				display: table;
				color: #333;
				.tableCell{
					display: table-cell;
        			vertical-align: middle;
				}
				.hotel-addr{
					.tableCell();
					width: 72.5%;
					line-height: 1.3;
					color: #333;
				}
				.map{
					.tableCell();
					line-height: 1.6rem;
					color: @base;
					text-align: right; 
				}
			}

			.user-comment{
				display: flex;
				display: -webkit-flex;
				justify-content:space-between;
				align-items: center;
				height:1.2rem;
				border-top: 1px solid #ddd;  /*no*/
				
				p{
					display: table;
					span{
						display: table-cell;
						vertical-align:middle;

						&:first-child{
							padding-right: 0.266667rem;
							&+span{
								padding-right: 0.533333rem;
							}
						}
					}
					
				}

			}
			.merchant-detail{
				width: 100%;
				height: 1.066667rem;
				.flex(flex-start,center);
				p{
					flex:1;
					color: #505050; 
					margin-bottom: 0;
				}
				span{
					display:inline-block;
					.size(0.533rem,0.533rem);
					.bgicon;

					&.icon-phone{
						background-position: -0.373333rem -0.746667rem	;
						margin-right: 0.666667rem;
					}
					&.icon-service{
						background-position: -0.373333rem 0;
					}
				}
				
			}

			.hotel-facilities{
				width: 100%;
				height: 1.44rem;
				.flex(flex-start,center);
				border-top: 1px solid #ddd; /*no*/
				&>p{
					color: #505050;
					.font(24);
					margin-right: 0.4rem;
					margin-bottom: 0;
				}
				ul{
					.flex(flex-start,center);
					.font(20);
					li{
						.flex(center,center);
						flex-direction: column;
						color: #666;
						margin-right: 0.933333rem;
						div{
							.size(0.533333rem,0.533333rem); 
							img{
								width: 100%;
							}
						}
						p{
							line-height: 1;
							font-size: inherit;
						    color: inherit;
							margin: 0.2rem 0 0; 
						}
					}
				}
			}

			.hotel-intro{
				width: 100%;
				height: 1.466667rem;
				p{
					height: 1.2rem;
					line-height: 1.3;
					color: #666;
					background: #fff8f2;
					padding: 0.2rem 0.133333rem;
				}
			}
			/* 房间列表 */	
			ul.room-list{
				width: 100%;
				background: #fff;
				li.room-item{
					padding: 0.266667rem 0.4rem 0.266667rem 0.266667rem;
					border-bottom: 1px solid #ddd;
					.flex(flex-start,center);
					
					.room-pic{
						width: 2.4rem;
						height: 2.4rem;
						margin-right: 0.253333rem;
						img{
							width: 100%;
						}
					}

					.room-info{
						li{
							line-height: 1;
							&:first-child{
								color: #333;
							}
							&.minimum{
								color: #666;
								&+li{
									color: #666;
								}
							}
							&.special-prize{
								span{
									display: inline-block;
									line-height: 1;
									border: 1px solid @base;/*no*/
									padding: 0.04rem 0.093333rem;
									border-radius: 0.04rem;
								}
							}
						}
					}

					.room-book{
						.flex(center,flex-end);
						flex: 1;
						flex-direction: column; 
						p{
							color: #ff2a00;
							line-height: 1;
							span{
								color: #ff2a00;
							}
						}
						.book-btn{
							border-radius: 0.066667rem;
							.linear-btn(1.866667rem,0.666667rem);

							&.disabled{
								opacity: 0.2;
							}
						}
					}

				}
			}
		}
		
	}		
</style>