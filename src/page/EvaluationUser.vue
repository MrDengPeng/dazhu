<template>
	<div class="wrapper">
		<load-statu v-show="loadShow"/>
		<head-top v-if="$store.state.headTop" head-title="用户评价"/>
		<div class="mui-scroll-wrapper" :class="{'head-top': $store.state.headTop}">
			<div class="mui-scroll">
				<div>
					<evaluation-item/>
				</div>
			</div>
		</div>		
	</div>
</template>

<script>
	import HeadTop from '@/components/HeadTop'
	import EvaluationItem from '@/components/EvaluationItem'
	export default {
		name: 'EvaluationUser',
		data(){
			return {
				loadShow: false
			}
		},
		components: {
			HeadTop,
			EvaluationItem
		}
	}
</script>

<style>
</style>