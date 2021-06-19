import { HeartIcon } from '@heroicons/react/solid'

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Created with <HeartIcon className="footer__heart"/> by{" "}
        <a href="https://github.com/pragyakar" target="_blank" rel="noreferrer" className="link">
          Pragyakar.
        </a>
      </p>
    </div>
  );
};

export default Footer;
