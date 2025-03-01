export class User {
    id: string = '';
    name: string = '';
    email: string = '';
    password: string = '';
    expiresIn: number | undefined;

    token: string = '';
    cookie: string = '';
}
