# ToDo App

## Description
This repository contains a ToDo application developed using ReactJS with TypeScript for the frontend and ASP.NET Core 8 with C# for the backend. The app is designed to help users manage their tasks efficiently with minimalistic and functional features.

## Features
- **Task Validation:** Each task must have more than 10 characters. Tasks that do not meet this requirement will trigger an error message.
- **Deadline Management:** Users can set deadlines for their tasks. Overdue tasks are automatically highlighted in red.
- **Table Display:** Tasks are displayed in a structured table format for easy viewing and management.
- **Task Operations:** Users can delete tasks and mark them as done.
- **Data Persistence:** Tasks are stored using SQLite database for data persistence.

## Installation

### Prerequisites
- Node.js
- .NET 8 SDK

### Backend Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/k-f-m/react-typescript-todo-app.git
    ```
2. Navigate to the backend directory:
    ```bash
    cd react-typescript-todo-app/todo-app.Server
    ```
3. Restore the dependencies:
    ```bash
    dotnet restore
    ```
4. Apply migrations to set up the SQLite database:
   ```bash
   dotnet ef database update
   ```
5. Build the application:
    ```bash
    dotnet build
    ```
6. Run the application:
    ```bash
    dotnet run
    ```

### Frontend Setup
1. Navigate to the frontend directory:
    ```bash
    cd react-typescript-todo-app/todo-app.client
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```

## Usage
- **Adding a Task:** Enter a task description with more than 10 characters and optionally set a deadline.
- **Marking as Done:** Click the "Done" button next to the task to mark it as completed.
- **Deleting a Task:** Click the "Delete" button next to the task to remove it.
- **Viewing Overdue Tasks:** Tasks past their deadline will be highlighted in red.

## Contributing
Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Repository Link
[react-typescript-todo-app](https://github.com/k-f-m/react-typescript-todo-app)
