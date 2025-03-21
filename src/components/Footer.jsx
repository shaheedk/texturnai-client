import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex items-center justify-betweenn gap-4 py-3 mt-20">
      <img src={assets.logo} alt="" width={150} />
      <p className="flex-1  pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright @Textify | All right reserved.
      </p>
      <div className="flex gap-2.5">
        <a href="https://github.com/shaheedk/Textify-client">
          {" "}
          <img
            src={assets.github_icon}
            alt="github"
            width={35}
            className="mt-0.5"
          />
        </a>
        <a href="https://www.linkedin.com/in/shaheed-k-690010317/">
          {" "}
          <img
            src={assets.linkedIn_icon}
            alt="linkedin"
            width={35}
            className="mt-1"
          />
        </a>
        <a href="https://www.instagram.com/shaheed_7_/">
          {" "}
          <img
            src={assets.instagram_icon}
            alt="instagram"
            width={35}
            className="mt-0.5"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
