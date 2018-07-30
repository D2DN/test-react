import React from 'react';
import {connect} from 'react-redux';
import {fetchTravel, deleteTravel} from "../actions";
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

class TravelShow extends React.Component {
    constructor(){
        super();
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    componentDidMount() {
        if (!this.props.travel) {
            const {id} = this.props.match.params;
            this.props.fetchTravel(id)
        }
    }

    onDeleteClick() {
        const {id} = this.props.match.params;
        this.props.deleteTravel(id, () => {
            this.props.history.push('/travel');
        });
    };

    render() {
        const {travel} = this.props;
        if (!travel) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Titre: {travel.title}</h3>
                <h6>Country: {travel.categories}</h6>
                <p>Description: {travel.content}</p>
                <Link to="/travel">
                    <Button bsStyle="primary">back summary</Button>
                </Link>
                <Button bsStyle="danger" onClick={this.onDeleteClick}> Delete travel</Button>
            </div>
        );
    }
}

function mapStateToProps({travel}, ownProps) {
    return {travel: travel[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchTravel, deleteTravel})(TravelShow)