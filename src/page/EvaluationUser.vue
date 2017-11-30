<template>
	<div class="wrapper">
		<load-statu v-show="loadShow"/>
		<header-top v-if="$store.state.headTop" head-title="用户评价" :bgWhite="true"/>
		<div id="pullrefresh" class="mui-scroll-wrapper" :class="{'head-top': $store.state.headTop}">
			<div class="mui-scroll">
				<div>
					<evaluation-item v-for="item in fornum" :key="item" :index="item" :userEval="true"/>
				</div>
			</div>
		</div>		
	</div>
</template>

<script>
	import EvaluationItem from '@/components/EvaluationItem'
	export default {
		name: 'EvaluationUser',
		data(){
			return {
				loadShow: false,
				fornum: 0
			}
		},
		mounted(){
			/*初始化下拉刷新上拉加载*/
			/*开启图片预览插件*/
			this.$mui.muiSlider(this.$mui, window);
			this.$mui.zoom(this.$mui, window);
			this.$mui.preview(this.$mui, window);
			this.$mui.previewImage();
			this.$mui.init({
		    	pullRefresh: { 
		    		container: '#pullrefresh', 
		    		up: {
					    auto: true,//可选,默认false.自动上拉加载一次
		    			callback: () => {
		    				this.getData();
		    			}
		    		},
		    		down: {
		    			auto: false,
		    			callback: () => {
		    				this.getData('down');
		    			}
		    		}
		    	} 
		    });
		},
		methods: {
			getData(type){
				//this.loadShow = !this.loadShow;
				
				if(type == 'down'){
					
					setTimeout(() => {
						//this.loadShow = !this.loadShow;
						this.$mui('#pullrefresh').pullRefresh().endPulldownToRefresh();
						this.$mui('#pullrefresh').pullRefresh().enablePullupToRefresh();
						this.fornum = 5;
					}, 1000)
				}else{
					if(this.fornum > 19){
						//this.loadShow = !this.loadShow;
						this.$mui('#pullrefresh').pullRefresh().endPullupToRefresh(true);
					}else{
						
						setTimeout(() => {
							//this.loadShow = !this.loadShow;
							
							this.$mui('#pullrefresh').pullRefresh().endPullupToRefresh(false);
							this.$mui('#pullrefresh').pullRefresh().enablePullupToRefresh();
							this.fornum += 5;
						}, 1000)
					}
					
				}
				
			}
		},
		components: {
			EvaluationItem
		}
	}
</script>

