import { HeartIcon } from '@heroicons/react/solid';

interface IFooterProps {
  fixed?: boolean;
}

const Footer = (props: IFooterProps) => {

  const { fixed = false } = props;
 
  return (
    <div className={`footer ${fixed && 'footer--fixed'}`}>
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
