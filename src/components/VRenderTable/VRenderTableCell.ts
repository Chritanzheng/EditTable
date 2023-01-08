/**
 * 通过传入render函数实现自定义组件
 */
 import { defineComponent } from 'vue';
 export default defineComponent({
   name: 'BaseTableCell',
   props: {
     render: {
       type: Function,
       required: true,
     },
     val: {
       type: Object
     },
   },
   setup(props) {
     return () => props.render(props.val);
   },
 });