import axios from "axios";
import React, { useState } from "react";

const Contact = () => {
	const formId = "CaZWSUuc";
	const formSparkUrl = `https://submit-form.com/${formId}`;
	const initialFormState = {
		email: "",
		name: "",
		message: "",
	};
	const submitMessage = {
		class: "",
		message: "",
	};

	const [formState, setFormState] = useState(initialFormState);
	const [submitting, setSubmitting] = useState(false);
	const [message, setMessage] = useState(submitMessage);

	const submitForm = async (e) => {
		e.preventDefault();
		setSubmitting(true);
		await postSubmission();
		setSubmitting(false);
	};

	const postSubmission = async () => {
		const payload = {
			//message: "Test Formspark submission",
			...formState,
		};

		try {
			const result = await axios.post(formSparkUrl, payload);
			console.log(result);
			setMessage({
				class: "",
				message: "Thanks Ill reach back out soon",
			});
		} catch (error) {
			console.log(error);
			setMessage({
				class: "",
				message: "Sorry Try Again",
			});
		}
	};

	const updateFormControl = (e) => {
		const { id, value } = e.target;
		const formKey = id;
		const updateFormState = { ...formState };
		updateFormState[formKey] = value;
		setFormState(updateFormState);
	};
	return (
		<div>
			<div>
				<h1>CONTACT ME</h1>
				{message && <div>{message.message}</div>}
			</div>
			<div>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					name=""
					id="name"
					value={formState.name}
					onChange={updateFormControl}
				/>
				<label htmlFor="email">Email</label>
				<input
					type="text"
					name=""
					id="email"
					value={formState.email}
					onChange={updateFormControl}
				/>
				<label htmlFor="message">Message</label>
				<textarea
					id="message"
					onChange={updateFormControl}
					value={formState.message}
				></textarea>
			</div>
			<form onSubmit={submitForm}>
				<button disabled={submitting}>
					{submitting ? "..submiting" : "submit"}
				</button>
			</form>
		</div>
	);
};

export default Contact;
