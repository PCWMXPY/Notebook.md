(function () {
    'use strict';
}());
/*
 * @author WMXPY
 * @contect wm@wmpcxpy.com
 */
jQuery(document).ready(function () {
    $.backstretch("./imgs/indexbg.jpg");
});
let main = new Vue({
    el: '#main',
    data: {
        languages: 'chinese',
        welcome: '试题复习网站'
    },
    methods: {
        donate: function () {
            // Ca$.get({
            //     url: './php/tget.php',
            //     data: {
            //         test: 'test'
            //     },
            //     success: function (data) {
            //         console.log('test' + data);
            //     }
            // });
            // Ca$.post({
            //     url: './php/tpost.php',
            //     data: {
            //         test: 'test'
            //     },
            //     success: function (data) {
            //         console.log('test' + data);
            //     }
            // });
        },
        language: function () {
            console.log('test');
        },
        reimport: function () {
            window.location.href = './rev/?mode=import';
        },
        recreate: function () {
            window.location.href = './create/?mode=create';
        },
        remcode: function () {
            window.location.href = './rev/?mode=mcode';
        }
    }
})