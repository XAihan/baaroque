import {
	createRouter,
	// createWebHashHistory,
	createWebHistory,
} from 'vue-router';

export const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/pages/home.vue'),
		meta: {
			title: '首页',
		},
	},
  {
		path: '/test1',
		name: 'test1',
		component: () => import('@/pages/test1/index.vue'),
		meta: {
			title: '测试1',
		},
  },
  {
		path: '/test2',
		name: 'test2',
		component: () => import('@/pages/test2/index.vue'),
		meta: {
			title: '测试2',
		},
  },
  {
		path: '/test3',
		name: 'test3',
		component: () => import('@/pages/test3/index.vue'),
		meta: {
			title: '测试3',
		},
  },
  {
		path: '/test4',
		name: 'test4',
		component: () => import('@/pages/test4/index.vue'),
		meta: {
			title: '测试4',
		},
  },
];

const router = createRouter({
	// hash模式：createWebHashHistory，
	// history模式：createWebHistory
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	// 设置页面标题 title contractType 签约页合同类型
	document.title = to.query[to.meta.titleMapping] || to.query.contractType || to.meta.title || '好分期';
	// 判断页面上是否有query参数
	if (Object.keys(to.query).length) {
		console.log('处理链接参数');
		for (const key in to.query) {
			to.query[key] = decodeURIComponent(to.query[key]);
		}
	}
	// document.title = '\u200E'
	next();
});

export default router;
