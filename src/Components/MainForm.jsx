// MainForm.jsx
import React, { Component } from 'react';
import UserDetails from './Estimator';

class MainForm extends Component {
    state = {
        population: '',
        timeToElapse: '',
        reportedCases: '',
        totalHospitalBeds: '',
        periodType: 'weeks',
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value })
    }

    render() {
        const { population, timeToElapse, reportedCases, totalHospitalBeds, periodType } = this.state;
        const values = { population, timeToElapse, reportedCases, totalHospitalBeds, periodType };

        return <UserDetails

            handleChange={this.handleChange}
            values={values}
        />
    }
}

export default MainForm;