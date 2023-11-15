import { Faker } from "@faker-js/faker";
import Position from "../../models/Position";
import { setSeederFactory } from "typeorm-extension";

const PositionsFactory = setSeederFactory(Position, (faker: Faker) => {
    const position = new Position();
    const existingNames: string[] = [];
    let positionName;

    // Continue gerando novos nomes até encontrar um que não esteja em existingNames
    while (true) {
        positionName = faker.person.jobType();

        // Verifique se o nome do cargo já existe em existingNames
        if (!existingNames.includes(positionName)) {
            break;
        }
    }

    position.name = positionName;
    existingNames.push(position.name);
    
    return position;
});

export default PositionsFactory;