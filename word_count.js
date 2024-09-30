document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById("text-area-1");
    const charCountDisplay = document.getElementById("char-count");
    const btnConfirm = document.getElementById("btn-confirm");

    const char_count = () => {
        const charCount = element.value.length;
        charCountDisplay.textContent = charCount;
    };

    btnConfirm.addEventListener('click', char_count);
});