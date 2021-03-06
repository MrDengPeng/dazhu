import Vue from 'vue'
import Router from 'vue-router'
const InvitePrize = () => import('@/page/InvitePrize')
const IncomeDetail = () => import('@/page/IncomeDetail')
//const InvitePrize = r => require.ensure([], () => r(require('@/page/InvitePrize')), 'InvitePrize')
//const IncomeDetail = r => require.ensure([], () => r(require('@/page/IncomeDetail')), 'IncomeDetail')
const IncomeDetailFriend = r => require.ensure([], () => r(require('@/page/IncomeDetailFriend')), 'IncomeDetailFriend')
const InviteDetail = r => require.ensure([], () => r(require('@/page/InviteDetail')), 'InviteDetail')
const InviteDetailFriend = r => require.ensure([], () => r(require('@/page/InviteDetailFriend')), 'InviteDetailFriend')
const EvaluationUser = r => require.ensure([], () => r(require('@/page/EvaluationUser')), 'EvaluationUser')
const EvaluationMy = r => require.ensure([], () => r(require('@/page/EvaluationMy')), 'EvaluationMy')
const EvaluationMyDetail = r => require.ensure([], () => r(require('@/page/EvaluationMyDetail')), 'EvaluationMyDetail')
const CouponMy = r => require.ensure([], () => r(require('@/page/CouponMy')), 'CouponMy')
const UseDetail = r => require.ensure([], () => r(require('@/page/UseDetail')), 'UseDetail')
const UnlockCode = r => require.ensure([], () => r(require('@/page/UnlockCode')), 'UnlockCode')

Vue.use(Router)

export default new Router({

  routes: [
  /*dengpeng router*/
  {
	  path: '',
	  redirect: '/prize'	
  },
  {
	  path: '/prize',
	  name: 'InvitePrize',
	  component: InvitePrize,
	  children: [
	  	{
	  		path: 'income/:moneyArr',
	  		component: IncomeDetail,
	  		props: true,
	  		children: [
	  			{
					  path: 'friend',
					  name: 'IncomeDetailFriend',
					  component: IncomeDetailFriend,
					  props: true
					}
	  		]
	  	},
	  	{
	  		path: 'invite',
	  		component: InviteDetail,
	  		children: [
	  			{
					  path: 'friend',
					  name: 'InviteDetailFriend',
					  component: InviteDetailFriend,
					  props: true
					}
	  		]
	  	}
	  	
	  ]
	},
	{
	  path: '/evaluser',
	  name: 'EvaluationUser',
	  component: EvaluationUser
	},
	{
	  path: '/evalmy',
	  name: 'EvaluationMy',
	  component: EvaluationMy,
	  children: [
	  	{
			  path: 'detail',
			  name: 'EvaluationMyDetail',
			  component: EvaluationMyDetail
			}
	  ]
	},
	{
	  path: '/coupon',
	  name: 'CouponMy',
	  component: CouponMy
	},
	{
	  path: '/coupon/use',
	  name: 'UseDetail',
	  component: UseDetail
	},
	{
	  path: '/unlock',
	  name: 'UnlockCode',
	  component: UnlockCode
	},
	/*xuqijun router*/
    {
      name: 'hotelDetail',
      path: '/hotelDetail',
      component: resolve => require(['src/page/hotel/index.vue'], resolve)
    },
    {
      name: 'roomDetail',
            path: '/hotelDetail/room',
      component: resolve => require(['src/components/roomDetail.vue'], resolve)
    },
    {
      name: 'order',
      path: '/order',
      component: resolve => require(['src/page/order/index.vue'], resolve),
      children:[
        {
          name: 'orderPrint',
          path: '/order/print',
          component: resolve => require(['src/page/order/print.vue'], resolve)
        }
      ]
    },    
    {
      name: 'join',
      path: '/join',
      component: resolve => require(['src/page/join/merchantJoin.vue'], resolve)
    },
    {
      name: 'info',
      path: '/personal/info',
      component: resolve => require(['src/page/personal/info.vue'], resolve)
    },
    {
      name: 'changeEmail',
      path: '/personal/email',
      component: resolve => require(['src/page/personal/changeEmail.vue'], resolve)
    },
    {
      name: 'changeName',
      path: '/personal/name',
      component: resolve => require(['src/page/personal/changeName.vue'], resolve)
    },
    {
      name: 'hitory',
      path: '/personal/history',
      component: resolve => require(['src/page/personal/history.vue'], resolve)
    },
    {
      name: 'collect',
      path: '/personal/collect',
      component: resolve => require(['src/page/personal/collect.vue'], resolve)
    },
    {
      name: 'feedback',
      path: '/personal/feedback',
      component: resolve => require(['src/page/personal/feedback.vue'], resolve)
    }   
  ]
})
