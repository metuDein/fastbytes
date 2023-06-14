import React from 'react'

const NewsLetter = () => {
  return (
    <section className='newsletter'>

    <img src="data:image/png;base64,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" alt="" />

    <div className='newsletter--form'>
        <form onSubmit={e => e.preventDefault()}>
            <h1>Get news and Offers</h1>
            <input type="text" />
            <button> SubScribe Now</button>
        </form>
    </div>
    </section>
  )
}

export default NewsLetter