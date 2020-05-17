import React, { useContext, Fragment } from "react";
import { Item, Label } from "semantic-ui-react";
// import { IActivity } from "../../../app/models/activity";
import { observer } from "mobx-react-lite";
import ActivityStore from "../../../app/stores/activityStore";
// import { Link } from "react-router-dom";
import { ActivityListItem } from "./ActivityListItem";

// interface IProps {
//   // activities: IActivity[];
//   // selectActivity: (id: string) => void;
//   deleteActivity: (e: SyntheticEvent<HTMLButtonElement>, id: string) => void;
//   submitting: boolean;
//   target: string;
// }

const ActivityList: React.FC = () => {
  const activityStore = useContext(ActivityStore);
  const { activitiesByDate } = activityStore;
  return (
    <Fragment>
      {activitiesByDate.map(([group, activities]) => (
        <Fragment>
          <Label size="large" color="blue">
            {group}
          </Label>

          <Item.Group divided>
            {activities.map((activity) => (
              <ActivityListItem key={activity.id} activity={activity} />
            ))}
          </Item.Group>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default observer(ActivityList);
