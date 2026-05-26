import { createActionBar, createHeader, createHeading, createProjectListItem, deleteHeaderElements, deleteMainElements } from "./handle-dom.js"
import { getProjects } from "./handle-fields.js"
import { getFieldNumberTasks } from "./handle-tasks.js";


const buildProjectPage = () => {
    const projects = getProjects();
    console.log(getFieldNumberTasks("29382"));

    deleteHeaderElements();
    deleteMainElements();

    let fragment = document.createDocumentFragment();

    const heading = createHeading(1, "My projects");
    fragment.appendChild(heading);

    projects.forEach(project => {
        const projectElement = createProjectListItem(project.name, 5, 'gray', 'border');
        fragment.appendChild(projectElement);
    });

    document.getElementsByTagName('main')[0].append(fragment);
}

const buildTodoList = () => {
    deleteMainElements()

    createHeader()

    createActionBar()
}

export {
    buildProjectPage, buildTodoList
}