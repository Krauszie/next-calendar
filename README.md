# Next.js Portfolio Project

This is a [Next.js](https://nextjs.org) project showcasing a personal portfolio with various features built using modern web technologies.

## Key Features

### 🛡️ Authentication System

- Secure JWT-based authentication
- Role-based access control (user/admin)
- Protected routes with middleware
- Cookie-based session management
- Login/Logout functionality

### 📅 Calendar & Event Management

- Interactive calendar view
- Add/Edit/Delete events
- Event validation and limits
- Persisted event storage
- Date-based event organization

### ✅ Todo List

- Create, Read, Update, Delete tasks
- Task completion tracking
- Redux-powered state management
- Persistent storage

### 👤 About Me Section

- Personal information display
- Language proficiency
- Hobbies and interests
- Responsive design

### 🎨 UI Components

- Custom-built components using Radix UI
- Tailwind CSS for styling
- Includes:
  - Buttons
  - Tabs
  - Modals
  - Inputs
  - Selects
  - Scroll areas

## Technical Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit with Persist
- **UI Library**: Radix UI
- **Icons**: Lucide React

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/            # Application pages
│   ├── api/          # API routes
│   ├── about/        # About page
│   ├── calendar/     # Calendar features
│   ├── todos/        # Todo list
│   └── login/        # Authentication
├── redux/            # State management
├── styles/           # Global styles
└── types/            # TypeScript types
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
