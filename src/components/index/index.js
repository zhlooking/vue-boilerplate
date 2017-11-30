import template from './index.html';
import button from 'app/components/button/button'
import list from 'app/components/list/list'

export default {
  name: 'vg-index',
  template,
  components: {
    [button.name]: button,
    [list.name]: list,
  },
  data: () => ({
    items: ['Foo', 'Bar', 'Baz'],
  })
};
