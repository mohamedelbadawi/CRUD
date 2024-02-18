const baseUrl = `http://localhost:3001/products`

export const deleteRequest = (productId) => {
    return fetch(`${baseUrl}/${productId}`, {
        method: 'DELETE',
    }).then((res) => res.json())
}

export const fetchProducts = () => {
    return fetch(`${baseUrl}`)
        .then(res => res.json())
}

export const getProduct = (productId) => {
    return fetch(`${baseUrl}/${productId}`).then(res => res.json())
}
export const addProduct = (product) => {
    return fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    }).then(res => res.json())
}

export const updateProduct = (id, product) => {

    return fetch(`${baseUrl}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    }).then(res => { res.json() })
}