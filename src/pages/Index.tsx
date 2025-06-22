import React from 'react';
import LoginForm from '@/components/Login/LoginForm';

/**
 * The main page of the application, serving as the login page.
 * It provides a full-screen, centered layout to display the LoginForm component,
 * as per the design requirements.
 */
const IndexPage: React.FC = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <LoginForm />
    </main>
  );
};

export default IndexPage;
