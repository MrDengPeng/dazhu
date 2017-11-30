<template>
	<div class="wrapper">
		<load-statu v-show="loadShow"/>
		<header-top v-if="$store.state.headTop" head-title="我的评价" :bgWhite="true"/>
		<div id="pullrefresh" class="mui-scroll-wrapper" :class="{'head-top': $store.state.headTop}">
			<div class="mui-scroll">
				<div>
					<div class="wrap" v-for="item in fornum" :key="item">
						<div class="item-head after-btmline" @click="detailTap">
							<div class="tit">
								<span class="name">时租酒店</span>
								<span>305 大床房</span>
							</div>
							<div class="mui-icon mui-icon-arrowright"></div>
						</div>
						<evaluation-item :index="item" :myEval="true" @del="delItem" />
					</div>
				</div>
			</div>
		</div>		
	</div>
</template>

<script>
	import EvaluationItem from '@/components/EvaluationItem'
	export default {
		name: 'EvaluationMy',
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
					    auto:true,//可选,默认false.自动上拉加载一次
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
				console.log(this.fornum);
				
				
			},
			/*删除一条评论*/
			delItem(index){
				console.log(index);
			},
			//进入子级页面
			detailTap(){
				this.$router.push({ name: 'EvaluationMyDetail'})
			}
		},
		components: {
			EvaluationItem
		}
	}
</script>
<style scoped>
	.mui-icon-arrowright{
		color: #afafaf;
		margin-right: -20px;
	}
	.wrap{
		background-color: #fff;
		margin-bottom: 20px;
	}
	.wrap:last-child{
		margin-bottom: 0;
	}
	.item-head{
		position: relative;
		height: 80px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 30px;
	}
	.item-head .tit{
		font-size: 24px;
		color: #666;
	}
	.item-head .name{
		color: #242424;
		font-size: 32px;
		margin-right: 30px;
	}
</style>
