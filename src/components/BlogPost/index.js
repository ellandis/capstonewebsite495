import React from 'react';
import './style.css';
import Card from '../UI/Card';
import pic from '../../assets/bcipic.png';
/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
  return(
    <Card style={{width:'80%'}}>
      <div>
      <img style={{width:'30%'}} src={pic} alt="pic" /> <br/>
      <h2>Goals</h2>
      Our team will be building a desktop app 
      the processes EEG/EMG <br/> data and provides 
      feedback to users based on the processed 
      data. 
      <hr/>
      <h2>Approach </h2>
      <ul>
        <li>Tool/Frameworks/OS/Language -(possible choices) 
          <ul>
            <li>Ganglion</li>
            <li>OpenBCI GUI’s interface</li>
            <li>BrainFlow</li>
            <li>MEG + EEG analysis and visualization</li>
            <li>React/ React Native with Javascript</li>
            <li>Azure - Java, Javascript, Python</li>
            <li>Android studio- Koltin, Java</li>
          </ul>
        </li>
      </ul>

      <h2>Team Members</h2>
      <a className='team' href = "mailto: gacopley@crimson.ua.edu">Alex Copley</a> <br/> <br/>
      <a className='team' href = "mailto: badill@crimson.ua.edu">Blade Dill</a> <br/> <br/>
      <a className='team' href = "mailto: pkurkal@crimson.ua.edu">Pavan Kurkal</a> <br/> <br/>
      <a className='team' href = "mailto: ellandis@crimson.ua.edu">Eian Landis</a> <br/> <br/>

      </div>
    </Card>
   )

 }

export default BlogPost;