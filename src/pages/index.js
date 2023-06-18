import * as React from 'react';
import NavBar from '../components/NavBar';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import AllRecipes from '../components/AllRecipes';

export default function Home() {
  return (
    <Layout>
      <main className='page'>
        <header className='hero'>
          <StaticImage
            src='../assets/images/me.jpg'
            alt='eggs'
            className='hero-img'
            placeholder='tracedSVG'
            layout='fullWidth'
          ></StaticImage>
          <div className='hero-container'>
            <div className='hero-text'>
              <h1>simply recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>

        <AllRecipes />
      </main>
    </Layout>
  );
}
