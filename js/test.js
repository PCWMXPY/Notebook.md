(function () {
    'use strict';
}());
/*
 * @author WMXPY
 * @contect wm@wmpcxpy.com
 * @version 1.2.2
 */
const pageVersion = '1.2.2';
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
    template: '<div class="div_right_bottom"><span class="button-dropdown" data-buttons="dropdown"><button class="button button-rounded button-square" id="re-wave"><i class="fa fa-caret-down"></i></button><ul class="button-dropdown-list"><li><button id="gotoTop" onclick="backtotop()" class="button button-square"><i class="fa fa-arrow-up"></i></button></li><li><button class="button button-square" id="re-wave-setting"><i class="fa fa-cog"></i></button></li><li v-for="butt in buttonsinvue"><button class="button button-square" v-bind:id="butt.id" v-on:click="butt.fun"><i class="fa" v-bind:class="butt.icon"></i></button></li><li><button class="button button-square" id="re-wave-github" onclick="window.open(\'https://github.com/PCWMXPY/Notebook.md\')"><i class="fa fa-github"></i></button></li></ul></span><button v-on:click="updatebutton" id="re-waveupdatebutton" style="display:none;"></button></div>'
});
const displaytips = (rewave, language) => {
    const length = rewave.length;
    const lan = (language == 'chinese') ? languages.test.cn : languages.test.en;
    for (let i = -1; i < length + 1; i++) {
        if (i == -1) {
            setTimeout(() => {
                layer.tips(lan.setting, '#re-wave-setting', {
                    tips: 4,
                    // time: 100000,
                    tipsMore: true
                });
            }, i * 100 + 200);
        } else if (i == length) {
            setTimeout(() => {
                layer.tips(lan.github, '#re-wave-github', {
                    tips: 4,
                    tipsMore: true
                });
            }, i * 100 + 200);
        } else {
            const smalllan = (language == 'chinese') ? rewave[i].tips.cn : rewave[i].tips.en
            setTimeout(() => {
                layer.tips(smalllan, '#' + rewave[i].id, {
                    tips: 4,
                    tipsMore: true
                });
            }, i * 100 + 200);
        }
    }
}
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
    getlist: function (u, successs) {
        let url = '../php/getlist.php';
        if (u == 0) url = '../../php/getlist.php';
        Ca$.get({
            url: url,
            data: {},
            success: function (data) {
                successs(data);
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

function getURLVar(string) {
    return decodeURIComponent((new RegExp('[?|&]' + string + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
}

function URLencode(string) {

    return escape(string).replace(/\+/g, '%2B').replace(/\"/g, '%22').replace(/\'/g, '%27').replace(/\//g, '%2F');

}
const languages = {
    test: {
        cn: {
            setting: '设置',
            github: '访问Review.md的Github'
        },
        en: {
            setting: 'Setting',
            github: 'Visit Github of Review.md'
        }
    },
    index: {
        cn: {
            welcome: '欢迎',
            topic: 'Review.md',
            top: 'Review.md 是 ',
            donate: '为 Review.md 提供灵感',
            language: 'Discover Review.md in <strong>English</strong>',
            input: '导入题库文件',
            create: '创建题库文件 (开发中)',
            mcode: '输入神秘代码',
            learn: '学习如何手动建立 Reviwe.md 的题库',
            pay: '在 Paypal 帮助 Review.md 的服务器运行更久',
            temp: '热门:'
        },
        en: {
            welcome: 'Welcome',
            topic: 'Review.md',
            top: 'Review.md is ',
            donate: 'Share your idea with Review.md',
            language: '用<strong>中文</strong>浏览 Review.md',
            input: 'Upload Quiz file',
            create: 'Create Quiz file (In development)',
            mcode: 'Enter Mystery Code',
            learn: 'Learn how to build your own Quiz file manual',
            pay: 'Help Review.md Run longer by Paypal donate',
            temp: 'Featured:'
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
            back: '返回',
            creative: '这个教程将会指引你与 Review.md 分享创意',
            index: '在网站的首页,你可以看到一个妙趣横生的标语.而它是由 Review.md 用户自行创作的.',
            link: '点击这个链接,创建一个你自己的 Github 账号.',
            address: '访问位于 Github 的 Review.md 的创意贡献地址, 点击右侧的 fork.',
            location: 'Review.md 在 Github 的地址',
            jump: '在跳转的界面里,点击文件 Review.title 点击文本查看器右上角的编辑.',
            edit: '完成对文件的编辑之后保存, 点击发送 Pull Request, 仅两三分钟即可完成.',
            email: '我们强烈建议你尝试并使用 Github, 但你也可以发送邮件到',
            product: '提交你的作品.',
            same: '同样的, 你也可以发送邮件到上述邮箱请求公开你创建的题库.'
        },
        en: {
            back: 'Back',
            creative: 'This doc will guild you share idea with Review.md',
            index: 'Our user created interesting tag by themself.',
            link: 'Click this link to register your own Github account.',
            address: 'Click this link, and click fork at top right corner.',
            location: 'Review.md in Github',
            jump: 'Wait until fork done, click edit for Review.slogen.',
            edit: 'Commit this file, and click pull request, that will only take two or three minutes.',
            email: 'We highly recommand you use Github, but you can still send email to',
            product: 'for share your idea.',
            same: 'Of course, you can send email there to request your own Quiz Mystery Code'
        }
    },
    learn: {
        cn: {
            back: '返回',
            tutor: '这个教程将会指引你建立自己的题库文件',
            up: '只需要点几下鼠标就可以在 Review.md 上使用你的题库',
            parts: '一个题库由以下的部分组成:',
            title: '一个题目:',
            question: '1 为什么大象的鼻子比较大',
            queexp: '<- 最前面的数字不能省略, 也可以用1.0, 5.6的形式.',
            answer: '几个选项:',
            option: ['A 因为它很有威力', 'B 因为它很有魅力', 'C 因为它很有勇气'],
            opexp: '<- 同样的最前面的字母不能省略, 在实际 Quiz 中不会显示.',
            correct: ' 一个正确答案:',
            good: '%$0',
            expgood: '<- 最右侧的数字代表正确的答案,0是A,1是B,以此类推',
            combine: '我们将它们合并 ->',
            duplicate: '并用这种方法创建你所有的问题 ->',
            anotherquestion: ['1 为什么大象的鼻子比较大', '2 为什么小象的鼻子比较小', '3 为什么中象的鼻子比较中'],
            finish: '这样即可创建你最喜欢的题库了, 完成后 Review.md 会帮你自动下载.'
        },
        en: {
            back: 'Back',
            tutor: 'This doc will guild you create your quiz with Review.md',
            up: 'Just a few click, you got your quiz easy as well',
            parts: 'A quiz file include these parts:',
            title: 'A Question:',
            question: '1 Why Elephents have big nose',
            queexp: '<- Number in front of question is required, form 1.0, 5.6 is also okay.',
            answer: 'Some Option:',
            option: ['A Cause He is Strong', 'B Cause He is Charming', 'C Cause He is THE JUSTICE'],
            opexp: '<- Same, the letter is required, But it will not display in the real quiz.',
            correct: ' A Correct Notice:',
            good: '%$0',
            expgood: '<- The number is the correct answer,0 means A,1 means B,so on',
            combine: 'We put them together ->',
            duplicate: 'Put all your question together ->',
            anotherquestion: ['1 Why Elephents have big nose', '2 Why Birds have big nose', '3 Why People have big nose'],
            finish: 'So, thats all you need to do, Review.md will download it auto as soon as you finish.'
        }
    },
    ob: {
        cn: {
            how: '我该怎么使用这串代码?',
            publish: '我也想在 Review.md 上发布题目!',
            above: '上面这串怕不是真的神秘代码?',
            back: '返回',
            topic: '神秘代码列表',
            exam: '题库:',
            code: '神秘代码:',
            questions: '题库大小:',
            left: '有 ',
            right: ' 人使用了这个题库.',
            start: '现在就开始 '
        },
        en: {
            how: 'How to use this code?',
            publish: 'I want to publish my Quiz to Review.md too!',
            above: 'OMG, is the real MYSTERYY CODE?????',
            back: 'Back',
            topic: 'Mystery Code List',
            exam: 'Quiz:',
            code: 'MysteryCode:',
            questions: 'Quiz Size:',
            left: 'There are ',
            right: ' people took this quiz.',
            start: 'Start to use '
        }
    }
}