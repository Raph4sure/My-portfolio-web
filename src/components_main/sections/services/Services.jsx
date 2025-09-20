import ComputerModelContainer from "./computer/ComputerModelContainer";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Services() {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = (formData) => {
        const newErrors = {};

        // Validate name
        if (!formData.name?.trim()) {
            newErrors.name = "Name is required";
        }

        // Validate email
        if (!formData.email?.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }

        // Validate message
        if (!formData.message?.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message =
                "Message length should be at least 10 characters";
        }

        return newErrors;
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // Reset UI state on new submit
        setSuccess(false);
        setError(false);
        setErrors({});

        // Get form data and validate
        const formData = new FormData(form.current);
        const data = Object.fromEntries(formData);

        const validationErrors = validateForm(data);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setError(true);
            return;
        }

        // Build timestamp and template params right before sending
        const now = new Date();
        const time = now.toLocaleString(undefined, {
            hour12: true,
            year: "numeric",
            month: "short",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            timeZoneName: "short",
        });

        const templateParams = { ...data };
        templateParams.time = time;

        emailjs
            .send(
                import.meta.env.VITE_YOUR_SERVICE_ID,
                import.meta.env.VITE_YOUR_TEMPLATE_ID,
                templateParams,
                {
                    publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    setSuccess(true);
                    // Optional: clear form after success
                    if (form.current) form.current.reset();
                    console.log("SUCCESS!");
                },
                (error) => {
                    setError(true);
                    console.log("FAILED...", error.text);
                }
            );
    };

    return (
        <div className="services grid grid-cols-2 w-full h-full text-lg gap-1 tablet:grid-cols-1 tablet:text-[1rem]">
            <div className="Section_left w-[95%] h-full flex flex-col gap-4 justify-self-center px-4 rounded-2xl bg-amber-500">
                <div className="flex justify-center h-full">
                    <form action="" ref={form} onSubmit={sendEmail}>
                        <h1 className="text-2xl font-bold text-center tablet:text-[1rem]">
                            Hire Me
                        </h1>
                        <div className="formItem">
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                className={`w-full rounded ${
                                    errors.name
                                        ? "border-red-500"
                                        : "border-grey-300"
                                }`}
                            />
                            {errors.name && (
                                <span className="span_errors">
                                    {errors.name}
                                </span>
                            )}
                        </div>
                        <div className="formItem">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                className={`w-full rounded ${
                                    errors.email
                                        ? "border-red-500"
                                        : "border-grey-300"
                                }`}
                            />
                            {errors.email && (
                                <span className="span_errors">
                                    {errors.email}
                                </span>
                            )}
                        </div>
                        <div className="formItem">
                            <label>Message</label>
                            <textarea
                                rows={10}
                                placeholder="Write your message..."
                                name="message"
                                className={`w-full rounded ${
                                    errors.message
                                        ? "border-red-500"
                                        : "border-grey-300"
                                }`}
                            ></textarea>
                            {errors.message && (
                                <span className="span_errors">
                                    {errors.message}
                                </span>
                            )}
                        </div>
                        <button type="submit" className="formButton">
                            Send
                        </button>
                        {success && (
                            <span className="text-green-500 block mt-2 flex justify-self-center">
                                Your message has been sent. Thank you!
                            </span>
                        )}
                        {error && !success && (
                            <span className="text-red-500 block mt-2 grid justify-items-center">
                                Please fill in all required fields correctly.
                            </span>
                        )}
                    </form>
                </div>
                {/* <div className="contact_div">SVG</div> */}
            </div>
            <div className="Section_right place-self-center w-full h-[50%]">
                <ComputerModelContainer />
            </div>
        </div>
    );
}

export default Services;
