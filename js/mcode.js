(function () {
    'use strict';
}());
/*
 * @author WMXPY
 * @contect wm@wmpcxpy.com
 */
jQuery(document).ready(function () {
    const questioncode = getURLVar('code');
    if (questioncode != null) {
        title.tname = getURLVar('code');
    }
    $.backstretch("../imgs/indexbg.jpg");
});

let title = new Vue({
    el: '#title',
    data: {
        mode: getURLVar('mode'),
        testname: '',
        tname: ''
    },
    computed: {
        topofpage: function () {
            switch (this.mode) {
                case 'mcode':
                    return 0;
                    break;
                default:
                    return 2;
            }
        }
    },
    methods: {
        getquestions: function (tname) {

        }
    }
})

function getURLVar(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
}