import React from 'react';
import { MDBListGroupItem } from 'mdb-react-ui-kit';

import Colors from '@styles/Colors.js';


const TaskToDoCard = ({taskTitle, taskDate, taskOwner, handleShowModal, taskDescription, taskCreatedDate, taskID}) => {
    return (
        <MDBListGroupItem onClick={() => handleShowModal(taskTitle, taskOwner, taskDate, taskCreatedDate, taskDescription, taskID)} tag='a' href='#' action>
            <div className='d-flex w-100 justify-content-between mb-1'>
                <h6 className='mb-1'>{taskTitle}</h6>
                <small>Expires  <span className='text-danger fw-bold'>{taskDate}</span></small>
            </div>
            <small>Responsable: <b style={{ color: Colors.lightBlue }}>{taskOwner}</b></small>
        </MDBListGroupItem>
    )
};

export default TaskToDoCard;