<template>
	<div class="change-email">
		<ul class="info-list mt20">
			<li class="mui-input-row">
				<label>邮箱</label>
				<input type="email" class="mui-input-clear" placeholder="请填写您的邮箱"  v-model="email">
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				email:''
			}
		}
	}
</script>
<style type="text/less" lang="less" scoped>
	@import "~assets/style/mixin";
	ul.info-list{
			background: #fff;
			padding-left: 0.4rem;
			border-top: 1px solid #ddd;/*no*/
			border-bottom: 1px solid #ddd;/*no*/
			li{
				.size(100%,1.2rem);
				.flex(flex-start,center);
				
				label{
					.font(28);
					color: @font3;
					padding-left: 0;
				}
				input{
					.font(28);
					text-align: right;
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
</style>