import * as React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Activity } from 'src/App/models/Activity';
interface Props{
    activity : Activity
}
export default function ActivityForm({activity}: Props){
    return (
        <Form>
            <Form.Input placeholder = "Title" />
            <Form.Input placeholder = "Category" />
            <Form.Input placeholder = "Date" />
            <Form.Input placeholder = "City" />
            <Form.Input placeholder = "Venue" />
            <Form.TextArea placeholder = "Description" />
            <Button positive floated='right' type='submit' content='Submit'/>
            <Button positive floated='right' type='button' content='Cancel'/>
        </Form>
    )
}