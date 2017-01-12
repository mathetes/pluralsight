import React, { PropTypes } from 'react';

class CoursesPage extends React.Component {
		constructor(props, context) {
		super(props, context);

		this.state = {
			course: { title: "" }
		};		

		this.onTitleChange = this.onTitleChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
	}

	onTitleChange(event) {
		const course = this.state.course;
		course.title = event.target.value;
		this.setState( {course: course} );
	}

	onClickSave() {
		alert('Saving ${this.state.course.title}');
	}

	render() {
		return (
			<div>
				<div className="row">
					<h1>Courses</h1>
					<h2>Add Course</h2>
					<input
						type="text"
						onChange={this.onTitleChange}
						value={this.state.course.title} />
					<input
						className="btn btn-success"
						type="submit"
						value="Save"
						onClick={this.onClickSave} />
				</div>
				<div className="col-lg-4">
					<img src="http://lorempixel.com/240/120/sports/" />
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
				<div className="col-lg-4">
					<img src="http://lorempixel.com/240/120/sports/" />
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
				<div className="col-lg-4">
					<img src="http://lorempixel.com/240/120/sports/" />
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
		);
	}
}

export default CoursesPage;