
import React from 'react'
import BigArticle from './BigArticle'
import SmallArticle from './SmallArticle'

function Detail() {
  return (
    <div className="grid lg:grid-cols-3 lg:gap-5 gap-0 article mb-5">
        {/* big article */}
        <BigArticle/>
        {/* small article */}
        <SmallArticle/>
    </div>
  )
}

export default Detail

 