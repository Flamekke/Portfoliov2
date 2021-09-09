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


                <div class='container'>
                    {/* <div class="title">
</div> */}
                    <div class="par">
                        <h1>About <span>me</span></h1>

                        <p>
                            Cupiditate alias odio omnis minima veritatis saepe porro, repellendus natus vitae, sequi exercitationem ipsam, qui possimus sit eveniet laborum sapiente quisquam quae neque velit?
                        </p>

                    </div>
                </div>
            </div>
        )
    }
}


export default About;