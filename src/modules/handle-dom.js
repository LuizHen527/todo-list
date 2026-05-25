

/**
 * 
 * @param {Number} headingNumber - Number of the heading. Ex: 1 for h1, 2 for h2...
 * @param {String} innerText - Text inside the element
 */
const createHeading = (headingNumber, innerText) => {
    const heading = document.createElement(`h${headingNumber}`);
    heading.innerText = innerText;
    return heading;
}

/**
 * 
 * @param {String} projectName - Project title
 * @param {Number} todoCount - Todo item count
 */
const createProjectListItem = (projectName, todoCount) => {
    
    const element = document.createElement('div');
    const title = document.createElement('p');
    const itensCount = document.createElement('p');

    element.classList = 'gray row project-item';
    element.id = projectName;

    element.addEventListener('click', () => {
        console.log(`click ${element.id}`);
        
    })

    title.innerText = projectName;
    itensCount.innerText = todoCount;

    element.appendChild(title);
    element.appendChild(itensCount);

    return element;

}

export {
    createHeading,
    createProjectListItem,
}