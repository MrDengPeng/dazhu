<template>
	<div class="wrap">
		<div class="avatar-box" v-if="showAvatar">
			<div class="avatar"><img src="static/images/default_avatar.png"/></div>
		</div>
		<div v-if="showAvatar">
			<div class="info" v-if="showIncome">
				<div class="item">累计收益<br /><span><em>0</em>元</span></div>
				<div class="item">成功邀请<br /><span><em>0</em>人</span></div>
			</div>
			<div class="invite-num" v-else>成功邀请4人</div>	
		</div>
		
		<div class="box clear">
			<div class="search lf">
				<input type="search" placeholder="输入关键字查询" />
			</div>
			<span class="date rf" @click="dtpicker"></span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'IncomeHead',
		props: ['showAvatar','invite'],
		methods: {
			dtpicker(){
				this.$emit('dtpicker');
			}
		},
		computed: {
			showIncome(){
				return this.showAvatar && !this.invite
			}
		}
	}
</script>
<style scoped>
	.wrap{
		background-color: #FF7000;
		
	}
	.avatar-box{
		padding-top: 40px;
	}
	.avatar{
		position: relative;
		width: 130px;
		height: 130px;
		border: 4px solid #fff;
		border-radius: 50%;
		overflow: hidden;
		margin: 0 auto 30px;
	}
	.avatar img{
		display: block;
		width: 100%;
		min-height: 100%;
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.invite-num{
		height: 36px;
		text-align: center;
		color: #fff;
		font-size: 36px;
		line-height: 36px;
		margin-bottom: 36px;
	}
	.info{
		display: flex;
		height: 96px;
	}
	.info .item{
		flex: 1;
		text-align: center;
		color: #fff;
		font-size: 28px;
		line-height: 1.2;
	}
	.info .item:nth-child(2){
		border-left: 1px solid #fff;/*no*/
	}
	.info span{
		color: inherit;
	}
	.info .item em{
		font-size: 60px;
		color: inherit;
	}
	.box{
		padding: 30px 30px 20px;		
	}
	.search{
		background: url(~static/images/i_search.png) no-repeat 30px center/30px 32px;
	}
	.search input{
		display: block;
		width: 520px;
		height: 50px;
		padding: 6px 70px;
		border-radius: 26px;
		background: rgba(255,255,255,.1);
		line-height: 38px;
		color: #fff;
		margin: 0;
		text-align: left;
		font-size: 32px;
	}
	.search input::-webkit-input-placeholder{
		color: #fff;
	}
	.date{
		width: 60px;
		height: 50px;
		background: url(~static/images/i_date.png) no-repeat right center/42px 42px;
	}
</style>