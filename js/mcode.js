(function () {
    'use strict';
}());
/*
 * @author WMXPY
 * @contect wm@wmpcxpy.com
 */
jQuery(document).ready(function () {
    if (getURLVar('code') != null) title.tname = getURLVar('code');
    if (getURLVar('mode') != null) title.mode = getURLVar('mode');
    $.backstretch("../imgs/indexbg.jpg");
});

let title = new Vue({
    el: '#title',
    data: {
        buttondis: false,
        mode: '',
        testname: '',
        tname: ''
    },
    computed: {},
    methods: {
        getquestions: function () {
            this.buttondis = true;
            featurefunctions.getquestionbymcode(this.tname, function (data) {
                // console.log(typeof data);
                if (data.length > 5) {
                    data = JSON.parse(data);
                    app.tests = data.questions;
                    title.mode = 'answer';
                    title.testname = data.examname;
                } else {
                    title.mode = 'debug';
                }
            });
        },
        fixvariable: function () {
            this.buttondis = false;
            this.mode = 'mcode';
        }
    }
});
let app = new Vue({
    el: '#main',
    data: {
        tests: []
    },
    methods: {
        convert: function (exam) {

        },
        grade: function () {

        },
        gradethis: function (i) {

        }
    }
})

function getURLVar(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
}

function URLencode(sStr) {

    return escape(sStr).replace(/\+/g, '%2B').replace(/\"/g, '%22').replace(/\'/g, '%27').replace(/\//g, '%2F');

}
// const teststring = JSON.stringify(testobject);
// console.log(teststring);
// console.log(URLencode(teststring));