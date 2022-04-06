
import { defineAsyncComponent, defineComponent, reactive, ref, Ref, watch, createApp, onMounted, onUpdated} from 'vue';
import { getCurrentInstance } from 'vue'
import { Constants } from '@foo/mylib';

export default defineComponent({
  name: 'App',

  setup() {
    console.log(Constants.TEST_STRING);
  },
})


