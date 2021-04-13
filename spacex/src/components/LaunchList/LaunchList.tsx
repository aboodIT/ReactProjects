import * as React from 'react';
import { LaunchListQuery } from '../../generated/graphql';
import './styles.css';

const className = 'LaunchList';
// export interface OwnProps {
//   handleIdChange: (newId: number) => void;
// }

interface Props {
  onClickHandler: (newId: number) => void;
  data: LaunchListQuery;
}

const LaunchList: React.FC<Props> = ({ data, onClickHandler }) => {
  
  return(
  <div className={className}>
    <h3>Launches</h3>
    <ol className={`${className}__list`}>
      {!!data.launches &&
        data.launches.map(
          (launch, i) =>
            !!launch && (
              <li key={i} className={`${className}__item`} onClick={()=>onClickHandler(launch.flight_number!)}>
                {launch.mission_name} ({launch.launch_year})
              </li>
            ),
        )}
    </ol>
  </div>

  )}
export default LaunchList;