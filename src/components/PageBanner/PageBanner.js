import React from 'react'
import { Link } from "react-router-dom";
export default function PageBanner() {
    return (
        <section id="aa-catg-head-banner">
        <img src="img/fashion/fashion-header-bg-8.jpg" alt="fashion img"/>
        <div className="aa-catg-head-banner-area">
          <div className="container">
           <div className="aa-catg-head-banner-content">
             <h2>Page Title Page</h2>
             <ol className="breadcrumb">
               <li><Link to="/">Home</Link></li>                   
               <li className="active">Page Title</li>
             </ol>
           </div>
          </div>
        </div>
       </section>
    )
}
