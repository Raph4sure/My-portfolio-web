import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import FormValidator from "../reUsable/FormValidator";
import styles from "./../sections/contact.module.scss";

function Contact() {
    // --- STATE MANAGEMENT ---
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [touched, setTouched] = useState({});
    const form = useRef();

    const getValidationError = (name, value) => {
        switch (name) {
            case "name":
                if (!value.trim()) return "Name is required.";
                break;
            case "email":
                if (!value.trim()) return "Email is required.";
                if (!/\S+@\S+\.\S+/.test(value)) return "Email is not valid.";
                break;
            case "message":
                if (!value.trim()) return "Message is required.";
                if (value.trim().length < 10)
                    return "Message must be at least 10 characters.";
                break;
            default:
                return "";
        }
        return "";
    };

    // --- VALIDATION LOGIC ---
    const validate = () => {
        const tempErrors = {};
        Object.keys(formData).forEach((key) => {
            const error = getValidationError(key, formData[key]);
            if (error) {
                tempErrors[key] = error;
            }
        });

        setErrors(tempErrors);
        // Return true if there are no errors
        return Object.keys(tempErrors).length === 0;
    };

    // --- EVENT HANDLERS ---
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Mark as touched and validate on change
        if (!touched[name]) {
            setTouched((prev) => ({ ...prev, [name]: true }));
        }

        const error = getValidationError(name, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        // Mark as touched and validate on blur
        if (!touched[name]) {
            setTouched((prev) => ({ ...prev, [name]: true }));
        }

        const error = getValidationError(name, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Mark all fields as touched to show errors on submit
        setTouched({
            name: true,
            email: true,
            message: true,
        });

        // Reset UI state
        setSuccess(false);
        setError(false);

        // Validate the form data
        if (validate()) {
            // If validation passes, send the email
            emailjs
                .sendForm(
                    import.meta.env.VITE_YOUR_SERVICE_ID,
                    import.meta.env.VITE_YOUR_TEMPLATE_ID,
                    form.current, // Use the ref to the form
                    import.meta.env.VITE_YOUR_PUBLIC_KEY
                )
                .then(
                    () => {
                        setSuccess(true);
                        setFormData({ name: "", email: "", message: "" }); // Reset form data
                        setTouched({}); // Reset touched state
                        setErrors({}); // Clear any errors
                        // console.log("SUCCESS!");
                    },
                    (error) => {
                        setError(true); // Set error on failure
                        // console.log("FAILED...", error.text);
                    }
                );
        } else {
            // If validation fails, show the error
            setError(true);
        }
    };

    return (
        <div className="w-full h-screen flex flex-col items-center">
            <h1 className="pb-4">Contact Me </h1>
            <div className="w-[50%] rounded-4xl py-3 bg-text-primary/10">
                <div className="flex justify-center h-full items-center p-0">
                    <form
                        onSubmit={handleSubmit}
                        noValidate
                        className={styles.form}
                        ref={form}
                    >
                        <h1 className="text-xl font-[500] text-center tablet:text-[1rem]">
                            Hire Me/let's Connect
                        </h1>
                        <FormValidator
                            id="name"
                            label="Full Name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.name ? errors.name : ""}
                            isSuccess={touched.name && !errors.name}
                        />

                        <FormValidator
                            id="email"
                            label="Email Address"
                            type="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.email ? errors.email : ""}
                            isSuccess={touched.email && !errors.email}
                        />

                        <FormValidator
                            id="message"
                            label="Your Message"
                            type="textarea"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.message ? errors.message : ""}
                            isSuccess={touched.message && !errors.message}
                            rows={5} // Pass textarea-specific props
                            className={styles.textarea}
                        />

                        <button type="submit" className={styles.formButton}>
                            Send
                        </button>
                        <div className="text-green-500 text-center text-sm -mb-6 pt-4">
                            {(success && (
                                <span>
                                    Your message has been sent. Thank you!
                                </span>
                            )) ||
                                "\u00A0"}
                        </div>

                        <div className="text-red-500 text-center text-sm -mb-2">
                            {(error && !success && (
                                <span>
                                    Please fill in all required fields
                                    correctly.
                                </span>
                            )) ||
                                "\u00A0"}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
