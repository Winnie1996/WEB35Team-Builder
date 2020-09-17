import * as yup from "yup";

export default yup.object().shape({
	name: yup
		.string()
		.required("Username is required")
		.min(3, "Username must be 3 chars or longer"),
	email: yup
		.string()
		.email("Must be a valid email")
		.required("Email is required"),
	course: yup
		.string()
		.oneOf([
			"FrontEnd",
			"BackEnd",
			"IOS",
			"Data Science",
			"Full Stack Web Developer",
			"UX",
			"Course is required",
		]),
	password: yup
		.string()
		.required("Must enter email")
		.min(6, "Password must be 6 chars or longer"),
	terms: yup.boolean(),
});
