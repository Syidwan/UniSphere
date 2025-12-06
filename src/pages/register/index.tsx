import { useState, FormEvent } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './register.module.css';

export default function Register() {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    username: '',
    password: '',
    email: '',
    univ: '',
    fakultas: '',
    jurusan: '',
    smt: '',
    skill: '',
    minat: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle register logic here
    console.log('Register attempt:', formData);
  };

  return (
    <>
      <Head>
        <title>Register - UniSphere</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className={styles.pageWrapper}>
        <section className={styles.logoContainer}>
          <img src="/img/emojione_books.png" alt="Logo" />
        </section>

        <section className={styles.registerContainer}>
          <div className={styles.register}>
            <p className={styles.text}></p>
            <h3>Register</h3>
            <p>Input your full name, email, password, etc.</p>
            <br />
            
            <form onSubmit={handleSubmit}>
              <div className={styles.formContainer}>
                <div className={styles.left}>
                  <label htmlFor="namaLengkap">Nama Lengkap</label>
                  <input
                    type="text"
                    id="namaLengkap"
                    name="namaLengkap"
                    value={formData.namaLengkap}
                    onChange={handleChange}
                    placeholder=""
                    required
                  />
                  
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder=""
                    required
                  />

                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder=""
                    required
                  />

                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=""
                    required
                  />

                  <label htmlFor="univ">Asal Universitas</label>
                  <input
                    type="text"
                    id="univ"
                    name="univ"
                    value={formData.univ}
                    onChange={handleChange}
                    placeholder=""
                    required
                  />
                </div>

                <div className={styles.right}>
                  <label htmlFor="fakultas">Fakultas</label>
                  <input
                    type="text"
                    id="fakultas"
                    name="fakultas"
                    value={formData.fakultas}
                    onChange={handleChange}
                    placeholder=""
                    required
                  />

                  <label htmlFor="jurusan">Jurusan</label>
                  <input
                    type="text"
                    id="jurusan"
                    name="jurusan"
                    value={formData.jurusan}
                    onChange={handleChange}
                    placeholder=""
                    required
                  />

                  <label htmlFor="smt">Semester</label>
                  <input
                    type="text"
                    id="smt"
                    name="smt"
                    value={formData.smt}
                    onChange={handleChange}
                    placeholder=""
                    required
                  />
                
                  <label htmlFor="skill">Skill yang ingin dicapai</label>
                  <input
                    type="text"
                    id="skill"
                    name="skill"
                    value={formData.skill}
                    onChange={handleChange}
                    placeholder=""
                    required
                  />

                  <label htmlFor="minat">Prefer Minat</label>
                  <input
                    type="text"
                    id="minat"
                    name="minat"
                    value={formData.minat}
                    onChange={handleChange}
                    placeholder=""
                    required
                  />
                </div>
              </div>
              <br />
              <button type="submit">Register</button>
            </form>
          </div>
        </section>

        <footer>
          &copy; 2025 UniSphere. All rights reserved.
        </footer>
      </div>
    </>
  );
}