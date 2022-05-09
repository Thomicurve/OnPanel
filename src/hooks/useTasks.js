import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasks, editTask } from '../reducers/TasksReducer';
import useTokenAuth from './useTokenAuth';

const useTasks = () => {
    const [token] = useTokenAuth();
    const dispatch = useDispatch();
    const tasks = useSelector(state => state);

    useEffect(() => {
        dispatch(getAllTasks(token));
    }, [dispatch]);

    const editSomeTask = (id, taskContent) => {
        dispatch(editTask({token, taskID: id, taskContent}));
    }

    return { tasks, editSomeTask };
}

export default useTasks;