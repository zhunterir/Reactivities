import * as React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import { Activity } from 'src/App/models/Activity';
import ActivityDetail from '../details/ActivityDetail';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';
interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    cancelSelectActivity: () => void;
    selectActivity: (id: string) => void;
    openForm: (id?: string) => void;
    closeForm: () => void;
    editMode: boolean;
    createOrEdit : (activity: Activity) => void;

}
export default function ActivityDashboard({ activities, selectActivity, cancelSelectActivity,
    selectedActivity, closeForm, openForm, editMode, createOrEdit }: Props) {
    return (
        <Grid>
            <GridColumn width={10}>
                <ActivityList selectActivity={selectActivity} activities={activities} />

            </GridColumn>
            <GridColumn width={6}>
                {
                    selectedActivity &&
                    <ActivityDetail
                        cancelSelectActivity={cancelSelectActivity}
                        activity={selectedActivity}
                        openForm={openForm}
                    />
                }
                {
                    editMode &&
                    <ActivityForm createOrEdit={createOrEdit} closeForm={closeForm} activity={selectedActivity} />

                }
            </GridColumn>
        </Grid>
    );
}