(function () {
    'use strict';
}());
/*
 * @author WMXPY
 * @contect wm@wmpcxpy.com
 */
jQuery(document).ready(function () {
    // $.backstretch("../imgs/indexbg.jpg");
    main.updatelanguage();
    if (getURLVar('language') != null) main.languages = getURLVar('language');
    main.updatelanguage();
    document.getElementById('languagec').addEventListener('click', function () {
        main.changelanguage();
    });
});
let rewave = [{
    icon: 'fa-language',
    id: 'languagec'
}];
var main = new Vue({
    el: '#title',
    data: {
        languages: 'chinese',
        display: {},
        displayl: {}
    },
    methods: {
        updatelanguage: function () {
            if (this.languages == 'chinese') {
                this.display = languages.donate.cn;
                this.displayl = languages.learn.cn;
            } else {
                this.display = languages.donate.en;
                this.displayl = languages.learn.en;
            }
        },
        changelanguage: function () {
            if (this.languages == 'chinese') {
                this.languages = 'english';
            } else {
                this.languages = 'chinese';
            }
            this.updatelanguage();
        },
        // getthisurl: function () {
        //     let url = '';
        //     const thisurl = window.location.href;
        //     console.log(thisurl.substring(thisurl.length - 5, thisurl.length));
        //     if (thisurl.substring(thisurl.length - 5, thisurl.length) == 'html') {

        //     }
        // }
    }
});