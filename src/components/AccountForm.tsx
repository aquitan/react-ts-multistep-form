import { ChangeEvent } from "react";
import FormWrapper from "./FormWrapper";

type AccountFormProps = {
    email: string,
    password: string
}

type UpdateFields = AccountFormProps & {
    updateFields: (fields:Partial<AccountFormProps>) => void
}

const AccountForm = ({email, password, updateFields}:UpdateFields) => {

    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        updateFields({[e.target.name]: e.target.value})
    }

    return(
        <FormWrapper title="Account">
            <label>Email</label>
            <input autoFocus required name='email' onChange={onChange} type='email' value={email} />
            <label>Password</label>
            <input required name='password' onChange={onChange} type='password' value={password} />
        </FormWrapper>
    )
}
export default AccountForm;