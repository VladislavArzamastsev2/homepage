function hideOrShow(elementId) {
    const el = document.getElementById(elementId);
    if (el.style.display === "none") {
        el.style.display = "block";
    } else {
        el.style.display = "none";
    }
}

function hideElement(elementId) {
    const el = document.getElementById(elementId);
    el.style.display = "none";
}

function assignListener(elementId, action) {
    document.getElementById(elementId).addEventListener('click', action);
}