import { Router } from 'express';
import UserMap from '../mappers/UserMap';

import CreateUserService from '../services/CreateUserService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
        name,
        email,
        password,
    });

    const mappedUser = UserMap.toDTO(user);

    return response.json(mappedUser);
});

export default usersRouter;
