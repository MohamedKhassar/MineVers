import { useState, type ChangeEvent, type FormEvent } from "react";
import type { Errors, FormData } from "../lib/types";
import SectionHeader from "../UI/SectionHeader";
import Button from "../UI/Button";



const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const validate = (): Errors => {
    const newErrors: Errors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact-us"  className="lg:max-h-[calc(100vh-100px)] lg:h-screen md:h-dvh h-fit">
        <SectionHeader
            description="Have questions or feedback? Reach out to us anytime. We’re here to help!"
            color=" Contact us"
        />
      <div className="mx-auto mt-15 max-w-7xl">
        <div
          className="space-y-6"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-violet-800 px-4 py-3 rounded-md outline-none text-white"
              />
              {errors.name && <p className="text-red-500 text-sm font-medium">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-violet-800 px-4 py-3 rounded-md outline-none text-white"
              />
              {errors.email && <p className="text-red-500 text-sm font-medium">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full border border-violet-800 px-4 py-3 rounded-md outline-none text-white resize-none"
              />
              {errors.message && <p className="text-red-500 text-sm font-medium">{errors.message}</p>}
            </div>
            <Button variant="solid" className="!text-base">
                Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
