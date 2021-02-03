import React from 'react';

interface Props {
  data: any[];
}

const JobList = ({ data }: Props) => {
  return (
    <div>
      {!!data &&
        data.map((job, i) => <div key={job.uuid + i}>{job.title}</div>)}
    </div>
  );
};

export default JobList;
