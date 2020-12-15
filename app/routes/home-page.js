import Route from '@ember/routing/route';

export default class HomePageRoute extends Route {
    model() {
        console.log('setting');
        return { token: document.cookie };
    }
}
