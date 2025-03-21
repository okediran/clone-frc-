"use client";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Breadcrumbs from "../../components/Breadcrumb";
import SLUGS from "../../utils/slug";
import Feedback from "../../components/Feedback";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    enquiryType: "General",
    enquiry: "",
    name: "",
    email: "",
  });
  const [captchaValue, setCaptchaValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please verify that you are not a robot.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("Thank you for your submission");
        setFormData({
          enquiryType: "General",
          enquiry: "",
          name: "",
          email: "",
        });
      } else {
        setMessage(result.message || "Failed to send message.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  const breadcrumbItems = [
    { label: "Home", href: SLUGS.home },
    { label: "Contact us", href: SLUGS.contact },
  ];

  return (
    <div className="w-[70%] p-6 mt-7">
      <Breadcrumbs items={breadcrumbItems} />

      {!message ? (
        <>
          <h2 className="text-[54px]  mb-4">Contact us form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold text-[22.5px]">
                Enquiry type
              </label>
              <select
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleChange}
                className="w-full border border-black p-2 font-[700] text-[18px]"
              >
                <option value="General">General</option>

                <option value="Press">Press</option>

                <option value="Levy and Funding">Levy and Funding</option>

                <option value="Public Affairs">Public Affairs</option>

                <option value="Investor Relations">Investor Relations</option>

                <option value="International">International</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-[22.5px]">
                Enquiry
              </label>
              <textarea
                name="enquiry"
                value={formData.enquiry}
                onChange={handleChange}
                className="w-full border border-black p-2 h-32"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-[22.5px]">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-black p-2"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-[22.5px]">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-black p-2"
                required
              />
            </div>

            <div>
              <ReCAPTCHA
                sitekey="6LekFvYqAAAAAFIHEE5O3n1h4T8FaBoz944PI0nr"
                onChange={handleCaptchaChange}
              />
            </div>

            <button
              type="submit"
              className="bg-[#034996] text-white font-semibold py-2 px-4 hover:bg-[#1e60a1] cursor-pointer"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </>
      ) : (
        <div>
          <h1 className="text-[54px] leading-[56.25px] mb-[40px] font-[700] tracking-[-0.9px]">
             Thank you
          </h1>
          <p className="my-[18px] text-[18px] leading-[25.5px]">{message}</p>
        </div>
      )}
      <Feedback />
    </div>
  );
}
