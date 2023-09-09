function ContactForm() {
  return (
    <div className='contact-section p-10' id='contact'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 text-center'>
            <div className='section-title2'>
              <span>Contact Form</span>
              <h2>Let’s Get in Touch</h2>
              {/* <img src='assets/images/icons/section-title-vector.svg' alt='image' /> */}
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='contact-from-wrapper'>
              <form>
                <div className='row'>
                  <div className='col-lg-6'>
                    <div className='form-inner'>
                      <input type='text' placeholder='Name:' />
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='form-inner'>
                      <input type='email' placeholder='Email:' />
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <div className='form-inner'>
                      <input type='text' placeholder='Type Your Subject:' />
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <div className='form-inner'>
                      <textarea name='message' rows={5} placeholder='Type Your Message...' defaultValue={''} />
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <button type='submit' className='eg-btn btn--primary2 btn--lg submit-btn'>
                      Submit Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
