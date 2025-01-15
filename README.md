Bookify
Library Management System


	Project Overview
Bookify is a simple library management system designed to facilitate book management through CRUD operations. Developed using .NET 8 and React (TypeScript) for the frontend and a SQLite database for the backend, the system enables seamless management of library resources.

	System Features
	Home Page:
•	Accessible to all users, providing an overview of the system and its functionalities.

	User Authentication:
•	Login is mandatory for administrative operations.
•	Only one user account is available:
o	Username: admin@gmail.com
o	Password: Admin@1234

	Administrative Functions:
•	Add Book: Allows the admin to create new book records with relevant details.
•	Update Book: Enables editing existing book details.
•	Delete Book: Removes books from the system.
•	View Books: Displays a table with all book records, including their details.

	Development Details
•	Frontend: Built with React (TypeScript), offering a user-friendly and responsive interface.
•	Backend: Developed using .NET 8, ensuring robust and secure server-side operations.
•	Database: SQLite was used for managing book data.
•	Notifications: Integrated Toastify to provide success feedback for key actions like login, adding, updating, and deleting books.

	Version Control
Version control is handled using Git with a repository hosted on GitHub.
Key aspects include:
1.	Commit History:
o	Descriptive commit messages highlight key changes such as feature additions, bug fixes, and formatting updates.
2.	Branch Management:
o	Separate branches were used for feature development and merged into the main branch upon completion.
3.	Repository Link:
o	Front-end : https://github.com/RavinduLakshitha/Bookify-LMS
o	Back-end : https://github.com/RavinduLakshitha/Bookify_Backend

	Run Project

	Frontend Setup (VS Code)
Prerequisites:
•	Ensure you have Node.js installed. You can download it from https://code.visualstudio.com/

Steps:
1.	Clone the repository: Open a terminal in VS Code and run
o	git clone https://github.com/RavinduLakshitha/Bookify-LMS.git .
o	cd Bookify-LMS

2.	Install dependencies: Run the following command to install the required Node.js packages:
o	npm install

3.	Run the frontend: Start the frontend project by running:
o	npm run dev

This will start a local development server (usually at http://localhost:3000)

	Backend Setup (Visual Studio)
Prerequisites:
o	Ensure that you have .NET 8 SDK installed. You can download it from https://dotnet.microsoft.com/en-us/download/dotnet/8.0 .

Steps:
1.	Clone the repository: In a terminal or command prompt, navigate to a folder where you want to clone the backend repositor
o	git clone https://github.com/RavinduLakshitha/Bookify_Backend.git
o	cd LMS_Backend

2.	Open the backend in Visual Studio:
o	Open the solution file (.sln) in Visual Studio.
o	Wait for Visual Studio to restore any NuGet packages (if necessary).

3.	Set up the database:
o	Ensure your database is set up and the connection strings in the appsettings.json file are correctly configured.

4.	Run the backend: In Visual Studio, press Ctrl + F5 to run the backend. This will start the API server (typically at http://localhost:7086).
	Conclusion
library management system demonstrates the efficient management of library resources with an intuitive user interface and reliable backend operations. It demonstrates the practical implementation of web technologies to solve real-world library management problems.


