import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = (app) => ({
  path: '/sign/login',
  title: 'Login',
  /*
    dynamic(app, model, component )
* 第一个参数为挂载的对象，就是你要将这个router挂载到哪个实例上。
* 第二个参数为这个router所需要的model。
* 第三个参数为这个router的组件
  */ 
  component: dynamicWrapper(app, [import('./model')], () => import('./components'))
});

export default (app) => createRoute(app, routesConfig);
