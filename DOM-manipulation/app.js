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



