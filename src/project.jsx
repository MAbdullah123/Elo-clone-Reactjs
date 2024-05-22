import React from 'react';
import logo from './assets/logo.png';
import image1 from './assets/1.jpg';
import image2 from './assets/2.jpg';
import image3 from './assets/3.jpg';
import image4 from './assets/4.png';
import image5 from './assets/5.jpg';
import image6 from './assets/6.jpg';
import image7 from './assets/7.avif';
import image8 from './assets/8.avif';
import image9 from './assets/9.webp';
import image11 from './assets/11.jpg';
import image10 from './assets/10.jpg';
import image12 from './assets/12.jpg';
import image13 from './assets/13.jpg';
import image14 from './assets/14.webp';
import image15 from './assets/15.jpg';
import image17 from './assets/17.jpg';
import image18 from './assets/18.jpg';
import image19 from './assets/19.jpg';



export default function Project() {
  return (
    <>
    <body>
        <div className='background'>
          <div className='NavBar'>
            <img src={logo} width={200} height={100} />
            <div className="Center">
              <ul style={{ listStyle: "none",backgroundColor:"black", display: "flex", gap: "20" }}>
                <li><a>New Arrival</a></li>
                <li><a>Basic Men</a></li>
                <li><a>Women&nbsp;&nbsp;</a></li>
                <li><a>Kids&nbsp;</a></li>
                <li><a>Polo Republica</a></li>
                <li><a>Home&nbsp;&nbsp;&nbsp;</a></li>
                <li><a>Minor Fault</a></li>
                <li><a>Last Piece</a></li>
                <li><a>Custom Merch</a></li>
              </ul>
            </div>
          </div>
          <div className='Banner'>
            <img src={image1} width={303} height={320} />
            <img src={image2} width={320} height={320} />
            <img src={image3} width={320} height={320} />
            <img src={image4} width={320} height={320} />
          </div>
          <div className='Latest'>
            <h2><b>Latest in Men's Fashion</b></h2>
          </div>
          <br />
          <div className='display'>
            <img src={image5} width={303} height={320} />
            <img src={image6} width={320} height={320} />
            <img src={image7} width={320} height={320} />
            <img src={image8} width={320} height={320} />
          </div>
        </div>
        <button style={{ color: "white", display: "block", margin: "0 auto" }}>View all</button>
        <br />
        <div className='crazy'>
          <h3>Crazy Deal</h3>
        </div>
        <br />
        <div className='para'>
          <p><b>Grab our Crazy Deal now! Super low prices on
            special items just for you. It’s our big thank you
            and a way to make room for new stuff. Only one item
            per person, so everyone gets a chance at these amazing
            prices. Hurry, once they’re gone, they’re gone! Get your deal before it disappears.
            It’s crazy because we love giving you the best!</b></p>
        </div>
        <br />
        <div div className="wrapper" style={{ display: 'flex' }}>
          <div className='image'>
            <img src={image9} style={{ width: "98%" }} />
          </div>
          <div className="container">
            <div className='shoes'>
              <h2>Running Joggers</h2>
              <h3>RS 299.00</h3>
              <h3>Color:Blue</h3>
              <h3>Size:EUR 40</h3>
            </div>
            <div className='btn'>
              <button style={{ color: "white", display: "block", margin: "10 auto" }}>EUR 38</button>
              <button style={{ color: "white", display: "block", margin: "10 auto" }}>EUR 40</button>
              <button style={{ color: "white", display: "block", margin: "10 auto" }}>EUR 41</button>
              <button style={{ color: "white", display: "block", margin: "10 auto" }}>EUR 42</button>
              <button style={{ color: "white", display: "block", margin: "10 auto" }}>EUR 43</button>
              <button style={{ color: "white", display: "block", margin: "10 auto" }}>EUR 44</button>
              <button style={{ color: "white", display: "block", margin: "10 auto" }}>EUR 45</button>
              <button style={{ color: "white", display: "block", margin: "10 auto" }}>EUR 46</button>
            </div>
            <br />
            <div className='heading'>
              <h3>Quantity:</h3>
            </div>
            <div className='quantity'>
              <button style={{ color: "white", display: "block", margin: "0 auto" }}>1</button>
            </div>
            <br />
            <div className='sold'>
              <button style={{ color: "white", display: "block", margin: "0 auto" }}>Sold Out</button>
            </div>
            <br />
            <div className='notify'>
              <button style={{ color: "white", display: "block", margin: "0 auto" }}>Notify Me When Available</button>
            </div>
            <br />
            <div className='box'>
              <ul>
                <li><b>elo delivered to your doorsteps!</b></li>
                <li>Estimated Delivery Date Between: Wed Mar 27, 2024 - Mon Apr 01, 2024</li>
                <li>30 Days No Questions Asked Return or Exchange</li>
                <li>Free Shipping on Orders over Rs. 2,999</li>
                <li>Secure Checkout</li>
                <li>Cash on Delivery anywhere in Pakistan</li>
              </ul>
            </div>
            <br />
            <div className='paragraph'>
              <p>Grab these Bhamas Vintage Flip Flops,
                featuring an exclusive Crazy Deal price of just Rs.299!
                Each pair boasts the iconic laid-back style you love, with
                a minor imperfection that's barely noticeable. Original price:
                Rs.599. With our full return policy, shop worry-free—enjoy a classic
                look with zero risk. Limited stock available,
                so act fast and add some vintage flair to your step!</p>
            </div>
            <br />
            <div className='frequently'>
              <h2>Frequently Bought Together</h2>
            </div>
            <div className='show'>
              <img src={image11} width={180} height={150} />
              <div className='p1'>
                <p style={{ color: "black", display: "inline-block", margin: "10 auto" }}>+</p>

                <img src={image10} width={180} height={150} />
              </div>
              <div className='p2'>
                <p style={{ color: "black", display: "inline-block", margin: "10 auto" }}>+</p>
                <img src={image12} width={180} height={150} />
              </div>
              <div className='price'>
                <h3>Total Price: RS5,096.00</h3>
              </div>
              <br />
              <form>
                <input type="checkbox" id="item1" name="item1" value="This item:Bahamas Joggers-Minor Fault"></input>
                <label htmlFor="item1">This item:Bahamas Joggers-Minor Fault</label><br />
                <input type="checkbox" id="item2" name="item2" value="2"></input>
                <label htmlFor="item2"> Unisex Cotton Hooded Body Warmer Gilet</label><br />
                <input type="checkbox" id="item3" name="item3" value="3"></input>
                <label htmlFor="item3">Men's Vaasa Regular Fit Distressed Denim</label><br />
                <input type="checkbox" id="item4" name="item4" value="4"></input>
                <label htmlFor="item4">Payper Men's Miami Quarter Zipper Fleece Sweat Shirt</label><br />
              </form>
            </div>
          </div>

        </div>
        <div className='sh'>
          <img src={image13} style={{ width: "200px" }} />
          <img src={image14} style={{ width: "200px" }} />
          <img src={image15} style={{ width: "200px" }} />
        </div>
        <br />
        <div className='h3'>
          <h2>You may also like</h2>
        </div>
        <div className='you'>
          <img src={image17} width={200} height={300} />
          <img src={image18} width={200} height={300} />
          <img src={image19} width={200} height={300} />
        </div>
        <div className='text1'>
          <div className='p3'>
            <p style={{ color: "black", display: "flex", margin: "10 auto" }}><b>EVR Men's Bendigo Style Slides</b></p>
            <p style={{ color: "black", display: "flex", margin: "10 auto" }}><b>Printed Style Casual Shirt</b></p>
            <p style={{ color: "black", display: "flex", margin: "10 auto" }}><b>Socks</b></p>
          </div>
          <div className='Footer'>
            <div className='Contact'>
            <ul>
              <li><h2>Contact Us</h2></li><br/>
              <li>We are Hiring</li><br/>
              <li>Selling at elo</li><br/>
              <li>Polo Republica Works</li><br/>
              <li>Custom Merch</li><br/>
            </ul>
            </div>
            <div className='help'>
            <ul>
              <li><h2>Help</h2></li><br/>
              <li>How to Order</li><br/>
              <li>How to Use gift Card</li><br/>
              <li>Returns and Exchanges</li><br/>
              <li>Shipping Details</li><br/>
            </ul>
            </div>
            <div className='New'>
            <ul>
              <li><h2>What's New</h2></li><br/>
              <li>Become a Brand Ambassador</li><br/>
              <li>Customer Reviews</li><br/>
              <li>Company News</li><br/>
              <li>Shop Instagram</li><br/>
            </ul>
            </div>
            <div className='pic'>
              <img src={logo} width={220} height={150}/>
            </div>

          </div>

        </div>
        </body>
    </>
  );
}