import './page.css'
   
   export default function Home() {
     return (
       <div>
         <img src="https://www.lancasterleipzig.de/wp-content/uploads/2024/04/lulc-logo-stretch-1200x675-1.jpg" width="200" height="100" alt="Logo" />
         <div className="Logos">
           <img src="https://media-dus1-1.cdn.whatsapp.net/v/t61.24694-24/457123032_1716566119103262_31742302534473759_n.jpg?ccb=11-4&oh=01_Q5AaIEPfzXMojyA1-GIpbKWFcvEvqpXVegqWXD2BVSDHupfm&oe=6716A10C&_nc_sid=5e03e0&_nc_cat=101" width="100" height="100" alt="Club Logo" />
         </div>
   
         <div className="navbar">
           <a href="#home">Home</a>
           <a href="#about">About</a>
           <a href="#projects">Projects</a>
           <a href="#join">Join</a>
           <a href="#equipment">Equipment</a>
         </div>
   
         <div className="main">
           <button className="button">click</button>
         </div>
   
         <div className="info">
           <div className="photo">
             <img src="https://m.media-amazon.com/images/I/61fiovdGDUL._AC_UF1000,1000_QL80_.jpg" height="160" width="160" alt="3D Printer" />
           </div>
           <div className="text">
             <p>This is information about 3d printers and the different equipment used in the department.</p>
           </div>
         </div>
   
         <div className="one">Project 1</div>
         <div className="two">Project 2</div>
         <div className="three">Project 3</div>
         <div className="four">project 4</div>
       </div>
     )
   }