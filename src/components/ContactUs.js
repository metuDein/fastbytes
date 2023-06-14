import React from 'react'

const ContactUs = () => {
  return (
    <section className='request--section contact-sect'>
           
            <article className='form--banner contactus'>
            </article>
            <form>
              <>
                    <div className='form--1 contact--form'>
            <h2 className='current--form--title'> Contact Us</h2>
                        <hr />

                        <div className='side--by--side form--page'>
                          
                            
                            <div className='text-input'>
                               
                                <input type="text" placeholder='Name*'/>
                            </div>
                        </div>
                        <div className='side--by--side form--page'>
                          
                            
                            <div className='text-input '>
                                
                                <input type="text" placeholder='Email*'/>
                            </div>
                        </div>
                        <div className='side--by--side form--page'>
                          
                            
                            <div className='text-input '>
                                
                                <input type="text" placeholder='Subject*'/>
                            </div>
                        </div>
                        <div className='text-input'>
                            
                            <textarea rows={'5'} cols={'50'} id={'product--desc'} placeholder="Comment*"/>
                        </div>
                        <button> Submit </button>
                    </div>
                    </>
                    <div className='map'>
                      <img src="images/formmap.png" alt="" />
                    </div>
               
                
            </form>
        </section>
  )
}

export default ContactUs