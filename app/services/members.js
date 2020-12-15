import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import fetch from 'fetch'

export default class MembersService extends Service {
    @service constants;

    async add(user) {
        const res = await fetch('http://localhost:4000/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        return res;
    }

    async getUser(user) {

        const res = await fetch('http://localhost:4000/users/signin', {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        return res;
    }
}
