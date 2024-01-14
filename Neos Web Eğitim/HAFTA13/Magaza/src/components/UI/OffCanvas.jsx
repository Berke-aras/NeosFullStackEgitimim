import React from "react";
import "./offCanvas.css";
import ReactDom from "react-dom";

function OffCanvas(props) {
    const portalElement = document.getElementById("overlays");

    const Backdrop = (props) => {
        return <div className="backdrop" onClick={props.hideCartHandler} />;
    };

    const OffCanvasOverlay = (props) => {
        return (
            <div className="offcanvas">
                <div className="content">{props.children}</div>
            </div>
        );
    };

    return (
        <>
            {ReactDom.createPortal(
                <Backdrop hideCartHandler={props.hideCartHandler} />,
                portalElement
            )}

            {ReactDom.createPortal(
                <OffCanvasOverlay> {props.children} </OffCanvasOverlay>,
                portalElement
            )}
        </>
    );
}

export default OffCanvas;
