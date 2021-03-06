import * as React from 'react';
import { useLaunchListQuery } from '../../generated/graphql';
import LaunchList from './LaunchList';

interface Props {
  onClickHandler: (newId: number) => void;
}

const LaunchListContainer = ({onClickHandler}: Props) => {
  const { data, error, loading } = useLaunchListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <LaunchList data={data} onClickHandler={onClickHandler} />;
};

export default LaunchListContainer;