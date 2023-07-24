import React from 'react';
import "./style/gallery.css";

import im1 from "./images/im1.jfif";
import im2 from "./images/im2.jfif";
import im3 from "./images/im3.jpg";
import im4 from "./images/im4.jfif";
import im5 from "./images/im5.jpg";
import im6 from "./images/im6.jfif";
import im7 from "./images/im7.jfif";
import im8 from "./images/im8.jpeg";
import im9 from "./images/im9.jpg";
import im10 from "./images/im10.jfif";
import im11 from "./images/im11.jfif";
import im12 from "./images/im12.jfif";
import im14 from "./images/im14.jpg";
import im13 from "./images/im13.jpg";


function Gallery() {
  return (
    <div className='body'>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@40&display=swap" rel="stylesheet"/>

<div class="gallery">
	<div class="gallery__column">
		<a href="#" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src={im1} alt="" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Jessica Felicio</figcaption>
			</figure>
		</a>

		<a href="#" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src={im2} alt="" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Oladimeji Odunsi</figcaption>
			</figure>
		</a>

		<a href="#" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src={im3} alt="" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Alex Perez</figcaption>
			</figure>
		</a>
	</div>
	
	<div class="gallery__column">
		
		
		<a href="#" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src={im5} alt="" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Ivana Cajina</figcaption>
			</figure>
		</a>

		<a href="#" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src={im4} alt="" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Sam Burriss</figcaption>
			</figure>
		</a>
		<a href="#" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src={im14} alt="" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Oladimeji Odunsi</figcaption>
			</figure>
		</a>
	</div>
	
	<div class="gallery__column">
		<a href="#" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src={im6} alt="" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Mari Lezhava</figcaption>
			</figure>
		</a>
		
		<a href="#" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src={im7} alt="" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Ethan Haddox</figcaption>
			</figure>
		</a>

		<a href="#" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src={im8} alt="" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Amir Geshani</figcaption>
			</figure>
		</a>
		
	</div>
	
	<div class="gallery__column">
		<a href="#" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src={im9} alt="" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Guilian Fremaux</figcaption>
			</figure>
		</a>

		<a href="#" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src={im10} alt="" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Jasmin Chew</figcaption>
			</figure>
		</a>
		
		<a href="#" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src={im11} alt="" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Dima DallAcqua</figcaption>
			</figure>
		</a>
			<a href="#" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src={im13} alt="" class="gallery__image"/>
				<figcaption class="gallery__caption">Portrait by Oladimeji Odunsi</figcaption>
			</figure>
		</a>
		
	</div>
</div>
         </div>
  );
}

export default Gallery