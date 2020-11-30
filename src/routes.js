const productHandler = require('./handles/product');

module.exports = [
    {
        method: 'GET',
        path: '/api/v1/products',
        handler: productHandler.getAll
    },
    {
        method: 'GET',
        path: '/api/v1/products/{id}',
        handler: productHandler.find
    },
    {
        method: 'POST',
        path: '/api/v1/products',
        handler: productHandler.save
    },
    {
        method: 'DELETE',
        path: '/api/v1/products/{id}',
        handler: productHandler.remove
    },
    {
        method: 'PATCH',
        path: '/api/v1/products/{id}',
        handler: productHandler.update
    }
]