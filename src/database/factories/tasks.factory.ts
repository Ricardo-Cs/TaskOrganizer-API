import { Faker } from "@faker-js/faker";
import Task from "../../models/Task";
import { setSeederFactory } from "typeorm-extension";

const TasksFactory = setSeederFactory(Task, (faker: Faker) => {
    const task = new Task();
    task.name = faker.lorem.words(3);
    task.description = faker.lorem.sentences(3);
    task.user = faker.number.int({min: 1, max: 10});
    return task;
});

export default TasksFactory;