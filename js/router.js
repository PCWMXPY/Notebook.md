(function () {
    'use strict';
}());
/*
 * @author WMXPY
 * @contect wm@wmpcxpy.com
 */
const quiz = {
    data: {
        message: 'test'
    },
    temperate: '<div>{{lengths}}</div><div v-for="(question,index) in tests"><p>第{{convert(index)}}题: <strong v-bind:class="question.coloreffect">{{question.question}}</strong></p><p class="re-small" v-for="(choices,cindex) in question.answer"><input type="radio" v-on:click="clicked" class="re-radio" v-bind:value="cindex" v-model="question.picked">&nbsp; <span v-bind:class="choices[1]" v-on:click="clicktext(index,cindex)"><label class="re-label">{{downvert(cindex)}}</label>&nbsp;{{choices[0]}}</span></p><strong>{{question.picked}}</strong><hr></div><button type="button" class="re-button button button-block button-rounded" v-on:click="grade">计算得分</button>'
}
const quizrouter = {
    template: quiz.temperate,
    data: function () {
        return quiz.data;
    }
};
const routes = [{
    path: '/quiz',
    component: quizrouter
}];
const router = new VueRouter({
    routes: routes
});
const app_router = new Vue({
    router
});
app_router.$mount('#main');