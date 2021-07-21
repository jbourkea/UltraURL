import React, {useState} from 'react'
import {Form, FormGroup, FormLabel, FormControl} from 'react-bootstrap'
import Header from '../Header/Header'
import Axios from 'axios';
import './style.css'


function LinkContainer() {
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState('');
    const [linkcode, setLinkcode] = useState('');

    const handleSubmit = async (event) => {
        setLoading(true);
        try{
            const response = await Axios.post('http://localhost:8021/url/new', {
                redirectUrl: input,
                timestamp: Date.now()
            });
            setLinkcode(response.data.uniqueCode);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

    }

    return (
            <div className="wrapper">
            <Header text="UltraUrl"/>
            
            <FormLabel>Enter your link here:</FormLabel>
            <br />
            <FormControl onChange={(e) => setInput(e.target.value)} placeholder="eg. www.google.com" />
            <button disabled={loading} onClick={(e) => handleSubmit(e)}>{loading ? "Loading..." : "Generate"}</button>
            <br />

            {linkcode && 
            <div>
                <h3>Your unique link:</h3>
                <Form.Control type="text" placeholder={linkcode} readOnly />
            </div>}
                
        </div>
    )
}

export default LinkContainer
