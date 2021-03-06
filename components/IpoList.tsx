import { IActiveIPO } from "../services/getActiveIPOs";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";
interface IIpoListProps {
  ipoList: IActiveIPO[];
  handleIpoClick: (ipo: IActiveIPO) => void;
}

const IpoList = (props: IIpoListProps) => {
  const { ipoList, handleIpoClick } = props;

  return (
    <div className="ipo-list">
      {ipoList.map((ipo, index) => {
        if (ipo.isFileUploaded) {
          return (
            <div key={index} className="ipo-list__item" onClick={() => handleIpoClick(ipo)}>
              <span>{ipo.name}</span>
              <span className="ipo-list__icon"><ArrowCircleRightIcon className="" /></span>
            </div>
          );
        }
      })}
    </div>
  );
};

export default IpoList;
