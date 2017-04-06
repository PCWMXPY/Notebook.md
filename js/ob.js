(function () {
    'use strict';
}());
/*
 * @author WMXPY
 * @contect wm@wmpcxpy.com
 */
jQuery(document).ready(function () {
    $.backstretch("../../imgs/indexbg.jpg");
    if (getURLVar('language') != null) main.languages = getURLVar('language');
    document.getElementById('languagec').addEventListener('click', () => {
        if (main.languages == 'chinese') {
            main.languages = 'english';
        } else {
            main.languages = 'chinese'
        }
        main.updatelanguage();
    })
    main.updatelanguage();
});
let rewave = [{
    icon: 'fa-language',
    id: 'languagec'
}];
var main = new Vue({
    el: '#main',
    data: {
        filelist: [{
            examname: 'test',
            description: 'null',
            mcode: 'testmcode',
            visits: 10,
            questions: 5
        }],
        languages: 'chinese',
        display: {},
        test: 'test'
    },
    methods: {
        updatelanguage: () => {
            if (this.languages == 'chinese') {
                this.display = languages.ob.cn;
            } else {
                this.display = languages.ob.en;
            }
        },
        getexamlist: () => {
            featurefunctions.getlist(() => {

            });
        },
        startquiz: target => {
            console.log(target);
        }
    }
})