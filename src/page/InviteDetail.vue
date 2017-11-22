<template>
	<div class="wrapper">
		<head-top v-if="headTop" head-title="成功邀请"/>
		<div class="wrapper mui-content" :class="{'head-padding': headTop}">
			<income-head :show-avatar="false" @dtpicker="dtpickerone"/>
			<div class="mui-scroll-wrapper" style="top: 2.533rem;">
				<div class="mui-scroll">
					<income-item @jump="detailFriendTap" :income="false" :showArrow="true"/>
				</div>
			</div>
		</div>		
	</div>
</template>

<script>
	import HeadTop from '@/components/HeadTop'
	import IncomeHead from '@/components/IncomeHead'
	import IncomeItem from '@/components/IncomeItem'
//	import {pull} from '@/assets/js/mui.pullToRefresh'
//	import {pullSub} from '@/assets/js/mui.pullToRefresh.material'
	export default {
		name: 'InviteDetail',
		data(){
			return {
				dtpicker: null,
				date: ''
			}
		},
		mounted(){
			this.dtpicker = new this.$root.mui.DtPicker({"type":"date","beginYear":2014,"endYear":2020});
		},
		computed: {
			headTop(){
				return this.$store.state.headTop
			}
		},
		methods: {
			dtpickerone(){
				this.dtpicker.show(rs => {
					console.log(rs);
					this.date = rs.text;
				})
			},
			detailFriendTap(e){
				this.$router.push({name: 'InviteDetailFriend'})
			}
			
		},
		components: {
			HeadTop,
			IncomeHead,
			IncomeItem
		}
	}
</script>


