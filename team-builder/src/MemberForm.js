import React from "react";

function MemberForm(props) {
	const { values, setValues, submit, change } = props;

	const onChange = (evt) => {
		const { name, value, type, checked } = evt.target;
		setValues({
			...values,
			[name]: value,
		});
		const valueToUse = type === "checkbox" ? checked : value;
		change(name, valueToUse);
	};

	const onSubmit = (evt) => {
		evt.preventDefault();
		submit();
	};

	return (
		<form className="form container" onSubmit={onSubmit}>
			<button disabled={!values.name || !values.email || !values.course}>
				submit
			</button>
			<div className="form-member submit">
				<h2>Add a Member</h2>
			</div>

			<div className="form-member inputs">
				<label>
					Name:&nbsp;
					<input
						value={values.names}
						onChange={onChange}
						name="name"
						placeholder="type name"
						maxLength="30"
						type="text"
					/>
				</label>

				<label>
					Email:&nbsp;
					<input
						value={values.emails}
						onChange={onChange}
						name="email"
						placeholder="type email"
						maxLength="30"
						type="email"
					/>
					<label>
						Password:&nbsp;
						<input
							value={values.passwords}
							onChange={onChange}
							name="password"
							placeholder="type password"
							maxLength="30"
							type="text"
						/>
					</label>
				</label>
				<br></br>
				<label>
					Courses:&nbsp;
					<select value={values.courses} name="course" onChange={onChange}>
						<option name="course" value="">
							-- Select a Role --
						</option>
						<option name="course" value="FrontEnd">
							FrontEnd
						</option>
						<option name="course" value="BackEnd">
							BackEnd
						</option>
						<option name="course" value="IOS">
							IOS
						</option>
						<option name="course" value="Data Science">
							Data Science
						</option>
						<option name="course" value="Full Stack Web Developer">
							Full Stack Web Developer
						</option>
						<option name="course" value="UX">
							UX
						</option>
					</select>
				</label>
				<label>
					Terms of Service
					<input
						type="radio"
						name="terms"
						value="no"
						checked={values.terms === "no"}
						onChange={onChange}
					/>
				</label>
			</div>
		</form>
	);
}

export default MemberForm;
