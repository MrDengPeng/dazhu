<template>
  <div id="app">
  	<transition :name="transitionName" mode="out-in">
  		<keep-alive>
  			<router-view/>
  		</keep-alive>
  	</transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
  	return {
  		transitionName: 'slide-right'
  	}
  },
  watch: {
	  '$route' (to, from) {
	    const toDepth = to.path.split('/').length
	    const fromDepth = from.path.split('/').length
	    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
	  }
	}
}
</script>

<style>
  @import "assets/style/common";
  #app{
    width: 100%;
    height: 100%;
    background-color: #F6F6F6;
  }
  .router-fade-enter-active, .router-fade-leave-active {
	  	transition: all .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	  	left: -100%;
	}
</style>
