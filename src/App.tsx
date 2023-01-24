import { FormEvent, useState } from "react"
import { useMultistepForm } from "./hooks/useMultistepForm"
import UserForm from "./components/UserForm"
import AccountForm from "./components/AccountForm"
import AddressForm from "./components/AddressForm"

type FormData = {
	firstName: string,
	lastName: string,
	age: string,
	street: string,
	city: string,
	state: string,
	zip: string, 
	email: string,
	password: string
}

const INITIAL_DATA = {
	firstName: '',
	lastName: '',
	age: '',
	street: '',
	city: '',
	state: '',
	zip: '', 
	email: '',
	password: ''
}

function App() {
	const [data, setData] = useState(INITIAL_DATA)
	const updateFields = (fields: Partial<FormData>) => {
		setData(prev => {
			return {...prev, ...fields}
		})
	}
	const {currentStepIndex, steps, step, isFirstStep, isLastStep, back, next} = useMultistepForm([
	<UserForm {...data} updateFields={updateFields}/>, 
	<AccountForm {...data} updateFields={updateFields}/>, 
	<AddressForm {...data} updateFields={updateFields}/>])


	const onSubmit = (e:FormEvent) => {
		e.preventDefault()
		if (!isLastStep) {
			return next()
		}
		alert('Account was created successfully!')
	}

	return (
		<div style={{
			position: 'relative',
			background: 'white',
			border: '1px solid #000',
			padding: '2rem',
			margin: '1rem',
			maxWidth: '500px',
			borderRadius: '.5rem',
			fontFamily: 'Arial'
		}}>
			<form onSubmit={onSubmit}>
				<div style={{
					position: 'absolute',
					top: '.5rem',
					right: '.5rem'
				}}>
					{currentStepIndex + 1} / {steps.length}
				</div>
				{step}

				<div style={{
					marginTop: '1rem',
					display: 'flex',
					gap: '.5rem',
					justifyContent: 'flex-end'
				}}>
					{!isFirstStep && <button type='button' onClick={back}>Back</button>}
					<button type='submit'>{!isLastStep ? 'Next' : 'Finish'}</button>
				</div>
			</form>
		</div>
	)
}

export default App
