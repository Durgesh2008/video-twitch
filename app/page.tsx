import React from 'react'
import { authorFont, outfitFont, satoshiFont } from './font'

const page = () => {
  return (
   <div >
    <p className = {authorFont.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, laudantium facere expedita ipsa error quis exercitationem blanditiis veritatis officiis illo nihil velit ipsam libero alias in, iure corrupti harum consequatur.</p>
    <br />
    <p className={satoshiFont.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe culpa sint eaque dolorem blanditiis! Eius maiores cumque consequuntur obcaecati dolor labore earum molestiae quod, ullam sint fugit, est necessitatibus doloremque.</p>
    <br />
    <p className= {`${outfitFont.className} font-semibold bg-btn`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem delectus doloremque, voluptatum blanditiis corporis quis magni eum suscipit reprehenderit recusandae voluptas a maiores ut temporibus debitis incidunt optio veniam laboriosam.</p>
    <br />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cumque ullam totam ipsam cupiditate doloribus dicta ut officia quo voluptates nam quisquam consequatur non mollitia, harum perferendis itaque repellat perspiciatis.</p>
   </div>
  )
}

export default page