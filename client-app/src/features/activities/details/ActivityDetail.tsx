import * as React from 'react';
import { Button, Card } from 'semantic-ui-react';
import { Activity } from 'src/App/models/Activity';

interface Props{
    activity : Activity
    cancelSelectActivity : () =>void;
    openForm : (id: string) => void;
}
export default function ActivityDetail({activity, cancelSelectActivity,
openForm} : Props){
    return (
        <Card fluid>
            <img src="/assets"></img>
            <Card.Content>
                <Card.Header>
                    {activity.title}
                </Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button basic content="Edit" color='blue' onClick={() => openForm(activity.id)} />
                    <Button basic content="Cancel" onClick={()=> cancelSelectActivity()} color='grey' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}