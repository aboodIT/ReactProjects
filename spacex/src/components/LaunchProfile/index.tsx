import * as React from 'react';
import { useLaunchProfileQuery } from '../../generated/graphql';
import LaunchProfile from './LaunchProfile';

interface OwnProps {
  id: number;
}

const LaunchProfileContainer = (props:OwnProps) => {
  const { data, error, loading, refetch} = useLaunchProfileQuery({ variables: { id: String(props.id) } });

  React.useEffect(() => {
    refetch();
  }, [props.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a flight from the panel</div>;
  }

  return <LaunchProfile data={data} />;
};

export default LaunchProfileContainer;