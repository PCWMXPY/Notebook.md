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
    }
}
const featurefunctions = {
    uploadtoserver: function (examname, mcode, questions) {
        let re = new Object;
        re.examname = examname;
        re.mcode = mcode;
        re.questions = questions;
        re = JSON.stringify(re);
        console.log(re);
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