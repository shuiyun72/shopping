import Vue from 'vue';
import lodash from 'lodash';
Vue.prototype.DataFor = function (num, data) {
    let List = [];
    for (let i = 0; i < num; i++) {
        List.push(...data)
    }
    return List
}

Vue.prototype.W = function (num) {
    return `width:${num}px;height:${num}px;`;
}

Vue.prototype._ = lodash