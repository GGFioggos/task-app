// RENDERS TASKS
import React from 'react';
//import uniqid from 'uniqid';

const Overview = (props) => {
    const { tasks } = props;

    return (
        <ul>
            {tasks.map((task, index) => {
                return (
                    <li key={task.id}>
                        {index} {task.text}
                    </li>
                );
            })}
        </ul>
    );
};

export default Overview;
