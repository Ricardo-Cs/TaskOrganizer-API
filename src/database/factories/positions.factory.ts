import { Faker } from "@faker-js/faker";
import Position from "../../models/Position";
import { setSeederFactory } from "typeorm-extension";

const PositionsFactory = setSeederFactory(Position, (faker: Faker) => {
    const position = new Position();
    position.name = faker.person.jobType();
    return position;
});

export default PositionsFactory;