import { Faker } from "@faker-js/faker";
import Position from "../../models/Position";
import { setSeederFactory } from "typeorm-extension";

const PositionsFactory = setSeederFactory(Position, (faker: Faker) => {
    const position = new Position();
    position.id = faker.number.int({min: 1, max: 5})
    position.name = faker.person.jobType();
    return position;
});

export default PositionsFactory;