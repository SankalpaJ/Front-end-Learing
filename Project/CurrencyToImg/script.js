let input = document.querySelector('#con');
let submit = document.querySelector('#submit');
let value = document.querySelector('#value');

submit.addEventListener('click', function(e) {
    e.preventDefault(); // prevent page reload

    if (input.value.trim() === '') {
        alert("Please enter a country name");
    } else {
        fun(input.value.trim());
    }
});

async function fun(val) {
    try {
        let response = await fetch('https://restcountries.com/v3.1/name/' + val);
        if (!response.ok) {
            throw new Error("Country not found");
        }

        let res = await response.json();
        console.log(Object.values(res[0].currencies)[0].name);

        value.innerHTML =
            Object.values(res[0].currencies)[0].name + ' ' +
            Object.values(res[0].currencies)[0].symbol;
    } catch (error) {
        console.error(error);
        value.innerHTML = `<span style="color:red;">${error.message}</span>`;
    }
}
