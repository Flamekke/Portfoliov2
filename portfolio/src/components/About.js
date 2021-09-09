import React, {Component} from "react";
import './About.css'

class About extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          show:true
        };
      }

      
      showTable() {
        this.setState({
          show: true
        });
      }
    render() {
    return (
        <div>


<div class= 'container'>
<div class="container_content">
<div class="container_content_inner">
<div class="title">
    <h1>About Me</h1>
</div>
<div class="par">
<p>
Cupiditate alias odio omnis minima veritatis saepe porro, repellendus natus vitae, sequi exercitationem ipsam, qui possimus sit eveniet laborum sapiente quisquam quae neque velit? 
</p>
</div>
<div class="btns">
</div>
</div>
</div>

  </div>
<div class="overlay"></div>


        </div>
    )
                                            }
}


export default About;