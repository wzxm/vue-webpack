// vue
import Vue from 'vue';
import { hello } from '../component/hello.vue';

require('./index.scss');

let vm = new Vue({
	el: "#example",
	data: {
		username: 'wangzhe',
		age: 27
	},
	components: {
		hello: hello
	}
});

console.log(Vue);