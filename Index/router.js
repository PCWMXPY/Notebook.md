(function () {
    'use strict';
}());
/*
 * @author WMXPY
 * @contect wm@wmpcxpy.com
 */
// const home = {
//     // template: function (resolve) {
//     //     require(['../Pages/home.vue'], resolve);
//     // }
//     template: '<div>this is home page</div>'
// };
const news = {
    template: '<div>this is news page</div>'
};
const about = {
    template: '<div>this is about page</div>'
};
const routes = [{
        path: '/home',
        component: require('../Pages/home.vue')
    },
    {
        path: '/news',
        component: news
    },
    {
        path: '/about',
        component: about
    },
];
const router = new VueRouter({
    routes: routes
});
const app_router = new Vue({
    router
});
app_router.$mount('#main');