<template>
	<div class="mui-content">
		<p class="time-line font24">近一个月内收藏</p>
		<ul id="OA_task_1" class="mui-table-view">
			<li class="mui-table-view-cell">
				<div class="mui-slider-right mui-disabled">
					<a class="mui-btn mui-btn-red" @click="deleteItem()">删除</a>
				</div>
					<div class="mui-slider-handle list-item">
						<div class="hotel-pic">
							<img src="#">
						</div>
						<ul class="hotel-info">
							<li class="hotel-name font32">
								XXX大酒店
							</li>
							<li class="hotel-distance font24 mt30">
								距我1.2Km，首信广场附近
							</li>
							<li class="hour-price font24 mt30">
								<span class="font36">￥7.56</span>/小时
							</li>
						</ul>
					</div>
			</li>
			<li class="mui-table-view-cell">
				<div class="mui-slider-right mui-disabled">
					<a class="mui-btn mui-btn-red" @click="deleteItem">删除</a>
				</div>
				<div class="mui-slider-handle list-item">
					<div class="hotel-pic">
						<img src="#">
					</div>
					<ul class="hotel-info">
						<li class="hotel-name font32">
							XXX大酒店
						</li>
						<li class="hotel-distance font24 mt30">
							距我1.2Km，首信广场附近
						</li>
						<li class="hour-price font24 mt30">
							<span class="font36">￥7.56</span>/小时
						</li>
					</ul>
				</div>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		mounted(){
			this.$mui.init();
		},
		methods:{
			//右滑删除
			deleteItem(){
				let self = this,
					li = event.target.parentNode.parentNode;
				this.$mui.confirm('确认删除该条记录？', '', ['取消', '确认'], function(e) {
					if (e.index == 0) {
						setTimeout(function() {
							self.$mui.swipeoutClose(li);
						}, 0);
					} else {
						li.parentNode.removeChild(li);
		
					}
				});
			}
		}
	}
</script>
<style type="text/less" lang="less" scoped>
@import '~assets/style/mixin';
.mui-table-view:before{
    height: 0;
}
.mui-table-view:after{
    height: 0;
}
.mui-table-view-cell:after {
    left: 0;
}	
	.time-line{
		.lineh(1);
		margin: 0.266667rem 0;
		padding:0 0.4rem;
	}
	.list-item{
		.flex(flex-start,center);
		.hotel-pic{
			border: 1px solid #ddd;
			.size(2.4rem,2.4rem);
			img{
				width: 100%;
			}
		}
		.hotel-info{
			margin-left: 0.266667rem;
			li{
				.lineh(1);
			}
			.hotel-name{
				color: @font3;
			}
			.hour-price{
				color: #ff2a00;
				& span{
					font-weight: 550;
					color: #ff2a00;
				}
			}
		}
	}
</style>