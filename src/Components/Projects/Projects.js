import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import launch from '../../Images/launch.png';

export default function Projects() {
  return (
    <div className='project-container'>
      <h2>Projects</h2>
      <div className='project-section'>
        <h3>Javascript | React | Express | SQL | Node </h3>
        <Link
          to='https://github.com/agiannotti/foodful-vercel'
          target='_blank'
          style={{ textDecoration: 'none' }}
        >
          Foodful
          <img className='launch-img' src={launch} alt='launch-img' />
        </Link>
      </div>
      <div className='project-section'>
        <h3>Javascript | React | Express | SQL | Node </h3>
        <Link
          to='https://github.com/agiannotti/foodful-vercel'
          target='_blank'
          style={{ textDecoration: 'none' }}
        >
          Bookmarked
          <img className='launch-img' src={launch} alt='launch-img' />
        </Link>
      </div>
      <div className='project-section'>
        <h3>Javascript | React | Express | SQL | Node </h3>
        <Link
          to='https://github.com/agiannotti/foodful-vercel'
          target='_blank'
          style={{ textDecoration: 'none' }}
        >
          Quiz App
          <img className='launch-img' src={launch} alt='launch-img' />
        </Link>
      </div>
    </div>
  );
}
