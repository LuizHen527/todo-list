

export function createButtom(innerText, classList) {
    const button = document.createElement("button");

    button.type = "button";

    button.innerText = innerText;

    button.classList = classList;

    return button;
}