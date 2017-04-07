(function () {
    'use strict';
    document.getElementById('input').onchange = function () {
        Cf$.read({
            mode: 'Text',
            file: this.files[0]
        }, function (filedata) {
            title.add(scanner.make('THTRE 110 FINAL', 't110final', filedata));
            // featurefunctions.uploadtoserver(scanner.make('THTRE 110 FINAL', 't110final', filedata));
            app.clicked();
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
    if (getURLVar('language') != null) title.languages = getURLVar('language');
    $.backstretch("../imgs/indexbg.jpg");
    title.updatelanguage();
    document.getElementById('re-wave').addEventListener('click', () => {
        if (bases.hinted == 0) {
            displaytips(rewave, title.languages);
            bases.hinted = 1;
        }
    });
});
const remakebutton = () => {
    rewave.push({
        icon: 'fa-random',
        id: 'massup',
        tips: {
            cn: '打乱题目',
            en: 'Shuffle Quations'
        },
        fun: () => {
            app.mass();
        }
    }, {
        icon: 'fa-gg-circle',
        id: 'shufflean',
        tips: {
            cn: '打乱选项',
            en: 'Shuffle Answers'
        },
        fun: () => {
            app.massanswer();
        }
    }, {
        icon: 'fa-magic',
        id: 'shuffleall',
        tips: {
            cn: '打乱题目和选项',
            en: 'Shuffle Question and Answers'
        },
        fun: () => {
            app.massall();
        }
    });
}
let rewave = [{
    icon: 'fa-language',
    tips: {
        en: '切换语言',
        cn: 'Switch Language'
    },
    fun: () => {
        if (title.languages == 'chinese') {
            title.languages = 'english';
        } else {
            title.languages = 'chinese'
        }
        title.updatelanguage();
    },
    id: 'languagec'
}];
var title = new Vue({
    el: '#title',
    data: {
        buttondis: false,
        mode: 'mcode',
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
            document.getElementById('input').click();
            remakebutton();
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
var app = new Vue({
    el: '#main',
    data: {
        tests: [],
        storage: [],
        lengths: '',
        display: {}
    },
    computed: {},
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
                this.tests[i].answer.sort(function () {
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

// const teststring = JSON.stringify(testobject);
// console.log(teststring);
// console.log(URLencode(teststring));