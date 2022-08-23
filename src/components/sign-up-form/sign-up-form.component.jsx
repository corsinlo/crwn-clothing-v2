import { useState } from "react"

const defaultFormFields = {
    displayname: '',
    email: '',
    password: '',
    confirmpassword: '',
}


export const SignUpForm = () => {

    const [formFields, setFormfields] = useState(defaultFormFields)
    const {
        displayname,
        email,
        password,
        confirmpassword
    } = formFields; // all these form field are just duplicated version of the same state

    const handleChange = (event) => {
        const { name, value } = event.target; //target tells you who is the event emitter
        setFormfields({ ...formFields, [name]: value })
    }

    //value will bind values to input field

    return (
        <div>
            <h1>Sign UP with your email and password</h1>
            <form onSubmit={() => { }}> {/*callback is default on this handler*/}
                <label>Display Name</label>
                <input type="text" required onChange={handleChange} name='dispalyname' value={displayname} />
                <label>Email</label>
                <input type="email" required onChange={handleChange} name='email' value={email} />
                <label>Passowrd</label>
                <input type="password" required onChange={handleChange} name='password' value={password} />
                <label>Confirm</label>
                <input type="passowrd" required onChange={handleChange} name='confirmpassowrd' value={confirmpassword} />
                <button type="submit">Sign up</button>

            </form>
        </div>
    )
}