console.log(filedata);
let read = [];
let buffer = false,
    question = new Object;
const inn = filedata.split('\n');
for (let i = 0; i < inn.length; i++) {
    // console.log(inn[i][0]);
    // console.log(scanner.isnumber(inn[i][0]));
    if (scanner.isnumber(inn[i][0])) {
        if (buffer == true) {
            buffer = false;
            read.push(question);
            question = new Object;
            i--;
        } else {
            buffer = true;
            let topic = false,
                now = 1,
                questionnum = inn[i][0];
            while (topic == false) {
                console.log(inn[i][now]);
                if (scanner.isnumber(inn[i][now]) || inn[i][now] == '.') {
                    if (inn[i][now] == ' ') {
                        now++;
                    } else {
                        questionnum += inn[i][now++];
                    }
                } else {
                    topic = true;
                    question.num = questionnum;
                }
            }
            console.log(questionnum);
            console.log(inn[i][now]);

        }
        // document.getElementById('display').innerHTML +=
        //     '<i class="fa fa-arrow-circle-right"></i>';
    } else {
        // document.getElementById('display').innerHTML +=
        //     '<i class="fa fa-male"></i>';
    }
    // document.getElementById('display').innerHTML += inn[i] + '<br>';
}
document.getElementById('display').innerHTML += read;
console.log(read);