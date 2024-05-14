import React from 'react'

const Testing = () => {
  return (
    <div className='TestingPage' style={{}}>
   <div>
            <h3 className='text-center m-3 '>User Dashboard</h3>
        <div className="container" style={{ backgroundColor: 'yellow', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           
            <div className='table-responsive' style={{ width: '100%', maxWidth: '1000px' }}>
                <table className="table table-bordered">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col"><CreateUser /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.user && data.user.length > 0 (
                                
                            )
                        }
                        {data.user && data.user.map((element, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{element.name}</td>
                                <td>{element.email}</td>
                                <td>{element.phone}</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                    <button type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target={`#exampleModal-${index}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                        </svg>
                                    </button>
                                    <div className="modal fade" id={`exampleModal-${index}`} tabIndex="-1" aria-labelledby={`exampleModalLabel-${index}`} aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <form onSubmit={(e) => handleSubmit(e, element._id)}>
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id={`exampleModalLabel-${index}`}>Edit User Information</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="mb-3">
                                                            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                                            <input type="text" className="form-control" name="name" value={value.name} onChange={handleChange} id="exampleFormControlInput1" placeholder="Enter User Name" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                                            <input type="email" className="form-control" name="email" value={value.email} onChange={handleChange} id="exampleFormControlInput1" placeholder="Enter User Email" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="exampleFormControlInput1" className="form-label">Phone No.</label>
                                                            <input type="text" className="form-control" name="phone" value={value.phone} onChange={handleChange} id="exampleFormControlInput1" placeholder="Enter Phone No." />
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="submit" className="btn btn-secondary" data-bs="modal" data-bs-dismiss="modal">Update</button>
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                        <button className="btn btn-link p-0" onClick={() => HandleDelete(element._id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default Testing
