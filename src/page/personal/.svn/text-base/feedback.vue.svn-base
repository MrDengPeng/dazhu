<template>
	<section class="feedback">
		<div class="advice">
			<textarea v-model="advice">
				
			</textarea>
			<p class="font24 mt35">您的每一条反馈我们都会仔细阅读，但我们无法保证每一条都能及时回复，如果您有紧急问题需要咨询，请直接拨打热线联系我们：400-111-3020，谢谢您的理解。</p>
		</div>
		<ul class="info-list mt20">
			<li class="mui-input-row">
				<label>手机号</label>
				<input type="tel" class="mui-input-clear" placeholder="请输入手机号码" v-model="phone">
			</li>
			<li class="mui-input-row">
				<label>电子邮箱</label>
				<input type="email" class="mui-input-clear" placeholder="（选填）"  v-model="email">
			</li>
		</ul>
		<div class="confirm-btn mt80 font34" @click="commit">
			确定
		</div>
	</section>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				advice:'',
				phone: '',
				email: ''
			}
		},
		methods:{
			commit(){
				console.log(this.phone);
			}
		}
	}
</script>
<style type="text/less" lang="less" scoped>
	@import "~assets/style/mixin";
	.feedback{
		.flex(flex-start,center);
		flex-direction: column;
		.advice{
			padding: 1.533333rem 0.4rem 0;
			background: @bg;
			textarea{
				.size(9.2rem,5.333333rem);
				.font(28);
				padding: 0.133333rem 0.2rem;
				margin-bottom: 0;
			}
			P{
				.lineh(1.2);
				margin-bottom: 0.666667rem;
			}
		}
		ul.info-list{
			width: 100%;
			background: #fff;
			padding-left: 0.4rem;
			border-top: 1px solid @border;/*no*/ 
			border-bottom: 1px solid @border;/*no*/ 
			li{
				.size(100%,1.2rem);
				.flex(flex-start,center);
				border-top: 1px solid @border;/*no*/
				&:first-child{
					border: none;
				}
				label{
					width: 25%;
					.font(28);
					color: @font3;
					padding-left: 0;
				}
				input{
					.font(28);
					color: #afafaf;
					&::-webkit-input-placeholder { /* WebKit browsers */
						color:#afafaf;
					};
					&:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
						color:#afafaf;
					};
					&::-moz-placeholder { /* Mozilla Firefox 19+ */
						color:#afafaf;
					};
				}

			}
		}	
		.confirm-btn{
			.linear-btn(100%,1.173333rem);
			width: 9.2rem;
		}
	}
</style>