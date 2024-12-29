document.addEventListener('DOMContentLoaded', () => {
    const inputName = document.querySelector(".name");

    const setCursorToEnd = (input) => {
        input.selectionStart = input.selectionEnd = input.value.length;
    };

    const preventMidEditing = (event) => {
        setCursorToEnd(event.target);
        event.preventDefault();
    };

    inputName.addEventListener("input", (event) => {
        let value = event.target.value;

        const dotCount = (value.match(/\./g) || []).length;

        if (dotCount > 2) {
            const parts = value.split(".");
            value = parts.slice(0, 3).join(".");
        }

        const parts = value.split(" ");
        if (parts[0]) {
            parts[0] = parts[0].toUpperCase();
        }
        value = parts.join(" ");

        value = value
            .replace(/[^А-Яа-яЇїІіЄєҐґ. ]/g, "")
            .replace(/ (.)/g, (match, p1) => ` ${p1.toUpperCase()}`)
            .replace(/ ([А-Я])$/, (match, p1) => ` ${p1}. `)
            .replace(/\. ([А-Я])$/, (match, p1) => `. ${p1}.`);


        value = value.replace(/ {2,}/g, " ");


        event.target.value = value;


        setCursorToEnd(event.target);
    });

    inputName.addEventListener("keydown", (event) => {
        const value = event.target.value;
        const cursorPosition = event.target.selectionStart;


        if (event.key === "Backspace") {
            const dotPositions = [...value].reduce((acc, char, idx) => {
                if (char === ".") acc.push(idx);
                return acc;
            }, []);

            const nearestDot = dotPositions.find(pos => cursorPosition - 1 === pos);

            if (nearestDot !== undefined) {
                event.preventDefault();
                event.target.value = value.slice(0, nearestDot) + value.slice(nearestDot + 1);
                setCursorToEnd(event.target);
            } else if (cursorPosition !== value.length) {
                preventMidEditing(event);
            }
        } else if (event.key !== "ArrowLeft" && event.key !== "ArrowRight" && event.key !== "Delete") {

            const dotCount = (value.match(/\./g) || []).length;
            if (dotCount >= 2) {
                event.preventDefault();
            }
        }
    });

    inputName.addEventListener("click", preventMidEditing);

    inputName.addEventListener("focus", (event) => {
        setCursorToEnd(event.target);
    });
});


