"use client";

import { useState } from "react";
import TextLink from "../components/textlink";
import SLUGS from "../utils/slug";
import { Icon } from "@iconify/react";
import ReCAPTCHA from "react-google-recaptcha";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    profession: "",
    topics: [],
    teams: [],
    privacyPolicy: false,
  });
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const topics = [
    "Accounting",
    "Actuarial",
    "Assurance",
    "Auditing",
    "Competition",
    "Corporate Governance",
    "Corporate Reporting",
    "Enforcement",
    "ESG and Climate",
    "Ethics",
    "FRC Taxonomies",
    "Local Audit",
    "PIE Audits",
    "Research and Insights",
    "SMEs",
    "Standards, Codes & Guidance",
    "Stewardship",
    "Supervision",
    "Technology & Digital",
  ];

  const teams = [
    "Accounting & Reporting Policy",
    "Actuarial Regulation",
    "Audit & Assurance",
    "Audit Firm Supervision",
    "Audit Market Supervision",
    "Audit Quality Review",
    "Corporate Governance & Stewardship",
    "Corporate Reporting Review",
    "Digital Reporting & Taxonomies",
    "Market Intelligence & Insights",
    "Professional Bodies Supervision",
  ];

  const toggleFilter = (category, value) => {
    setFormData((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.privacyPolicy) {
      alert("Please agree to the Privacy Policy.");
      return;
    }

    if (!captchaValue) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    try {
      const response = await fetch("api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captchaValue }),
      });

      const result = await response.json();
      if (response.ok) {
        // Optionally reset form
        setFormData({
          email: "",
          firstName: "",
          lastName: "",
          profession: "Investor",
          topics: [],
          teams: [],
          privacyPolicy: false,
        });
        setCaptchaValue(null);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[70%] p-6 mt-7">
      <h2 className="text-[54px] mb-4">Sign up</h2>
      <p className="my-[18px] leading-[25.2px] text-[18px]">
        Complete this form to sign up to our news alerts.
      </p>
      <TextLink link={{ title: "Privacy Policy", href: SLUGS.privacy }} />
      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        <label className="block font-semibold text-[22.5px]">
          Email address
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          className="w-full border p-2 "
          onChange={handleChange}
        />

        <label className="block font-semibold text-[22.5px]">First name</label>
        <input
          type="text"
          name="firstName"
          required
          value={formData.firstName}
          className="w-full border p-2 "
          onChange={handleChange}
        />

        <label className="block font-semibold text-[22.5px]">Last name</label>
        <input
          type="text"
          name="lastName"
          required
          value={formData.lastName}
          className="w-full border p-2 "
          onChange={handleChange}
        />

        <label className="block font-semibold text-[22.5px]">Profession</label>
        <select
          name="profession"
          className="w-full border p-2 rounded"
          value={formData.profession} // Controlled component
          onChange={handleChange}
        >
          <option value="">------------</option>
          <option value="Accountant">Accountant</option>
          <option value="Actuary">Actuary</option>
          <option value="Audit">Audit committee member</option>
          <option value="Auditor">Auditor</option>
          <option value="Board">Board member</option>
          <option value="Director">Director</option>
          <option value="Investor">Investor</option>
          <option value="Other">Other</option>
        </select>

        <fieldset>
          <legend className="font-bold text-[20.25px]">
            Topics (optional)
          </legend>
          <div>
            {topics.map((topic) => (
              <label
                key={topic}
                className="flex items-center space-x-2 mb-2 cursor-pointer"
              >
                <div
                  className="h-[44px] w-[44px] border-2 border-black flex items-center justify-center cursor-pointer"
                  onClick={() => toggleFilter("topics", topic)}
                >
                  {formData.topics.includes(topic) && (
                    <Icon icon="mdi:check-bold" width="34" height="34" />
                  )}
                </div>
                <span>{topic}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="font-bold text-[20.25px]">
            FRC Teams (optional)
          </legend>
          <div>
            {teams.map((team) => (
              <label
                key={team}
                className="flex items-center space-x-2 mb-2 cursor-pointer"
              >
                <div
                  className="h-[44px] w-[44px] border-2 border-black flex items-center justify-center cursor-pointer"
                  onClick={() => toggleFilter("teams", team)}
                >
                  {formData.teams.includes(team) && (
                    <Icon icon="mdi:check-bold" width="34" height="34" />
                  )}
                </div>
                <span>{team}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className="flex space-x-2 text-[20.25px] cursor-pointer">
          <label>
            <div
              className="h-[44px] w-[44px] border-2 border-black flex items-center justify-center cursor-pointer"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  privacyPolicy: !prev.privacyPolicy,
                }))
              }
            >
              {formData.privacyPolicy && (
                <Icon icon="mdi:check-bold" width="34" height="34" />
              )}
            </div>
          </label>
          <span>
            Your personal information submitted via this FRC News Alerts sign-up
            page will be processed in accordance with our Privacy Policy. Please
            tick the box to confirm you have read and agree with our Privacy
            Policy.
          </span>
        </div>

        {/* Google reCAPTCHA */}
        <div className="mt-15">
          <p className="text-[20.25px] font-bold mb-4">Captcha</p>
          <ReCAPTCHA
            sitekey="6LekFvYqAAAAAFIHEE5O3n1h4T8FaBoz944PI0nr" // Replace with your actual site key
            onChange={handleCaptchaChange}
          />
        </div>

        <button
          type="submit"
          className="bg-[#034996] text-white font-semibold py-2 px-4 hover:bg-[#1e60a1] cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
