<template>
	<div class="wrapper">
		<load-statu v-show="loadShow"/>
		<header-top v-if="$store.state.headTop" :head-title="userInfo.nickName"/>
		<div class="wrap-position" :class="{'head-top': $store.state.headTop}">
			<income-head :show-avatar="true" :invite="true" @dtpicker="dtpickerTap" @onsearch="searchData" :userInfo="userInfo"/>
			<div id="pullrefreshThree" class="mui-scroll-wrapper" style="top: 4.927rem;">
				<div class="mui-scroll">
					<!--<income-item :income="false"/>-->
				</div>
				<div class="no-income" v-if="!resData.length"></div>
			</div>
		</div>		
	</div>
</template>

<script>
	import mui from '@/assets/js/mui_3'
	import {picker} from '@/assets/js/mui.picker'
	import IncomeHead from '@/components/IncomeHead'
	import IncomeItem from '@/components/IncomeItem'
	export default {
		data(){
			return {
				loadShow: false,
				dtpicker: null,
				userInfo: {
					headImg: 'static/images/default_avatar.png',
					nickName: '',
					num: 0
				},
				param: {token: this.$token, page: 1, pageSize: 5, uid: this.id, search: '', date: ''},
				resData: []
			}
		},
		props: ['id'],
		created(){
			picker(mui, window, document);
		},
		mounted(){
			var self = this;
			this.dtpicker = new mui.DtPicker({"type":"date","beginYear":2014,"endYear":2020});
			mui.init({
			  pullRefresh : {
			    container: '#pullrefreshThree',//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
			    up : {
			      height:50,//可选.默认50.触发上拉加载拖动距离
			      auto:true,//可选,默认false.自动上拉加载一次
			      contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
			      contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
			      callback : function(){
			      	self.getData('append');
			      } //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
			    }
			  }
			});
			self.getData('append');
			this.$post('invitation/findInvitationPeopleTotal', {token: this.$token, uid: this.id}).then(
				res => {
					console.log(res.data);
					this.userInfo = Object.assign({}, this.userInfo, res.data.response);
				}
			).catch(
				err => {
					console.log(err);
					'message' in err && mui.toast(err.message);
				}
			)
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
				        	mui('#pullrefreshThree').pullRefresh().endPullupToRefresh(true);
				        } else {
				        	mui('#pullrefreshThree').pullRefresh().endPullupToRefresh(false);
				        	//mui('#pullrefreshThree').pullRefresh().enablePullupToRefresh();
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
				mui('#pullrefreshThree').scroll().scrollTo(0, 0);//滚动到顶部
				
			},
			//选择日期
			dtpickerTap(){
				this.dtpicker.show(
					rs => {
						this.param.page = 1;
						this.param.date = rs.text;
						this.getData();
						mui('#pullrefreshThree').scroll().scrollTo(0, 0);//滚动到顶部
					}
				)
			}
		},
		components: {
			IncomeHead,
			IncomeItem
		}
	}
</script>