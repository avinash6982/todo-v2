import React, { useState } from "react";

const CreateTodo = ({
    addTodo,
}) => {

    const [text, setText] = useState('')

    const submitHandler = () => {

        if (text.length > 0) {

            addTodo([text])
            setText('')
        }
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className="form-group">
                    <label>
                        <h4>
                            Add todo
                        </h4>
                    </label>
                    <div className="row">
                        <div className="col-10">
                            <input
                                value={text}
                                onChange={e => setText(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Enter todo text" />
                        </div>
                        <div className="col-2">
                            <button onClick={submitHandler} className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTodo