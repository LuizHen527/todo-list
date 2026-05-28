import { createActionBar, createHeader, createHeading, createProjectListItem, createQuestElements, deleteHeaderElements, deleteMainElements } from "./handle-dom.js"
import { getFields } from "./handle-fields.js"
import { getQuestsByFieldId } from "./handle-quests.js";
import { getNumberTasksByField } from "./handle-tasks.js";


const buildFieldPage = () => {
    const fields = getFields();

    deleteHeaderElements();
    deleteMainElements();

    let fragment = document.createDocumentFragment();

    createHeading(1, "Fields", fragment);

    fields.forEach(field => {
        const fieldElement = createProjectListItem(field.name, getNumberTasksByField(field.id), field.id);
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