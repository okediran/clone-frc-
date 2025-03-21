const aboutBaseurl = '/about-us/'
const contact = '/contact-us'
const policies = `${aboutBaseurl}/policies-and-procedures`
const SLUGS = {
    // main route
    home: "/",
    team: "/library",
    careers: "/consultations",
    blog: "/news-and-events",
    contact: "/contact-us" ,
    freedom:"/freedom-of-information",
    individual:"/individual-rights-policy",
    cookies:"/cookies",
   
    //contact 
    contact: "/contact-us" ,
    contactform: `${contact}/contact-us-form` ,

    // nexted route for about
    about: `${aboutBaseurl}`,
    purpose: `${aboutBaseurl}/our-purpose`,
    structure: `${aboutBaseurl}/structure`,
    careers: `${aboutBaseurl}/careers`,
    restoring: `${aboutBaseurl}/restoring-trust-in-audit-and-corporate-governance`,
    role: `${aboutBaseurl}/role-and-responsibilities`,
    reports: `${aboutBaseurl}/reports-plans-and-budgets`,
    policies: `${aboutBaseurl}/policies-and-procedures`,
    governance: `${aboutBaseurl}/governance-reporting`,
    funding: `${aboutBaseurl}/funding`,
    responses: `${aboutBaseurl}/responses-to-external-consultations/`,
    tribunals: `${aboutBaseurl}/tribunals`,  
    international: `${aboutBaseurl}/international-activity`,  

    // nexted route for about
    privacy:`${policies}/privacy`,
    modern:`${policies}/modern-slavery-statement`,
    
    // nexted route for industries
    healthcare: "/industries/healthcare",
    finance: "/industries/finance",
    ecommerce: "/industries/ecommerce",
  
    // authetication
    signup: "/sign-up",
  };
  
  export default SLUGS;
  