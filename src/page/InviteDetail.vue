<template>
	<div class="wrapper">
		<load-statu v-show="loadShow"/>
		<header-top v-if="$store.state.headTop" head-title="成功邀请"/>
		<div class="wrap-position mui-content" :class="{'head-top': $store.state.headTop}">
			<income-head :show-avatar="false" @dtpicker="dtpickerTap" @onsearch="searchData"/>
			<div id="pullrefreshTwo" class="mui-scroll-wrapper" style="top: 1.36rem;">
				<div class="mui-scroll">
					<div>
						<income-item v-for="(item, index) in resData" :key="index" :item="item"  @jump="detailFriendTap" :income="false" :showArrow="true" />
					</div>
					
				</div>
				<div class="no-income" v-if="!resData.length"></div>
			</div>
		</div>
		<transition name="router-slid" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>

	import IncomeHead from '@/components/IncomeHead'
	import IncomeItem from '@/components/IncomeItem'
	export default {
		name: 'InviteDetail',
		data(){
			return {
				mui: null,
				loadShow: false,
				dtpicker: null,
				param: {token: this.$token, page: 1, pageSize: 5, search: '', date: ''},
				resData: []
			}
		},
		created(){
			
		},
		mounted(){
			var self = this;
			import('@/assets/js/mui_2').then(function(mui){
				self.mui = mui;
				mui.init({
				  pullRefresh : {
				    container: '#pullrefreshTwo',//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
				    up : {
				      height:50,//可选.默认50.触发上拉加载拖动距离
				      auto: false,//可选,默认false.自动上拉加载一次
				      contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
				      contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
				      callback : function(){
				      	self.getData('append');
				      } //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
				    }
				  }
				});
			})
			this.dtpicker = new this.$mui.DtPicker({"type":"date","beginYear":2014,"endYear":2020});
			self.getData('append');
		},
		computed: {

		},
		methods: {
			//请求数据
			getData(renderType){
				this.loadShow = !this.loadShow;
				this.$post('invitation/findInvitationPeople', this.param).then(
					res => {
						console.log(res.data);
						let data = res.data.response;
						this.loadShow = !this.loadShow;
						if (data.length < this.param.pageSize) {
				        	this.mui('#pullrefresh').pullRefresh().endPullupToRefresh(true);
				        } else {
				        	this.mui('#pullrefresh').pullRefresh().endPullupToRefresh(false);
				        	//mui('#pullrefresh').pullRefresh().enablePullupToRefresh();
				        }
						this.param.page++;
						if(renderType == 'append'){
							this.resData.push(...data);
						}else{
							this.resData = data;
						}
					}
				).catch(
					err => {
						console.log(err);
						this.loadShow = !this.loadShow;
						'message' in err && mui.toast(err.message);
					}
				)
			},
			//处理子组件传来的keyword刷新数据
			searchData(keyword){
				this.param.page = 1;
				this.param.search = keyword;
				this.getData();
				this.mui('#pullrefresh').scroll().scrollTo(0, 0);//滚动到顶部
				
			},
			//选择日期
			dtpickerTap(){
				this.dtpicker.show(
					rs => {
						this.param.page = 1;
						this.param.date = rs.text;
						this.getData();
						this.mui('#pullrefresh').scroll().scrollTo(0, 0);//滚动到顶部
					}
				)
			},
			detailFriendTap(id){
				this.$router.push({ name: 'InviteDetailFriend', params: { id: id }})
			}
			
		},
		components: {
			IncomeHead,
			IncomeItem
		}
	}
</script>


