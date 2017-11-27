import Vue from 'vue'
import Router from 'vue-router'
const InvitePrize = r => require.ensure([], () => r(require('@/page/InvitePrize')), 'InvitePrize')
const IncomeDetail = r => require.ensure([], () => r(require('@/page/IncomeDetail')), 'IncomeDetail')
const IncomeDetailFriend = r => require.ensure([], () => r(require('@/page/IncomeDetailFriend')), 'IncomeDetailFriend')
const InviteDetail = r => require.ensure([], () => r(require('@/page/InviteDetail')), 'InviteDetail')
const InviteDetailFriend = r => require.ensure([], () => r(require('@/page/InviteDetailFriend')), 'InviteDetailFriend')
const EvaluationUser = r => require.ensure([], () => r(require('@/page/EvaluationUser')), 'EvaluationUser')

Vue.use(Router)

export default new Router({
  routes: [
  /*dengpeng router*/
  	{
	  path: '/',
	  name: 'InvitePrize',
	  component: InvitePrize
	},
	{
	  path: '/income',
	  name: 'IncomeDetail',
	  component: IncomeDetail,
	  props: (route) => ({moneyArr: route.query.moneyArr})
	},
	{
	  path: '/income/friend',
	  name: 'IncomeDetailFriend',
	  component: IncomeDetailFriend,
	  props: true
	},
	{
	  path: '/invite',
	  name: 'InviteDetail',
	  component: InviteDetail
	},
	{
	  path: '/invite/friend',
	  name: 'InviteDetailFriend',
	  component: InviteDetailFriend,
	  props: true
	},
	{
	  path: '/evaluser',
	  name: 'EvaluationUser',
	  component: EvaluationUser
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
    }
    
  ]
})
