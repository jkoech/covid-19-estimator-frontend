import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
const options = [
    { key: 'd', text: 'Days', value: 'days' },
    { key: 'w', text: 'Weeks', value: 'weeks' },
    { key: 'm', text: 'Months', value: 'months' },
]

class Estimator extends Component {
    render() {
        const { values } = this.props;
        return (
            <div className="main ui text container">
                <Form>
                    <h4 className="ui dividing header">Covid 19 Estimator</h4>
                    <div class="two fields">
                        <Form.Field>
                            <label>Population</label>
                            <input
                                type='number'
                                placeholder='Population'
                                onChange={this.props.handleChange('population')}
                                defaultValue={values.population}
                                data-population
                            />

                        </Form.Field>
                        <Form.Field>
                            <label>Time to Elapse</label>
                            <input
                                placeholder='Time To Elapse'
                                type='number'
                                onChange={this.props.handleChange('timeToElapse')}
                                defaultValue={values.timeToElapse}
                                data-time-to-elapse
                            />

                        </Form.Field>
                    </div>
                    <div class="two fields">
                        <Form.Field>
                            <label>Reported Cases</label>
                            <input
                                type='number'
                                placeholder='Reported Cases'
                                onChange={this.props.handleChange('reportedCases')}
                                defaultValue={values.reportedCases}
                                data-reported-cases
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Total Hospital Beds</label>
                            <input
                                type='number'
                                placeholder='Total Hospital Beds'
                                data-total-hospital-beds
                                onChange={this.props.handleChange('totalHospitalBeds')}
                                defaultValue={values.totalHospitalBeds}
                            />
                        </Form.Field>
                        <Form.Select
                            fluid
                            label='Period'
                            options={options}
                            defaultValue={values.periodType}
                            data-period-type
                        />
                    </div>
                    <Button data-go-estimate>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default Estimator;