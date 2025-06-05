import React, { useEffect } from 'react'
import Swal from 'sweetalert2';

const ShowAlert = ({ errorMsg }) => {

    useEffect((errorMsg) => {
        Swal.fire({
            title: 'Error!',
            text: "All fields is required",
            icon: 'warning',
            confirmButtonText: 'Ok'
        })

    }, [])
    return (
        <>
        </>
    )

}
export default ShowAlert;