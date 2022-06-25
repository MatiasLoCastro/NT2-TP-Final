import Vue from "vue"
import VueForm from "vue-form"


var options = {
    validators: {
        'no-espacios': function (value) {
            return !value.includes(' ');
        },

        'min-length': function (value) {
            return value.length >= 3;
        },
        'max-length': function (value) {
            return value.length <= 30;
        },
    }
}


Vue.use(VueForm, options)