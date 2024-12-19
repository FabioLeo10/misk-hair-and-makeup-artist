import React from 'react';
import './MyWorks.css'; 



import img1 from '../assets/upload1.jpg'
import img2 from '../assets/upload2.jpg';
import img3 from '../assets/upload3.jpg';
import img4 from '../assets/upload4.jpg';
import img5 from '../assets/upload5.jpg';
import img6 from '../assets/upload6.jpg';

function MyWorks() {
    
  const images = [
    { id: 1, src: img1, alt: 'Image 1' },
    { id: 2, src: img2, alt: 'Image 2' },
    { id: 3, src: img3, alt: 'Image 3' },
    { id: 4, src: img4, alt: 'Image 4' },
    { id: 5, src: img5, alt: 'Image 5' },
    { id: 6, src: img6, alt: 'Image 6' },
  ];

  return (
    <section className="my-works py-5">
      <div className="container">
        <h2 className="text-center mb-4">My Works</h2>

        
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {images.map((image) => (
            <div className="col" key={image.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={image.src}
                  className="card-img-top"
                  alt={image.alt}
                  data-bs-toggle="modal"
                  data-bs-target={`#imageModal${image.id}`}
                />
                
              </div>

              
              <div
                className="modal fade"
                id={`imageModal${image.id}`}
                tabIndex="-1"
                aria-labelledby={`imageModalLabel${image.id}`}
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id={`imageModalLabel${image.id}`}>
                        {image.alt}
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyWorks;