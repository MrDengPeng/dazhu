<template>
	<div class="wrapper">
		<load-statu v-show="loadShow"/>
		<head-top v-if="$store.state.headTop" head-title="我的优惠劵" :bgWhite="true"/>
		<div id="pullrefresh" class="mui-scroll-wrapper" :class="{'head-top': $store.state.headTop}">
			<div class="mui-scroll">
				<div>
					dasf
				</div>
			</div>
		</div>		
	</div>
</template>

<script>
	import HeadTop from '@/components/HeadTop'
	export default {
		name: 'CouponMy',
		data(){
			return {
				loadShow: false
			}
		},
		
		components: {
			HeadTop
		}
	}
</script>

