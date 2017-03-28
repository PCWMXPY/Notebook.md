(function () {
    'use strict';
}());
/*
 * @author WMXPY
 * @contect wm@wmpcxpy.com
 */
function clickthis() {
    document.getElementById('input').click();
}
const scanner = {
    isnumber: function (num) {
        if (num == '.') {
            return true;
        }
        if (num != null && num != "") {
            return !isNaN(num);
        }
        return false;
    },
    getnumbers: function (string) {
        let re = ['', ''];
        for (let i = 0; i < string.length; i++) {
            if (this.isnumber(string[i])) {
                if (string[i] == ' ') {
                    i++;
                } else {
                    re[0] += (string[i]);
                }
            } else {
                re[1] += (string.substring(i - 1, string.length));
                i = string.length + 1;
            }
        }
        return re;
    },
    getanswers: function (string) {
        let re = '';
        for (let i = 0; i < string.length; i++) {
            if (string[i] == ' ') {
                re += (string.substring(i + 1, string.length));
                i = string.length + 1;
            }
        }
        return re;
    },
    getcorrect: function (string) {
        return string.substring(2, string.length);
    },
    convert: function (string) {
        const inn = string.split('\n');
        let re = [],
            obj = new Object;
        for (let i = 0; i < inn.length; i++) {
            if (inn[i][0] == '$' && inn[i][1] == '%') {
                obj.correct = parseInt(this.getcorrect(inn[i]));
            } else if (this.isnumber(inn[i][0])) {
                re.push(obj);
                obj = new Object;
                const question = this.getnumbers(inn[i]);
                obj.question = question[1];
                obj.questionnum = question[0];
                obj.answer = [];
                obj.description = '';
            } else {
                const thisanswer = this.getanswers(inn[i])
                if (thisanswer.length > 1) {
                    obj.answer.push(thisanswer);
                }
            }
        }
        re.push(obj);
        re.shift();
        return re;
    },
    make: function (examname, mcode, string) {
        let json = new Object;
        json.examname = examname;
        json.mcode = mcode;
        json.questions = this.convert(string);
        json.visits = 0;
        return json;
    }
}