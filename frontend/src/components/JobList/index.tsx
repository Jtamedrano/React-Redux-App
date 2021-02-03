import { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchAllJobs } from '../../redux/actions';
import { IreducerMap, IjobListState } from '../../redux/reducers';
import JobList from './JobList';

interface Props {
  isFetchingApi: boolean;
  data: any;
  fetchAllJobs: () => void;
}

const JobListContainer = ({
  isFetchingApi,
  data,
  fetchAllJobs,
}: Props): JSX.Element => {
  useEffect(() => {
    fetchAllJobs();
  }, []);
  if (isFetchingApi) {
    return <p>Loading...</p>;
  }
  console.log(data);
  return <JobList data={data} />;
};

const mapStateToProps = ({ jobList }: IreducerMap) => jobList;

const mapDispatchToProps = { fetchAllJobs };

export default connect(mapStateToProps, mapDispatchToProps)(JobListContainer);
