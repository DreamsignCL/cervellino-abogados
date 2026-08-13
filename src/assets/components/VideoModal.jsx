import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const VideoModal = ({ title, imageSrc, videoUrl }) => {
  const [showModal, setShowModal] = useState(false);
  
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="modal-video">
      <button className="modal-video__button" onClick={handleShow}>
        <img src={imageSrc} alt="Abrir video" />
        <span>{title}</span>
      </button>

      <div
        className={`modal fade ${showModal ? 'show' : ''}`}
        tabIndex="-1"
        role="dialog"
        aria-hidden={!showModal}
        style={{ display: showModal ? 'block' : 'none' }}
        onClick={handleClose}
        aria-labelledby="modalLabel">
        <div
            className="modal-dialog modal-video__dialog modal-dialog-centered"
            role="document"
            onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
                <div className="modal-header">
                    <h5>{title}</h5>
                    <button
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                      onClick={handleClose}>
                        <FontAwesomeIcon icon={ faTimes } aria-hidden="true" />
                    </button>
                </div>
                <div className="modal-body">
                    {showModal && (
                      <div className="ratio ratio-16x9">
                        <iframe 
                          width="100%" 
                          height="315" 
                          src={`https://www.youtube.com/embed/${videoUrl}`} 
                          title="YouTube video player" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          referrerPolicy="strict-origin-when-cross-origin" 
                          allowFullScreen>
                        </iframe>
                      </div>
                    )}
                </div>
            </div>
        </div>
      </div>

      {/* Backdrop */}
      {showModal && <div className="modal-backdrop fade show" onClick={handleClose}></div>}
    </div>
  );
};

export default VideoModal;
