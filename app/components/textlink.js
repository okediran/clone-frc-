const TextLink = ({ link }) => {
 
  const handleSmoothScroll = (event, href) => {
    if (link.href.includes("#")) {
      event.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
   return null
  };

  return (
    <a
      href={link.href}
      onClick={(e) => handleSmoothScroll(e, link.href)}
      className="text-[#03448b] hover:text-black underline cursor-pointer"
    >
      {link.title}
    </a>
  );
};

export default TextLink;
