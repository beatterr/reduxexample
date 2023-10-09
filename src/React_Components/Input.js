// React Imports
import React, { Component } from 'react';

// Redux Imports
import { connect } from 'react-redux';
import { submitValue } from '../Redux/actions/submittedValueActions';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'inputValue': this.props.defaultInput,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleChange(event) {
        this.setState({ inputValue: event.target.value });
    }

    handleSubmit(event) {
        this.props.onSubmitValue(this.state.inputValue);
        event.preventDefault();
    }

    handleReset(event) {
        this.setState({ inputValue: ''});
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                    <label>
                        Input: <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                    <input type="reset" value="Clear" />
                </form>
            </div>
        );
    }
}


const mapStateToProps = (state, props) => {
    return {
        defaultInput: props.defaultInput + ' ' + state.submittedValue
    };
};

// onSubmitValue is used to avoid naming conflicts with submitValue
const mapActionsToProps = {
    onSubmitValue: submitValue
}


export default connect(mapStateToProps, mapActionsToProps)(Input);