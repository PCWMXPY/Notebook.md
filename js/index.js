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

    },
    method: {
        donate: function () {
            Ca$.get({
                url: '../php/tget.php',
                data: {
                    test: 'test'
                },
                success: function (data) {
                    console.log('test' + data);
                }
            });
            Ca$.post({
                url: '../php/tpost.php',
                data: {
                    test: 'test'
                },
                success: function (data) {
                    console.log('test' + data);
                }
            });

        }
    }
})