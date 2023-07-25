const url = "http://localhost:5500/api"


function getUsers() {

    fetch(url)
        .then(res => res.json())
        .then(data => renderApiResult.textContent = JSON.stringify(data))
        .catch(err => console.error(err))
}

function getUser() {

    fetch(`${url}/1`)
        .then(res => res.json())
        .then(data => {
            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar
        })
        .catch(err => console.error(err))
}

function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.error(error))

}

function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(err => console.log(err))
}

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        body: JSON.stringify(id),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
       .then(response => response.json())
       .then(data => alertApi.textContent = data)
       .catch(err => console.log(err))
}

const newUser = {
    name: "Olivia Zars",
    city: "Rio do Sul",
    avatar: "http://picsum.photos/200/300"
}
const updatedUser = {
    name: "Jair",
    city: "Recife",
    avatar: "http://picsum.photos/200/300"
}


deleteUser(1)
addUser(newUser)
updateUser(updatedUser, 5)
getUsers()
getUser()