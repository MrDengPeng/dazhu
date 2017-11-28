<template>
	<header class="head" :class="{'white-head': bgWhite, 'after-btmline': bgWhite}">
		<div class="return" @click="$router.go(-1)"></div>
		<div class="title">{{headTitle}}</div>
		<div></div>
	</header>
</template>

<script>
	export default {
		name: 'HeadTop',
		props: ['headTitle', 'bgWhite'],
	}
</script>

<style scoped>
	.after-btmline:after{
		background-color: #e6e6e6;
	}
	.head{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 88px;
		background-color: #FF7000;
		font-size: 32px;
		z-index: 99;
	}
	.white-head{
		background-color: #fff;
	}
	.white-head .title{
		color: #242424;
	}
	.white-head .return{
		background: url(~static/images/i_return_new.png) no-repeat center/22px 44px;
	}
	.return{
		position: absolute;
		top: 0;
		left: 0;
		width: 88px;
		height: 100%;
		background: url(~static/images/i_return.png) no-repeat center/22px 44px;
	}
	.title{
		padding: 0 88px;
		color: #fff;
		font-size: 32px;
		line-height: 88px;
		text-align: center;
	}
</style>