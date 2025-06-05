import React, { useState } from 'react'

const StudentData = () => {

    const status = [
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
        },
    ]

    const [student, setStudent] = useState(
        {
            id: 1,
            name: "Amaan",
            profile: "Software developer",
            status: "--Select--"
        }
    )
    const [loading, setloading] = useState(false);
    const [stdId, setStdId] = useState(student.id);
    const [stdName, setStdName] = useState(student.name);
    const [stdProfile, setStdProfile] = useState(student.profile);
    const [stdStatus, setStdStatus] = useState(student.status);


    const updateStudent = () => {
        if (stdStatus == "--Select--") {
            alert("Please Select the status");
            return;
        }
        try {
            setloading(true);
            console.log(stdId, stdName, stdProfile, "updated std data");
            setStudent(
                {
                    id: stdId,
                    name: stdName,
                    profile: stdProfile,
                    status: stdStatus
                }
            )
            alert("Student details updated");
            setloading(false);
        } catch (error) {
            console.log(error);
            setloading(false);
        }
    }

    console.log(student, "student object");

    const handleSelectStatus = (e) => {
        console.log(e.target.value);
        if (e.target.value == "--Select--") {
            alert("Please Select the status");
            return;
        }
        setStdStatus(e.target.value);
    }


    return (
        <>
            <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 mt-5">
                <div >
                    <h3 className='text-center text-xl font-bold'>Student Data</h3>
                    <div>
                        <label htmlFor="" className="block text-sm font-medium text-gray-700 py-2">id</label>
                        <input
                            type="number"
                            value={stdId}
                            onChange={(e) => setStdId(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <div>
                        <label htmlFor="" className="block text-sm font-medium text-gray-700 py-2">Name</label>
                        <input
                            type="text"
                            value={stdName}
                            onChange={(e) => setStdName(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <div>
                        <label htmlFor="text" className="block text-sm font-medium text-gray-700 py-2">Profile</label>
                        <div className=''>
                            <input
                                type='text'
                                value={stdProfile}
                                onChange={(e) => setStdProfile(e.target.value)}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />

                        </div>

                    </div>

                    <div>

                        <div className=''>
                            <label htmlFor='' className="block text-sm font-medium text-gray-700 py-2">Stetus</label>

                            <select onChange={handleSelectStatus}>
                                {
                                    status.map((data, index) => {
                                        return (
                                            <option key={index}>{data.value}</option>
                                        )
                                    })
                                }
                            </select>

                        </div>

                    </div>
                    <button className='bg-blue-300 px-5 py-1 rounded mt-5'
                        onClick={updateStudent}
                        disabled={loading} >
                        {
                            loading ? "please wait..." : "Submit"
                        }
                    </button>

                </div>
            </div>
        </>
    )
}

export default StudentData