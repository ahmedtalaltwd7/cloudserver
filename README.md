# Astro Form Application with MongoDB

A modern form application built with Astro and MongoDB for data entry and management.

## Features

- **Form Data Entry**: 8-field form with validation
- **Data Management**: View, edit, and delete saved records
- **Authentication**: JWT-based login system with role-based access
- **MongoDB Integration**: Persistent data storage
- **Responsive Design**: Modern UI with Tailwind CSS
- **Arabic RTL Support**: Full right-to-left language support

## Prerequisites

- Node.js 18+ 
- MongoDB (local installation or MongoDB Atlas)

## Installation

1. **Clone and navigate to the project:**
   ```bash
   cd astro-form-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and configure:
   ```
   MONGODB_URI=mongodb://localhost:27017/astro-form-app
   JWT_SECRET=your-super-secret-jwt-key-here
   NODE_ENV=development
   ```

4. **Start MongoDB** (if using local installation):
   ```bash
   mongod
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

6. **Open your browser:**
   Navigate to `http://localhost:3000`

## Default User Accounts

The application automatically creates default users on first run:

- **Admin**: username: `admin`, password: `admin123` (full access)
- **TWD**: username: `twd`, password: `twd2024` (full access)  
- **User**: username: `user`, password: `user123` (view only)

## Project Structure

```
astro-form-app/
├── src/
│   ├── layouts/
│   │   └── Layout.astro       # Main layout component
│   ├── pages/
│   │   ├── index.astro        # Form entry page
│   │   ├── login.astro        # Login page
│   │   ├── data.astro         # Data viewing page
│   │   └── api/               # API endpoints
│   │       ├── submit-form.js
│   │       ├── login.js
│   │       └── submissions/
│   │           ├── index.js
│   │           └── [id].js
│   └── lib/
│       ├── database.js        # MongoDB operations
│       └── auth.js           # Authentication utilities
├── astro.config.mjs          # Astro configuration
├── tailwind.config.mjs       # Tailwind CSS configuration
└── package.json
```

## API Endpoints

- `POST /api/submit-form` - Submit new form data
- `POST /api/login` - User authentication
- `GET /api/submissions` - Get all submissions
- `GET /api/submissions/[id]` - Get single submission
- `PUT /api/submissions/[id]` - Update submission (admin only)
- `DELETE /api/submissions/[id]` - Delete submission (admin only)

## MongoDB Collections

### submissions
```javascript
{
  _id: ObjectId,
  field1: String,
  field2: String,
  field3: String,
  field4: String,
  field5: String,
  field6: String,
  field7: String,
  field8: String,
  created_at: Date,
  updated_at: Date
}
```

### users
```javascript
{
  _id: ObjectId,
  username: String,
  password: String (hashed),
  role: String, // 'admin' or 'user'
  created_at: Date
}
```

## Development

- **Build for production:**
  ```bash
  npm run build
  ```

- **Preview production build:**
  ```bash
  npm run preview
  ```

## Deployment

1. Set up MongoDB Atlas or ensure MongoDB is available on your server
2. Configure environment variables in your deployment platform
3. Build and deploy the application
4. The app will automatically create default users on first run

## Technologies Used

- **Astro** - Web framework
- **MongoDB** - Database
- **Tailwind CSS** - Styling
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## License

Open source - feel free to modify and use as needed.
