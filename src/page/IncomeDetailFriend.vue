<template>
	<div class="wrapper" id="i_friend">
		<load-statu v-show="loadShow"/>
		<header-top v-if="$store.state.headTop" head-title="收益明细"/>
		<div class="wrap-position" :class="{'head-top': $store.state.headTop}">
			<income-head :show-avatar="true" @dtpicker="dtpickerTap" @onsearch="searchData" :userInfo="userInfo"/>
			<!--<mui-slider-tab top="5.253rem"/>-->
			<mui-slider-tab top="5.253rem" :showArrow="false" :moneyArr="userInfo.moneyArr.join()" :tabDataOne="tabDataOne" :tabDataTwo="tabDataTwo" :tabDataThree="tabDataThree"/>
		</div>
	</div>
</template>

<script>
	import IncomeHead from '@/components/IncomeHead'
	import MuiSliderTab from '@/components/MuiSliderTab'
	export default {
		data(){
			return {
				loadShow: false,
				dtpicker: null,
				index: 0,
				userInfo: {
					headImg: 'static/images/default_avatar.png',
					money: 0,
					num: 0,
					moneyArr: [0, 0, 0]
				},
				paramOne: {token: this.$token, page: 1, pageSize: 5, uid: this.id, search: '', date: '', type: 1},
				paramTwo: {token: this.$token, page: 1, pageSize: 5, uid: this.id, search: '', date: '', type: 2},
				paramThree: {token: this.$token, page: 1, pageSize: 5, uid: this.id, search: '', date: '', type: 3},
				tabDataOne: [],
				tabDataTwo: [],
				tabDataThree: [],
				pullSelfOne: null,
				pullSelfTwo: null,
				pullSelfThree: null
			}
		},
		props: ['id'],
		mounted(){
			var self = this;
			this.$mui.init();
			//开启slider滑动插件
			this.$mui.muiSlider(this.$mui, window);
			//初始化日期插件
			this.dtpicker = new this.$mui.DtPicker({"type":"date","beginYear":2014,"endYear":2020});
			//获取当前tab下标index
			document.getElementById('slider').addEventListener('slide', e => this.index = e.detail.slideNumber);
			
			//初始化tab数据
			(function($) {
				$.ready(function() {
					//循环初始化所有下拉刷新，上拉加载。
					$.each(document.querySelectorAll('#i_friend .mui-slider-group .mui-scroll'), function(index, pullRefreshEl) {
						$(pullRefreshEl).pullToRefresh({
							up: {
								auto: true,
								callback: function() {
									switch(index) {
										case 0:
											self.pullSelfOne = this;
											self.getData(self.paramOne, index, this, 'append');
											break;
										case 1:
											self.pullSelfTwo = this;
											self.getData(self.paramTwo, index, this, 'append');
											break;
										case 2:
											self.pullSelfThree = this;
											self.getData(self.paramThree, index, this, 'append');
											break;
									}
								}
							}
						});
					});
				});
			})(this.$mui);
			this.$post('invitation/incomeTotal', {token: this.$token, uid: this.id}).then(
				res => {
					console.log(res.data);
					this.userInfo = Object.assign({}, this.userInfo, res.data.response);
				}
				
			).catch(					
				err => {
					console.log(err);
					'message' in err && this.$mui.toast(err.message);
				}
			)
		},
		computed: {
			
		},
		methods: {
			getData(param, index, pullSelf, renderType){
				console.log(index);
				this.loadShow = !this.loadShow;
				this.$post('invitation/incomeBreakdown', param).then(
					res => {
						console.log(res.data);
						let data = res.data.response;
						this.loadShow = !this.loadShow;
						if(param.page == 1) {
							if(data.length < param.pageSize) {
								pullSelf.setStopped(true);
							} else {
								pullSelf.refresh(true);
							}
						}
						if(data.length < param.pageSize) {					
							pullSelf.endPullUpToRefresh(true);
						} else {
							pullSelf.endPullUpToRefresh(false);
						}
						param.page++;
						switch(index){
							case 0: 
								if(renderType == 'append'){
									this.tabDataOne.push(...data);
								}else{
									this.tabDataOne = data;
								}
								break;
							case 1: 
								if(renderType == 'append'){
									this.tabDataTwo.push(...data);
								}else{
									this.tabDataTwo = data;
								}
								break;
							case 2: 
								if(renderType == 'append'){
									this.tabDataThree.push(...data);
								}else{
									this.tabDataThree = data;
								}
								break;
						}
					}
				).catch(
					err => {
						console.log(err);
						this.loadShow = !this.loadShow;
						'message' in err && this.$mui.toast(err.message);
					}
				)
			},
			//处理子组件传来的keyword刷新数据
			searchData(keyword){
				console.log('se');
				switch(this.index){
					case 0: 
						this.paramOne.page = 1;
						this.paramOne.search = keyword;
						this.getData(this.paramOne, this.index, this.pullSelfOne);
						this.$mui('#scrollOne').scroll().scrollTo(0, 0);//滚动到顶部
						break;
					case 1: 
						this.paramTwo.page = 1;
						this.paramTwo.search = keyword;
						this.getData(this.paramTwo, this.index, this.pullSelfTwo);
						this.$mui('#scrollTwo').scroll().scrollTo(0, 0);//滚动到顶部
						break;
					case 2: 
						this.paramThree.page = 1;
						this.paramThree.search = keyword;
						this.getData(this.paramThree, this.index, this.pullSelfThree);
						this.$mui('#scrollThree').scroll().scrollTo(0, 0);//滚动到顶部
						break;
				}
				
			},
			//选择日期
			dtpickerTap(){
				this.dtpicker.show(
					rs => {
						switch(this.index){
							case 0: 
								this.paramOne.page = 1;
								this.paramOne.date = rs.text;
								this.getData(this.paramOne, this.index, this.pullSelfOne);
								this.$mui('#scrollOne').scroll().scrollTo(0, 0);//滚动到顶部
								break;
							case 1: 
								this.paramTwo.page = 1;
								this.paramTwo.date = rs.text;
								this.getData(this.paramTwo, this.index, this.pullSelfTwo);
								this.$mui('#scrollTwo').scroll().scrollTo(0, 0);//滚动到顶部
								break;
							case 2: 
								this.paramThree.page = 1;
								this.paramThree.date = rs.text;
								this.getData(this.paramThree, this.index, this.pullSelfThree);
								this.$mui('#scrollThree').scroll().scrollTo(0, 0);//滚动到顶部
								break;
						}
					}
				)
			}
		},
		components: {
			IncomeHead,
			MuiSliderTab
		}
	}
</script>
