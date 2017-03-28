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