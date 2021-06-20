import { CogIcon } from "@heroicons/react/outline";

const Loading = () => {
  return (
    <div className="loader">
      <div className="loader__container">
      <CogIcon height="35" width="35" className="loader__icon" />
      </div>
    </div>
  );
};

export default Loading;
