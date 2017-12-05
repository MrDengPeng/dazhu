<template>
	<div class="info">
		<ul class="info-list">
			<li class="mui-input-row">
				<label>我的头像</label>
				<router-link to='../hotelDetail' class="arrow-item icon">
					<div class="user-icon">
						<img :src=info.uIcon>
					</div>
					<span class="arrow-link"></span>
				</router-link>
			</li>
			<li class="mui-input-row">
				<label>昵称</label>
				<router-link :to="{ name:'changeName'}" class="arrow-item">
					请输入昵称
					<span class="arrow-link"></span>
				</router-link>
			</li>
			<li class="mui-input-row">
				<label>邮箱</label>
				<router-link :to="{ name:'changeEmail'}" class="arrow-item">
					请输入邮箱(选填)
					<span class="arrow-link"></span>
				</router-link>	
			</li>
			<li class="mui-input-row">
				<label>手机号</label>
				<router-link to='../hotelDetail' class="arrow-item">
					{{ this.info.phone }}
				</router-link>	
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				info:{
					uIcon:'static/images/head.png',
					uName:'',
					phone:'13723734526',
					email:''
				}
			}
		}
	}
</script>
<style type="text/less" lang="less" scoped>
	@import '~assets/style/mixin';
	.info{
		ul.info-list{
			background: #fff;
			padding-left: 0.4rem;
			li{
				.size(100%,1.2rem);
				.flex(flex-start,center);
				border-top: 1px solid #ddd;/*no*/

				
				&:first-child{
					border: none;
					height: 1.866667rem;
					.icon{
						.flex(flex-end,center);
						text-align: right;
					}
					.user-icon{
						.size(1.453333rem,1.453333rem);
						overflow: hidden;
						img{
							width: 100%;
						}
					}
				}
				label,
				span{
					.font(28);
					color: @font3;
					padding-left: 0;
				}
				.arrow-item{
						text-align: right;
						flex: 1;
						.arrow-item();
						color: #afafaf;
						.font(28);
						padding-right: 0.4rem;
				}
			}
		}	
	}
</style>