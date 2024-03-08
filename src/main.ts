import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
import VConsole from 'vconsole';
import '@/style/index.scss';
import 'vant/lib/index.css';
// 按需加载组件
import {
  List, Cell, Empty, Divider, Swipe,
  SwipeItem, Skeleton, Image as VanImage,
  Lazyload, Popup, Toast, Field, CellGroup,
  Button, Tab, Tabs, Icon, RadioGroup, Radio, ActionSheet,
  Collapse, CollapseItem, Search, Uploader, ConfigProvider, Sticky, Dialog,
  PullRefresh, Loading, Overlay, Picker, Cascader
} from 'vant';

// 加载vconsole
new VConsole();

const app = createApp(App);

app.use(Empty).use(Divider).use(Swipe).use(SwipeItem)
.use(List).use(Cell).use(Skeleton).use(Lazyload)
.use(VanImage).use(Popup).use(Toast).use(Field).use(CellGroup).use(Button).use(Tab).use(Tabs)
.use(Icon).use(RadioGroup).use(Radio).use(ActionSheet).use(Collapse).use(CollapseItem).use(Search)
.use(Uploader).use(ConfigProvider).use(Sticky).use(Dialog).use(PullRefresh).use(Loading).use(Overlay).use(Picker).use(Cascader)
app.use(router).mount('#app')
