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
    document.getElementById('languagec').addEventListener('click', function () {
        main.changelanguage();
    });
});
let rewave = [{
    icon: 'fa-language',
    id: 'languagec'
}];
let main = new Vue({
    el: '#title',
    data: {
        languages: 'chinese',
        display: {}
    },
    methods: {
        updatelanguage: function () {
            if (this.languages == 'chinese') {
                this.display = languages.donate.cn;
            } else {
                this.display = languages.donate.en;
            }
            console.log(this.languages);
        },
        changelanguage: function () {
            if (this.languages == 'chinese') {
                this.languages = 'english';
            } else {
                this.languages = 'chinese';
            }
            this.updatelanguage();
        }
    }
});