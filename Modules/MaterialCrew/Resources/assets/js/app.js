window.Vue = require('vue');
require('vue-resource');

/**
 * We'll register a HTTP interceptor to attach the "CSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.
 */

Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken);

    next();
});

Vue.component('AirlineList', require('./components/AirlineList.vue'));
Vue.component('airport-wx', require('./components/AirportWX.vue'));
Vue.component('flight-widget', require('./components/FlightWidget.vue'));
Vue.component('pacx-flight-log', require('./components/PacxFlightLog'));

const app = new Vue({
    el: '#app'
});
const nav = new Vue({
    el: '.sidenav'
});