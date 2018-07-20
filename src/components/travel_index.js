import React from 'react';
import _ from "lodash";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchTravels} from '../actions/index';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

class TravelIndex extends React.Component {
    componentDidMount() {
        this.props.fetchTravels();
    }

    renderPosts() {
        return _.map(this.props.travel, (travel) => {
            return (
                <li className='list-group-item' key={travel.id}>
                    <Link to={`/travel/${travel.id}`}>
                        {travel.title}
                    </Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <div className='title-index-post'>
                    <h3>Summary</h3>
                    <Link to='/travel/new'>
                        <Button bsStyle="primary">
                            Add travel
                        </Button>
                    </Link>
                </div>

                <ul className='list-group'>
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        travel: state.travel,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchTravels}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TravelIndex);
