//Challenge
const form = document.getElementById('item-form');

function onSubmit(e) {
    e.preventDefault();

    const item = document.getElementById('item-input').value;

    if (item === '') {
        alert('all fields are required')
    }


    console.log(item);

}
form.addEventListener('submit', onSubmit)