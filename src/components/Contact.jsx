/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_PUBLIC_KEY } from "../constants";
import Footer from "./Footer";
import './Contact.css'; // Import custom CSS for animations

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		// Cleaning the form data
		const username = form.name.trim();
		const user_email = form.email.trim();
		const user_message = form.message.trim();

		if (username === '' || user_email === '' || user_message === '') {
			setLoading(false);
			toast.error("Please fill all the fields.", {
				position: 'bottom-right',
			});
			return;
		}

		emailjs
			.send(
				EMAIL_JS_SERVICE_ID,
				EMAIL_JS_TEMPLATE_ID,
				{
					from_name: username,
					to_name: "Varsha Awasthi",
					reply_to: user_email,
					to_email: "awasthivarsha0710@gmail.com",
					message: user_message,
				},
				EMAIL_JS_PUBLIC_KEY
			)
			.then(
				() => {
					setLoading(false);
					toast.success("Message sent successfully!", {
						position: 'bottom-right',
					});
					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					console.error(error);
					toast.error("Uh, oh! Something went wrong. Please try again later.", {
						position: 'bottom-right',
					});
				}
			);
	};

	return (
		<div className='relative z-0 bg-black min-h-screen w-screen'>   
			<div className='text-white contact overflow-x-hidden pt-12 mt-8 ' id='contact'>
				<div className='z-10 w-full sm:w-[650px] m-auto p-8 rounded-2xl fade-in' >
					<p className='font-light tracking-wide text-gray-300 animate-slide-up'>REACH OUT TO ME</p>
					<h2 className='text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500 tracking-wider animate-gradient'>Contact.</h2>
					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className='mt-12 flex flex-col gap-8'
					>
						<label className='flex flex-col animate-slide-up'>
							<span className=' font-medium mb-4'>Your Name</span>
							<input
								type='text'
								name='name'
								value={form.name}
								onChange={handleChange}
								placeholder="Enter your name"
								className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900 hover:bg-gray-800 focus:ring-2 focus:ring-pink-500'
								required
							/>
						</label>
						<label className='flex flex-col animate-slide-up'>
							<span className=' font-medium mb-4'>Your email</span>
							<input
								type='email'
								name='email'
								value={form.email}
								onChange={handleChange}
								placeholder="Ex:abc@gmail.com"
								className='py-4 px-6 rounded-lg  font-medium bg-gray-900 hover:bg-gray-800 focus:ring-2 focus:ring-pink-500'
								required
							/>
						</label>
						<label className='flex flex-col animate-slide-up'>
							<span className='font-medium mb-4'>Your Message</span>
							<textarea
								rows={7}
								name='message'
								value={form.message}
								onChange={handleChange}
								placeholder='Do you have anything to say?'
								className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900 hover:bg-gray-800 focus:ring-2 focus:ring-pink-500'
								required
							/>
						</label>

						<button
							type='submit'
							className='pt-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-pink-500 animate-pulse'
						>
							{loading ? "Sending..." : "Send"}
						</button>
					</form>
				</div>
				<ToastContainer />
			</div>
		<Footer/>
		</div>
	);
};

export default Contact;
