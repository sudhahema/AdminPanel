import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


export default function Create({updateTableData , handleCloseCreateModel}) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    // let navigate = useNavigate();

//     const postData = () => {
//         console.log(firstName);
//         console.log(lastName);
//         console.log(checkbox);
// }
const postData = () => {
    axios.post(`https://65a75af094c2c5762da6894a.mockapi.io/api/fakeData`, {
        firstName,
        lastName,
        checkbox
    }).then((res)=>{
        updateTableData(res.data)
        handleCloseCreateModel()

    })
}
    return (
        <div className='data_container'>
              <h3 className='headerContent'>React CRUD Operation </h3>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e)=> setFirstName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e)=> setLastName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e)=> setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button type='submit' onClick={postData}>Submit</Button>
            </Form>
        </div>
    )
}