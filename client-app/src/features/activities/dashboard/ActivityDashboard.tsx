import * as React from 'react';
import {Grid, GridColumn} from 'semantic-ui-react';
import { Activity } from 'src/App/models/Activity';
import ActivityDetail from '../details/ActivityDetail';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';
interface Props{
    activities : Activity[]
}
export default function ActivityDashboard({activities} : Props) {
    return (
        <Grid>
            <GridColumn width={10}>
               <ActivityList activities={activities} />

            </GridColumn>
            {activities[0] &&
                <GridColumn width={6}>
                    <ActivityDetail activity={activities[0]} />
                    <ActivityForm activity={activities[0]} />
                </GridColumn>
            }
        </Grid>
    );
}