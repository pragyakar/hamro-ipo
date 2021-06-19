import { IActiveIPO } from "../services/getActiveIPOs";
import { ArrowCircleRightIcon } from '@heroicons/react/solid';
interface IIpoListProps {
  ipoList: IActiveIPO[];
  handleIpoClick: (ipo: IActiveIPO) => void;
}

const IpoList = (props: IIpoListProps) => {
  const { ipoList, handleIpoClick } = props;

  return (
    <div className="ipo-list">
      {ipoList.map((ipo, index) => {
        return (
          <div key={index} className="ipo-list__item" onClick={() => handleIpoClick(ipo)}>
            {ipo.name}
            <ArrowCircleRightIcon className="ipo-list__icon"/>
          </div>
        );
      })}
    </div>
  );
}

export default IpoList;