(function () {
    'use strict';
}());
/*
 * @author WMXPY
 * @contect wm@wmpcxpy.com
 */
let control = {
    trans: false
}
jQuery(document).ready(function () {
    $.backstretch("../../imgs/indexbg.jpg");
    if (getURLVar('language') != null) main.languages = getURLVar('language');
    main.getexamlist();
    main.updatelanguage();
});
let rewave = [{
    icon: 'fa-language',
    id: 'languagec',
    tips: {
        cn: '切换语言',
        en: 'Switch Language'
    },
    fun: () => {
        if (main.languages == 'chinese') {
            main.languages = 'english';
        } else {
            main.languages = 'chinese'
        }
        main.updatelanguage();
    }
}];
var main = new Vue({
    el: '#main',
    data: {
        filelist: [],
        languages: 'chinese',
        display: {},
        test: 'test'
    },
    methods: {
        updatelanguage: function () {
            // console.log(languages);
            if (this.languages == 'chinese') {
                this.display = languages.ob.cn;
            } else {
                this.display = languages.ob.en;
            }
        },
        tesst: function () {
            console.log('test');
        },
        getexamlist: () => {
            featurefunctions.getlist(0, data => {
                data = JSON.parse(data);
                main.filelist = data;
            });
        },
        startquiz: target => {
            console.log(target);
        }
    }
})