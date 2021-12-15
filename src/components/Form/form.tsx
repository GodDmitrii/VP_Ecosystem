import React from "react";

export default function Form() {
    return (
        <div className="Form">
            <div className="title">title</div>
            <div className="inputs">
                <input type="text" name="email" placeholder="email" />
                <input type="text" name="password" placeholder="password" />
            </div>
            <input type="submit" id="submit" />
        </div>
    )
}