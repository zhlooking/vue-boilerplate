import Vue from 'vue';
import hello from 'app/components/hello/hello';

new Vue({
  render: (h) => h(hello)
}).$mount('#app');
