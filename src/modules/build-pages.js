import { createActionBar, createHeader, createHeading, createProjectListItem, createQuestElements, deleteHeaderElements, deleteMainElements } from "./handle-dom.js"
import { getFields } from "./handle-fields.js"
import { getQuestsByFieldId } from "./handle-quests.js";
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
        const fieldElement = createProjectListItem(field.name, getFieldNumberTasks(field.id), field.id);
        fragment.appendChild(fieldElement);
    });

    document.getElementsByTagName('main')[0].append(fragment);
}

const buildTodoList = () => {
    deleteMainElements();

    createHeader();

    createActionBar("todo_page");
}

/**
 * 
 * @param {String} fieldId 
 */
const buildQuestPage = (fieldId) => {
    const quests = getQuestsByFieldId(fieldId);

    deleteMainElements();

    createHeader();

    createActionBar("quest_page");

    createQuestElements(quests)

}

export {
    buildFieldPage,
    buildTodoList,
    buildQuestPage,
}