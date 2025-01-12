import { useState } from "react";
import "./Dashboard.css";
import { FaPlus } from "react-icons/fa6";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState("add");
  const [selectedBook, setSelectedBook] = useState<{ id: number; title: string; author: string; description: string } | null>(null);
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Book Title",
      author: "Author Name",
      description: "This is a brief description of the book.",
    },
  ]);

  const handleAddBookClick = () => {
    setFormMode("add");
    setSelectedBook(null);
    setShowForm(true);
  };

  const handleUpdateBookClick = (book: { id: number; title: string; author: string; description: string }) => {
    setFormMode("update");
    setSelectedBook(book);
    setShowForm(true);
  };

  const handleCloseModal = () => {
    setShowForm(false);
    setSelectedBook(null);
  };


  const handleDeleteBook = (id: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this book?");
    if (confirmDelete) {
      setBooks(books.filter((book) => book.id !== id));
    }
  };

  return (
    <>
      <div className="dashbord_container">
        <div className="addbook">
          <button className="Addbtn">Dashboard</button>
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
              <form>
                <div className="form_field">
                  <label htmlFor="title">Title:</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    defaultValue={selectedBook?.title || ""}
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
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
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
                      <button className="rowbtn" onClick={() => handleDeleteBook(book.id)}>Delete</button>
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
