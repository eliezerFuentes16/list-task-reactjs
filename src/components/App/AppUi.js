import React from "react";
import './App.css';
import { ImgList } from "../layout/ImgList";
import { Index } from "../Todos/Todos";
import { TodoProvider } from "../TodoContext/TodoContext";

function AppUi() {

    return (
        <React.Fragment>
            <div className="div-container-todos">

                <div className="div-flex-item">
                    <TodoProvider>
                        <Index></Index>

                    </TodoProvider>
                </div>
                <div className="div-flex-item">
                    <ImgList></ImgList>
                </div>
            </div>


        </React.Fragment>

    );
}

export default AppUi;
