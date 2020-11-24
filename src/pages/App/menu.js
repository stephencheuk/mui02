//import IconHome from '@material-ui/icons/Home';

const menu = [
    { name: 'Dashboard',     path: '/Dashboard', component: require('../Dashboard').default },

////    { name: 'Home',        path: '/',        icon: <IconHome/> },
////    { name: 'Ordering',    path: '/ordering' },
////    { name: 'GitStudy',    path: '/gitstudy' },
//
//    { name: 'TGS1',        path: '/tgs1', component: require('../TGS1/loader').default },
//
//    { name: 'Products',    path: '/products', component: require('../Products/loader').default },
//
//    { name: 'DataTable Demo',    path: '/datatable', component: require('../DataTable/ReactTableDemo/loader').default },
//
////    { name: 'Books',         path: '/books', component: require('../books').default },
//
//    { name: 'Password',    path: '/pwdmanager' },
//
////    { name: 'User',        path: '/user' },
////    { name: 'Setting',     path: '/setting' },
////    { name: 'Maintenance', path: '/maintenance' },
////    { name: 'Chats',       path: '/chats' },
////    { name: 'Resolution',  path: '/resolution' },
//
//    { name: 'Mongo',       path: '/mongo', component: require('../mongo').default },
//    { name: 'Simple',      path: '/Simple', component: require('../Simple').default },
  ];

menu.map((o, i) => {
  o.link = o.path;
})

console.log('Route Path', menu);

export default menu;
