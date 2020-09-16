import User from '../models/User';

export default class UserMap {
    public static toDTO(user: User) {
        return {
            id: user.id,
            name: user.name,
        };
    }
}
