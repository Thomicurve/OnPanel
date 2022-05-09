import React, { useState } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBListGroup } from 'mdb-react-ui-kit';
import TaskToDoCard from '../TasksToDoCard';
import useTasks from '../../../hooks/useTasks';
import { TaskToDoModal } from '../TaskToDoModal';
import moment from 'moment';

import Colors from '@styles/Colors.js';

export default function TaskToDoCardContainer() {

    // updateTasksSwitcher es para que una vez que actualicemos nuestra tarea, esta va a llamar a la api nuevamente para 
    // obtener los resultados actualizados
    const [updateTasksSwitcher, setUpdateTasksSwitcher] = useState(false);
    const { tasks } = useTasks();

    // Cambia la visibilidad del modal
    const [modalShow, setModalShow] = useState(false);
    const [modalData, setModalData] = useState({ modalTitle: '', taskOwner: '', taskDate: '', taskCreatedData: '', taskDescr: '', taskID: '' });

    // Si tenemos datos en el modal vamos a ponerlos dentro del hook modalData
    const handleShow = (modalTitle, taskOwner, taskDate, taskCreatedData, taskDescr, taskID) => {
        if (modalTitle && taskOwner && taskDate && taskDescr && taskCreatedData && taskID)
            setModalData({ modalTitle, taskOwner, taskDate, taskDescr, taskCreatedData, taskID });
        setModalShow(!modalShow);
    }


    return (
        <MDBCard style={{ height: '20rem' }}>
            <MDBCardBody>
                <MDBCardTitle style={{ color: Colors.orange }}>Task to do</MDBCardTitle>
                <MDBListGroup className='mt-4 overflow-auto' style={{ maxHeight: '225px' }}>
                    {
                        tasks.hasEmployees
                            ?
                            <>
                                {
                                    tasks.tasks.map(task => {
                                        return (
                                            <TaskToDoCard
                                                hasEmployees={tasks.hasEmployees}
                                                handleShowModal={handleShow}
                                                key={task._id}
                                                taskID={task._id}
                                                taskDate={moment(task.task_expiration).toNow()}
                                                taskOwner={task.owner}
                                                taskTitle={task.task_title}
                                                taskDescription={task.task_description}
                                                taskCreatedDate={moment(task.task_date).fromNow()}
                                            />
                                        )
                                    })
                                }
                                <TaskToDoModal
                                    taskSwitcher={setUpdateTasksSwitcher}
                                    taskSwitcherValue={updateTasksSwitcher}
                                    taskID={modalData.taskID}
                                    showModal={modalShow}
                                    setShowModal={setModalShow}
                                    taskTitle={modalData.modalTitle}
                                    handleShowModal={handleShow}
                                    taskOwner={modalData.taskOwner}
                                    expiringTime={modalData.taskDate}
                                    taskDescr={modalData.taskDescr}
                                    taskDate={modalData.taskCreatedData}
                                />
                            </>


                            :
                            <div style={{ height: '200px' }} className="d-flex align-items-center text-danger justify-content-center">
                                <h6>You don't have employees</h6>
                            </div>
                    }

                </MDBListGroup>
            </MDBCardBody>
        </MDBCard>
    );
}
