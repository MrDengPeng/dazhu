<template>
	<div class="mui-slider">
		<div class="mui-slider-group">
			<slot name="pic"></slot>
		</div>
		<slot name="title" :text="slideIndex.index"></slot>
	</div>
</template>
<script type="text/javascript">
	import {zoom} from'assets/js/mui.zoom'
	import {previewImg} from 'assets/js/mui.previewimage'
	export default{
		name: 'banner',
		created(){
			
		},
		mounted(){
			this.changeIndex();
			this.slide();
			this.preview();
		},
		data(){
			return{
				// 初始坐标
				slideIndex:{
					index:1
				}
			}
		},
		methods:{
			// 调用mui滑动方法
			slide(){
				this.$mui.muiSlider(this.$mui, window);
				let slider = this.$mui('.mui-slider').slider();
			},
			//改变轮播图下标
			changeIndex(){
				var self = this;
				document.querySelector('.mui-slider').addEventListener('slide', function(e) {
					let index = e.detail.slideNumber+1;
					self.$set(self.slideIndex,'index',index);
				});
			},
			// 点击图片放大
			preview(){
				var self = this;
				zoom(self.$mui,window);
				previewImg(self.$mui,window);
				this.$mui.previewImage();
			}
		}
	}
</script>
<style type="text/css">
.mui-preview-image.mui-fullscreen {
		position: fixed;
		z-index: 20;
		background-color: #000;
	}
	.mui-preview-header,
	.mui-preview-footer {
		position: absolute;
		width: 100%;
		left: 0;
		z-index: 10;
	}
	.mui-preview-header {
		height: 44px;
		top: 0;
	}
	.mui-preview-footer {
		height: 50px;
		bottom: 0px;
	}
	.mui-preview-header .mui-preview-indicator {
		display: block;
		line-height: 25px;
		color: #fff;
		text-align: center;
		margin: 30px auto 4px;
		width: 70px;
		background-color: rgba(0, 0, 0, 0.4);
		border-radius: 12px;
		font-size: 32px;
	}
	.mui-preview-image {
		display: none;
		-webkit-animation-duration: 0.5s;
		animation-duration: 0.5s;
		-webkit-animation-fill-mode: both;
		animation-fill-mode: both;
	}
	.mui-preview-image.mui-preview-in {
		-webkit-animation-name: fadeIn;
		animation-name: fadeIn;
	}
	.mui-preview-image.mui-preview-out {
		background: none;
		-webkit-animation-name: fadeOut;
		animation-name: fadeOut;
	}
	.mui-preview-image.mui-preview-out .mui-preview-header,
	.mui-preview-image.mui-preview-out .mui-preview-footer {
		display: none;
	}
	.mui-zoom-scroller {
		position: absolute;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		width: 100%;
		height: 100%;
		margin: 0;
		-webkit-backface-visibility: hidden;
	}
	.mui-zoom {
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
	}
	.mui-slider .mui-slider-group .mui-slider-item img {
		/*width: auto;
		height: auto;*/
		max-width: 100%;
		max-height: 100%;
	}
	.mui-android-4-1 .mui-slider .mui-slider-group .mui-slider-item img {
		width: 100%;
	}
	.mui-android-4-1 .mui-slider.mui-preview-image .mui-slider-group .mui-slider-item {
		display: inline-table;
	}
	.mui-android-4-1 .mui-slider.mui-preview-image .mui-zoom-scroller img {
		display: table-cell;
		vertical-align: middle;
	}
	.mui-preview-loading {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		display: none;
	}
	.mui-preview-loading.mui-active {
		display: block;
	}
	.mui-preview-loading .mui-spinner-white {
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -25px;
		margin-top: -25px;
		height: 50px;
		width: 50px;
	}
	.mui-preview-image img.mui-transitioning {
		-webkit-transition: -webkit-transform 0.5s ease, opacity 0.5s ease;
		transition: transform 0.5s ease, opacity 0.5s ease;
	}
	@-webkit-keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@-webkit-keyframes fadeOut {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
	@keyframes fadeOut {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
	/*p img {
		max-width: 100%;
		height: auto;
	}*/	
</style>

<style lang="less" scoped>
	.mui-slider{
		wdith: 10rem;
		height: 4.8rem;
		.mui-slider-group{
			height: 100%;
			.mui-slider-item{
				width: 10rem;
				height: 100%;
			}
		}
	}
</style>