import React, { useContext, useEffect } from "react";
import { Grid } from "semantic-ui-react";
// import { IActivity } from "../../../app/models/activity";
import  ActivityList  from "./ActivityList";
// import ActivityDetails from "../details/ActivityDetails";
// import ActivityForm from "../form/ActivityForm";
// import { ObservableSet } from "mobx";
import { observer } from "mobx-react-lite";
import ActivityStore from '../../../app/stores/activityStore';
import LoadingComponent from "../../../app/layout/LoadingComponent";

// interface IProps {
//     // activities: IActivity[];
//     // selectActivity: (id: string) => void;
//     // selectedActivity: IActivity | null;
//     // editMode: boolean;
//     // setEditMode: (editMode: boolean) => void;
//     // setSelectedActivity: (activity: IActivity | null) => void;
//     // createActivity: (activity: IActivity) => void;
//     // editActivity: (activity: IActivity) => void;
//     deleteActivity: (e: SyntheticEvent<HTMLButtonElement>, id: string) => void;
//     submitting: boolean;
//     target: string;
// } 

const ActivityDashboard: React.FC = () => {
  const activityStore = useContext(ActivityStore);
  useEffect(() => {
    activityStore.loadActivities();
    // agent.Activities.list()
    //   .then((response) => {
    //     let activities: IActivity[] = [];
    //     response.forEach((activity) => {
    //       activity.date = activity.date.split('.')[0];
    //       activities.push(activity);
    //     });
    //     setActivities(activities);
    //   }).then(() => setLoading(false));
  }, [activityStore]);

  // if (loading) return <LoadingComponent content = 'Loading activities...' />
  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading activities..." />;
  // const activityStore = useContext(ActivityStore);
  // const {editMode, activity} = activityStore;
  return (
    <Grid>
      <Grid.Column width={10}>
          <ActivityList 
          // activities={activities} 
          // selectActivity={selectActivity} 
          // deleteActivity={deleteActivity} 
          // submitting={submitting}
          // target={target}
          />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Activity filters</h2>
          {/* {activity && !editMode && (
          <ActivityDetails 
            // activity={selectedActivity} 
            // setEditMode={setEditMode} 
            // setSelectedActivity={setSelectedActivity}
          />
          )}          
          {editMode && 
          <ActivityForm 
            key={activity && activity.id || 0}
            // setEditMode={setEditMode} 
            activity={activity!} 
            // createActivity = {createActivity}
            // editActivity = {editActivity}
            // submitting={submitting}
            />} */}
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDashboard);
