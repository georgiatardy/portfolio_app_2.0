import React, { Component } from 'react';


export default class References extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <section className="references">

       <div className="references_info">
         <h2>Name</h2>

         <p>Melanie Beelen</p>
         <p>Title: Executive Director, Baxter Community Center</p>
         <a href=""></a>
         <p>Phone: 616-456-8593</p>
         <p>Email: melanieb@baxtercommunitycenter.org</p>
         <br></br>

         <p>Bill Holsinger-Robinson</p>
         <p>Title: Director, TEDx Grand Rapids</p>
         <a href="https://www.facebook.com/TEDxGrandRapids/"></a>
         <p>Phone: 616-555-5555</p>


       </div>
     </section>

    )
  }
}
