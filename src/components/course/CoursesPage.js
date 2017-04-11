import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
		constructor(props, context) {
		super(props, context);

		this.state = {
			course: { title: null }
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
		this.props.createCourse(this.state.course);
	}

	courseRow (course, index) {
		return <div key={index}>{course.title}</div>
	}

	render() {
		return (
			<div>
				<div className="row">
					<h1>Courses</h1>
					{this.props.courses.map(this.courseRow)}
					<h2>Add Course</h2>
					<input
						type="text"
						onChange={this.onTitleChange}
						value={this.state.course.title} />
					<input
						className="btn"
						type="submit"
						value="Save"
						onClick={this.onClickSave} />
				</div>
			</div>
		);
	}
}

CoursesPage.propTypes = {
	dispatch: PropTypes.func.isRecuired,
    courses: PropTypes.array.isRecuired,
    createCourse: PropTypes.func.isRecuired
};

function mapStateToProps(state, ownProps) {
	return {
		courses: state.courses
	};
}

function mapDispatchToProps(dispatch) {
	return {
		createCourse: course => dispatch(courseActions.createCourse(course))
	};
}

export default connect (mapStateToProps, mapDispatchToProps) (CoursesPage);