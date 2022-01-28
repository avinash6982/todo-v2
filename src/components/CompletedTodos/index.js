import React from "react";

const CompletedTodos = ({
    items,
    markAsTodo
}) =>
    <div className="card" style={{ height: '100%' }}>
        <div className="card-body">
            <h4 className="card-title">Completed todos</h4>
            <hr />
            {
                items.map((item, key) =>
                    <React.Fragment key={key}>
                        <div className="row p-1">
                            <div className="col-1">
                                <input
                                    onChange={e => e.target.checked && markAsTodo(key)}
                                    style={{ height: 20, width: 20 }}
                                    type="checkbox" />
                            </div>
                            <div className="col-11">
                                <p className="mb-0">{item}</p>
                            </div>
                        </div>
                        <hr />
                    </React.Fragment>
                )
            }
        </div>
    </div>

export default CompletedTodos