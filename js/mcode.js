(function () {
    'use strict';
}());
/*
 * @author WMXPY
 * @contect wm@wmpcxpy.com
 */
jQuery(document).ready(function () {
    const questioncode = getURLVar('code');
    if (questioncode != null) {
        title.tname = getURLVar('code');
    }
    $.backstretch("../imgs/indexbg.jpg");
});

let title = new Vue({
    el: '#title',
    data: {
        mode: getURLVar('mode'),
        testname: '',
        tname: '',
        questions: []
    },
    computed: {
        topofpage: function () {
            switch (this.mode) {
                case 'mcode':
                    return 0;
                    break;
                default:
                    return 2;
            }
        }
    },
    methods: {
        getquestions: function (tname) {

        }
    }
});
let app = new Vue({
    el: '#main',
    data: {
        tests: []
    },
    methods: {
        add: function (question, correct, a, b, c, d, e) {
            var showc = 'hidden';
            var showd = 'hidden';
            var showe = 'hidden';
            if (c.length > 0) {
                showc = 'hiddens';
            }
            if (d.length > 0) {
                showd = 'hiddens';
            }
            if (e.length > 0) {
                showe = 'hiddens';
            }
            var thatquestion = {
                question: question,
                a: a,
                b: b,
                c: c,
                showc: showc,
                d: d,
                showd: showd,
                e: e,
                showe: showe,
                sol: [false, false, false, false, false],
                correct: correct - 1,
                correctorwrong: '-'
            }
            this.tests.push(thatquestion);
        },
        grade: function () {
            for (var i = 0; i < this.tests.length; i++) {
                if (this.tests[i].sol[this.tests[i].correct] == true) {
                    this.tests[i].correctorwrong = 'Correct';
                } else {
                    this.tests[i].correctorwrong = 'Wrong';
                }
            }
        },
        gradethis: function (i) {
            if (i.sol[i.correct] == true) {
                i.correctorwrong = 'Correct';
            } else {
                i.correctorwrong = 'Wrong';
            }
        }
    }
})

function getURLVar(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
}
app.add('1.9 Related to Theater as Seeing Place, Elizabethan theatre performers thought of the stage as a:', 1,
    'Mirror ', 'Pedestal ', 'A time machine ', 'a place of wealth', '');
app.add('1.10 My instructor for this course is', 3, 'Jim Trenberth ', 'Stephen Leath',
    'Kelly Marie Schaefer ', 'I have no idea', '');