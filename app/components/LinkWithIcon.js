import { Icon } from "@iconify/react";

const LinkWithIcon = ({
  href = "/",
  title = "Read more about our values",
  description, // Fixed typo
  icon=true, // Removed default value here
}) => {
  const defaultIcon = (
    <Icon
      icon="material-symbols:link-rounded"
      width="24"
      height="24"
      className="mt-1"
    />
  );

  return (
    <div className="flex gap-3">
      <div>{icon ? defaultIcon : null}</div> {/* Fixed JSX structure */}
      <div>
        <a
          href={href}
          className="text-[20.25px] font-[700] leading-[30.375px] mb-[5px] underline"
        >
          {title}
        </a>
        <p className="text-sm mt-1">{description}</p>
      </div>
    </div>
  );
};

export default LinkWithIcon;
