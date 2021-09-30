import axios from 'axios'
import React, { useState, useEffect } from 'react'

function RandomUserPage() {

    const [person, setperson] = useState([])

    const getPerson = () => {
        axios
            .get("https://randomuser.me/api/")
            .then((res) => {
                setperson(res.data.results)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getPerson()
    }, [])

    return (
        <div>
            {
                person?.map(({
                    gender, 
                    name, 
                    location:{ street }, 
                    email, 
                    login, 
                    dob, 
                    register, 
                    phone, 
                    cell,
                    id, 
                    picture, 
                    nat
                    }, index) => 
                    <>
                        <p>{street.name}</p>
                        <p>{street.number}</p>
                    </>
                    )
            }
        </div>
    )
}

export default RandomUserPage