const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', (newNameOutput) => {
    nameOutput.textContent = newNameOutput.currentTarget.value;
    const trimmedValue = nameInput.value.trim();
  nameOutput.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});




