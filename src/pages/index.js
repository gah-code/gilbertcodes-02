import * as React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import AllRecipes from '../components/AllRecipes';
// import Social from '../components/Social';

export default function Home() {
  return (
    <Layout>
      <main className='page'>
        <section className='about-pages'>
          <article>
            <h1>I'm baby coloring book poke taxidermy</h1>
            <h2>Subheading</h2>

            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia.
            </p>

            <button className='rounded-hover-button'>Hover Me</button>

            {/* <Link to='/contact' className='btn'>
              contact
            </Link> */}
          </article>

          <StaticImage
            src='../assets/images/me.jpg'
            alt='Person Pouring Salt in Bowl'
            className='about-imgs'
            placeholder='blurred'
          />
        </section>
        <section className='about-pagess'>
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <h3>text</h3>
            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia.
            </p>

            <button className='rounded-hover-button'>Hover Me</button>

            {/* <Link to='/contact' className='btn'>
              contact
            </Link> */}
          </article>
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <h3>Subheading</h3>

            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia.
            </p>

            <button className='rounded-hover-button'>Hover Me</button>

            {/* <Link to='/contact' className='btn'>
              contact
            </Link> */}
          </article>
        </section>

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
