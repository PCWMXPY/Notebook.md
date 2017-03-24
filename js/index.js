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
            window.location.href = './donate/';
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
        remcode: function (events, code) {
            console.log(code);
            if (code == undefined) {
                window.location.href = './rev/?mode=mcode';
            } else {
                window.location.href = './rev/?mode=mcode&code=' + code;
            }

        }
    }
})