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
    template: '<div class="div_right_bottom"><span class="button-dropdown" data-buttons="dropdown"><button class="button button-rounded button-square"><i class="fa fa-caret-down"></i></button><ul class="button-dropdown-list"><li><button id="gotoTop" onclick="backtotop()" class="button button-square"><i class="fa fa-arrow-up"></i></button></li><li><button class="button button-square"><i class="fa fa-cog"></i></button></li><li v-for="butt in buttonsinvue"><button class="button button-square" v-bind:id="butt.id"><i class="fa" v-bind:class="butt.icon"></i></button></li><li><button class="button button-square"><i class="fa fa-github"></i></button></li></ul></span></div>'
});
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
            top: 'Review.md 是',
            donate: '为 Review.md 提供灵感',
            language: 'Discover Review.md in <strong>English</strong>',
            input: '导入题库文件',
            create: '创建题库文件',
            mcode: '输入神秘代码'
        },
        en: {
            welcome: 'Welcome',
            topic: 'Review.md',
            top: 'Review.md is',
            donate: 'Share your idea with Review.md',
            language: '用<strong>中文</strong>浏览 Review.md',
            input: 'Upload exam file',
            create: 'Create exam file',
            mcode: 'Enter Mystery Code'
        }
    },
    quiztitle: {
        cn: {

        },
        en: {

        }
    },
    quiz: {
        cn: {

        },
        en: {

        }
    },
    donate: {
        cn: {

        },
        en: {

        }
    }
}