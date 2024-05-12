import React, { Component } from 'react';
import './../../styles/projects.css';
import Items from './Items';
import ProjectPage from '../project-page/ProjectPage';

export class ProjectsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [
                {
                    id: 1,
                    title: 'Ink. House',
                    img: 'ink-house.jpg',
                    description: 'HTML, CSS, React JS',
                    netlify_link: 'https://ink-house-project.netlify.app/',
                    github_link: null
                },
                {
                    id: 2,
                    title: 'Project',
                    img: 'no-image.jpg',
                    description: 'Lorem Ipsum',
                    netlify_link: null,
                    github_link: null
                },
                {
                    id: 3,
                    title: 'Project',
                    img: 'no-image.jpg',
                    description: 'Lorem Ipsum',
                    netlify_link: null,
                    github_link: null
                },
                {
                    id: 4,
                    title: 'Project',
                    img: 'no-image.jpg',
                    description: 'Lorem Ipsum',
                    netlify_link: null,
                    github_link: null
                },
                {
                    id: 5,
                    title: 'Project',
                    img: 'no-image.jpg',
                    description: 'Lorem Ipsum',
                    netlify_link: null,
                    github_link: null
                },
                {
                    id: 6,
                    title: 'Project',
                    img: 'no-image.jpg',
                    description: 'Lorem Ipsum',
                    netlify_link: null,
                    github_link: null
                }
            ],
            projectShow: false,
            project: {}
        }

        this.onProjectShow = this.onProjectShow.bind(this)
    };

  render() {
    return (
      <section className='projects-section'>

        <div className='projects-title-block'>
            <span className='title'>Projects</span>
        </div>

        <Items onProjectShow={this.onProjectShow} projects={this.state.projects} />

        {this.state.projectShow === true ? <ProjectPage onProjectShow={this.onProjectShow} project={this.state.project} /> : null}
      </section>
    )
  };

  onProjectShow(project) {
    this.setState({projectShow: !this.state.projectShow})
    this.setState({project: project})
  };
};

export default ProjectsPage;