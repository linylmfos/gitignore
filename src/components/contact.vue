<template>
  <div>
    <!--contact -->
    <div class="welcome contact" id="contact">
      <div class="container">
        <h3 class="title">联系方式</h3>
        <div class="contact-row">
          <div class="col-md-6 contact-left">
            <iframe src="http://map.sogou.com/#c=12696750,2573468.75,12"></iframe>
          </div>
          <div class="col-md-6 contact-right clearfix">
            <div class="address-left">
              <p><b>广东省深圳市宝安机场附近</b><br> <b>中国</b></p>
            </div>
            <div class="address-right">
              <p><b>手机号码 :</b>  +86 184 7365 4782</p>
              <p><b>E-mail : </b><a href="mailto:18476354782@sina.cn"> 18476354782@sina.cn </a></p>
            </div>
            <div class="clearfix"></div>
            <div class="contact-form">
              <form action="form.php" method="post">
                <input class="name" type="text" name="Name" placeholder="姓名" required="" autocomplete="off">
                <input class="email" name="Email" type="text" placeholder="邮箱" required="" >
                <input class="phone" name="phone" type="text" placeholder="手机号码" required="">
                <textarea name="Message" placeholder="内容" required=""></textarea>
                <input type="submit" value="提交" >
              </form>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <!--//contact -->
  </div>
</template>

<script>

</script>
<style>
   @import '../assets/css/style.css'
    /*--contact--*/
    .contact{
    background:#C7EECE;
    }
    .contact-left iframe {
      width: 100%;
      min-height: 29.5em;
      border: none;
    }
    .contact-form h5 {
      font-size: 2em;
      color: #333;
    }
    .address-left {
      float: left;
      width: 41%;
    position: relative;
    }
    .address-right {
      float: right;
      width: 46%;
    }
    .contact p {
      color: #000;
      font-weight: 300;
    }
    .contact p a {
      color: #000;
    }
    .contact p a:hover{
      color: #F7E612;
    }
    .address-left:after {
      content: '';
      width: 1px;
      height: 100%;
      background: #ccc;
      position: absolute;
      top: 0;
      right: -17px;
    }
    .contact-form input[type="text"] {
      width: 100%;
      margin-left: 0 !important;
      color: #000;
      background: none;
      outline: none;
      font-size: 1em;
      padding: .8em 1em;
      border: 1px solid #8C8C8C;
      -webkit-appearance: none;
      display: inline-block;
    }
    .contact-form input[type="text"]:focus {
      box-shadow: 0 0 10px #03a9f4;
    }

    .contact-form input[type="text"].email {
      margin: 1em 0 1em 0;
    }
    .contact-form input[type="text"].phone {
      width: 100%;
      margin-bottom: 1em;
    }
    .contact-form textarea {
      width: 100%;
      background: none;
      color: #000;
      font-size: 1em;
      outline: none;
      padding: .8em 1em;
      border: 1px solid #8C8C8C;
      min-height: 10em;
      -webkit-appearance: none;
    }
    .contact-form textarea:focus {
      box-shadow: 0 0 10px #03a9f4;
    }
    .contact-form input[type="submit"] {
      outline: none;
      color: #fff;
      padding: 0.6em 1em;
      font-size: 1.1em;
      margin: 1em 0 0 0;
      -webkit-appearance: none;
      background: #008B8B;
      border: 2px solid #008B8B;
      transition: 0.5s all;
      -webkit-transition: 0.5s all;
      transition: 0.5s all;
      -moz-transition: 0.5s all;
      width: 100%;
    }
    .contact-form input[type="submit"]:hover {
      background: none;
      color: #008B8B;
    }
    ::-webkit-input-placeholder {
    color:#000 !important;
    }

    :-moz-placeholder { /* Firefox 18- */
    color:#000 !important;
    }

    ::-moz-placeholder {  /* Firefox 19+ */
    color:#000 !important;
    }

    :-ms-input-placeholder {
    color:#000 !important;
    }
    /*--//contact--*/
</style>
