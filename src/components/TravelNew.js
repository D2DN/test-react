import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createTravel} from 'actions';
import {Button, Alert, FormGroup} from 'react-bootstrap';


class TravelNew extends React.Component {
    constructor(){
        super();
        this.renderField = this.renderField.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    renderField({ input, label, meta: {touched, error} }) {
        const validationState = `${touched && error ? 'error' : touched && !error && input.value  ? 'success' : '' }`;
        return (
            <FormGroup validationState={validationState ? validationState : null}>
                <label>{label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...input}
                />
                {touched && error ? <Alert bsStyle="danger"> {error} </Alert> :''}
            </FormGroup>
        );
    }

    onSubmit(values) {
        this.props.createTravel(values, () => {
            this.props.history.push('/travel');
        });
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field
                    label="Title for travel"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Country"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Description"
                    name="content"
                    component={this.renderField}
                />
                <Link to="/travel"> <Button bsStyle="danger">Cancel</Button></Link>
                <Button type="submit" bsStyle="primary">Submit</Button>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};
    if (!values.title || values.title.length < 3) {
        errors.title = 'Enter a title that is at lest 3 characters';
    }
    if (!values.categories) {
        errors.categories = 'Enter a country !';
    }
    if (!values.content) {
        errors.content = 'Enter a description !';
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'TravelsNewForm'
})(
    connect(null, {createTravel})(TravelNew)
);