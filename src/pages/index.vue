<template>
  <div>
      <!--top-nav-->
    	<div class="top-nav wow">
    		<div class="container">
    			<div class="navbar-header logo">
    				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
    					Menu
    				</button>
    			</div>
    			<!-- Collect the nav links, forms, and other content for toggling -->
    			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    				<div class="menu">
    					<ul class="nav navbar">
    						<li><a href="#about" class="scroll">关于我</a></li>
    						<li><a href="#work" class="scroll">工作经历</a></li>
    						<li><a href="#education" class="scroll">教育经历</a></li>
    						<li><a href="#skills" class="scroll">个人技能</a></li>
    						<li><a href="#projects" class="scroll">我的项目</a></li>
    						<li><a href="#contact" class="scroll">联系方式</a></li>
    					</ul>
    					<div class="clearfix"> </div>
    				</div>
    			</div>
    		</div>
    	</div>
    	<!--//top-nav-->
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*--top-nav--*/
  .top-nav {
  background: #008B8B;
  }
  .nav > li {
  display: inline-block;
  }
  ul.nav.navbar {
  margin: 0;
  text-align: center;
  }
  ul.nav.navbar li a {
  color: #fff;
  padding: 1em 2em;
  font-size: 1.2em;
  font-family: 'Overlock', cursive;
  }
  ul.nav.navbar li a:hover,ul.nav.navbar li a.active,ul.nav.navbar li a:focus{
  color: #008B8B;
  background: #fff;
  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  transform: scale(0.8);
  -o-transform: scale(0.8);
  -ms-transform: scale(0.8);
  }
  /*--//top-nav--*/
</style>
