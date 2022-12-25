import React from 'react'
import { useEffect, useState } from 'react';


const images=[

  {id :1, className:'Hello', imageName:'Food.png',tag: 'Food'},
  {id :2, imageName:'Wonders.png',tag: 'Wonders'},
  {id :3, imageName:'Birds.png',tag: 'Birds'},
  {id :4, imageName:'Places.png',tag: 'Places'}
  ];

 function Header(props) {

  const [tag,setTag] =useState('all');
  const [filteredImages,setFilteredImages]= useState([]);
	useEffect( () => {
			tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
		},
		[tag]
	);

  return (
    <> 
    <div className="bar" handleSetTag={setTag}>
     <h2>Food Images</h2>
     </div>
    <div data-testid = "buttonTest" className="tags">

<Tagbutton name="Food" handleSetTag={setTag} />
<Tagbutton name="Wonders" handleSetTag={setTag} />
<Tagbutton name="Birds" handleSetTag={setTag} />
<Tagbutton name="Places" handleSetTag={setTag} />

</div>
<div className="container">
{filteredImages.map(image => <div key={image.id} className="image-card">
  <img className="image" src={`/images/${image.imageName}`} alt="" />

</div>)}

</div>


   </>

  )
}

const Tagbutton =({name, handleSetTag})=>{
  return <button className="tag" onClick ={()=> handleSetTag(name)}>
    {name.toUpperCase()}
  </button>
}

  
    
 
export default Header;



