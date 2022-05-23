import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = (props: any) => {
    const [task, setTask] = useState({
        name: props.task ? props.task.name : '',
        description: props.task ? props.task.description : '',
        dueDate: props.task ? props.task.duedate : '',
        startDate: props.task ? props.task.startDate : '',
        endDate: props.task ? props.task.endDate : '',
        priority: props.task ? props.task.priority : 'Low',
        status: props.task ? props.task.status : 'New',
    });

    const [errorMsg, setErrorMsg] = useState('');
    const { name, description, dueDate, startDate, endDate, priority, status } = task;

    const handleOnSubmit = (event: any) => {
        event.preventDefault();
        const values = [name, description, dueDate, startDate, endDate, priority, status];
        let errorMsg = '';

        const allFieldsFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
        });

        if (allFieldsFilled) {
            const book = {
                id: uuidv4(),
                name,
                description,
                dueDate,
                startDate,
                endDate,
                priority,
                status
            };
            props.handleOnSubmit(book);
        } else {
            errorMsg = 'Please fill out all the fields.';
        }
        setErrorMsg(errorMsg);
    };

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        switch (name) {

            default:
                setTask((prevState) => ({
                    ...prevState,
                    [name]: value
                }));
        }
    };

    return (
        <div className="main-form">
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <Form onSubmit={handleOnSubmit}>
                <Row className='mb-3'>
                    <Form.Group as={Col} controlId="name">
                        <Form.Label>Task Name</Form.Label>
                        <Form.Control
                            className="input-control"
                            type="text"
                            name="name"
                            value={name}
                            placeholder="Enter task name"
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="dueDate">
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control
                            className="input-control"
                            type="date"
                            name="dueDate"
                            value={dueDate}
                            placeholder="Enter Due Date"
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            className="input-control"
                            type="text"
                            name="description"
                            value={description}
                            placeholder="Enter Description"
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Row>


                <Row className="mb-3">
                    <Form.Group as={Col} controlId="startDate">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control
                            className="input-control"
                            type="date"
                            name="startDate"
                            value={startDate}
                            placeholder="Enter Start Date"
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="endDate">
                        <Form.Label>End Date</Form.Label>
                        <Form.Control
                            className="input-control"
                            type="date"
                            name="endDate"
                            value={endDate}
                            placeholder="Enter End Date"
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="priority">
                        <Form.Label>Priority</Form.Label>
                        <Form.Select
                            className="input-control"
                            name="priority"
                            value={priority}                           
                            onChange={handleInputChange}
                            placeholder="Select Priority"
                        >
                            <option>Low</option>
                            <option>Middle</option>
                            <option>High</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="status">
                        <Form.Label>Status</Form.Label>
                        <Form.Select
                            className="input-control"
                            name="status"
                            value={status}                            
                            onChange={handleInputChange}
                            placeholder="Select Status"
                        >
                            <option>New</option>
                            <option>In Progress</option>
                            <option>Finished</option>
                        </Form.Select>
                    </Form.Group>

                </Row>
                <Button variant="primary" type="submit" className="submit-btn">
                    Submit
                </Button>
            </Form>
        </div>
    );
};
export default TaskForm;