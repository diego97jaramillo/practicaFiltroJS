const form = document.querySelector('form');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');


form.addEventListener('submit', async(e) => {
    e.preventDefault()
    const infoValidated = await validateEmail(e.target.emailInput.value)

    if(infoValidated !== undefined){
        // window.location.href = '../pages/table.html'
        if (infoValidated.password === passwordInput.value ) {
            window.location.href = '../pages/table.html'
        } else alert('contraseña erronea')
    } else alert('registrate con hundiendo en el link')
})


const validateEmail = async(email) => {
    const response = await fetch(`http://localhost:3000/users?email=${email}`)
    const data = await response.json()
    if(data.length !== 0){
        console.log(data);
            return data[0]
        } else {
            return undefined
        };
}

