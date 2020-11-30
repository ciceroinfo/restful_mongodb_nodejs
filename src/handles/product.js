const ProductModel = require('../models/product');

const transformer = product => ({

    type: 'products',
    id: product.id,
    attributes: {
        name: product.name,
        price: product.price
    },
    links: {
        self: `/api/v1/products/${product.id}`
    }

});

const find = async (request, h) => {

    const product = await ProductModel.findById(request.params.id);

    return h.response({ data: transformer(product) });
};

const getAll = async (request, h) => {

    const products = await ProductModel.find({});

    return { data: products.map(transformer) };
};

const save = async (request, h) => {

    console.log(request.payload);
    const {name, price} = request.payload;

    const product = new ProductModel;
    product.name = name;
    product.price = price;

    await product.save();

    return h.response({ data: transformer(product) }).code(201);
};

const remove = async (request, h) => {
    console.log(request.params);
    await ProductModel.findOneAndDelete({ _id: request.params.id})
    return h.response().code(204);
};

const update = async (request, h) => {
    console.log(request.params);
    const product = await ProductModel.findOne({ _id: request.params.id}, request.payload)
    return h.response({ data: transformer(product) }).code(201);
};

module.exports = {
    getAll,
    save,
    remove,
    find,
    update
};