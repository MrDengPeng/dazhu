<template>
	<section class="book-info mt10">
		<slot name="book-title"></slot>
		<div class="book-list" v-for="(guest,index) in guestList">
			<div class="delete-icon" v-if="isShowDel" @click="delUser(index)">
				<span></span>
			</div>
			<ul>
				<li>
					<span>姓名</span>
					{{ guest.liveName }}
				</li>
				<li>
					<span>身份证</span>
					{{ guest.liveIdcard }}
				</li>
				<li>
					<span>手机号</span>
					{{ guest.liveMobile }}
				</li>
			</ul>
		</div>
	</section>
</template>
<script type="text/javascript">
	export default{
		props: {
			isShowDel: {
					      type: Boolean,
					      default: false
				      }
		},
		data(){
			return{
				guestList:[
						    {
						      "liveName": "朱利辉",
						      "liveIdcard": "440229****",
						      "liveMobile": "15338755694"
						    },
						    {
						      "liveName": "晨晨",
						      "liveIdcard": "4402291****",
						      "liveMobile": "15338755695"
						    }
					    ]
			}
		},
		methods:{
			//移除当前住宿人
			delUser(index){
				this.guestList.splice(index,1);
			}
		}
	}
</script>
<style type="text/less" lang="less" scoped>
	@import '~assets/style/mixin';
	.book-info{
		background: #fff;
		.book-title{
			padding: 0 0.4rem;
			.size(100%,1.08rem);
			line-height: 1.08rem;
			color: #505050;
			border-bottom: 1px solid #ddd;/*no*/
			font-weight: bold;
		}
		.guest-title{
			.flex(space-between,center);
			.size(100%,1.08rem);
			padding: 0 0.4rem;
			border-bottom: 1px solid #ddd;/*no*/
			h5{
				color: #505050;
				font-weight: bold;
			}
			span{
				display: inline-block;
				.size(0.586667rem,0.586667rem);
				.bgicon;
				background-position: -5.6rem 0;
			}
		}
		.book-list{
			.flex(flex-start,center);
			.delete-icon{
				padding-left:0.4rem;
				margin-right: -0.133333rem;
				span{
					display: inline-block;
					.size(0.48rem,0.48rem);
					.bgicon;
					background-position: -5.933333rem -0.733333rem;
				}
			}
			ul{
				flex: 1;
				padding:0 0 0.466667rem 0.533333rem;
				border-bottom: 1px solid #ddd;/*no*/
				li{

					.font(28);
					.lineh(1);
					margin-top: 0.266667rem;
					color: @font3;
					span{
						display: inline-block;
						// width: 1.2rem;
						width: 1.6rem;
						color: #afafaf;
					}
				}
			}
		}
	}
</style>
