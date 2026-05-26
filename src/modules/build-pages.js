import { createActionBar, createHeader, createHeading, createProjectListItem, deleteHeaderElements, deleteMainElements } from "./handle-dom.js"
import { getFields } from "./handle-fields.js"
import { getFieldNumberTasks } from "./handle-tasks.js";


const buildFieldPage = () => {
    const fields = getFields();
    console.log(getFieldNumberTasks("29382"));

    deleteHeaderElements();
    deleteMainElements();

    let fragment = document.createDocumentFragment();

    const heading = createHeading(1, "Fields");
    fragment.appendChild(heading);

    fields.forEach(field => {
        const fieldElement = createProjectListItem(field.name, getFieldNumberTasks(field.id), 'gray', 'border');
        fragment.appendChild(fieldElement);
    });

    document.getElementsByTagName('main')[0].append(fragment);
}

const buildTodoList = () => {
    deleteMainElements()

    createHeader()

    createActionBar()
}

export {
    buildFieldPage, buildTodoList
}