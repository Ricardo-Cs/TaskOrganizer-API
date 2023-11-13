import { Faker } from "@faker-js/faker";
import User from "../../models/User";
import { setSeederFactory } from "typeorm-extension";

const UsersFactory = setSeederFactory(User, (faker: Faker) => {
    const user = new User();

    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    user.full_name = `${firstName} ${lastName}`;
    user.email = `${firstName + lastName}@gmail.com`;
    user.password = faker.internet.password();
    user.position = faker.number.int({min: 1, max: 5});
    return user;
});

export default UsersFactory;