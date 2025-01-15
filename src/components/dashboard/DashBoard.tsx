import { useState, useEffect } from "react";
import "./Dashboard.css";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";
import { toast } from "react-toastify";

interface Book {
  id: string;
  name: string;
  author: string;
  description: string;
}

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState<"add" | "update">("add");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch books data from the backend when the component is mounted
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("https://localhost:7086/api/Books");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
        toast.error("Failed to load books. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleAddBookClick = () => {
    setFormMode("add");
    setShowForm(true);
  };

  // Handle form submission to add or update a book

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const updatedBook = {
      name: formData.get("name") as string,
      author: formData.get("author") as string,
      description: formData.get("description") as string,
    };

    try {
      let response;

      // Add new book if form mode is 'add'

      if (formMode === "add") {
        response = await axios.post(
          "https://localhost:7086/api/Books",
          updatedBook,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        toast.success("Book Added Successfully");

        // Update existing book if form mode is 'update' and a book is selected
      } else if (formMode === "update" && selectedBook) {
        response = await axios.put(
          `https://localhost:7086/api/Books/${selectedBook.id}`,
          updatedBook,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        toast.success("Book Updated Successfully");
      }

      if (!response || response.status !== 200) {
        throw new Error(
          formMode === "add" ? "Failed to add book" : "Failed to update book"
        );
      }

      const updatedBooks = response.data;
      if (formMode === "add") {
        setBooks((prevBooks) => [...prevBooks, updatedBooks]);
      } else {
        setBooks((prevBooks) =>
          prevBooks.map((book) =>
            book.id === updatedBooks.id ? updatedBooks : book
          )
        );
      }

      setShowForm(false); // Close the form
    } catch (error) {
      console.error("Error submitting book:", error);
      toast.error(
        formMode === "add" ? "Failed to add book." : "Failed to update book."
      );
    }
  };

  // Handle updating a book

  const handleUpdateBookClick = (book: Book) => {
    setFormMode("update");
    setSelectedBook(book);
    setShowForm(true);
  };

  const handleCloseModal = () => {
    setShowForm(false);
    setSelectedBook(null);
  };

  // Handle deleting a book

  const handleDeleteBook = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (confirmDelete) {
      try {
        const response = await axios.delete(
          `https://localhost:7086/api/Books/${id}`
        );
        if (response.status === 200) {
          setBooks(books.filter((book) => book.id !== id));
          toast.success("Book Deleted Successfully");
        } else {
          throw new Error("Failed to delete book");
        }
      } catch (error) {
        console.error("Error deleting book:", error);
        toast.error("Failed to delete book. Please try again.");
      }
    }
  };

  if (loading) {
    return <div>Loading books...</div>;
  }

  return (
    <>
      <div className="dashbord_container">
        <div className="addbook">
          <button className="Addbtn" onClick={handleAddBookClick}>
            <FaPlus />
            Add Book
          </button>
        </div>

        {/* Modal */}
        {showForm && (
          <div className="modal_overlay">
            <div className="modal_content">
              <h3>{formMode === "add" ? "Add a New Book" : "Update Book"}</h3>
              <form onSubmit={handleFormSubmit}>
                <div className="form_field">
                  <label htmlFor="name">Title:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    defaultValue={selectedBook?.name || ""}
                    required
                  />
                </div>
                <div className="form_field">
                  <label htmlFor="author">Author:</label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    defaultValue={selectedBook?.author || ""}
                    required
                  />
                </div>
                <div className="form_field">
                  <label htmlFor="description">Description:</label>
                  <textarea
                    id="description"
                    name="description"
                    defaultValue={selectedBook?.description || ""}
                    required
                  ></textarea>
                </div>
                <div className="modal_buttons">
                  <button type="submit" className="formbtn">
                    {formMode === "add" ? "Submit" : "Update"}
                  </button>
                  <button
                    type="button"
                    className="formbtn cancelbtn"
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Book List */}
        <div className="dashboard">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td>{book.name}</td>
                  <td>{book.author}</td>
                  <td>{book.description}</td>
                  <td>
                    <div className="tablebtn">
                      <button
                        className="rowbtn"
                        onClick={() => handleUpdateBookClick(book)}
                      >
                        Update
                      </button>
                      <button
                        className="rowbtn"
                        onClick={() => handleDeleteBook(book.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
