<template>
	<div class="income-list">
		<div class="head after">
			<span class="date">2017-10-06</span>
			<span class="num">邀请2人共4人</span>
		</div>
		<ul class="list">
			<li class="after" @click="noticeParent">
				<div class="left">
					<div class="avatar"><img src="static/images/default_avatar.png"/></div>
					<div class="info">
						<p>张蓝蓝 136****9644</p>
						<p v-if="income">10-07  20:48 新用户注册</p>
					</div>
				</div>
				<div class="rigth">
					<div class="income" :class="{'f-color': income}">10元奖励 <span v-if="showArrow" class="mui-icon mui-icon-arrowright"></span></div>
				</div>
			</li>
			<li class="after">
				<div class="left">
					<div class="avatar"><img src="static/images/default_avatar.png"/></div>
					<div class="info">
						<p>张蓝蓝 136****9644</p>
						<p v-if="income">10-07  20:48 新用户注册</p>
					</div>
				</div>
				<div class="rigth">
					<div class="income" :class="{'f-color': income}">10元奖励 <span v-if="showArrow" class="mui-icon mui-icon-arrowright"></span></div>
				</div>
			</li>
			<li class="after">
				<div class="left">
					<div class="avatar"><img src="static/images/default_avatar.png"/></div>
					<div class="info">
						<p>张蓝蓝 136****9644</p>
						<p v-if="income">10-07  20:48 新用户注册</p>
					</div>
				</div>
				<div class="rigth">
					<div class="income" :class="{'f-color': income}">10元奖励 <span v-if="showArrow" class="mui-icon mui-icon-arrowright"></span></div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'IncomeItem',
		props: ['income', 'showArrow'],
		methods: {
			noticeParent(){
				this.$emit('jump');
			}
		}
	}
</script>

<style scoped>
	.mui-icon-arrowright{
		margin-right: -20px;
	}
	.income-list{
		background-color: #fff;
		margin-bottom: 20px;
	}
	.income-list .head{
		position: relative;
		display: flex;
		justify-content: space-between;
		line-height: 80px;
		padding: 0 30px;
	}
	.income-list .head .date{
		color: #333;
		font-size: 30px;
	}
	.income-list .head .num{
		color: #bdbdbd;
		font-size: 24px;
	}
	.avatar{
		width: 80px;
		height: 80px;
		border: 1px solid #FF7000;/*no*/
		border-radius: 50%;
		overflow: hidden;
		margin-right: 30px;
	}
	.avatar img{
		position: relative;
		top: 50%;
		left: 50%;
		display: block;
		width: 100%;
		min-height: 100%;
		transform: translate(-50%,-50%);
	}
	.list li{
		position: relative;
		display: flex;
		height: 140px;
		align-items: center;
		justify-content: space-between;
		padding: 0 30px;
	}
	.after:after{
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 1px;/*no*/
		transform: scaleY(.5);
		background-color: #e9e9e9;
	}
	.list .after:after{
		left: 30px;
	}
	.list .after:last-child:after{
		display: none;
	}
	.list .left{
		display: flex;
		align-items: center;
	}
	.info p{
		margin: 0;
	}
	.info p:nth-child(1){
		font-size: 34px;
		color: #333;
	}
	.info p:nth-child(2){
		font-size: 24px;
		margin-top: 6px;
	}
	.list .rigth{
		line-height: 48px;
	}
	.income{
		font-size: 30px;
	}
	.income .mui-icon{
		color: #ccc;
		vertical-align: middle;
	}
</style>