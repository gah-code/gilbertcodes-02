import * as React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import AllRecipes from '../components/AllRecipes';
// import Social from '../components/Social';

export default function Home() {
  return (
    <Layout>
      <main className='page'>
        <div className='main'>
          <div className='container'>
            <div className='hero-wrapper'>
              <header className='hero index'>
                <h1>What's up, I'm Gilbert</h1>
                <p className='hero-description small width'>
                  welcome to my space
                </p>

                <p className='hero-description'>
                  I'm web developer and this is where I coding things and where
                  I talk about
                  <a href=''> web apps about topics</a>
                </p>
              </header>
              <p className='hero-decoration'>
                <StaticImage
                  src='../assets/images/me.jpg'
                  alt='Person Pouring Salt in Bowl'
                  className='hero-image'
                  placeholder='blurred'
                />
              </p>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='article-content'>
            <div className='post-header medium width'>
              <h1>Lorem ipsum dolor sit amet.</h1>
            </div>
            <div className='segment small'>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellat, quos?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
                provident nostrum molestiae iusto asperiores quas omnis nulla!
                Mollitia optio adipisci beatae exercitationem nemo quae vel quia
                quo dignissimos amet asperiores sapiente maxime corporis enim
                corrupti dolorum, voluptatibus quibusdam expedita aliquid fugit
                repudiandae odit ut minus? Velit voluptatem cupiditate
                explicabo!
              </p>
            </div>
          </div>
        </div>

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

// <section className='about-pages'>
//   <article>
//     <h1>What's up, I'm Gilbert</h1>
//     <p>
//       web developer and this is where I coding things
//       <a href=''> web apps about topics</a>
//     </p>

//     <p className='hero-description'>
//       web developer and this is where I coding things Lorem ipsum dolor
//       sit amet consectetur adipisicing elit. Quam, nesciunt!
//       <a href=''> web apps about topics</a>
//     </p>

//     <button className='rounded-hover-button'>Hover Me</button>

//     {/* <Link to='/contact' className='btn'>
//         contact
//       </Link> */}
//   </article>

//   <StaticImage
//     src='../assets/images/me.jpg'
//     alt='Person Pouring Salt in Bowl'
//     className='about-imgs'
//     placeholder='blurred'
//   />
// </section>;
