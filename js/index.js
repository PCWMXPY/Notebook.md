(function () {
    'use strict';
}());
/*
 * @author WMXPY
 * @contect wm@wmpcxpy.com
 */
jQuery(document).ready(function () {
    $.backstretch("./imgs/indexbg.jpg");
    main.systemlanguage();
    main.updatedisplay();
    main.updatesolgan();
    document.getElementById('re-wave').addEventListener('click', () => {
        if (bases.hinted == 0) {
            displaytips(rewave, main.languages);
            bases.hinted = 1;
            setTimeout(() => {
                rewave.push({
                    icon: 'fa-question',
                    tips: {
                        cn: '再显示一次帮助',
                        en: 'Rotate Slogan'
                    },
                    fun: () => {
                        bases.hinted = 2;
                        setTimeout(() => {
                            document.getElementById('re-wave').click();
                        }, 0)
                    },
                    id: 're-hint'
                });
            }, (2700 + rewave.length * 500));
        } else if (bases.hinted == 2) {
            displaytips(rewave, main.languages);
            bases.hinted = 1;
        }
    });
});
const testdonate = function () {
    console.log('test');
    return 0;
}
let rewave = [{
    icon: 'fa-bath',
    tips: {
        cn: '循环标语',
        en: 'Rotate Slogan'
    },
    fun: () => {
        if (recstat == -1) {
            let target = [];
            if (main.languages == 'chinese') {
                target = main.slogans[1];
            } else {
                target = main.slogans[0];
            }
            recstat = Cv$.Caper(main, {
                elem: 'welcome',
                content: target
            })
        } else {
            clearInterval(recstat);
            recstat = -1;
        }
    },
    id: 're-repeat'
}];
var recstat = -1;
var main = new Vue({
    el: '#main',
    data: {
        languages: '',
        welcome: '',
        display: [],
        slogans: [
            [],
            []
        ],
        version: pageVersion
    },
    methods: {
        systemlanguage: function () {
            const nava = window.navigator.language;
            if (nava.substring(0, 2) == 'zh') {
                this.languages = 'chinese';
            } else {
                this.languages = 'english';
            }
        },
        updatedisplay: function () {
            if (this.languages == 'chinese') {
                this.display = languages.index.cn;
            } else {
                this.display = languages.index.en;
            }
            this.updateagain();
        },
        updatesolgan: function () {
            Ca$.get({
                url: 'https://raw.githubusercontent.com/WYJBD/SLOGAN/master/Review.slogan',
                success: function (data) {
                    main.slogans = featurefunctions.seprateslogan(data);
                    main.updateagain();
                }
            })
        },
        updateagain: function () {
            if (this.languages == 'chinese') {
                const ran = parseInt(Math.random() * 1000) % this.slogans[1].length;
                this.welcome = this.slogans[1][ran];
            } else {
                const ran = parseInt(Math.random() * 1000) % this.slogans[0].length;
                this.welcome = this.slogans[0][ran];
            }
        },
        language: function () {
            if (this.languages == 'chinese') {
                this.languages = 'english';
            } else {
                this.languages = 'chinese'
            }
            this.updatedisplay();
        },
        donate: function () {
            window.location.href = './doc/donate/?language=' + this.languages;
        },
        reimport: function () {
            window.location.href = './upload/?language=' + this.languages;
        },
        recreate: function () {
            window.location.href = './create/?mode=create';
        },
        relearn: function () {
            window.location.href = './doc/makefile/?language=' + this.languages;
        },
        pay: function () {
            window.location.href = 'https://www.paypal.me/wmxpy';
        },
        remcode: function (events, code) {
            console.log(code);
            if (code == undefined) {
                window.location.href = './rev/?mode=mcode&language=' + this.languages;
            } else {
                window.location.href = './rev/?mode=mcode&language=' + this.languages + '&code=' + code;
            }
        }
    }
})