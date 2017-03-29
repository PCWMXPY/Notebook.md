(function () {
    'use strict';
}());
/*
 * @author WMXPY
 * @contect wm@wmpcxpy.com
 */
jQuery(document).ready(function () {
    $.backstretch("./imgs/indexbg.jpg");
    main.updatedisplay();
});
const rewave = [];
let main = new Vue({
    el: '#main',
    data: {
        languages: 'chinese',
        welcome: '一个试题复习网站',
        display: []
    },
    methods: {
        updatedisplay: function () {
            if (this.languages == 'chinese') {
                this.display = languages.index.cn;
            } else {
                this.display = languages.index.en;
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
        reimport: function () {
            window.location.href = './upload/?language=' + this.languages;
        },
        recreate: function () {
            window.location.href = './create/?mode=create';
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