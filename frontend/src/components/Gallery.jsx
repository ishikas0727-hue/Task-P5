import React from "react";

function Gallery() {
  const photos = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs-eNmm-s-UrHi9zMJpsDCoD9Wi5wjRjJrciV2Q_2gtg&s",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSociOUxwusxxIiNquT5FNKTzg_65jh5qHaLwIR3ro7dg&s=10",

    "https://i.pinimg.com/736x/69/d1/63/69d163fdaa20ac21abe9424aaac16f34.jpg",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcaU_cC84mDtnUMvgkdWC5j3JLCltDCN1eJ8qv7hQAPg&s=10"
  ];

  return (
    <div id="contact">
      <hr />

      <p>My photos</p>

      <div className="gallery">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Gallery ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;