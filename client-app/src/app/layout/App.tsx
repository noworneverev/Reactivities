import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
// import { IActivity } from "../models/activity";
import { NavBar } from "../../features/nav/NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
// import agent from "../api/agent";
// import LoadingComponent from "./LoadingComponent";
// import ActivityStore from "../stores/activityStore";
import { observer } from "mobx-react-lite";
import { Route, withRouter, RouteComponentProps } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";

const App: React.FC<RouteComponentProps> = ({ location }) => {
  // const activityStore = useContext(ActivityStore);

  // // const [activities, setActivities] = useState<IActivity[]>([]);
  // // const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);
  // // const [editMode, setEditMode] = useState(false);
  // // const [loading, setLoading] = useState(true);
  // // const [submitting, setSubmitting] = useState(false);
  // // const [target, setTarget] = useState('');

  // // const handleSelectActivity = (id: string) => {
  // //     setSelectedActivity(activities.filter(a => a.id === id)[0]);
  // //     setEditMode(false);
  // // }

  // // const handleOpenCreateForm = () => {
  // //   setSelectedActivity(null);
  // //   setEditMode(true);
  // // }

  // // const handleCreateActivity = (activity: IActivity) => {
  // //   setSubmitting(true);
  // //   agent.Activities.create(activity).then(() => {
  // //     setActivities([...activities, activity])
  // //     setSelectedActivity(activity);
  // //     setEditMode(false);
  // //   }).then(() => setSubmitting(false))
  // // }

  // // const handleEditActivity = (activity: IActivity) => {
  // //   setSubmitting(true);
  // //   agent.Activities.update(activity).then(() => {
  // //     setActivities([...activities.filter(a => a.id !== activity.id), activity])
  // //     setSelectedActivity(activity);
  // //     setEditMode(false);
  // //   }).then(() => setSubmitting(false))
  // // }

  // // const handleDeleteActivity = (event: SyntheticEvent<HTMLButtonElement>, id: string) => {
  // //   setSubmitting(true);
  // //   setTarget(event.currentTarget.name)
  // //   agent.Activities.delete(id).then(() => {
  // //     setActivities([...activities.filter(a => a.id !== id)])
  // //   }).then(() => setSubmitting(false))
  // // }

  // useEffect(() => {
  //   activityStore.loadActivities();
  //   // agent.Activities.list()
  //   //   .then((response) => {
  //   //     let activities: IActivity[] = [];
  //   //     response.forEach((activity) => {
  //   //       activity.date = activity.date.split('.')[0];
  //   //       activities.push(activity);
  //   //     });
  //   //     setActivities(activities);
  //   //   }).then(() => setLoading(false));
  // }, [activityStore]);

  // // if (loading) return <LoadingComponent content = 'Loading activities...' />
  // if (activityStore.loadingInitial)
  //   return <LoadingComponent content="Loading activities..." />;

  return (
    <Fragment>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Fragment>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
              <Route exact path="/activities" component={ActivityDashboard} />
              <Route path="/activities/:id" component={ActivityDetails} />
              <Route
                key={location.key}
                path={["/createActivity", "/manage/:id"]}
                component={ActivityForm}
              />
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default withRouter(observer(App));
