<template>
	<header class="head">
		<div class="return" @click="$router.go(-1)"></div>
		<div class="title">{{headTitle}}</div>
		<div></div>
	</header>
</template>

<script>
	export default {
		name: 'HeadTop',
		props: ['headTitle'],
	}
</script>

<style scoped>
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