(function () {
    'use strict';
}());
/*
 * @author WMXPY
 * @contect wm@wmpcxpy.com
 */
const testfunctions = {
    testobject: {
        examname: 'testexam2',
        mcode: 'testexam',
        questions: [{
                question: 'what is the answer of 1+1',
                description: 'test description',
                answer: ['2', 'QBA', 'THIRD', 888, 'fivth'],
                correct: 0
            },
            {
                question: 'what is the answer of 1+1 for sure',
                description: 'test description',
                answer: ['2', 'QBA', 'THIRD', 888, 'fivth'],
                correct: 3
            }
        ]
    },
    addtestquestiontophp: function () {
        featurefunctions.uploadtoserver('testexam2', 'testexam', [{
                question: 'what is the answer of 1+1',
                description: 'test description',
                answer: ['2', 'QBA', 'THIRD', 888, 'fivth'],
                correct: 0
            },
            {
                question: 'what is the answer of 1+1 for sure',
                description: 'test description',
                answer: ['2', 'QBA', 'THIRD', 888, 'fivth'],
                correct: 3
            }
        ])
    },
    addtestquestiontojavascript: function (success) {
        success(featurefunctions.uploadfortest('testexam2', 'testexam', [{
                question: 'what is the answer of 1+1',
                description: 'test description',
                answer: ['2', 'QBA', 'THIRD', 888, 'fivth'],
                correct: 0
            },
            {
                question: 'what is the answer of 1+1 for sure',
                description: 'test description',
                answer: ['2', 'QBA', 'THIRD', 888, 'fivth'],
                correct: 3
            }
        ]));
    }
}
const featurefunctions = {
    uploadtoserver: function (examname, mcode, questions) {
        let re = new Object;
        re.examname = examname;
        re.mcode = mcode;
        re.questions = questions;
        re = JSON.stringify(re);
        Ca$.post({
            url: '../php/updatequestion.php',
            data: {
                json: re
            },
            success: function (data) {
                document.getElementById('debug').innerHTML = data;
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
    converttochinese: function (num) {
        num = parseInt(num);
        const chinum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '百', '整', '数据超出限制范围'];
        if (num == 0) {
            return chinum[0];
        }
        const hundrands = parseInt(num / 100);
        let result = '';
        if (hundrands > 0) {
            if (hundrands < 10) {
                result += chinum[hundrands] + chinum[11];
            } else {
                result = chinum[13];
                return result;
            }
        }
        const tens = parseInt((num - hundrands * 100) / 10);
        if (tens > 0) {
            if (tens == 1) {
                result += chinum[10];
            } else {
                result += chinum[tens] + chinum[10];
            }
        }
        const singles = parseInt((num - hundrands * 100) - tens * 10);
        if (singles > 0) {
            if (tens == 0 && hundrands > 0) {
                result += chinum[0];
            }
            result += chinum[singles];
        } else {
            result += chinum[12];
        }
        return result;
    },
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