# Puri School - Backend API (Login Only)

## API Endpoints

### 1. Login (POST /api/auth/login)
Admin login to get tokens.

**Request:**
```json
{
  "email": "adminpurischool@gmail.com",
  "password": "Puri@2026"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "admin": {
    "id": "65a8d2b9c1e2f3g4h5i6j7k8",
    "email": "admin@example.com"
  }
}
```

### 2. Refresh Token (POST /api/auth/refresh)
Get new access token when expired.

**Request:**
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response:**
```json
{
  "message": "Token refreshed successfully",
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 3. Gallery - List (GET /api/gallery)
No auth required - public access.

**Response:**
```json
{
  "message": "Gallery items fetched successfully",
  "data": [
    {
      "_id": "...",
      "title": "Event Title",
      "description": "Description",
      "imageUrl": "https://...",
      "category": "event",
      "createdAt": "2024-01-01T00:00:00Z",
      "updatedAt": "2024-01-01T00:00:00Z"
    }
  ]
}
```

### 4. Gallery - Create (POST /api/gallery)
Admin only - requires Bearer token.

**Headers:**
```
Authorization: Bearer <accessToken>
```

**Request:**
```json
{
  "title": "Event Title",
  "imageUrl": "https://example.com/image.jpg",
  "description": "Optional description",
  "category": "event"
}
```

### 5. Gallery - Update (PUT /api/gallery/:id)
Admin only - requires Bearer token.

### 6. Gallery - Delete (DELETE /api/gallery/:id)
Admin only - requires Bearer token.

## Categories
- `event` - School events
- `activity` - School activities
- `achievement` - Student/School achievements
- `other` - Other content

## Token Details

- **Access Token**: Expires in 15 minutes (for API calls)
- **Refresh Token**: Expires in 7 days (to get new access token)
- **Auto-Refresh**: ApiService automatically refreshes expired tokens

## Setup

1. Create admin account in MongoDB
2. Login via `/api/auth/login`
3. Use accessToken for gallery operations
4. Token auto-refreshes when expired

## Testing

Go to `http://localhost:3000/test` to test all endpoints.

## Project Structure

```
src/
├── app/
│   └── api/
│       ├── auth/
│       │   ├── login/route.ts ← Admin login
│       │   └── refresh/route.ts ← Token refresh
│       └── gallery/
│           ├── route.ts ← List & Create
│           └── [id]/route.ts ← Get, Update, Delete
├── lib/
│   ├── mongodb.ts ← DB connection
│   └── api.ts ← API Service
├── models/
│   ├── Admin.ts ← Admin schema
│   └── Gallery.ts ← Gallery schema
├── middleware/
│   └── auth.ts ← Token verification
└── types/
    └── index.ts ← TypeScript types
```

## Key Files

- **Backend**: API routes, models, middleware
- **Frontend**: ApiService, test component
- **Database**: MongoDB models with Mongoose
- **Authentication**: JWT with access + refresh tokens

## Next Steps

1. ✅ Backend API ready
2. 📋 Build admin login page
3. 📋 Build admin dashboard
4. 📋 Build public gallery
