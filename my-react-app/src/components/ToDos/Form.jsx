import React from 'react';

const Form = (props) => {
    const heading = props?.heading;
    const addTodo = props?.addTodo;

    const handleSubmit = event => {
        event.preventDefault();
        const allowedNames = ['title', 'description', 'deadline', 'priority'];

        const newTodo = {};

        const formInputs = event.target.querySelectorAll('input,textarea');
        formInputs.forEach(input => {
            if(allowedNames.includes(input.name))
                newTodo[input.name] = input.value;
            input.value = '';
        });

        addTodo(newTodo);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>{heading ? heading : 'New To-Do Form'}</h3>
            <label>
                Enter new task title:
                <input name="title" type="text" />
            </label>
            <label>
                Enter new task description:
                <textarea name="description" cols="30" rows="10"></textarea>
            </label>
            <label>
                Deadline:
                <input name="deadline" type="date" />
            </label>
            <label>
                Priority:
                <input name="priority" type="number" />
            </label>
            <input type="submit" value="Add To-Do" />
        </form>
    );
};

export default Form;
