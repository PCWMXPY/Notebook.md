(function () {
    'use strict';
}());
/*
 * @author WMXPY
 * @contect wm@wmpcxpy.com
 */
Vue.component('re-credit', {
    template: '<div><p style="color:#565656"><i class="fa fa-code"></i> Review.md with <i class="fa fa-heart"></i> by WMXPY@<a href="http://mengw.io">mengw.io</a> 2016</p></div>'
});
Vue.component('re-wave', {
    data: function () {
        return {
            buttonsinvue: rewave
        };
    },
    methods: {
        updatebutton: function () {
            this.buttonsinvue = rewave;
        }
    },
    template: '<div class="div_right_bottom"><span class="button-dropdown" data-buttons="dropdown"><button class="button button-rounded button-square"><i class="fa fa-caret-down"></i></button><ul class="button-dropdown-list"><li><button id="gotoTop" onclick="backtotop()" class="button button-square"><i class="fa fa-arrow-up"></i></button></li><li><button class="button button-square"><i class="fa fa-cog"></i></button></li><li v-for="butt in buttonsinvue"><button class="button button-square" v-bind:id="butt.id"><i class="fa" v-bind:class="butt.icon"></i></button></li><li><button class="button button-square"><i class="fa fa-github"></i></button></li></ul></span><button v-on:click="updatebutton" id="re-waveupdatebutton" style="display:none;"></button></div>'
});
const updatebutton = function () {
    document.getElementById('re-waveupdatebutton').click();
}
const testfunctions = {
    githubfile: function () {
        Ca$.get({
            url: 'https://raw.githubusercontent.com/Justice-Rains-From-Above/slogan/master/review.title',
            success: function (data) {
                console.log(data);
            }
        })
    }
}
const featurefunctions = {
    uploadtoserver: function (json) {
        json = JSON.stringify(json);
        Ca$.post({
            url: '../php/updatequestion.php',
            data: {
                json: json
            },
            success: function (data) {
                console.log(data);
            }
        })
    },
    uploadfortest: function (examname, mcode, questions) {
        let re = new Object;
        re.examname = examname;
        re.mcode = mcode;
        re.questions = questions;
        return re;
    },
    getquestionbymcode: function (mcode, successs) {
        console.log(mcode);
        Ca$.get({
            url: '../php/getquestionbymcode.php',
            data: {
                mcode: mcode
            },
            success: function (data) {
                successs(data);
            }
        })
    },
    getquestionfromserver: function (examname) {
        Ca$.get({
            url: '../php/readquestions.php',
            data: {
                examname: examname
            },
            success: function (data) {
                document.getElementById('debug').innerHTML = data;
            }
        })
    },
    seprateslogan: function (string) {
        let re = [
            [],
            []
        ];
        let now = 0;
        const inn = string.split('\n');
        for (let i = 0; i < inn.length; i++) {
            switch (inn[i]) {
                case 'English:':
                    now = 0;
                    break;
                case 'Chinese:':
                    now = 1;
                    break;
                default:
                    if (inn[i].length > 1) {
                        re[now].push(inn[i]);
                    }
            }
        }
        return re;
    }
}
const otherfunctions = {
    converttoletter: function (num) {
        num = parseInt(num) - 1;
        const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        if (num > 7 || num < 0) {
            return 'Out or Under of limit';
        } else {
            return letters[num];
        }
    }
}

function backtotop() {
    $('html,body').animate({
        scrollTop: 0
    }, 700);
}

function gotoTop(min_height) {
    min_height ? min_height = min_height : min_height = 600;
    $(window).scroll(function () {
        var s = $(window).scrollTop();
        if (s > min_height) {
            $("#gotoTop").fadeIn();
        } else {
            $("#gotoTop").fadeOut();
        };
    });
};
const languages = {
    index: {
        cn: {
            welcome: '欢迎',
            topic: 'Review.md',
            top: 'Review.md 是 ',
            donate: '为 Review.md 提供灵感',
            language: 'Discover Review.md in <strong>English</strong>',
            input: '导入题库文件',
            create: '创建题库文件',
            mcode: '输入神秘代码',
            learn: '学习如何建立Reviwe.md的题库'
        },
        en: {
            welcome: 'Welcome',
            topic: 'Review.md',
            top: 'Review.md is ',
            donate: 'Share your idea with Review.md',
            language: '用<strong>中文</strong>浏览 Review.md',
            input: 'Upload Quiz file',
            create: 'Create Quiz file',
            mcode: 'Enter Mystery Code',
            learn: 'Learn how to build your own Quiz file'
        }
    },
    quiztitle: {
        cn: {
            id: '题库ID:',
            down: '下载题库',
            moremode: '当前题库似乎支持更多模式, 点击右上角的悬浮菜单获得更多选项',
            cantfind: '没有找到对应的题库',
            searchonemoretime: '再查找一次',
            notsupport: '浏览器或许不被支持',
            input: '输入代码',
            file: '文件:',
            upload: '选择文件'
        },
        en: {
            id: 'Quiz ID:',
            down: 'Download',
            moremode: 'This Quiz seems support more mode, click the button at right corner for more details',
            cantfind: 'Quiz not found',
            searchonemoretime: 'Try again',
            notsupport: 'Browser maybe not supported',
            input: 'Input code',
            file: 'File:',
            upload: 'Browse File'
        }
    },
    quiz: {
        cn: {
            dontknow: '并不知道题库代码?',
            publish: '我也想在 Review.md 上发布题目!',
            calculate: '计算得分',
            donthave: '没有获得过题库文件?'
        },
        en: {
            dontknow: 'Never got a code?',
            publish: 'I want to publish my Quiz to Review.md too!',
            calculate: 'Grade my Quiz',
            donthave: 'Never got a file?'
        }
    },
    donate: {
        cn: {

        },
        en: {

        }
    }
}