import * as React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "src/App/models/Activity";

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
}
export default function ActivityList({ activities, selectActivity }: Props) {
    return (
        <Segment>
            <Item.Group divided>
                {activities.map((activity) => {
                    return (
                        <Item key={activity.id}>
                            <Item.Content>
                                <Item.Header as="">{activity.title}</Item.Header>
                                <Item.Meta>{activity.date}</Item.Meta>
                                <Item.Description>
                                    <div>
                                        {activity.description}
                                    </div>
                                    <div>
                                        {activity.city}, {activity.venue}
                                    </div>
                                </Item.Description>
                                <Item.Extra>
                                    <Button floated="right" onClick={()=> selectActivity(activity.id)} content="View" color="blue" />
                                    <Label content={activity.category} basic />
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    );
                })}
            </Item.Group>
        </Segment>
    );
}