import React, { Component } from 'react';
import './../../styles/project.css';
import { SiNetlify } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";

export class ProjectPage extends Component {
  render() {
    return (
      <div className='project-block'>
        <div>
            <div className='arrow'><RxCrossCircled size={36} className='cross' onClick={() => {this.props.onProjectShow()}} /></div>
            <div className='info'>
                <img src={'./img/projects/' + this.props.project.img} alt="#" className='project-img' />
                <span className='project-title'>{this.props.project.title}</span>
                <p className='project-description'>{this.props.project.description}</p>
                <ul>
                    <li><a rel='noreferrer' target='_blank' href={this.props.project.netlify_link} className='project-link netlify-link'><SiNetlify size={36} /></a></li>
                    <li><a rel='noreferrer' target='_blank' href={this.props.project.github_link} className='project-link github-link'><IoLogoGithub size={36} /></a></li>
                </ul>
            </div>
        </div>
      </div>
    )
  }
};

export default ProjectPage;
