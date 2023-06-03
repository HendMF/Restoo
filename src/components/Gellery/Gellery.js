import React from 'react';
import './Gellery.css';
import gImages from './../../images/g_images/g_images';
import { Link } from 'react-router-dom';

const Gellery = () => {
    const Galleries = [
      {
        img: gImages.g1,
        id: 1,
        text: "Tasty Food",
        paragraph:
          "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Tempora Ea Ex Dolorem. Ad Minus Iusto Saepe Quas Laborum, Minima Officiis Eius Commodi Repellendus Rem Esse Pariatur Asperiores Qui Voluptatum Magnam.",
      },
      {
        img: gImages.g2,
        id: 2,
        text: "Tasty Food",
        paragraph:
          "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Tempora Ea Ex Dolorem. Ad Minus Iusto Saepe Quas Laborum, Minima Officiis Eius Commodi Repellendus Rem Esse Pariatur Asperiores Qui Voluptatum Magnam.",
      },
      {
        img: gImages.g3,
        id: 3,
        text: "Tasty Food",
        paragraph:
          "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Tempora Ea Ex Dolorem. Ad Minus Iusto Saepe Quas Laborum, Minima Officiis Eius Commodi Repellendus Rem Esse Pariatur Asperiores Qui Voluptatum Magnam.",
      },
      {
        img: gImages.g4,
        id: 4,
        text: "Tasty Food",
        paragraph:
          "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Tempora Ea Ex Dolorem. Ad Minus Iusto Saepe Quas Laborum, Minima Officiis Eius Commodi Repellendus Rem Esse Pariatur Asperiores Qui Voluptatum Magnam.",
      },
      {
        img: gImages.g5,
        id: 5,
        text: "Tasty Food",
        paragraph:
          "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Tempora Ea Ex Dolorem. Ad Minus Iusto Saepe Quas Laborum, Minima Officiis Eius Commodi Repellendus Rem Esse Pariatur Asperiores Qui Voluptatum Magnam.",
      },
      {
        img: gImages.g6,
        id: 6,
        text: "Tasty Food",
        paragraph:
          "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Tempora Ea Ex Dolorem. Ad Minus Iusto Saepe Quas Laborum, Minima Officiis Eius Commodi Repellendus Rem Esse Pariatur Asperiores Qui Voluptatum Magnam.",
      },
      {
        img: gImages.g7,
        id: 7,
        text: "Tasty Food",
        paragraph:
          "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Tempora Ea Ex Dolorem. Ad Minus Iusto Saepe Quas Laborum, Minima Officiis Eius Commodi Repellendus Rem Esse Pariatur Asperiores Qui Voluptatum Magnam.",
      },
      {
        img: gImages.g8,
        id: 8,
        text: "Tasty Food",
        paragraph:
          "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Tempora Ea Ex Dolorem. Ad Minus Iusto Saepe Quas Laborum, Minima Officiis Eius Commodi Repellendus Rem Esse Pariatur Asperiores Qui Voluptatum Magnam.",
      },
      {
        img: gImages.g9,
        id: 9,
        text: "Tasty Food",
        paragraph:
          "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Tempora Ea Ex Dolorem. Ad Minus Iusto Saepe Quas Laborum, Minima Officiis Eius Commodi Repellendus Rem Esse Pariatur Asperiores Qui Voluptatum Magnam.",
      },
    ];
  return (
    <section className="gallery">
      <h1 className="heading">
        {" "}
        Our Food <span>Gallery</span> Foods
      </h1>
      <div className="box-container">
        {Galleries.map((Gallery) => {
          return (
            <div className="galleryBox">
              <img src={Gallery.img} alt="" />
              <div className="content">
                <h3>{Gallery.text}</h3>
                <p>{Gallery.paragraph}</p>
                <Link to="/order" className="btn">
                  order now
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Gellery