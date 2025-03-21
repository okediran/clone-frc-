
export default function StandardsSection() {
    const sections = [
      {
        title: "Standards and Codes",
        description: "We set standards and codes for the UK",
        links: [
          "Accounting Standards",
          "Auditing Standards",
          "Actuarial Standards",
          "UK Corporate Governance Code",
          "UK Stewardship Code",
        ],
      },
      {
        title: "Supervision",
        description: "We deliver supervisory and monitoring obligations",
        links: [
          "Audit Firm Supervision",
          "Audit Market Supervision",
          "Audit Quality Review",
          "Corporate Reporting Review",
          "Professional Bodies Supervision",
          "Audit Firm Resources",
          "Audit Firm Specific Reports",
        ],
      },
      {
        title: "Enforcement",
        description: "We conduct investigations and take enforcement action where appropriate",
        links: ["Audit Enforcement Procedure", "Accountancy Scheme", "Actuarial Scheme"],
      },
    ];
  
    return (
      <div className="mt-5 flex flex-col md:flex-row gap-8 px-6 py-11 bg-[#f2f2f2] border-[#034996] border-t-4 border-b-4">
        {sections.map((section, index) => (
          <div key={index} className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold">{section.title}</h2>
            <p className="text-gray-700 my-6">{section.description}</p>
            <ul className="pl-5">
              {section.links.map((link, i) => (
                <li key={i} className="list-disc ml-5">
                  <a href="#" className="font-bold underline hover:text-[#1e60a1]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  