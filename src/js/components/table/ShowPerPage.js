import React from 'react';

const ShowPerPage = ({ event }) => {

    const onChange = e => {
        event(e.target.value);
    }

    return (
        <>
            <div className="table-top">
                <div className="row">
                    <div className="col-md-4 col-lg-8">
                        <label className="show control-label form-label">Show</label>
                        <select onChange={onChange}> className="filters-select form-control input-sm form-control">
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                        <span className="entries"> entries</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowPerPage