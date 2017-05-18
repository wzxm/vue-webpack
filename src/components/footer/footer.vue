<template>
  <footer id="footer">
	<div class="copy-right-text text-center">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<p>Copyright © 2017 
                      <a href="/pages/user.html#/home/foor" rel="home">二胖-王哲关注web前端技术</a>. All rights reserved.<br>Powered by 
                      <a href="/pages/user.html#/home/foor">erpang.com</a>.备案号 <a href="http://icp.chinaz.com/info?q=jspang.com">吉ICP备11005377号-3</a>
                    </p>
				</div>
			</div>
		</div>
	</div><!-- /Copyright Text -->
  </footer>
</template>

<script>
export default {
  name: 'v-footer',
  data () {
    return {
      name: ''
    }
  }
}
</script>

<style lang="scss">
    .text-center {
        text-align: center;
    }
    #footer {
        background-color: #ffffff;
        .container {
            padding: 0 15px;
            margin: 0 auto;
            .row {
                margin: 0 -15px;
            }
        }
        .copy-right-text p {
            margin-bottom: 0;
            padding: 18px 0;
            a {
                text-decoration: none !important;
                color: #e74c3c;
            }
        }
    }
</style>