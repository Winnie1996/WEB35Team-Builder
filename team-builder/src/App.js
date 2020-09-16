import React, { useState } from "react";
import "./App.css";
import MemberForm from "./MemberForm";
import Member from "./Member";

const initialMembers = [
	{
		// Text Inputs //
		name: "Hung",
		email: "Hung@gmail.com",
		// DropDown Menu //
		course: "",
		/* aka things like frontend, backend, ios*/
	},
];

function App() {
	// States to hold Values //

	const [members, setMembers] = useState(initialMembers);
	const [teamFormValues, setTeamFormValues] = useState({
		name: "",
		email: "",
		course: "",
	});

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
		};
		setMembers([...members, newMember]);
		setTeamFormValues(initialMembers);
	};

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
			/>

			{members.map((member, index) => (
				<Member key={index} info={member} />
			))}
		</div>
	);
}

export default App;
