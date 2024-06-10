
fetch('https://reqres.in/api/users?page=2')
    .then(response => response.json())
    .then(data => {
        const users = data.data;
        const userTableBody = document.querySelector('#user-table tbody');

        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.first_name}</td>
                <td>${user.last_name}</td>
                <td>${user.email}</td>
                <td><img src="${user.avatar}" alt="Avatar of ${user.first_name} ${user.last_name}" width="50" height="50"></td>
            `;
            userTableBody.appendChild(row);
        });
    });

fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => {
        const productContainer = document.getElementById('product-container');

        data.forEach(product => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${product.images[0]}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>Price: $${product.price}</p>
                <p>${product.description}</p>
            `;
            productContainer.appendChild(card);
        });
    });
