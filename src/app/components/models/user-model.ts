export class UserModel {
    constructor(
        public firstName = '',
        public lastName = '',
        public email = '',
        public sendProducts = false,
        public phone = '',
        public address?: string) { }
}
