import { createHeading, createProjectListItem } from "./handle-dom.js"


const buildProjectPage = () => {
    let fragment = document.createDocumentFragment();

    const heading = createHeading(1, "My projects");
    const projectItem = createProjectListItem("Home Tasks", 5, 'gray', 'border');
    const projectItem1 = createProjectListItem("School Tasks", 2);
    const projectItem2 = createProjectListItem("Art", 3);
    const projectItem3 = createProjectListItem("Personal Tasks", 4);

    fragment.appendChild(heading);
    fragment.appendChild(projectItem);
    fragment.appendChild(projectItem1);
    fragment.appendChild(projectItem2);
    fragment.appendChild(projectItem3);

    document.getElementsByTagName('main')[0].append(fragment)
}

export {
    buildProjectPage
}