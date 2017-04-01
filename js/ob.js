(function () {
    'use strict';
}());
/*
 * @author WMXPY
 * @contect wm@wmpcxpy.com
 */
jQuery(document).ready(function () {
    $.backstretch("../../imgs/indexbg.jpg");
    main.updatelanguage();
});
let rewave = [{
    icon: 'fa-language',
    id: 'languagec'
}];
var main = new Vue({
    el: '#main',
    data:{
         languages: 'chinese',
         display: {},
        test: 'test'
    },
    methods:{
        updatelanguage: function(){
            if (this.languages == 'chinese') {
                this.display = languages.ob.cn;
            } else {
                this.display = languages.ob.en;
            }
        }
    }
})