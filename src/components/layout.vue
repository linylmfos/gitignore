<template>
  <div>
    <!--app-header-->
    <div class="app-header">
      <div id="home" class="banner">
    		<div class="banner-info">
    			<div class="container">
    				<div class="col-md-4 col-xs-0 header-left">
    					<!-- <img src="images/img1.jpg" alt=""/> -->
    				</div>
    				<div class="col-md-8  col-xs-12 header-left">
    					<h2>Hi <i class="fa fa-smile-o"></i> </h2>
    					<h2>我是Linden </h2>
    					<h4>web开发者 </h4>
    					<ul class="address">
    						<li>
    							<ul class="address-text">
    								<li><b>生日</b></li>
    								<li>1988-08-08 </li>
    							</ul>
    						</li>
    						<li>
    							<ul class="address-text">
    								<li><b>手机</b></li>
    								<li>184 7635 4782</li>
    							</ul>
    						</li>
    						<li>
    							<ul class="address-text">
    								<li><b>坐标</b></li>
    								<li>深圳市宝安机场</li>
    							</ul>
    						</li>
    						<li>
    							<ul class="address-text">
    								<li><b>邮箱</b></li>
    								<li><a href="mailto:iqianbaidu@163.com">iqianbaidu@163.com</a></li>
    							</ul>
    						</li>
    						<li>
    							<ul class="address-text">
    								<li><b>主页</b></li>
    								<li><a href="http://www.linden.site">www.linden.site</a></li>
    							</ul>
    						</li>
    					</ul>
    				</div>
    				<div class="clearfix"> </div>
    			</div>
    		</div>
    	</div>
    </div>
    <!--//app-header-->
    <div class="app-content">
      <keep-alive>
        <router-view name="nav"></router-view>
      </keep-alive>
      <keep-alive>
        <router-view name="about"></router-view>
      </keep-alive>

      <keep-alive>
        <router-view name="work"></router-view>
      </keep-alive>

      <keep-alive>
        <router-view name="education"></router-view>
      </keep-alive>

      <keep-alive>
        <router-view name="skills"></router-view>
      </keep-alive>

      <keep-alive>
        <router-view name="project"></router-view>
      </keep-alive>

      <keep-alive>
        <router-view name="contact"></router-view>
      </keep-alive>

      <keep-alive>
        <router-view name="aside"></router-view>
      </keep-alive>
    </div>
    <div class="app-footer">
       <div class="footer">
         <div class="container" style="width: 50%">
           <div class="followus row">
                    <a class="followus-weibo fa fa-weibo fa-3x" href="//weibo.com/u/6167740991"  target="_blank" title="新浪微博"></a>
                    <a class="followus-github fa fa-github fa-3x" href="https://github.com/linylmfos"  target="_blank" title="GitHub"></a>
           </div>
           <p> Copyright © 2016-2020. All rights reserved by Linden </p>
         </div>
       </div>
    </div>
  </div>
</template>

<script>

</script>
<style>
    /*--baner--*/
    .banner {
    background:url(../assets/images/a.jpg)no-repeat center 0px;
    -webkit-background-size:cover;
    background-size:cover;
    -moz-background-size:cover;
    position: relative;
    }
    .banner-info{
    background: url(data:image/png;base64,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)repeat 0px 0px;
    padding: 4em 0;
    }
    .header-left img {
    width: 100%;
    border: 5px solid rgba(255, 255, 255, 0.68);
    }
    .header-right {
    padding-left: 3em;
    }
    .header-right h1 {
    font-size: 2.5em;
    color: #fff;
    margin: 0.5em 0 0;
    }
    .header-right h2 {
    font-size: 1.2em;
    color: #000;
    background: #F3E000;
    display: inline-block;
    padding: .5em 1.5em;
    position: relative;
    }
    .header-right h2:before {
    width: 0;
    height: 0;
    position: absolute;
    content: '';
    bottom: -9px;
    left: 12px;
    border-style: solid;
    border-width: 10px 10px 0 10px;
    border-color: #F3E000 transparent transparent transparent;
    }
    .header-right h6 {
    font-size: 1em;
    color: #C7C7C7;
    margin-top: 0.8em;
    letter-spacing: 6px;
    }
    ul.address {
    margin-top: 2em;
    border-top: 1px solid #AFAFAF;
    padding-top: 0.5em;
    }
    ul.address li {
    display: block;
    }
    ul.address li ul.address-text li {
    display: inline-block;
    font-size: 1.2em;
    color: #fff;
    margin-top: 1em;
    font-weight: 100;
    }
    ul.address li ul.address-text li:nth-child(1){
    width: 20%;
    }
    ul.address li ul.address-text li a {
    color: #fff;
    text-decoration:none;
    }
    ul.address li ul.address-text li a:hover{
    color: #0FF;
    }
  /*--//banner-top--*/

      /*--footer--*/
    .footer {
        padding: 2em 0;
        text-align: center;
        background: #eee;
    }
    .footer p {
        color: #000;
    	font-size: 1.1em;
    }
    .footer p a{
        color: #F7E612;
    }
    .footer p a:hover{
        color: #fff;
    }
    .footer .followus{
        margin-bottom: 20px;
    }
    .footer .followus a{
        display: inline-block;
    }
    .footer .followus a {
        margin: 0px 20px 10px 20px;
        color: rgba(0,139,139,.8);
    }
    /*.footer .followus a:hover{
        scale(1.2,1.2);
        -moz-transform:scale(1.2,1.2);
       -webkit-transform:scale(1.2,1.2);
       -o-transform:scale(1.2,1.2);
    }*/
    .footer a.weixin {
        position: relative;
    }
    .footer .weixin img {
      position: absolute;
      z-index: 99;
      top: -84px;
      right: -28px;
      width: 8rem;
      max-width: none;
      height: 7.5rem;
      transform: scale(0);
      transform-origin: top right;
      opacity: 0;
      border: .3125rem solid #0085ba;
      border-radius: .25rem;
      -webkit-transition: all .4s ease-in-out;
      -o-transition: all .4s ease-in-out;
      transition: all .4s ease-in-out;
    }
    .footer .weixin:hover img {
        transform: scale(1);
        opacity: 1;
    }
    .footer a:link,a:visited{
        text-decoration: none;
    }
    /*--//footer--*/
</style>
