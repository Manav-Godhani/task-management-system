import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const socialIcons = [
  { icon: 'facebook-f', url: '#' },
  { icon: 'twitter', url: '#' },
  { icon: 'google', url: '#' },
  { icon: 'instagram', url: '#' },
  { icon: 'linkedin', url: '#' },
  { icon: 'github', url: '#' }
];

const pages = [
  { name: 'Home', route: '/' },
  { name: 'About', route: '/about' },
  { name: 'Contact', route: '/contact' },
  { name: 'Feedback', route: '/feedback' }
];

const styles = {
  footerCustom: {
    background: 'linear-gradient(356deg, rgba(32,30,63,1) 1%, rgba(7,5,145,1) 100%, rgba(0,0,0,1) 100%)',
    color: 'white',
    paddingTop: '20px'
  },
  textWhite: {
    color: 'white',
    textDecoration: 'none'
  },
  footerBottom: {
    background: '#000',
    color: 'white'
  }
};

export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted' style={styles.footerCustom}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={styles.textWhite}>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          {socialIcons.map(({ icon, url }) => (
            <a href={url} key={icon} className='me-4' style={styles.textWhite}>
              <MDBIcon fab icon={icon} />
            </a>
          ))}
        </div>
      </section>

      <section>
        <MDBContainer className='text-center text-md-start mt-5' style={styles.textWhite}>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon='gem' className='me-3' />
                Task Management System
              </h6>
              <p>Efficiently manage your tasks with our Task Management System. Organize, track, and complete your tasks with ease.</p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Pages</h6>
              {pages.map(({ name, route }) => (
                <p key={name}>
                  <Link to={route} style={styles.textWhite}>{name}</Link>
                </p>
              ))}
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p><MDBIcon icon='home' className='me-2' /> Surat, Katargam 395004, INDIA</p>
              <p><MDBIcon icon='envelope' className='me-3' /> info@gmail.com</p>
              <p><MDBIcon icon='phone' className='me-3' /> +91 8488812260</p>
              <p><MDBIcon icon='print' className='me-3' /> +91 9574998893</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}
