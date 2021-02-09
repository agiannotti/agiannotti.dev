import React from 'react';
import './HeaderBar.css';
import { Link } from 'react-router-dom';

import face from '../../Images/soho-self.jpg';
import launch from '../../Images/launch.png';
import github from '../../Images/github.png';
import linkedin from '../../Images/linkedin.png';

export default function HeaderBar() {
  return (
    <div className='header-bar'>
      <img className='face-img' src={face} alt='face-img' />
      <div className='header-links'>
        <Link
          to='https://github.com/agiannotti'
          target='_blank'
          style={{ textDecoration: 'none' }}
        >
          <img className='git-img' src={github} alt='github' />
          GitHub
          <img className='launch-img' src={launch} alt='launch-img' />
        </Link>
      </div>
      <div className='header-links'>
        <Link
          to='https://www.linkedin.com/in/agiannotti/'
          target='_blank'
          style={{ textDecoration: 'none' }}
        >
          <img className='linkedin-img' src={linkedin} alt='linkedin' />
          LinkedIn
          <img className='launch-img' src={launch} alt='launch-img' />
        </Link>
      </div>
    </div>
  );
}
