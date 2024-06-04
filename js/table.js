import { find } from "./register"

const tbody = document.querySelector('#user-table')
let id

const index = async() => {
    tbody.innerHTML = ''

    const response = await fetch(`http://localhost:3000/users`)
    const data = await response.json()

    data.map((e) => {
      tbody.innerHTML +=  `
    <tr>
      <th scope="row">${e.id}</th>
      <td>${e.name}</td>
      <td>${e.apellido}</td>
      <td>${e.email}</td>
      <td>${e.peliculaFavorita}</td>
      <td>
        <button data-id=${e.id} class="btn btn-warning">Editar</button>
        <button data-id=${e.id} class="btn btn-danger">Eliminar</button>
      </td>
    </tr>`
    })
}

index()

tbody.addEventListener('click', async(e) => {
      if(e.target.classList.contains("btn-warning")){
      const id = e.target.getAttribute('data-id');
      find(id);
      window.location.href = './register.html';
    } else if (e.target.classList.contains("btn-danger")) {
      console.log('eliminar');
      id = e.target.getAttribute('data-id');
      deleteUser(id);
    };
  }
)


const deleteUser = async(id) => {
  const response = await fetch(`http://localhost:3000/users/${id}`, {
  method: "DELETE",
  headers: {
  'content-Type': "application/json"
  },
  })
}
