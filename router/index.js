(function () {
    'use strict';
}());
/*
 * @author WMXPY
 * @contect wm@wmpcxpy.com
 */
// const
const home = {
    data: {
        message: 'test'
    },
    temperate: '<div id="home">this is home page{{message}}</div>'
}
const news = {
    data: {
        message: 'test'
    },
    temperate: '<div id="home" v-html="message">this is news page</div>'
}
const about = {
    data: {
        message: 'test'
    },
    temperate: '<div id="home">this is about page{{message}}</div>'
}