import React, {Component} from 'react';



export default class Portfolio extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="portfolio">
        <div className="skills">
          <h3>Skills</h3>
           <section className="languages">
             <p className="line"> HTML || CSS || JavaScript || React</p>
           </section>

          <h3>Experience</h3>
           <p className="work">My work history...</p>

          <h3>Projects</h3>
            <p className="projects">My projects...</p>
        </div>
      </section>

    )
  }
}
