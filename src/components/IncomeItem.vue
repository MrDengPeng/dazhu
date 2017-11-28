<template>
	<div class="income-list">
		<div class="head after-btmline" @click="show = !show">
			<span class="date">{{item.date}}</span>
			<span class="num">{{item.invitationNum}}</span>
		</div>
		<transition name="my-slide">
			<ul class="list" v-show="show">
				<li class="after-btmline" v-for="item in item.list" :key="item.id" @click="$emit('jump',item.id)">
					<div class="left">
						<div class="avatar"><img src="static/images/default_avatar.png" /></div>
						<div class="info">
							<p>{{item.nickName + ' ' + item.mobile}}</p>
							<p v-if="income">{{item.rechargeTime}}</p>
						</div>
					</div>
					<div class="rigth">
						<div class="income" v-if="item.rechargeMoney" :class="{'f-color': income}">{{item.rechargeMoney}}<span v-if="showArrow" class="mui-icon mui-icon-arrowright"></span></div>
						<div class="income" v-else :class="{'f-color': income}">{{item.num}}<span v-if="showArrow" class="mui-icon mui-icon-arrowright"></span></div>
					</div>
				</li>
			</ul>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'IncomeItem',
		data(){
			return {
				show: true
			}
		},
		props: ['income', 'showArrow', 'item']
	}
</script>

<style scoped>
	.my-slide-enter-active, .my-slide-leave-active{
		transition: all .4s;
		transform-origin: top;
	}
	.my-slide-enter, .my-slide-leave-to{		
		opacity: 0;
		transform: translateY(-100%);
		
	}
	.mui-icon-arrowright{
		margin-right: -20px;
	}
	.income-list{
		background-color: #fff;
		margin-bottom: 20px;
		overflow: hidden;
	}
	.income-list .head{
		position: relative;
		display: flex;
		justify-content: space-between;
		line-height: 80px;
		padding: 0 30px;
		background-color: #fff;
		z-index: 1;
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
		flex-shrink: 0;
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
	.list{
		position: relative;
		overflow: hidden;
	}
	.list li{
		position: relative;
		display: flex;
		height: 140px;
		align-items: center;
		justify-content: space-between;
		padding: 0 30px;
	}
	.list .after-btmline:after{
		left: 30px;
	}
	.list .after-btmline:last-child:after{
		display: none;
	}
	.list .left{
		display: flex;
		align-items: center;
	}
	.info{
		max-width: 350px;
	}
	.info p{
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
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
		flex-shrink: 0;
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