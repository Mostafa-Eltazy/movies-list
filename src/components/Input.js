import React from 'react'

const Input = ({name, label, value, error, onChange}) => {
    
    return (
        <div>
            <div className="form-group TOP-space">
                    <label htmlFor={name}>{label}</label>
                    <input
                    onChange={onChange}
                    value={value}
                    name={name}
                    type="text" 
                    className="form-control" 
                    id={name} />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}

export default Input
