function myDOMBuilder(selector) {
    const myElement = document.querySelector(selector);

    if (!myElement) {
        throw new Error(`Element with selector "${selector}" not found.`);
    }

    return {
        setAttribute(key, value) {
            myElement.setAttribute(key, value);
            return this;
        },
        addEventListener(eventName, handler) {
            myElement.addEventListener(eventName, handler);
            return this;
        },
        onClick(handler) {
            myElement.addEventListener('click', handler);
            return this;
        },
        setTextContent(content) {
            myElement.textContent = content;
            return this;
        },
        addClass(className) {
            if (Array.isArray(className)) {
                myElement.classList.add(...className);
            } else {
                myElement.classList.add(className);
            }
            return this;
        },
        removeClass(className) {
            myElement.classList.remove(className);
            return this;
        },
    };
}
///////////////////////////////////////////////////////////
function render(element) {
    const { name, attributes, children } = element;

    function renderAttributes(attributes) {
        if (!attributes || attributes.length === 0) {
            return '';
        }

        const attributeStrings = attributes.map(attribute => {
            const { key, value } = attribute;
            return ` ${key}="${value}"`;
        });

        return attributeStrings.join('');
    }

    function renderChildren(children) {
        if (!children || children.length === 0) {
            return '';
        }

        const childStrings = children.map(child => {
            if (typeof child === 'string') {
                return child;
            } else {
                return render(child);
            }
        });

        return childStrings.join('');
    }

    const elementString = `<${name}${renderAttributes(attributes)}>${renderChildren(children)}</${name}>`;
    return elementString;
}
//////////////////////////////////////////////////////////////////////////////////////
function generateForm(formInputs) {
    const form = document.createElement("form");
    form.setAttribute("action", "");

    formInputs.forEach(input => {
        const label = document.createElement("label");
        label.setAttribute("for", input.id);
        label.textContent = input.label;

        if (input.Type === "text" || input.Type === "email" || input.Type === "number" || input.Type === "password") {
            const inputField = document.createElement("input");
            inputField.setAttribute("type", input.inputType || "text");
            inputField.setAttribute("id", input.id);
            inputField.setAttribute("placeholder", input.placeholder || "");
            form.appendChild(label);
            form.appendChild(inputField);
        } else if (input.Type === "checkbox") {
            const checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("id", input.id);
            form.appendChild(checkbox);
            form.appendChild(label);
        } else if (input.Type === "select" && input.options && input.options.length > 0) {
            const select = document.createElement("select");
            select.setAttribute("id", input.id);

            input.options.forEach(option => {
                const optionElement = document.createElement("option");
                optionElement.setAttribute("value", option.value);
                optionElement.textContent = option.label;
                select.appendChild(optionElement);
            });

            form.appendChild(label);
            form.appendChild(select);
        }
    });

    document.body.appendChild(form);
}


