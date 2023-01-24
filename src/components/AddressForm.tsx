import { ChangeEvent, FormEvent } from "react";
import FormWrapper from "./FormWrapper";

type AddressFormProps = {
    street: string,
    city: string,
    state: string,
    zip: string,
}

type UpdateFields = AddressFormProps & {
    updateFields: (fields:Partial<AddressFormProps>) => void
}

const AddressForm = ({street, city, state, zip,  updateFields}:UpdateFields) => {

    const onChange = (e:ChangeEvent<HTMLInputElement>) => [
        updateFields({[e.target.name]: e.target.value})
    ]

    return(
        <FormWrapper title="Address">
            <label>Street</label>
            <input autoFocus required onChange={onChange} type='text' name='street' value={street} />
            <label>City</label>
            <input required onChange={onChange} name='city' type='text' value={city} />
            <label>State</label>
            <input required onChange={onChange} name='state' type='text' value={state} />
            <label>Zip</label>
            <input required onChange={onChange} name='zip' type='text' value={zip} />
        </FormWrapper>
    )
}
export default AddressForm;