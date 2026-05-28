import data from "../assets/mocked-data.js"

/**
 * 
 * @param {String} fieldId
 * @returns Array with quests
 */
const getQuestsByFieldId = (fieldId) => {
    return data['quests'].filter(quest => quest.fieldId === fieldId)
}

export {
    getQuestsByFieldId,
}