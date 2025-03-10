<<<<<<< HEAD
<<<<<<< HEAD
// const draggables = document.querySelectorAll('#draggable-list li');
// const container = document.getElementById('draggable-list');

// draggables.forEach(draggable => {
//     draggable.addEventListener('dragstart', () => {
//         draggable.classList.add('dragging');
//     });

//     draggable.addEventListener('dragend', () => {
//         draggable.classList.remove('dragging');
//     });
// });

// container.addEventListener('dragover', e => {
//     e.preventDefault();
//     const afterElement = getDragAfterElement(container, e.clientY);
//     const draggable = document.querySelector('.dragging');
//     if (afterElement == null) {
//         container.appendChild(draggable);
//     } else {
//         container.insertBefore(draggable, afterElement);
//     }
// });

// function getDragAfterElement(container, y) {
//     const draggableElements = [...container.querySelectorAll('li:not(.dragging)')];

//     return draggableElements.reduce((closest, child) => {
//         const box = child.getBoundingClientRect();
//         const offset = y - box.top - box.height / 2;
//         if (offset < 0 && offset > closest.offset) {
//             return { offset: offset, element: child };
//         } else {
//             return closest;
//         }
//     }, { offset: Number.NEGATIVE_INFINITY }).element;
// }

const draggables = document.querySelectorAll('#draggable-list li');
const container = document.getElementById('draggable-list');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

container.addEventListener('dragover', e => {
    e.preventDefault();
    const afterElement = Array.from(container.children).find(child => {
        const rect = child.getBoundingClientRect();
        return e.clientY < rect.top + rect.height / 2;
    });
    const draggable = document.querySelector('.dragging');
    if (afterElement == null) {
        container.appendChild(draggable);
    } else {
        container.insertBefore(draggable, afterElement);
    }
});
=======
// const draggables = document.querySelectorAll('#draggable-list li');
// const container = document.getElementById('draggable-list');

// draggables.forEach(draggable => {
//     draggable.addEventListener('dragstart', () => {
//         draggable.classList.add('dragging');
//     });

//     draggable.addEventListener('dragend', () => {
//         draggable.classList.remove('dragging');
//     });
// });

// container.addEventListener('dragover', e => {
//     e.preventDefault();
//     const afterElement = getDragAfterElement(container, e.clientY);
//     const draggable = document.querySelector('.dragging');
//     if (afterElement == null) {
//         container.appendChild(draggable);
//     } else {
//         container.insertBefore(draggable, afterElement);
//     }
// });

// function getDragAfterElement(container, y) {
//     const draggableElements = [...container.querySelectorAll('li:not(.dragging)')];

//     return draggableElements.reduce((closest, child) => {
//         const box = child.getBoundingClientRect();
//         const offset = y - box.top - box.height / 2;
//         if (offset < 0 && offset > closest.offset) {
//             return { offset: offset, element: child };
//         } else {
//             return closest;
//         }
//     }, { offset: Number.NEGATIVE_INFINITY }).element;
// }

const draggables = document.querySelectorAll('#draggable-list li');
const container = document.getElementById('draggable-list');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

container.addEventListener('dragover', e => {
    e.preventDefault();
    const afterElement = Array.from(container.children).find(child => {
        const rect = child.getBoundingClientRect();
        return e.clientY < rect.top + rect.height / 2;
    });
    const draggable = document.querySelector('.dragging');
    if (afterElement == null) {
        container.appendChild(draggable);
    } else {
        container.insertBefore(draggable, afterElement);
    }
});
>>>>>>> c2b5a87dca8ce0d93ff35090e2151aee56ee7736
=======
// const draggables = document.querySelectorAll('#draggable-list li');
// const container = document.getElementById('draggable-list');

// draggables.forEach(draggable => {
//     draggable.addEventListener('dragstart', () => {
//         draggable.classList.add('dragging');
//     });

//     draggable.addEventListener('dragend', () => {
//         draggable.classList.remove('dragging');
//     });
// });

// container.addEventListener('dragover', e => {
//     e.preventDefault();
//     const afterElement = getDragAfterElement(container, e.clientY);
//     const draggable = document.querySelector('.dragging');
//     if (afterElement == null) {
//         container.appendChild(draggable);
//     } else {
//         container.insertBefore(draggable, afterElement);
//     }
// });

// function getDragAfterElement(container, y) {
//     const draggableElements = [...container.querySelectorAll('li:not(.dragging)')];

//     return draggableElements.reduce((closest, child) => {
//         const box = child.getBoundingClientRect();
//         const offset = y - box.top - box.height / 2;
//         if (offset < 0 && offset > closest.offset) {
//             return { offset: offset, element: child };
//         } else {
//             return closest;
//         }
//     }, { offset: Number.NEGATIVE_INFINITY }).element;
// }

const draggables = document.querySelectorAll('#draggable-list li');
const container = document.getElementById('draggable-list');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

container.addEventListener('dragover', e => {
    e.preventDefault();
    const afterElement = Array.from(container.children).find(child => {
        const rect = child.getBoundingClientRect();
        return e.clientY < rect.top + rect.height / 2;
    });
    const draggable = document.querySelector('.dragging');
    if (afterElement == null) {
        container.appendChild(draggable);
    } else {
        container.insertBefore(draggable, afterElement);
    }
});
>>>>>>> c2b5a87dca8ce0d93ff35090e2151aee56ee7736
