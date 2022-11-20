import * as React from 'react';
import { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Activity } from 'src/App/models/Activity';
interface Props {
    activity: Activity | undefined
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
}
export default function ActivityForm({ activity: selectedActivity, closeForm, createOrEdit }: Props) {
    console.log(selectedActivity);
    console.log('in form');
    var initialState = selectedActivity ??
    {
        id: '',
        title: '',
        description: '',
        city: '',
        date: '',
        category: '',
        venue: ''
    };
    const [activity, setActivity] = useState(initialState);
    React.useEffect(()=>{
        setActivity(initialState);
    }, [selectedActivity])
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    }
    function handleSubmitForm(){
        createOrEdit(activity);
    }
    return (
        <Form>
            <Form.Input placeholder="Title" name='title' value={activity.title} onChange={handleInputChange} />
            <Form.Input placeholder="Category" name='category' value={activity.category} onChange={handleInputChange}/>
            <Form.Input placeholder="Date" name='date' value={activity.date} onChange={handleInputChange}/>
            <Form.Input placeholder="City" name='city' value={activity.city} onChange={handleInputChange}/>
            <Form.Input placeholder="Venue" name='venue' value={activity.venue} onChange={handleInputChange}/>
            <Form.TextArea placeholder="Description" name='description' value={activity.description} onChange={handleInputChange}/>
            <Button positive floated='right' type='submit' content='Submit' onClick={handleSubmitForm} />
            <Button positive floated='right' type='button' content='Cancel' onClick={() => closeForm()} />
        </Form>
    )
}