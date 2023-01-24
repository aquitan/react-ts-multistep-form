import { ChangeEvent } from "react";
import FormWrapper from "./FormWrapper";


type UserFormProps = {
    firstName: string,
    lastName: string,
    age: string
}

type UpdateFields = UserFormProps & {
    updateFields: (fields:Partial<UserFormProps>) => void
}

const UserForm = ({firstName, lastName, age, updateFields}:UpdateFields) => {

    const onChange = (e:ChangeEvent<HTMLInputElement>) => [
        updateFields({[e.target.name]: e.target.value})
    ]

    return(
        <FormWrapper title="User Details">
            <label>First Name</label>
            <input autoFocus required onChange={onChange} name='firstName' type='text' value={firstName}/>
            <label>Last Name</label>
            <input required onChange={onChange} name='lastName' type='text' value={lastName}/>
            <label>Age</label>
            <input min={1} required onChange={onChange} name='age' type='number' value={age}/>
        </FormWrapper>
    )
}
export default UserForm;