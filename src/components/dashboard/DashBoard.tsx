import "./Dashboard.css";
import { FaPlus } from "react-icons/fa6";

const Dashboard = () => {
    return (
        <>
        <div className="dashbord_container">
            <div className="addbook">
            <button className="Addbtn">Dashbord</button>
                <button className="Addbtn">
                <FaPlus />
                Add Book</button>
                
            </div>
            <div className="dashboard">
                <table>
                    <thead> <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Description</th>
                    <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td> 
            <td>Book Title</td> 
            <td>Author Name</td> 
            <td>This is a brief description of the book.</td>
            <td>
                <div className="tablebtn">
                <button className="rowbtn">Update</button>
                <button className="rowbtn">Delete</button></div>
                </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}

export default Dashboard;
