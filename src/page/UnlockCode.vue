<template>
	<div class="wrapper">
		<load-statu v-show="loadShow"/>
		<header-top v-if="$store.state.headTop" style="box-shadow: 0 1px 1px rgba(221,221,221,.3);" head-title="开锁二维码" :bgWhite="true" />
		<div class="wrap-position" :class="{'head-top': $store.state.headTop}">
			<div class="wrap">
				<div class="label-box">
					<div class="house"><span>城邦精品酒店</span><br />505  温馨大床房</div>
					<div class="code-box">
						<div class="code">
							<img class="img-center" src="static/images/erweima.png"/>
						</div>
					</div>
				</div>
				<div class="text-box">
					<p class="f-color">（半小时内有效）17:30  ——  18:00</p>
					<span>点击二维码刷新</span>
				</div>
			</div>
		</div>
		<div class="company-name">微住网络科技有限公司</div>
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
			
		},
		methods: {
			
		},
	}
</script>

<style scoped>
	.wrap{
		position: absolute;
		top: 8%;
		left: 50%;
		width: 86%;
		margin-left: -43%;
	}
	.company-name{
		position: absolute;
		left: 0;
		bottom: 20px;
		font-size: 24px;
		color: #666;
		text-align: center;
		width: 100%;
	}
	.label-box{
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0 0 30px 2px rgba(0,0,0,.1);
	}
	.label-box .house{
		height: 200px;
		background-color: #fff;
		color: #333;
		font-size: 36px;
		line-height: 1.8;
		padding: 30px;
	}
	.label-box .house span{
		font-size: 42px;
	}
	.code-box{
		position: relative;
		height: 600px;
		background-color: #ff9b4c;
	}
	.code-box .no-lock{
		background: #fff url(~static/images/i_unlock.png) no-repeat right center/467px 329px;
	}
	.code-box .code{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 480px;
		height: 480px;
		padding: 40px;
		background-color: #fff;
	}
	.text-box{
		font-size: 28px;
		text-align: center;
		line-height: 1.8;
		color: #333;
		margin-top: 20px;
	}
	.text-box p{
		font-size: 24px;
		margin: 0;
	}
</style>