<template>
	<div class="container text-center mt-40 intro">
		<div class="brand">
			<a href="#!" target="_blank"><img src="../assets/img/logo-pixelagil-indigo.png" class="logo"></a>
		</div>
    <h1 class="text-dark bold">{{msg}}</h1>
    
		<p>I made this Vue 'template' to help me build little projects such as static websites. It comes with Bootstrap 3, JQuery, Awesome Fonts and custom .scss scaffolding.</p>
		<p  class="mb-40">I hope you find it useful.</p>
		<a href="http://www.Pixelagil.com/" class="btn btn-lg btn-theme round" target="_blank">Visit my website</a> or <a href="#!" class="btn btn-lg btn-theme border round border-dark" target="_blank"><i class="fa fa-github"></i> Go to Github</a>
		<p class="mb-40 mt-40">Go <router-link to="/elements">here</router-link> to see bootstrap elements styles</p>
	</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #0068FF;
}
.intro{
  max-width: 800px;
  .brand{
    max-width:200px;
    height:auto;
    margin-right: auto;
    margin-left:auto;
    .logo{
      max-width:100%;
      height: auto;
      display: block;
    }
  }
  .small{
    opacity: .5;
  }
  .btn{
    min-width:165px;
  }
}
</style>
