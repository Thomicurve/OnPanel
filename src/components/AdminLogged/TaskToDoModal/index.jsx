import React, {useEffect, useState, useRef} from 'react';
import { EditTask, DeleteTask } from '@services/Tasks';
import useTokenAuth from '../../../hooks/useTokenAuth';
import Swal from 'sweetalert2';

import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBContainer, 
    MDBRow, 
    MDBCol,
    MDBInput 
} from 'mdb-react-ui-kit';



export const TaskToDoModal = ({showModal, handleShowModal, setShowModal, taskTitle, expiringTime, taskOwner, taskDescr, taskDate, taskID,
    taskSwitcherValue, taskSwitcher }) => {

    const [ token ] = useTokenAuth();

    const [isDisabled, setIsDisabled] = useState(false);
    const taskTitleInput = useRef(null);
    const taskDescrInput = useRef(null);
    const taskExpirInput = useRef(null);

    const [taskTitleNew, setTaskTitleNew] = useState('');
    const [taskDescrNew, setTaskDescrNew] = useState('');
    const [taskExipirNew, setTaskExipirNew] = useState('');

    // cambiamos el estado del modal cuando le damos al boton 'Cancel'
    const handleDisabled = () => {
        setIsDisabled(!isDisabled);
        setTaskTitleNew('');
        setTaskDescrNew('');
    }

    // una vez le damos a "Ready" llamamos al endpoint para
    // editar la tarea
    const editReady = async () => {
        const editResult = await EditTask({
            token, 
            taskID,
            task_title: taskTitleInput.current.value,
            task_expiration: taskExpirInput.current.value,
            task_description: taskDescrInput.current.value
        });

        if(!editResult.error) {
            Swal.fire({
                text: editResult.result.message,
                icon: 'success',
                preConfirm: () =>  {
                    taskSwitcher(!taskSwitcherValue);
                    setIsDisabled(false);
                }
            });
        } else 
            Swal.fire({
                text: editResult.result.message,
                icon: 'error'
            })
        
    }

    useEffect(() => {
        if(!showModal) {
            setTaskDescrNew('');
            setTaskTitleNew('');
            setIsDisabled(false);
        } 
    }, [showModal]);


    return (
        <MDBModal show={showModal} tabIndex='-1' setShow={setShowModal}>
            <MDBModalDialog size='xl fullscreen-xxl-down'>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>Task</MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={() => handleShowModal()}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <MDBContainer className='text-left'>
                            <MDBRow className='align-items-center my-3'>
                                <MDBCol size='2'>
                                    Task title:
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput 
                                        inputRef={taskTitleInput} 
                                        // Esto del value lo hacemos para que se actualice el valor del input con el nuevo valor ingresado
                                        value={!taskTitleNew.length ? taskTitle : taskTitleNew} 
                                        onChange={(e) => setTaskTitleNew(e.target.value)} 
                                        type='text'  
                                        disabled={!isDisabled ? true : false} /> 
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className='align-items-center my-3'>
                                <MDBCol size='2'>
                                    Description:
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput 
                                        inputRef={taskDescrInput} 
                                        onChange={(e) => setTaskDescrNew(e.target.value)}
                                        value={!taskDescrNew.length ? taskDescr : taskDescrNew} 
                                        type='text' 
                                        disabled={!isDisabled ? true : false} /> 
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className='align-items-center my-3'>
                                <MDBCol size='2'>
                                    Expiration:
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput inputRef={taskExpirInput} value={expiringTime} type='text' disabled={!isDisabled ? true : false} /> 
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className='align-items-center my-3'>
                                <MDBCol size='2'>
                                    Task owner:
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput value={taskOwner} type='text' disabled={true} /> 
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className='align-items-center my-3'>
                                <MDBCol size='2'>
                                    Created:
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput value={taskDate} type='text' disabled={true} /> 
                                </MDBCol>
                            </MDBRow>

                            {isDisabled ? <MDBContainer>
                                <MDBBtn className='me-3' onClick={() => editReady()}  color='success'>Ready</MDBBtn>
                                <MDBBtn className='me-3' color='danger' onClick={() => handleDisabled()}>Cancel</MDBBtn>
                            </MDBContainer> 

                            : <MDBContainer>                                
                                    <MDBBtn className='me-3' onClick={() => handleDisabled()}>Edit</MDBBtn>
                                    <MDBBtn className='ms-3' color='danger'>Delete</MDBBtn>
                            </MDBContainer>}
                        </MDBContainer>
                    </MDBModalBody>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    )
}
