import "./Hero.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Bookimage from '../../assets/book.jpg';

interface Book {
  id: string;
  name: string;
  author: string;
description: string;
}

const Hero = () => {
const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);


  // Fetch book data using axios
  useEffect(() => {
    axios
      .get("https://localhost:7086/api/Books") 
      .then((response) => {
        setBooks(response.data);

      })
      .catch(() => {
        setError("Failed to fetch books");
      });
  }, []);

  return (
    <div className="hero">
      <div className="font">
      <div className="hero__content">
      <p>Where Stories Meet Simplicity</p>
        <h1>Seamlessly<br />organize and access your collection with ease.</h1> 
      </div>
      </div>
      
      {error && <div className="error">{error}</div>}
      <div className="Read_book">
    {books.map((book) => (
    <div className="card" key={book.id}>
      <div className="img"><img src={Bookimage} alt="bookimg" /></div>
      <div className="name">{book.name}</div>
      <div className="Author">{book.author}</div>
      <div className="Desc">{book.description}</div>
    </div>
  ))}
</div>
      </div>
  );
};

export default Hero;
