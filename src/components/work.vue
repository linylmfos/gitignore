<template>
  <div>
    <!--work-experience-->
	<div id="work" class="work">
		<div class="container">
			<h3 class="title">工作经历</h3>
			<div class="work-info">
				<div class="col-md-6 work-left">
					<h4>2016.08 - 2017.11</h4>
				</div>
				<div class="col-md-6 work-right">
					<h5><span class="glyphicon glyphicon-briefcase"> </span> 深圳橙色魔方信息技术有限公司</h5>
					<p>橙色魔方团队最早组建于 2008 年，以金融科技为立足点，囊括了业内具有资深 IT 技术背景及金融高管资历的专家学者，于 2015 年正式成立深圳前海橙色魔方有限公司。 </p>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="work-info">
				<div class="col-md-6 work-right work-right2"">
					<h4>2015.01 - 2016.07 </h4>
				</div>
				<div class="col-md-6 work-left work-left2">
					<h5> 深圳富泰华工业有限公司 <span class="glyphicon glyphicon-briefcase"> </span></h5>
					<p>
					深圳富泰华工业有限公司是一家制造研发的高科技企业，其公司产值位居整个深圳制造业企业产值中的前5名。其客户包含全球著名的科技企业。公司主要制造计算机、通讯设备等。 </p>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="work-info">
				<div class="col-md-6 work-right work-right2"">
					<h4>2014.06 - 2014.12 </h4>
				</div>
				<div class="col-md-6 work-left work-left2">
					<h5> 北京泰科天润科技公司 <span class="glyphicon glyphicon-briefcase"> </span></h5>
					<p>
					泰科天润半导体科技公司是中国碳化硅功率器件产业化的倡导者之一。致力于中国半导体功率器件制造产业的发展，并向全球功率器件消费者提供优质的半导体功率器件产品。 </p>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="work-info">
				<div class="col-md-6 work-left">
					<h4>2012.06 - 2012.09 </h4>
				</div>
				<div class="col-md-6 work-right">
					<h5><span class="glyphicon glyphicon-briefcase"> </span> 西安芯派电子科技公司</h5>
					<p>西安芯派电子科技有限公司是一家专业从事中大功率场效应管(MOSFET，自高压至低压全系列产品)、特殊用途整流器(含快速恢复二极管及肖特基二极管)、桥堆以及电源管理IC开发设计，集研发、生产和销售为一体的高新技术企业。 </p>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>
	<!--//work-experience-->
  </div>
</template>

<script>

</script>
<style>
  /*--work--*/
  .work {
    background: #C7EECE;
  }
  .work-left {
    text-align: right;
    padding: 3em 5em 0 0;
  }
  .work-right {
    border-left: 1px solid #999;
    padding: 2.5em 0 2em 6em;
  }
  .work-info h4 {
    font-size: 1.2em;
    background: darkcyan;
    display: inline-block;
    padding: .6em 1.2em;
    color: #fff;
  position:relative;
  }
  .work-info h4:before {
    width: 0;
    height: 0;
    position: absolute;

    content: '';
    top: 9px;
    right: -14px;
    border-style: solid;
    border-width: 10px 0 10px 16px;
    border-color: transparent transparent transparent rgb(0, 139, 139);
  }
  .work-info h5 {
    font-size: 1.3em;
    color: #FFF;
    margin-bottom: .5em;
    border: 1px solid #008b8b;
    display: inline-block;
    padding: 0 1.2em;
    background: #008b8b;
  }
  .work-info h5 span.glyphicon {
    font-size: 0.9em;
    color: #fff;
    background: #008B8B;
    padding: 1em;
    -webkit-border-radius: 70%;
    -moz-border-radius: 70%;
    border-radius: 70%;
    -webkit-transition: .5s all;
    -moz-transition: .5s all;
    transition: .5s all;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    transform: scale(1);
    -o-transform: scale(1);
    -ms-transform: scale(1);
  }
  .work-right h5 span.glyphicon {
    margin-right: 5em;
    margin-left: -8em;
  }
  .work-left2 h5 span.glyphicon {
    margin-left: 4em;
    margin-right: -7.3em;
    z-index: 9;
  }
  .work-right.work-right2 {
    min-height: 210px;
    float: right;
  }
  .work-right.work-right2 h4:before {
    left: -14px;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  /*-- agileits --*/
    transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  }
  .work-right.work-right2 h4 {
    margin-top: 0.8em;
  }
  .work-info:hover h5 span.glyphicon {
    color: #F7E612;
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
    transform: scale(1.2);
  -o-transform: scale(1.2);
  -ms-transform: scale(1.2);
  }
  /*--//work--*/
  /*---- responsive-design -----*/
  @media(max-width:1366px){
  .about,.work,.education,.skills,.my-projects,.contact {
      padding: 5em 0;
  }
  .work-right.work-right2 {
      min-height: 200px;
  }
  .work-right {
      padding: 2.5em 0 1em 6em;
  }
  }
  @media(max-width:1080px){
  .header-left {
      padding: 0;
  }
  ul.address {
      margin-top: 1em;
  }
  ul.address li ul.address-text li {
      margin-top: 0.8em;
  }
  .about, .work, .education, .skills, .my-projects, .contact {
      padding: 4em 0;
  }
  h3.title {
      font-size: 3.6em;
  	margin-bottom: 0.8em;
  }
  .about-right {
      padding-left: 1em;
  }
  .work-right {
      padding: 2.5em 0 0.5em 6em;
  }
  .resp-tabs-list {
      margin: 0 auto 1.5em;
  }
  .contact-form input[type="text"] {
      width: 48.8%;
  }
  }
  @media(max-width:1024px){
  .header-right h1 {
      font-size: 2.3em;
  }
  }
  @media(max-width:991px){
  .banner-info {
      padding: 3.5em 0;
  }
  .header-left {
      float: left;
      width: 40%;
  }
  .header-right {
      padding-left: 2em;
      float: right;
      width: 60%;
      padding-right: 0;
  }
  .header-right h2 {
      font-size: 1em;
  }
  .header-right h1 {
      font-size: 2em;
  }
  .header-right h6 {
      font-size: 0.9em;
      margin-top: 0.6em;
      letter-spacing: 5px;
  }
  ul.address li ul.address-text li {
      font-size: 1.1em;
  }
  ul.nav.navbar li a {
      padding: 1em 1.5em;
  }
  h3.title {
      font-size: 3.5em;
      margin-bottom: 0.6em;
  }
  .about-left {
      float: left;
      width: 65%;
  	padding-left: 0;
  }
  .about-right {
      float: right;
      width: 35%;
      padding: 0;
  }
  .about-right ul {
      border-width: 3px;
      padding: 1em;
  }
  .work-left {
      padding: 2em 4em 0 0;
      float: left;
      width: 50%;
  }
  .work-right {
      padding: 2em 0 0.5em 5em;
      float: right;
      width: 50%;
  }
  .work-right h5 span.glyphicon {
      margin-right: 5em;
      margin-left: -7.3em;
  }
  .work-info h5 {
      font-size: 1.2em;
      padding: 0 1em;
  }
  .work-left2 h5 span.glyphicon {
      margin-left: 3.4em;
      margin-right: -6.4em;
  }
  .work-right.work-right2 {
      min-height: 220px;
  }
  .bar-grids {
      padding: 0 2em;
      float: left;
      width: 50%;
  }
  .my-projects-grids {
      margin-top: 1em;
      width: 33.33%;
      padding: 0 .5em;
  	float: left;
  }
  .grid .figcaption {
      padding: 1em 1.5em;
  }
  .grid h3 {
      font-size: 1.5em;
  }
  .grid p {
      letter-spacing: 1px;
  }
  .contact-left iframe {
      width: 100%;
      min-height: 20em;
      border: none;
  }
  .contact-right {
      margin-top: 2em;
  }
  .contact-form input[type="text"].email {
      margin: 2em 0 1em 0.5em;
  }
  }
  @media(max-width:800px){
  .about, .work, .education, .skills, .my-projects, .contact {
      padding: 3em 0;
  }
  h3.title {
      font-size: 3.3em;
      margin-bottom: 0.6em;
  }
  #swipebox-title {
      font-size: 0.9em;
  }
  }
  @media(max-width:768px){
  .banner-info {
      padding: 3em 0;
  }
  }
  @media(max-width:767px){
  .navbar-toggle {
      float: none;
      width: 100%;
      text-align: center;
      margin: 0;
      font-size: 1.3em;
      color: #fff;
  }
  .nav > li {
      display: block;
  }
  ul.nav.navbar li a {
      padding: 0.8em 1.5em;
      font-size: 1.1em;
  }
  }
  @media(max-width:640px){
  .header-right h2 {
      font-size: 0.9em;
  }
  .header-right h2:before {
      bottom: -7px;
      left: 9px;
      border-width: 7px 7px 0 7px;
  }
  ul.address li ul.address-text li {
      font-size: 1em;
  }
  .header-right h6 {
      font-size: 0.85em;
  }
  ul.address {
      margin-top: 0.5em;
  }
  .banner-info {
      padding: 2em 0;
  }
  .about, .work, .education, .skills, .my-projects, .contact {
      padding: 2em 0;
  }
  h3.title {
      font-size: 2.8em;
      margin-bottom: 0.5em;
  }
  .about-left {
      float: none;
      width: 100%;
      padding: 0;
  }
  .about-right {
      float: none;
      width: 100%;
      margin-top: 1em;
  }
  .work-right.work-right2 {
      min-height: 235px;
  }
  .bar-grids {
      padding: 0 1.5em;
  }
  .bar-grids h6 {
      font-size: 1em;
  }
  .progress {
      margin-bottom: 2em;
  }
  .resp-tab-item {
      font-size: 1.1em;
      padding: 0.6em 2em;
  }
  .contact-left iframe {
      min-height: 17em;
  }
  .contact-left {
      padding: 0;
  }
  .contact-right {
      margin-top: 1em;
  	padding: 0;
  }
  .contact-form input[type="text"] {
      padding: .6em 1em;
  }
  .footer {
      padding: 1.5em 0;
  }
  .footer .followus{
      margin-bottom: 6px;
  }
  }
  @media(max-width:480px){
      .header-left {
          float: none;
          width: 60%;
          margin: 0 auto;
      }
      .header-right {
          float: none;
          width: 100%;
      }
      h3.title {
          font-size: 2.5em;
      }
      p {
          font-size: 0.9em;
      }
      .work-info h4 {
          font-size: 1em;
      }
      .work-info h4:before {
          right: -10px;
          border-width: 7px 0 7px 10px;
      }
      .work-info h5 {
          font-size: 1em;
      }
      .work-left {
          padding: 1em 3em 0 0;
      }
      .work-right {
          padding: 1em 0 0.5em 3em;
      }
      .work-right h5 span.glyphicon {
          margin-right: 3em;
          margin-left: -6em;
      }
      .work-right.work-right2 h4:before {
          left: -10px;
      }
      .work-left2 h5 span.glyphicon {
          margin-left: 3em;
          margin-right: -6.2em;
      }
      .bar-grids {
          padding: 0 1em;
          float: none;
          width: 100%;
      }
      .progress {
          margin-bottom: 1.5em;
      }
      .my-projects-grids {
          width: 50%;
      }
      .grid .figcaption {
          padding: 0.5em 1em;
      }
      .grid p {
          letter-spacing: 0px;
          padding: .5em 0 0;
      }
      .contact-form input[type="submit"] {
          font-size: 1em;
      }
      .footer p {
          font-size: 1em;
      }
      .footer .followus{
          margin-bottom: 4px;
      }
      .footer .followus a {
          margin: 0 8px 4px 8px;
          font-size: 1.2em;
      }
  }
  @media(max-width:414px){
  .work-right.work-right2 {
      min-height: 260px;
  }
  .resp-tab-item {
      font-size: 1em;
      padding: 0.6em 1.3em;
  }
  .my-projects-grids {
      width: 100%;
      float: none;
      padding: 0;
  }
  .contact-form input[type="text"] {
      width: 100%;
      margin-top: 1em;
  }
  .contact-form input[type="text"].email {
      margin: 1em 0 0 0;
  }
  .address-left {
      width: 45%;
  }
  .address-right {
      width: 42%;
  }
  .contact-form textarea {
      min-height: 8em;
  }
  }
  @media(max-width:375px){
  .header-right {
      padding-left: 0;
  }
  .work-left {
      width: 100%;
      text-align: left;
  	padding: 1em 0 0 0;
  }
  .work-right {
      padding: 1em 0 0.5em 2em;
      width: 95%;
  	border: none;
  }
  .work-right h5 span.glyphicon {
      margin-right: 2em;
      margin-left: -5em;
  }
  .work-right.work-right2 {
      min-height: inherit;
      padding: 0;
  }
  .resp-tab-item {
      padding: 0.6em 1em;
  }
  .resp-tab-active:before {
      bottom: -5px;
      left: 37%;
      border-width: 5px 5px 0 5px;
  }
  .resp-tabs-list {
      margin: 0 auto 0.5em;
  }
  .address-left,.address-right{
      width: 100%;
      float: none;
  }
  .contact-left iframe {
      min-height: 13em;
  }
  .address-left:after {
      right: 0;
      width: 0px;
  }
  .contact-form input[type="submit"] {
      font-size: 0.9em;
  }
  }
  @media(max-width:320px){
  .banner-info {
      padding: 1em 0;
  }
  .header-left {
      width: 50%;
  }
  .header-right h1 {
      font-size: 1.8em;
  }
  .header-right h6 {
      letter-spacing: 1px;
  }
  ul.address li ul.address-text li {
      font-size: 0.9em;
  }
  ul.address li ul.address-text li:nth-child(1) {
      width: 25%;
  }
  ul.nav.navbar li a {
      padding: 0.6em 1.5em;
      font-size: 1em;
  }
  .about, .work, .education, .skills, .my-projects, .contact {
      padding: 1em 0;
  }
  h3.title {
      font-size: 2em;
  }
  .progress {
      height: 7px;
  }
  .bar-grids {
      padding: 0;
  }
  .bar-grids h6 {
      font-size: 0.9em;
  }
  .resp-tab-item {
      padding: 0.6em 1em;
      font-size: 0.9em;
  }
  .contact-form input[type="text"] {
      font-size: 0.9em;
  }
  .contact-form textarea {
      font-size: 0.9em;
  }

  }
  /*--//responsive-design---*/

</style>
