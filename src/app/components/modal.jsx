import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ modalShow, modalDismiss }) => {
    return (
        modalShow && (
            <div
                className="modal-overlay"
                style={{
                    width: '100vw',
                    minHeight: '100vh',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 2
                }}
            >
                <div
                    className={`modal fade ${modalShow ? 'show' : ''}`}
                    style={{ display: 'block' }}
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body">Updated!</div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    onClick={modalDismiss}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

Modal.propTypes = {
    modalShow: PropTypes.bool,
    modalDismiss: PropTypes.func
};

export default Modal;
