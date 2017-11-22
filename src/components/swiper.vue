<template>
	<div class="mui-slider" @slide="swiper">
		<div class="mui-slider-group">
			<slot name="pic"></slot>
		</div>
		<div class="abc">
			<slot>
				
			</slot>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name: 'banner',
		created:{

		},
		mounted:{
	
		},
		data(){
			return{
				items:'',
				slideNumber:''
			}
		},
		methods:{
			swiper(event){
				this.slideNumber = event.detail.slideNumber;
				console.log(this.slideNumber);
			}
		}
	}
</script>
<style lang="less">
	
</style>