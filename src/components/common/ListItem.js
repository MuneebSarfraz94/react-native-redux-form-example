import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { Card } from './index';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDetails() {
    const { library, expanded } = this.props;
    if (expanded) {
      return <Text>{library.description}</Text>;
    }
    return (
      <Text />
    );
  }

  render() {
    const { id, title } = this.props.library;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <Card>
            <Text>{title}</Text>
          </Card>
          { this.renderDetails() }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
};

// The second argument here i,e actions will automatically add the properties
// from action to this.props
export default connect(mapStateToProps, actions)(ListItem);
