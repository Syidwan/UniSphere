import { useState, FormEvent } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './login.module.css';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { username, password });
  };

  return (
    <>
      <Head>
        <title>Login - UniSphere</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className={styles.pageWrapper}>
        <div className={styles.logoContainer}>
          <img src="/img/emojione_books.png" alt="Logo" />
        </div>

        <div className={styles.loginContainer}>
          <p className={styles.text}>
            <span>Home</span> / Login
          </p>
          <h3>Login</h3>
          <p>Input your username and password.</p>

          <form onSubmit={handleSubmit}>
            <h5>Username</h5>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <h5>Password</h5>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>

        <div className={styles.bawah}>
          <p className={styles.regis}>
            Don't have an account?{' '}
            <Link href="/register">Create one!</Link>
          </p>
          <br />
          <footer>&copy; 2025 UniSphere. All rights reserved.</footer>
        </div>
      </div>
    </>
  );
}