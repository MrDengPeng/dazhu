<template>
	<div id="slider" class="mui-slider mui-fullscreen" :style="{top: top}">
		<div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
			<a class="mui-control-item mui-active" href="#item1mobile">
				注册返现
			</a>
			<a class="mui-control-item" href="#item2mobile">
				首单奖励
			</a>
			<a class="mui-control-item" href="#item3mobile">
				入住奖励
			</a>
		</div>
		<div class="mui-slider-group" style="top: 1.066rem;">
			<div id="item1mobile" class="mui-slider-item mui-control-content mui-active">
				<div class="mui-scroll-wrapper">
					<div class="mui-scroll">
						<div class="income-money">注册返现总计 (<span>0元</span>)</div>
						<ul class="in-list" id="list0">
							<li is="income-item" @jump="noticeParent" :income="true" :showArrow="showArrow"></li>
						</ul>
					</div>
					<div class="no-income"></div>
				</div>
			</div>
			<div id="item2mobile" class="mui-slider-item mui-control-content">
				<div class="mui-scroll-wrapper">
					<div class="mui-scroll">
						<div class="income-money">首单奖励总计 (<span>0元</span>)</div>
						<ul class="in-list" id="list1">
							<li is="income-item" :income="true" :showArrow="showArrow"></li>
						</ul>
					</div>
					<div class="no-income"></div>
				</div>
			</div>
			<div id="item3mobile" class="mui-slider-item mui-control-content">
				<div id="scroll3" class="mui-scroll-wrapper">
					<div class="mui-scroll">
						<div class="income-money">入住奖励总计 (<span>0元</span>)</div>
						<ul class="in-list" id="list2">
							<li is="income-item" :income="true" :showArrow="showArrow"></li>
						</ul>
					</div>
					<div class="no-income"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import IncomeItem from '@/components/IncomeItem'
	export default {
		name: 'MuiSliderTap',
		props: ['top', 'showArrow'],
		computed: {
			...mapState(['headTop']),
		},
		components: {
			IncomeItem
		},
		methods: {
			noticeParent(){
				this.$emit('jump');
			}
		}
	}
</script>
<style scoped>
	.income-money{
		background-color: #fff;
		color: #FF7000;
		font-size: 32px;
		text-align: center;
		line-height: 80px;
		margin-bottom: 20px;
	}
	.income-money span{
		color: #FF7000;
	}
	.mui-slider-indicator{
		background-color: #FF7000;
		
	}
	.mui-segmented-control.mui-segmented-control-inverted .mui-control-item{
		font-size: 32px;
		color: #ffc699;
	}
	.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active{
		color: #fff;
		border-bottom: 4px solid #fff !important;
	}
	.mui-scroll-wrapper{margin-top: 0;}
	.mui-slider .mui-segmented-control.mui-segmented-control-inverted~.mui-slider-group .mui-slider-item{border: none;}
	.mui-pull-bottom-wrapper{text-align: center;padding-bottom: 20px;}
	.mui-bar-nav~.mui-content{
		width: 100%;
		height: 100%;
	}
</style>