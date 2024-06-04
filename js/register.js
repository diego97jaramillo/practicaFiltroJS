const email = document.querySelector('#email');
const password = document.querySelector('#password');
const apellido = document.getElementById('apellido');
const nombre = document.getElementById('nombre');
const pelicula = document.getElementById('pelicula');
const button = document.querySelector('button');
const form = document.querySelector('form');
const tbody = document.getElementById('user-table');
let id

const crearUsuario = async(email, nombre, apellido, pelicula, password) => {
  const usuarioRegistrado = {
                name: nombre.value,
                apellido: apellido.value,
                email: email.value,
                password: password.value,
                peliculaFavorita: pelicula.value
  }


  const response = await fetch(`http://localhost:3000/users`, {
    method: "POST",
    headers: {
      'content-Type': "application/json"
    },
    body: JSON.stringify(usuarioRegistrado)
  })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
      if(id === undefined) {
        crearUsuario(email, nombre, apellido, pelicula, password)
        window.location.href = '../pages/table.html'
      } else {
        updateUsuario(id, email, nombre, apellido, pelicula, password)
        idImported = undefined;
      }
    }
)

export const find = async(id) => {
    const response = await fetch(`http://localhost:3000/users/${id}`)
    const data = await response.json()
    return data
}



const updateUsuario = async(id, email, nombre, apellido, pelicula, password) => {
  console.log(pelicula.value);
  const usuarioActualizar = {
    name: nombre.value,
    apellido: apellido.value,
    email: email.value,
    password: password.value,
    peliculaFavorita: pelicula.value
  }

  const response = await fetch(`http://localhost:3000/users/${id}`, {
  method: "PUT",
  headers: {
  'content-Type': "application/json"
  },
  body: JSON.stringify(usuarioActualizar)
  })
  form.reset()
}





