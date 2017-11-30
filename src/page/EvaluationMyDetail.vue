<template>
	<div class="wrapper">
		<load-statu v-show="loadShow"/>
		<header-top v-if="$store.state.headTop" head-title="我的评价" :bgWhite="true"/>
		<div class="mui-scroll-wrapper" :class="{'head-top': $store.state.headTop}" style="bottom: 1.2rem;">
			<div class="mui-scroll">
				<div class="head">
					<evaluation-item index="1" />
					<div class="hotel-info">
						<div class="img"><img class="img-center" src="static/images/imglist.png"/></div>
						<div class="content">
							<div class="tit"><span>时租酒店</span><br />202  温馨大床房</div>
							<p class="time">入住时间：2017-11-09  10:30<br />退房时间：2017-11-09  17:30</p>
						</div>
					</div>
				</div>
				<div class="reply-box">
					<div class="tit after-btmline">全部回复 (3)</div>
					<reply-item v-for="item in 3" />
				</div>
			</div>
		</div>
		<!--<div class="wrap-position" :class="{'head-top': $store.state.headTop}" style="bottom: 1.2rem;">
			<div class="head">
				<evaluation-item index="1" />
				<div class="hotel-info">
					<div class="img"><img class="img-center" src="static/images/imglist.png"/></div>
					<div class="content">
						<div class="tit"><span>时租酒店</span><br />202  温馨大床房</div>
						<p class="time">入住时间：2017-11-09  10:30<br />退房时间：2017-11-09  17:30</p>
					</div>
				</div>
			</div>
			<div class="reply-box">
				<div class="tit after-btmline">全部回复 (3)</div>
				<reply-item v-for="item in 3" :key="item" />
			</div>
		</div>-->
		<div class="reply-btn after-btmline a-top"><span>回复</span></div>
	</div>
</template>

<script>
	import EvaluationItem from '@/components/EvaluationItem'
	export default {
		name: 'EvaluationMyDetail',
		data(){
			return {
				loadShow: false,
				fornum: 0
			}
		},
		mounted(){
			/*开启图片预览插件*/
			this.$mui.muiSlider(this.$mui, window);
			this.$mui.zoom(this.$mui, window);
			this.$mui.preview(this.$mui, window);
			this.$mui.previewImage();
			/*初始化滚动*/
			this.$mui('.mui-scroll-wrapper').scroll({
				deceleration: 0.006
			})
		},
		methods: {
			
		},
		components: {
			EvaluationItem,
			'reply-item': {
				template: '\
					<div class="reply-item after-btmline">\
						<div class="g-avatar lf"><img src="static/images/eval_avatar.png"/></div>\
						<div class="content">\
							<div class="hotel"><span>时租酒店</span><br />2个小时前</div>\
							<p class="text"><span>回复商户：</span>感谢您的评价，我们会尽快处理</p>\
						</div>\
					</div>\
				'
				
			}
		}
	}
</script>
<style>
	.reply-item.after-btmline:after{
		left: 140px;
	}
	.reply-item{
		position: relative;
		padding: 30px;
	}
	.reply-item .content{
		padding-left: 110px;
	}
	.reply-item .hotel{
		padding: 6px 0;
		height: 90px;
		color: #afafaf;
		font-size: 24px;
		line-height: 36px;
	}
	.reply-item .hotel span{
		color: #333;
		font-size: 32px;
	}
	.reply-item .text{
		color: #333;
		font-size: 28px;
		margin-bottom: 0;
		margin-top: 10px;
		line-height: 1.3;
	}
	.reply-item .text span{
		color: #242424;
	}
</style>
<style scoped>
	.head{
		background-color: #fff;
		margin-bottom: 20px;
		padding-bottom: 40px;
	}
	.hotel-info{
		display: flex;
		margin: 0 30px;
		height: 200px;
		background-color: #f6f6f6;
	}
	.hotel-info .img{
		width: 200px;
		flex-shrink: 0;
		overflow: hidden;
	}
	.hotel-info .tit{
		color: #333;
		font-size: 28px;
		line-height: 1.7;
	}
	.hotel-info .tit span{
		font-size: 32px;
	}
	.hotel-info .content{
		display: flex;
		flex-wrap: wrap;
		align-content: center;
		padding: 0 20px;
	}
	.hotel-info .time{
		color: #666;
		font-size: 24px;
		line-height: 1.5;
		margin: 0;
	}
	.reply-box{
		background-color: #fff;
		padding-bottom: 20px;
	}
	.reply-box .tit{
		position: relative;
		height: 80px;
		line-height: 80px;
		color: #333;
		font-size: 32px;
		padding: 0 30px;
	}
	
	.reply-btn{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 90px;
		background-color: #f6f6f6;
		z-index: 100;
		text-align: center;
		line-height: 90px;
	}
	.reply-btn span{
		display: inline-block;
		padding-left: 46px;
		color: #333;
		font-size: 32px;
		background: url(~static/images/i_reply.png) no-repeat left center/31px 29px;
	}
</style>
