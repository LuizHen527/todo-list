import { buildFieldPage, buildQuestPage } from "./build-pages.js";

/**
 *
 * @param {Number} headingNumber - Number of the heading. Ex: 1 for h1, 2 for h2...
 * @param {String} innerText - Text inside the element
 */
const createHeading = (headingNumber, innerText) => {
  const heading = document.createElement(`h${headingNumber}`);
  heading.innerText = innerText;
  return heading;
};

/**
 * 
 * @param {String} innerText 
 * @param {Function} onClickFunction
 * @returns {HTMLButtonElement}
 */
const createButton = (innerText, onClickFunction) => {
    const button = document.createElement('button');
    button.innerText = innerText;

    if(onClickFunction) {
        button.addEventListener('click', onClickFunction)
    }

    return button
}

/**
 *
 * @param {String} projectName - Project title
 * @param {Number} todoCount - Todo item count
 */
const createProjectListItem = (projectName, todoCount) => {
  const element = document.createElement("div");
  const title = document.createElement("p");
  const itensCount = document.createElement("p");

  element.classList = "gray row project-item";
  element.id = projectName;

  title.innerText = projectName;
  itensCount.innerText = todoCount;

  element.appendChild(title);
  element.appendChild(itensCount);

  element.addEventListener("click", () => {
    console.log(`click ${element.id}`);
  });

  return element;
};


/**
 * Create dialog box and the head sprite and append to header
 */
const createHeader = () => {
  const element = document.createElement("div");
  const dialogBox = document.createElement("div");
  const dialog = document.createElement("p");
  const head = document.createElement("div");

  element.classList = 'gray row dialog';
  head.classList = 'dialog__head'
  dialog.classList = 'para-box__para'
  dialogBox.classList = 'dialog__para-box'

  dialog.textContent = `Lorem Ipsum is simply dummy text of the printing
   and typesetting industry.`;

  element.appendChild(dialogBox);
  element.appendChild(head);
  dialogBox.appendChild(dialog);

  document.querySelector("header").appendChild(element);
};

/**
 * Create Action bar with all the buttons and append to header
 * @param {String} buttonConfig - Select which buttons you want according to the page
 */
const createActionBar = (buttonConfig) => {
    let addButton;
    let editButton;
    let deleteButton;
    let goBackButton;

    const element = document.createElement('div');
    const myLevelButton = createButton('My Level');
    
    if(buttonConfig === "todo_page") {
      addButton = createButton(`Add List`);
      editButton = createButton('Edit List');
      deleteButton = createButton('Delete List');
      goBackButton = createButton('Go back', buildQuestPage);
   
    } else if(buttonConfig === "quest_page") {
      addButton = createButton('Add quest');
      editButton = createButton('Edit quest');
      deleteButton = createButton('Delete quest');
      goBackButton = createButton('Go back', buildFieldPage);

    }

    element.appendChild(goBackButton);
    element.appendChild(addButton);
    element.appendChild(editButton);
    element.appendChild(deleteButton);
    element.appendChild(myLevelButton);


    document.querySelector("header").appendChild(element);
}

/**
 * Delete elements inside the main HTML tag
 */
const deleteMainElements = () => {
  const mainElement = document.querySelector("main");
  mainElement.innerHTML = "";
};

const deleteHeaderElements = () => {
    const headerElement = document.querySelector("header");
    headerElement.innerHTML = "";
}

export { createHeading, createProjectListItem, deleteMainElements, createHeader, createActionBar, deleteHeaderElements };
