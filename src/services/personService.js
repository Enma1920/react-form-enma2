const baseUrl = 'http://localhost:3001/persons';


const getAll = () => {
    const request = fetch(baseUrl,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        .then(response => {  return response.json()})

    });
    return request;
};

const create = (newObject) => {
    const request = fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newObject)
    })
    .then(response => {
        return response.json()
    })
    return request;
};

const updatePerson = (id, newObject) => {
    const request= fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newObject)
    })
    .then(response => {
        return response.json()
    })
    return request;
};
const deletePerson = (id) => {
    const request = fetch(`${baseUrl}${id}`, {
        method: 'DELETE',
    })
    .then(response => { 
        return response.json()
    })
    return request;
}

export default { 
    getAll: getAll, 
    create: create,
    updatePerson: updatePerson,
    deletePerson: deletePerson
};