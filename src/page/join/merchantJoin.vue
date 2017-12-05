<template>
	<div class="join">
		<ul class="info-list">
			<li class="mui-input-row">
				<label>姓名</label>
				<input type="text" class="mui-input-clear" placeholder="请填写业主或授权人名称" v-model="merchantInfo.uName">
			</li>
			<li class="mui-input-row">
				<label>手机号</label>
				<input type="tel" class="mui-input-clear" placeholder="请填写您的手机号码" v-model="merchantInfo.phone">
			</li>
			<li class="mui-input-row">
				<label>邮箱</label>
				<input type="email" class="mui-input-clear" placeholder="请填写您的邮箱"  v-model="merchantInfo.email">
			</li>
			<li>
				<span>加盟类型</span>
				<div class="arrow-item" @click="chooseType">
					{{ merchantInfo.joinType }}
					<span class="arrow-link"></span>
				</div>
			</li>
			<li>
				<span>所在地区</span>
				<div class="arrow-item" @click="showPicker">
					{{ merchantInfo.location }}
					<span class="arrow-link"></span>
				</div>
			</li>
			<li class="addr">
				<textarea placeholder="请输入详细地址" v-model="merchantInfo.addr"></textarea>
			</li>
		</ul>
		<div class="commit-btn" @click="commit">
			提交
		</div>
		<!-- 加盟类型底部弹出框 -->
		<div id="join-type" class="mui-popover mui-popover-action mui-popover-bottom">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell" @click="typeConfirm('酒店加盟')">
					<a href="#">酒店加盟</a>
				</li>
				<li class="mui-table-view-cell" @click="typeConfirm('休闲娱乐加盟')">
					<a href="#">休闲娱乐加盟</a>
				</li>
			</ul>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell" @click="closeType">
					<a href="#delete" style="color: #ff7000">取消</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	import {cityData} from 'static/js/city.data-3'
	import {picker} from 'assets/js/mui.picker.min'
	import {popPicker} from 'assets/js/mui.poppicker'
	export default{
		mounted(){

		},
		data(){
			return{
				merchantInfo:{
					uName:'',
					phone:'',
					email:'',
					joinType:'请选择加盟类型',
					location:'请填写所在地区',
					locationNum:'',
					addr:''
				}
			}
		},
		methods:{
			//提交按钮
			commit(){
				this.$get('groupMessage/addGroupMessage',
						{
							userName:this.merchantInfo.uName,
							userMobile:this.merchantInfo.phone,
							userEmail:this.merchantInfo.email,
							groupType:this.merchantInfo.joinType,
							areaNumber:this.merchantInfo.locationNum,
							addressDetail:this.merchantInfo.addr
						})
				if(this.merchantInfo.uName == ''){
					console.log("请输入姓名");
					return
				}else if(this.merchantInfo.phone == ''){
					console.log("请输入手机号码");
					return
				}else if(this.merchantInfo.email == ''){
					console.log("请输入邮箱地址");
					return
				}else if(this.merchantInfo.joinType == '请选择加盟类型'){
					console.log("请选择加盟类型");
					return
				}else if(this.merchantInfo.location == '请填写所在地区'){
					console.log("请选择所在地区");
					return
				}else if(this.merchantInfo.addr == ''){
					console.log("请填写详细地址");
					return
				}
				console.log(this.merchantInfo);
			},
			//弹出加盟类型选择框
			chooseType(){
				// 初始化mui
				this.$mui.init({
					swipeBack:true //启用右滑关闭功能
				});
				this.$mui('#join-type').popover('toggle');
			},
			//选择加盟类型——取消按钮
			closeType(){
				this.$mui('#join-type').popover('toggle');
			},
			//选择加盟类型——确认选择类型
			typeConfirm(type){
				this.$set(this.merchantInfo,'joinType',type);
				this.$mui('#join-type').popover('toggle');
			},
			//弹出地区选择器
			showPicker(){
				var areaPicker = new this.$mui.PopPicker({
				    layer: 3
				});
				let self = this;
				areaPicker.setData(cityData);
				areaPicker.show(function(items) {
					if(items[0].children.length == 1){
						self.$set(self.merchantInfo,'location',items[1].text + items[2].text);
					}else{
						self.$set(self.merchantInfo,'location',items[0].text + items[1].text + items[2].text);
					}
					self.$set(self.merchantInfo,'locationNum',items[2].value);
				});
			}

		}
	}
</script>
<style type="text/css">
	@import "~assets/style/mui.picker";
	@import "~assets/style/mui.poppicker";
	.mui-poppicker-header {
	    background: #fff;
	}
	.mui-poppicker-header .mui-btn {
		font-size: 0.426667rem;
		border: none;
		/*padding: 5px 10px;*/
	}
	.mui-poppicker-header .mui-poppicker-btn-ok{
		background: #fff;
		color: #ff7000;
	}
	.mui-poppicker-header .mui-poppicker-btn-cancel{
		color: #afafaf;
	}
	.mui-poppicker .mui-picker{
		background-color: #fff;
	}

	.mui-pciker-list li{
		font-size: 0.373333rem;
    	color: #afafaf;
	}
	.mui-pciker-list li.highlight {
		font-size: 0.426667rem;
    	color: #333;
	}
</style>
<style type="text/less" lang="less" scoped>
	@import "~assets/style/mixin";
	.join{
		ul.info-list{
			background: #fff;
			padding-left: 0.4rem;
			li{
				.size(100%,1.2rem);
				.flex(flex-start,center);
				border-top: 1px solid #ddd;
				&:first-child{
					border: none;
				}
				label,
				span{
					.font(28);
					color: @font3;
					padding-left: 0;
				}
				input{
					.font(28);
					text-align: right;
					color: #afafaf;
					&::-webkit-input-placeholder { /* WebKit browsers */
						color:#afafaf;
					};
					&:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
						color:#afafaf;
					};
					&::-moz-placeholder { /* Mozilla Firefox 19+ */
						color:#afafaf;
					};
				}
				&>div{
					text-align: right;
					padding-right: 0.4rem;
					color: #afafaf;
					flex: 1;
					&.arrow-item{
						.arrow-item();
						color: #afafaf;
						.font(28);
					}
					
				}
				&.addr{
					height: 1.6rem;
					&>textarea{
						.font(28);
						border: none;
						margin-top: 0.266667rem;
						padding: 0 0.2rem 0 0;
						align-self: flex-start;
						text-align: left;
						&::-webkit-input-placeholder { /* WebKit browsers */
							color:#afafaf;
						};
						&:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
							color:#afafaf;
						};
						&::-moz-placeholder { /* Mozilla Firefox 19+ */
							color:#afafaf;
						};
					}
				}

			}
		}	
		.commit-btn{
			position: fixed;
			bottom: 0;
			.font(34);
			.linear-btn(100%,1.173333rem);
		}

		.mui-table-view-cell{
			a{
				color: @font3;
				.font(32);	
			}
			
		}
		
	}
</style>