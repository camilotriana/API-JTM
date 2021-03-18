const express = require('express');
const router = express.Router();
const Customer = require('../../models/modelCustomer');


//Obtiene todos los clientes
router.get('/', (req, res, next) => {
    Customer.find()
        .then((customers) => {
            res.json(customers);
        })
        .catch(err => res.json(err));
});

//Crear un cliente
router.post('/addCustomer', (req, res, next) => {
    const name = req.body.name;
    const lastname = req.body.lastname;
    const document = req.body.document;
    const phone = req.body.phone;
    const print = req.body.prints;

    newCustomer = new Customer({
        name: name,
        lastname: lastname,
        document: document,
        phone: phone,
        prints: print
    });
    newCustomer.save()
        .then(customer => {
            res.json(customer);
        })
        .catch(err => res.json(err));

});

//ActualizarCliente
router.put('/updateCustomer/:id', (req, res, next) => {
    let id = req.params.id;
    Customer.findById(id)
        .then(customer => {
            customer.name = req.body.name;
            customer.lastname = req.body.lastname;
            customer.document = req.body.document;
            customer.phone = req.body.phone;
            customer.prints = req.body.prints;
            customer.save()
                .then(customer => {
                    res.send({
                        message: 'CLIENTE ACTUALIZADO CORRECTAMENTE',
                        status: 'success',
                        customer: customer
                    });
                })
                .catch(err => res.json(err));
        })
        .catch(err => res.json(err));
});

//EliminarCliente
router.delete('/delCustomer/:id', (req, res, next) => {
    let id = req.params.id;
    Customer.findById(id)
        .then(customer => {
            customer.delete()
                .then(customer => {
                    res.send({
                        message: 'CLIENTE ELIMINADO CORRECTAMENTE',
                        status: 'success',
                        customer: customer
                    });
                })
                .catch(err => res.json(err));
        })
        .catch(err => res.json(err));
});

module.exports = router;