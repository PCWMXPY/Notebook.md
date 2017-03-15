(function () {
    'use strict';
}());
/*
 * @author WMXPY
 * @contect wm@wmpcxpy.com
 */
const home = {
    template: '<div>this is home page</div>'
};
const news = {
    template: '<div>this is news page</div>'
};
const about = {
    template: '<div>this is about page</div>'
};
const routes = [{
        path: '/home',
        component: home
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
    // routes // （缩写）相当于 routes: routes
    routes: routes
});
const app = new Vue({
    router
}).$mount('#main');