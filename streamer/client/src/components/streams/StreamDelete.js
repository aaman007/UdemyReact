import React from 'react';
import Modal from '../Modal';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component{

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderContent() {
        if (!this.props.stream){
            return "Are you sure you want to delete the stream?";
        }
        return `Are you sure you want to delete the stream titled ${this.props.stream.title}?`;
    }

    renderActions() {
        const { id } = this.props.match.params;

        return (
            <React.Fragment>
                <Link to="/" className="ui button grey"> Cancel </Link>
                <button onClick={() => this.props.deleteStream(id)} className="ui button negative"> Delete </button>
            </React.Fragment>
        );
    }

    render() {
        return (
            <Modal
                header="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);