import React, {  useState } from 'react'

const TaskApp = () => {
    const [task, setTask] = useState([]);
    const [editTask, setEditTask] = useState(task.text)

    const handleAddTask = (e) => {
        if (e.code == "Enter") {
            if (e.target.value !== "") {
                setTask([{ text: e.target.value, completed: false, edit: false }, ...task]);
                e.target.value = "";
            }
            else {
                alert("please Enter Your Task")
            }

        }
    }

    const handleEditClick = (index) => {
        let editValue = task[index].text;
        setEditTask(editValue)

    };
    const handleBtns = (index) => {
        handleEditClick(index)
        handleTaskEdit(index)
    }

    const handleDelete = (index) => {
        let temp = task;
        temp.splice(index, 1);
        setTask([...temp]);
    };

    const handleTaskStatus = (index) => {
        let temp = task;
        temp[index].completed = !temp[index].completed;
        setTask([...temp]);
    }
    const handleTaskEdit = (index) => {
        let temp = task;
        temp[index].edit = !temp[index].edit;
        setTask([...temp]);
    }
    return (
        <>
            <div className='flex justify-center'>
                <div className='bg-gray-300 w-4/5 mt-5 px-5 rounded'>
                    <p className='text-2xl font-bold text-center'>Todo-App</p>

                    {
                        editTask ?
                            <input type="text" className='w-full my-3' placeholder='Edit Task'
                                value={editTask}
                                onChange={(e) => setEditTask(e.target.value)}
                            />
                            :
                            <input type="text" className='w-full my-3' placeholder='Enter Your Task' onKeyDown={handleAddTask}
                            />
                    }
                    <ul>
                        {
                            task.map((item, index) => <div className='my-2'>
                                <input type="checkbox" checked={item?.completed ? true : false} />

                                <span key={index} className='ms-5 mb-3'>
                                    {
                                        item.completed ? <>
                                            <del>{item.text}</del>
                                        </> : <>
                                            {item.text}
                                        </>
                                    }
                                </span>
                                {
                                    item.completed ? <button onClick={() => handleTaskStatus(index)} className='bg-orange-400 text-white px-3 py-2 rounded ml-2.5 cursor-pointer'
                                    >Incomplete Task</button> : <button onClick={() => handleTaskStatus(index)} className='bg-green-400 text-white px-3 py-2 rounded ml-2.5 cursor-pointer'>Completed a Task</button>
                                }


                                {
                                    item.edit ? <button
                                        className='bg-green-600 text-white px-4 py-2 rounded ml-2.5'
                                        onClick={() => handleBtns(index)}>
                                        Save
                                    </button> : <button className='bg-blue-400 text-white px-3 py-2 rounded ml-2.5'
                                        onClick={() => handleBtns(index)}
                                    >Edit</button>
                                }


                                <button className='bg-red-400 text-white px-3 py-2 rounded ml-2.5'
                                    onClick={() => handleDelete(index)}
                                >Delete</button>

                            </div>)
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TaskApp