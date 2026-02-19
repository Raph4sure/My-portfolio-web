import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import FormValidator from "../reUsable/FormValidator";
import styles from "./../sections/contact.module.scss";
// import { StatefulButtonDemo } from "../../submit_button/components/ui/ButtonSubmit";
import { Button2 } from "../../submit_button/components/ui/stateful-button";

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

    const handleSubmit = async (e) => {
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
        if (!validate()) {
            setError(true);
            throw new Error("Validation failed");
        }

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_YOUR_SERVICE_ID,
                import.meta.env.VITE_YOUR_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_YOUR_PUBLIC_KEY
            );

            setSuccess(true);
            setFormData({ name: "", email: "", message: "" });
            setTouched({});
            if (form.current) {
                form.current.reset();
            }
            console.log("SUCCESS!");
        } catch (error) {
            setError(true);
            console.error("FAILED...", error);
            throw error;
        }
    };

    return (
        <div className="w-full h-full tab-land:h-[calc(100vh-2rem)] grid grid-rows-[auto_1fr] items-start mt-1 mb-20 desktop:mb-40 tab-land:mb-55 tablet:mb-0">
            <h1 className="justify-self-center desk-wide:mb-10 mob-land:mb-0">
                Contact Me
            </h1>
            <div
                className={`${styles.container_form} rounded-4xl py-4 bg-text-primary/10`}
            >
                <div className="flex justify-center h-full items-center">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        noValidate
                        className={styles.form}
                        ref={form}
                    >
                        <h1 className="text-xl font-[500] text-center tablet:text-[1rem] pb-2">
                            Let's Connect
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
                        <div className="flex flex-col -mb-3">
                            <div className="flex justify-center">
                                <Button2 onClick={handleSubmit}>
                                    Send message
                                </Button2>
                            </div>

                            <div className="text-green-500 text-center text-sm">
                                {(success && (
                                    <span>
                                        Your message has been sent. Thank you!
                                    </span>
                                )) ||
                                    "\u00A0"}
                            </div>
                            <div className="text-red-500 text-center text-sm">
                                {(error && !success && (
                                    <span>
                                        Please fill in all required fields
                                        correctly.
                                    </span>
                                )) ||
                                    "\u00A0"}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;

// return (
//     <div className="w-full h-screen flex flex-col items-center">
//         <h1 className="pb-4">Contact Me </h1>
//         <div
//             className={`${styles.container_form} w-[50%] rounded-4xl py-3 bg-text-primary/10`}
//         >
//             <div className="flex justify-center h-full items-center p-0">
//                 <form
//                     onSubmit={(e) => e.preventDefault()}
//                     noValidate
//                     className={styles.form}
//                     ref={form}
//                 >
//                     <h1 className="text-xl font-[500] text-center tablet:text-[1rem]">
//                         Hire Me/let's Connect
//                     </h1>
//                     <FormValidator
//                         id="name"
//                         label="Full Name"
//                         placeholder="Full Name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         error={touched.name ? errors.name : ""}
//                         isSuccess={touched.name && !errors.name}
//                     />
//                     <FormValidator
//                         id="email"
//                         label="Email Address"
//                         type="email"
//                         placeholder="Email Address"
//                         value={formData.email}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         error={touched.email ? errors.email : ""}
//                         isSuccess={touched.email && !errors.email}
//                     />
//                     <FormValidator
//                         id="message"
//                         label="Your Message"
//                         type="textarea"
//                         placeholder="Your Message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         error={touched.message ? errors.message : ""}
//                         isSuccess={touched.message && !errors.message}
//                         rows={5} // Pass textarea-specific props
//                         className={styles.textarea}
//                     />

//                     <div className="flex justify-center mt-4">
//                         <Button2 onClick={handleSubmit}>Send message</Button2>
//                     </div>

//                     <div className="text-green-500 text-center text-sm -mb-6 pt-4">
//                         {(success && (
//                             <span>Your message has been sent. Thank you!</span>
//                         )) ||
//                             "\u00A0"}
//                     </div>
//                     <div className="text-red-500 text-center text-sm -mb-2">
//                         {(error && !success && (
//                             <span>
//                                 Please fill in all required fields correctly.
//                             </span>
//                         )) ||
//                             "\u00A0"}
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>
// );
