(function () {
    'use strict';
    gotoTop();
}());
/*
 * @author WMXPY
 * @contect wm@wmpcxpy.com
 */
jQuery(document).ready(function () {
    if (getURLVar('code') != null) title.tname = getURLVar('code');
    if (getURLVar('mode') != null) title.mode = getURLVar('mode');
    if (getURLVar('language') != null) title.languages = getURLVar('language');
    $.backstretch("../imgs/indexbg.jpg");
    document.getElementById('languagec').addEventListener('click', function () {
        if (title.languages == 'chinese') {
            title.languages = 'english';
        } else {
            title.languages = 'chinese'
        }
        title.updatelanguage();
    });
    document.getElementById('massup').addEventListener('click', function () {
        app.mass();
    });
    document.getElementById('shuffleall').addEventListener('click', function () {
        app.massall();
    });
    document.getElementById('shufflean').addEventListener('click', function () {
        app.massanswer();
    });
    title.updatelanguage();
});
let rewave = [{
        icon: 'fa-language',
        id: 'languagec'
    },
    {
        icon: 'fa-random',
        id: 'massup'
    },
    {
        icon: 'fa-gg-circle',
        id: 'shufflean'
    },
    {
        icon: 'fa-magic',
        id: 'shuffleall'
    }
];
var back = new Vue({
    el: '#back',
    data: {
        display: ''
    },
    methods: {

    }
})
var title = new Vue({
    el: '#title',
    data: {
        buttondis: false,
        mode: '',
        buttons: [],
        testname: '',
        tname: '',
        languages: 'chinese',
        display: {}
    },
    computed: {},
    methods: {
        updatelanguage: function () {
            if (this.languages == 'chinese') {
                this.display = languages.quiztitle.cn;
            } else {
                this.display = languages.quiztitle.en;
            }
            app.updatelanguage(this.languages);
        },
        getquestions: function () {
            this.buttondis = true;
            featurefunctions.getquestionbymcode(this.tname, function (data) {
                // console.log(typeof data);
                if (data.length > 5) {
                    data = JSON.parse(data);
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
var app = new Vue({
    el: '#main',
    data: {
        tests: [],
        storage: [],
        lengths: '',
        display: {}
    },
    computed: {
        questioncolor: function (index, cindex) {
            return index;
        }
    },
    watch: {},
    methods: {
        mass: function () {
            this.tests.sort(function () {
                return 0.5 - Math.random()
            })
        },
        massanswer: function () {
            const thislength = this.tests.length;
            for (let i = 0; i < thislength; i++) {
                this.tests[i].sort(function () {
                    return 0.5 - Math.random()
                })
            }
        },
        massall: function () {
            this.mass();
            this.massanswer();
        },
        updatelanguage: function (lan) {
            if (lan == 'chinese') {
                this.display = languages.quiz.cn;
            } else {
                this.display = languages.quiz.en;
            }
            this.clicked();
        },
        convert: function (index) {
            if (title.languages == 'chinese') {
                return '第' + Cd$.chineseify(index + 1, 1) + '题';
            } else {
                return 'Question: ' + index;
            }

        },
        idify: function (index) {
            return 'index:' + index;
        },
        downvert: function (index) {
            return otherfunctions.converttoletter(index + 1);
        },
        clicked: function () {
            let count = 0;
            for (id in this.tests) {
                if (this.tests[id].picked != -1) count++;
            }
            if (title.languages == 'chinese') {
                this.lengths = '已经完成了 ' + count + ' 题,剩余 ' + (this.tests.length - count) + ' 题';
            } else {
                this.lengths = count + ' Questions done, ' + (this.tests.length - count) + ' left';
            }
        },
        clicktext: function (index, cindex) {
            this.tests[index].picked = cindex;
            this.clicked();
        },
        grade: function () {
            for (id in this.tests) {
                if (this.tests[id].picked == this.tests[id].correct) {
                    this.tests[id].coloreffect = 'auto-correct';
                    this.tests[id].answer[this.tests[id].picked][1] = 'auto-correct';
                } else {
                    this.tests[id].coloreffect = 'auto-wrong';
                    this.tests[id].answer[this.tests[id].picked][1] = 'auto-wrong';
                    this.tests[id].answer[this.tests[id].correct][1] = 'auto-correct';
                }
            }
            this.clicked();
        },
        gradethis: function (i) {

        },
        clickansweritself: function (index, answer) {
            this.tests[index].picked = answer;
        }
    }
})