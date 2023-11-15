import { Faker } from "@faker-js/faker";
import Task from "../../models/Task";
import { setSeederFactory } from "typeorm-extension";
import { EPositionStatus } from "../../models/EPositionStatus";

const TasksFactory = setSeederFactory(Task, (faker: Faker) => {
    const task = new Task();
    task.name = faker.lorem.words(3);
    task.description = faker.lorem.sentences(3);
    task.user = faker.number.int({min: 1, max: 10});

    // Pega valor aleatório do Enum de status.
    const statusValues = Object.values(EPositionStatus);
    task.status = statusValues[Math.floor(Math.random() * statusValues.length)];

    return task;
});

export default TasksFactory;