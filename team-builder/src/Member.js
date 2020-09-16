import React from "react";

function Member(props) {
	const { info } = props;

	if (!info) {
		return <h3>Not Working Chief</h3>;
	}

	return (
		<div className="member-container">
			<h2>{info.name}</h2>
			<p>Name: {info.name}</p>
			<p>Email: {info.email}</p>
			<p>Course: {info.course}</p>
		</div>
	);
}

export default Member;
