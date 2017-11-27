<template>
	<div class="wrap">
		<div class="avatar"><img src="static/images/eval_avatar.png"/></div>
		<div class="content">
			<div class="head">
				<div class="user">
					<span class="tel">13692292427</span>
					<span class="house">305  温馨大床房</span>
				</div>
				<div class="score">
					<span>打分</span>
					<span class="star-box starThree">
						<i class="item"></i>
						<i class="item"></i>
						<i class="item"></i>
						<i class="item"></i>
						<i class="item"></i>
					</span>
				</div>
			</div>
			<div class="eval-content">
				<p class="text" :class="{'line-clamp': hideEval}">{{evalText}}</p>
				<a class="btn" v-if="ellipsisBool" @click="hideEval = !hideEval">{{hideEval ? '全文' : '收起'}}</a>
			</div>
			<div class="img-list">
				<span class="item"><img src="static/images/imglist.png"/></span>
				<span class="item"><img src="static/images/imglist.png"/></span>
				<span class="item"><img src="static/images/imglist.png"/></span>
				<span class="item"><img src="static/images/imglist.png"/></span>
				<span class="item"><img src="static/images/imglist.png"/></span>
				<span class="item"><img src="static/images/imglist.png"/></span>
			</div>
			<div class="info">
				<div class="left">2017-11-10</div>
				<div class="right">
					<span class="f-color">回复({{replyList.length}})</span>
					<span class="del">删除</span>
				</div>
			</div>
			<div class="reply-box">
				<p class="item" v-for="(item, index) in replyList" v-show="replyShow(index) || replyShowAll" :key="index"><span class="lable">{{item.type==1?'用户':'商户'}}回复： </span>{{item.content}}</p>
				<div class="clear" v-if="replyList.length > 1">
					<a class="btn f-color rf" @click="replyShow">{{comReply}}</a>
				</div>				
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'EvaluationItem',
		data(){
			return {
				replyShowAll: false,
				hideEval: true, 
				evalText: '用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价\
				用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价用户评价',
				replyList: [{
					type: 2,
					content: '感谢您的评价，我们会尽快处理感谢您的评价，我们会尽快处理'
				},{
					type: 1,
					content: '房间很好'
				}]
			}
		},
		computed: {
			ellipsisBool(){
				return this.evalText.length > 80 ? true : false
			},
			comReply(){
				if(this.replyShowAll){
					return '收起'
				}else{
					return '查看更多(' + this.replyList.length + ')'
				}
			}
		},
		methods: {
			replyShow(index){
				if(typeof index === 'number'){
					return index == 0 ? true : false
				}else{
					this.replyShowAll = !this.replyShowAll;
				}
			}
		}
	}
</script>

<style scoped>
	.wrap{
		padding: 30px;
		background-color: #fff;
		overflow: hidden;
	}
	.avatar{
		float: left;
		width: 90px;
		height: 90px;
		border-radius: 50%;
		overflow: hidden;
	}
	.avatar img{
		position: relative;
		top: 50%;
		left: 50%;
		display: block;
		width: 100%;
		min-height: 100%;
		transform: translate(-50%, -50%);
	}
	.content{
		padding-left: 110px;
	}
	.head{
		line-height: 45px;
		color: #242424;
		font-size: 24px;
	}
	.head .user{
		display: flex;
		justify-content: space-between;
	}
	.head .tel{
		font-size: 32px;
	}
	.head .house{
		color: #afafaf;
		
	}
	.head .star-box{
		margin-left: 16px;
	}
	.star-box{
		display: inline-block;
	}
	.star-box .item{
		display: inline-block;
		width: 30px;
		height: 30px;
		margin-right: 3px;
		background-image: url(~static/images/i_star.png);
		background-repeat: no-repeat;
		background-position: center;
		background-size: 100%;
		vertical-align: text-top;
	}
	.starOne .item:nth-child(1){
		background-image: url(~static/images/i_star_active.png);
	}
	.starTwo .item:nth-child(1){
		background-image: url(~static/images/i_star_active.png);
	}
	.starTwo .item:nth-child(2){
		background-image: url(~static/images/i_star_active.png);
	}
	.starThree .item:nth-child(1){
		background-image: url(~static/images/i_star_active.png);
	}
	.starThree .item:nth-child(2){
		background-image: url(~static/images/i_star_active.png);
	}
	.starThree .item:nth-child(3){
		background-image: url(~static/images/i_star_active.png);
	}
	.starFour .item:nth-child(1){
		background-image: url(~static/images/i_star_active.png);
	}
	.starFour .item:nth-child(2){
		background-image: url(~static/images/i_star_active.png);
	}
	.starFour .item:nth-child(3){
		background-image: url(~static/images/i_star_active.png);
	}
	.starFour .item:nth-child(4){
		background-image: url(~static/images/i_star_active.png);
	}
	.starFive .item:nth-child(1){
		background-image: url(~static/images/i_star_active.png);
	}
	.starFive .item:nth-child(2){
		background-image: url(~static/images/i_star_active.png);
	}
	.starFive .item:nth-child(3){
		background-image: url(~static/images/i_star_active.png);
	}
	.starFive .item:nth-child(4){
		background-image: url(~static/images/i_star_active.png);
	}
	.starFive .item:nth-child(5){
		background-image: url(~static/images/i_star_active.png);
	}
	.eval-content{
		margin-top: 20px;
	}
	.eval-content .text{
		color: #242424;
		font-size: 28px;
		margin: 0;
		line-height: 1.2;
		
	}
	.line-clamp{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 4;
		overflow: hidden;
	}
	.eval-content .btn{
		display: inline-block;
		
		color: #FF7000;
		font-size: 24px;
	}
	.img-list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-top: 16px;
	}
	.img-list .item{
		
		width: 180px;
		height: 180px;
	}
	.img-list .item img{
		position: relative;
		top: 50%;
		left: 50%;
		display: block;
		width: 100%;
		transform: translate(-50%,-50%);
	}
	.img-list .item:nth-child(4),.img-list .item:nth-child(5),.img-list .item:nth-child(6){
		margin-top: 20px;
	}
	.info{
		display: flex;
		justify-content: space-between;
		line-height: 40px;
		font-size: 24px;
		margin-top: 20px;
	}
	.info .left{
		color: #afafaf;
	}
	.info .del{
		color: #666;
		padding: 0 20px;
		margin-right: -20px;
	}
	.reply-box{
		position: relative;
		margin-top: 20px;
		padding-top: 20px;
	}
	.reply-box:after{
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: -30px;
		height: 1px;/*no*/
		background-color: #ddd;
		transform: scaleY(.5);
	}
	.reply-box .item{
		color: #333;
		font-size: 26px;
		margin-bottom: 15px;
		line-height: 1.3;
	}
	.reply-box .lable{
		color: #242424;
	}
	.reply-box .btn{
		font-size: 24px;
		padding: 0 20px;
		margin-right: -20px;
	}
</style>