import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, CardsWrapper, Form, Button } from './styles'

function ProductPage() {

    const [product, setProduct] = useState([])

    const [edit, setEdit] = useState({ edit: false, data: {} });

    const [open, setOpen] = useState(true);

    const getProducts=() => {
        axios.get("https://ibs-school.herokuapp.com/api/v1/for-developer/product")
        .then((res) => {
            setProduct(res.data);
        })
        .catch();

    };

    useEffect(() => {
        getProducts();
    }, []);

    const submitForm = (e) => {
        e.preventDefault();

        const {name, price, description} = e.target

        const form = {
            name:name.value,
            price:price.value,
            description:description.value,
        };

        axios.post("https://ibs-school.herokuapp.com/api/v1/for-developer/product", form)
        .then((res) => {
            getProducts()
            e.target.reset();
        })
        .catch()

    };

    const updateForm = (e) => {

        e.preventDefault();

        const {name, price, description} = e.target; 
        
        const form = {
            name:name.value,
            price:price.value,
            description:description.value,
        };

        axios.put("https://ibs-school.herokuapp.com/api/v1/for-developer/product/" + edit.data.id, form)
        .then(() => {
            getProducts();
            e.target.reset();
            setEdit({ edit: false, data: {} })
        });
    };

    const deleteProduct = (id) => {
        axios.delete("https://ibs-school.herokuapp.com/api/v1/for-developer/product" + id)
        .then()
        .catch()
        .finally(() => {
            getProducts();
        })
    }

    return (
        <div>
            <Button onClick={() => {setOpen(!open);}}>Only Products</Button>
            <Form open={open} onSubmit={edit.edit ? updateForm : submitForm}>
                <input defaultValue={edit.edit ? edit.data.name : ""} type="text" name="name" placeholder="name" required/>
                <input defaultValue={edit.edit ? edit.data.price : ""} type="number" name="price" placeholder="price" required/>
                <textarea defaultValue={edit.edit ? edit.data.description : ""} name="description" rows="10" placeholder="description" required></textarea>
                <button>{edit.edit ? "update" : "submit"}</button>
            </Form>
            <CardsWrapper>
                {product?.map(({id, name, price, description}) => 
                    <Card key={id}>
                        <p>{name}</p>
                        <p>{price}</p>
                        <p>{description}</p>
                        <button onClick={() => deleteProduct(id)}>delete</button>
                        <button onClick={() => {
                setEdit({ edit: true, data: { id, name, price, description } });
              }}>{edit.edit ? "updated" : "update"}</button>
                    </Card>
                )}
            </CardsWrapper>
        </div>
    )
}

export default ProductPage;