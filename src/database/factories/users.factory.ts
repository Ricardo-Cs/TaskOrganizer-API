import { Faker } from "@faker-js/faker";
import User from "../../models/User";
import { setSeederFactory } from "typeorm-extension";

const UsersFactory = setSeederFactory(User, (faker: Faker) => {
    const user = new User();
    user.full_name = faker.person.fullName();
    user.email = faker.internet.email();
    return user;
});

export default UsersFactory;