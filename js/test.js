(function () {
    'use strict';
}());
/*
 * @author WMXPY
 * @contect wm@wmpcxpy.com
 */
const testfunctions = {
    githubfile: function () {
        Ca$.get({
            url: 'https://raw.githubusercontent.com/Justice-Rains-From-Above/slogan/master/review.title',
            success: function (data) {
                console.log(data);
            }
        })
    }
}
const featurefunctions = {
    uploadtoserver: function (json) {
        json = JSON.stringify(json);
        Ca$.post({
            url: '../php/updatequestion.php',
            data: {
                json: json
            },
            success: function (data) {
                console.log(data);
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

function gotoTop(min_height) {
    $("#gotoTop").click(
        function () {
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        })
    min_height ? min_height = min_height : min_height = 600;
    $(window).scroll(function () {
        var s = $(window).scrollTop();
        if (s > min_height) {
            $("#gotoTop").fadeIn();
        } else {
            $("#gotoTop").fadeOut();
        };
    });
};