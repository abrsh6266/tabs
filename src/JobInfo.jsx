import Duties from "./Duties";

export const JobInfo = ({ jobs }) => {
  const { title, company, dates, duties } = jobs[0];
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties />
    </article>
  );
};
