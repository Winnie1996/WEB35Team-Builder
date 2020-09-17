import React, { useState, useEffect } from "react";
import "./App.css";
import MemberForm from "./MemberForm";
import Member from "./Member";
import * as yup from "yup";
import schema from "../src/validation/formSchema";

const initialMembers = [
	{
		// Text Inputs //
		name: "Hung",
		email: "Hung@gmail.com",
		// DropDown Menu //
		course: "",
		password: "",
		terms: "false",
		/* aka things like frontend, backend, ios*/
	},
];

const initialFormErrors = {
	name: "",
	email: "",
	course: "",
	password: "",
};

const initialDisabled = true;

function App() {
	// States to hold Values //
	const [formErrors, setFormErrors] = useState(initialFormErrors);
	const [disabled, setDisabled] = useState(initialDisabled);
	const [members, setMembers] = useState(initialMembers);
	const [teamFormValues, setTeamFormValues] = useState({ initialMembers });

	// Updater to change member //

	const updateMember = (inputName, inputValue) => {
		setTeamFormValues({ ...teamFormValues, [inputName]: inputValue });
	};

	// Adding a Submit Form //

	const submitForm = () => {
		const newMember = {
			name: teamFormValues.name.trim(),
			email: teamFormValues.email.trim(),
			course: teamFormValues.course,
			password: teamFormValues.password.trim(),
			terms: teamFormValues.terms.trim(),
		};
		setMembers([...members, newMember]);
		setTeamFormValues(initialMembers);
	};

	const validate = (name, value) => {
		// let's validate this specific key/value
		// yup.reach will allow us to "reach" into the schema and test only one part.
		// We give reach the schema as the first argument, and the key we want to test as the second.
		yup
			.reach(schema, name)
			// we can then run validate using the value
			.validate(value)
			// if the validation is successful, we can clear the error message
			.then((valid) => {
				// eslint-disable-line
				// eslint-disable-line
				setFormErrors({
					...formErrors,
					[name]: "",
				});
			})
			/* if the validation is unsuccessful, we can set the error message to the message 
        returned from yup (that we created in our schema) */
			.catch((err) => {
				setFormErrors({
					...formErrors,
					[name]: err.errors[0],
				});
			});
	};

	const inputChange = (name, value) => {
		// 🔥 STEP 10- RUN VALIDATION WITH YUP
		validate(name, value);
		setTeamFormValues({
			...teamFormValues,
			[name]: value, // NOT AN ARRAY
		});
	};

	useEffect(() => {
		// 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES

		/* Each time the form value state is updated, check to see if it is valid per our schema. 
    This will allow us to enable/disable the submit button.*/

		/* We pass the entire state into the entire schema, no need to use reach here. 
    We want to make sure it is all valid before we allow a user to submit
    isValid comes from Yup directly */
		schema.isValid(teamFormValues).then((valid) => {
			setDisabled(!valid);
		});
	}, [teamFormValues]);

	return (
		<div className="container">
			<header>
				<h1> Members App</h1>
			</header>

			<MemberForm
				values={teamFormValues}
				setValues={setTeamFormValues}
				submit={submitForm}
				update={updateMember}
				change={inputChange}
				disabled={disabled}
			/>

			{members.map((member, index) => (
				<Member key={index} info={member} />
			))}
		</div>
	);
}

export default App;
