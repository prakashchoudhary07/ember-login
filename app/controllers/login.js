import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginController extends Controller {
    @service members;

    @tracked username;
    @tracked password;
    @tracked errorMessage;

    @action
    async loignUser(event) {
        event.preventDefault();
        const user = {
            userId: this.username,
            password: this.password
        };

        const res = await this.members.getUser(user);

        if (res.status === 200) {
            console.log('Success');
            this.transitionToRoute('home-page');
        } else {
            const resData = await res.json()
            this.errorMessage = resData.message;
        }
    }
}
