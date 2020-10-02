import React from 'react'

export const EditUserBody = (props) => {
    return(
        <div>
            <form className="ui form" onSubmit={props.onSubmit}>
                <div className="field">
                    <label>username</label>
                    <input value={props.username} onChange={props.handleOnChange} type="text" name="username" placeholder="username" />
                </div>
                <div className="field">
                    <label>password</label>
                    <input value={props.password} onChange={props.handleOnChange} type="text" name="password" placeholder="password" />
                </div>
                    <div className="field">
                        <label>Type</label>
                        <select value={props.role} onChange={props.handleOnChange} name="role" type="number" className="ui fluid dropdown">
                        <option value="" disabledSelect>Choose a Role</option>
                            <option value="2">Student</option>
                            <option value="3">Plus</option>
                            <option value="4">Admin</option>
                        </select>
                    </div>
                <button className="ui button" type="submit">Create User</button>
            </form>
        </div>
    )
}