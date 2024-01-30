import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function UpdataData({updateTableUpdate ,handleClose}) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [id, setID] = useState(null);
    // const [api, setAPI] = useState([]);
    let navigate = useNavigate();

useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'))
        console.log(setCheckbox)
}, []);

//  const postData = () => {
//         console.log(firstName);
//         console.log(lastName);
//         console.log(checkbox);
// }
// const postData = () => {
//     axios.post(`https://65a75af094c2c5762da6894a.mockapi.io/api/fakeData`, {
//         firstName,
//         lastName,
//         checkbox
//     })
// }
const updateAPIData = () => {
    axios.put(`https://65a75af094c2c5762da6894a.mockapi.io/api/fakeData/${id}`, {
         firstName,
         lastName,
         checkbox
	}).then((res)=>{
        updateTableUpdate(res.data)
        handleClose()
    })
}
    return (
        <div className=''>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e)=> setFirstName(e.target.value)} value={firstName}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e)=> setLastName(e.target.value)} value={lastName}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e)=> setCheckbox(!checkbox)} />
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}  className="addbtn" >Update</Button>
            </Form>
        </div>
    )
}