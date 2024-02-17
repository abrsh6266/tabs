import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uuid } from "uuid";
const Duties = ({ duties }) => {
  console.log(duties);
  return (
    <div>
      {duties.map((duty, index) => {
        const id = uuid();
        return (
          <div key={id} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Duties;
