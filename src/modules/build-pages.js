import { createActionBar, createHeader, createHeading, createProjectListItem, createQuestElements, deleteHeaderElements, deleteMainElements } from "./handle-dom.js"
import { getFieldIdByQuestId, getFields } from "./handle-fields.js"
import { getQuestsByFieldId } from "./handle-quests.js";
import { getNumberTasksByField, getTaskByQuestId } from "./handle-tasks.js";


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

/**
 * 
 * @param {String} fieldId 
 */
const buildQuestPage = (fieldId) => {
    const quests = getQuestsByFieldId(fieldId);

    const actionBar = document.querySelector('.action-bar');
    const head = document.querySelector('.dialog');

    if (!head) {
        createHeader();
    }
    
    if (actionBar) {
        actionBar.remove()

        createActionBar("quest_page", buildFieldPage);
    } else {
        createActionBar("quest_page", buildFieldPage);
    }

    deleteMainElements();    

    createQuestElements(quests)

}

/**
 * 
 * @param {String} questId 
 */
const buildTodoList = (questId) => {
    deleteMainElements();
    
    const haveActionBar = document.querySelector('.action-bar');
    
    if (haveActionBar) {
        haveActionBar.remove()
    }

    const fieldId = getFieldIdByQuestId(questId);
    
    createActionBar("todo_page", function(){ return buildQuestPage(fieldId)});

    console.log(getTaskByQuestId(questId))
}

export {
    buildFieldPage,
    buildTodoList,
    buildQuestPage,
}