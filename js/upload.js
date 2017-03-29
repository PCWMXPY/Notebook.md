(function () {
    'use strict';
    document.getElementById('input').onchange = function () {
        Cf$.read({
            mode: 'Text',
            file: this.files[0]
        }, function (filedata) {
            title.add(scanner.make('THTRE 110 FINAL', 't110final', filedata));
            // featurefunctions.uploadtoserver(scanner.make('THTRE 110 FINAL', 't110final', filedata));
        });
    };
    gotoTop();
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
        mode: 'mcode',
        testname: '',
        tname: ''
    },
    computed: {},
    methods: {
        getquestions: function () {
            document.getElementById('input').click();
        },
        add: function (object) {
            for (let i = 0; i < object.questions.length; i++) {
                object.questions[i].picked = -1;
                object.questions[i].coloreffect = 're-qu';
                for (c in object.questions[i].answer) {
                    object.questions[i].answer[c] = [object.questions[i].answer[c], ''];
                }
            }
            app.tests = object.questions;
            title.mode = 'answer';
            title.testname = object.examname;
        }
    }
});
let app = new Vue({
    el: '#main',
    data: {
        tests: [],
        storage: [],
        lengths: 0
    },
    computed: {},
    watch: {},
    methods: {
        convert: function (index) {
            return Cd$.chineseify(index + 1, 1);
        },
        downvert: function (index) {
            return otherfunctions.converttoletter(index + 1);
        },
        idify: function (index) {
            return 'index:' + index;
        },
        clicked: function () {
            let count = 0;
            for (id in this.tests) {
                if (this.tests[id].picked != -1) count++;
            }
            this.lengths = count;
        },
        clicktext: function (index, cindex) {
            this.tests[index].picked = cindex;
            this.clicked();
        },
        grade: function () {
            for (id in this.tests) {
                if (this.tests[id].correct >= this.tests[id].answer.length || this.tests[id].correct < 0) {
                    // console.log(id);
                    if (this.tests[id].correct != 9) {
                        return 'error';
                    } else {
                        document.getElementById('index:' + id).innerHTML = '这道问题没有答案,如果你知道它的答案请发邮件到llf@wmpcxpy.com纠正我们';
                    }
                } else {
                    if (this.tests[id].picked == this.tests[id].correct) {
                        this.tests[id].coloreffect = 'auto-correct';
                        this.tests[id].answer[this.tests[id].picked][1] = 'auto-correct';
                    } else {
                        this.tests[id].coloreffect = 'auto-wrong';
                        if (this.tests[id].picked != -1) {
                            this.tests[id].answer[this.tests[id].picked][1] = 'auto-wrong';
                        }
                        this.tests[id].answer[this.tests[id].correct][1] = 'auto-correct';
                    }
                }
            }
            return 'done';
            this.clicked();
        },
        gradethis: function (i) {

        },
        clickansweritself: function (index, answer) {
            this.tests[index].picked = answer;
        },
        test: function () {
            testfunctions.addtestquestiontojavascript(function (data) {
                for (let i = 0; i < data.questions.length; i++) {
                    data.questions[i].picked = -1;
                    data.questions[i].coloreffect = 're-qu';
                    for (c in data.questions[i].answer) {
                        data.questions[i].answer[c] = [data.questions[i].answer[c], ''];
                    }
                }
                app.tests = data.questions;
                title.mode = 'answer';
                title.testname = data.examname;
            });
        },
        testss: function () {
            console.log('tt');
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