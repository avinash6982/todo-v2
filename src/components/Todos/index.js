import React from "react";

const Todos = ({
    todos,
    markAsCompleted
}) =>
    <div className="card">
        <div className="card-body">
            <h4 className="card-title">Todos</h4>
            <hr />
            {
                todos.map((item, key) =>
                    <React.Fragment key={key}>
                        <div className="row p-1">
                            <div className="col-1">
                                <input
                                    onChange={e => e.target.checked && markAsCompleted(key)}
                                    style={{ height: 20, width: 20 }}
                                    type="checkbox" />
                            </div>
                            <div className="col-11">
                                <p className="mb-0">{item}</p>
                            </div>
                        </div>
                        <hr />
                    </React.Fragment>)
            }
        </div>
    </div>

export default Todos