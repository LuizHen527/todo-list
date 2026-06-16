import data from "../assets/mocked-data.js"

const getFields = () => {

    return data.fields;
}

const getFieldIdByQuestId = (questId) => {
    return data.quests.find(quest => quest.id == questId).fieldId;
}

export {
    getFields,
    getFieldIdByQuestId
}