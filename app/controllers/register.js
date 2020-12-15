import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class RegisterController extends Controller {
    @service members;

    @tracked username;
    @tracked email;
    @tracked password;
    @tracked errorMessage;

    @action
    async registerUser(event) {
        event.preventDefault();
        const user = {
            userId: this.username,
            password: this.password,
            emial: this.email
        };

        const res = await this.members.add(user);

        if (res.status === 201) {
            alert('Registration Success');
            this.transitionToRoute('login');
        } else {
            const resData = await res.json()
            console.log(resData);
            this.errorMessage = resData.message;
        }

    }
}
