import { Injectable } from '@angular/core';
import { User } from 'src/app/common/dataModels';

@Injectable()
export class AuthService {
    currentUser: User;
    constructor() { }

    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: 'userName',
            firstName: 'Sam',
            lastName: 'Duga'
        };
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}
