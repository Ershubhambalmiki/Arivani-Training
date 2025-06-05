import React, { useState } from 'react'

const Student = () => {

    const option = [
        {
            id: 0,
            value: "--Select--"
        },
        {
            id: 1,
            value: "Active"
        },
        {
            id: 2,
            value: "Non-Active"
        }
    ]

    const [student, setStudent] = useState({
        id: '1',
        name: 'Shubham',
        profile: 'Trainee',
        status: "Non-Active"

    })
    const [studentId, setstudentId] = useState(student.id)
    const [studentName, setStudentNmae] = useState(student.name)
    const [studentProfile, setStudentProfile] = useState(student.profile)
    const [studentStatus, setStudentStatus] = useState(student.status)
    const [loading, setloading] = useState(false)

    const updateValue = () => {


        setStudent(
            {
                id: studentId,
                name: studentName,
                profile: studentProfile,
                status: studentStatus
            }
        )

        setloading(true)
        console.log(student)
        setTimeout(() => {
            setloading(false)
            alert("value is Updatetd")
        }, 2000);

    }

    const handelStatus = (e) => {

        setStudentStatus(e.target.value);
    }

    return (
        <>
            <form class="max-w-sm mx-auto mt-10 border p-5 rounded border-gray-300">
                <h2 className='font-bold text-2xl text-center'>Student  Form</h2>
                <div class="mb-5">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Id</label>
                    <input type="number"
                        value={studentId}
                        onChange={(e) => setstudentId(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div class="mb-5">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text"
                        value={studentName}
                        onChange={(e) => setStudentNmae(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div class="mb-5">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile</label>
                    <input type="text"
                        value={studentProfile}
                        onChange={(e) => setStudentProfile(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>

                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>

                    <select
                        // value={studentStatus}
                        onChange={handelStatus} >

                        {
                            option.map((item, index) => {
                                return (
                                    <option key={index}>{item.value}</option>
                                )

                            }
                            )
                        }

                    </select>
                </div>

                <button type="submit"
                    onClick={updateValue}
                    disabled={loading}
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5">
                    {
                        loading ? "Please wait..." : "Add"
                    }
                </button>
            </form>


        </>
    )
}

export default Student