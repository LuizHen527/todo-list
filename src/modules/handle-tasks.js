import data from "../assets/mocked-data.js"

/**
 * 
 * @param {String} fieldId
 */
const getNumberTasksByField = (fieldId) => {
    let tasks = data.tasks;
    let sumTasks = 0;

    let matchedQuests = data.quests.filter(quest => quest["fieldId"] === fieldId);
    matchedQuests = matchedQuests.map(quest => quest["id"]);

    matchedQuests.forEach(questId => {
        const tasksCount = tasks.filter(task => task["questId"] === questId).length;

        sumTasks = sumTasks + tasksCount;
    })

    return sumTasks;
}

const getNumberTasksByQuest = (questId) => {
    let tasks = data.tasks;

    let matchedTasks = tasks.filter(task => task.questId === questId);

    return matchedTasks.length
}

export {
    getNumberTasksByField,
    getNumberTasksByQuest,
}