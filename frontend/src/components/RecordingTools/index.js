import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BugReport from 'containers/BugReport';
import ShareWidget from 'containers/ShareWidget';

import './style.scss';


class RecordingTools extends Component {

  static contextTypes = {
    canAdmin: PropTypes.bool,
    currMode: PropTypes.string
  }

  render() {
    const { canAdmin, currMode } = this.context;
    const isNew = currMode === 'new';
    const isWrite = currMode === 'new' || currMode === 'patch' || currMode === 'record' || currMode === 'extract';

    return (
      <div className="recording-actions text-center">
        {
          canAdmin && !isNew &&
            <button id="tool-bin" className="btn btn-default" title="Additional tools">
              <span className="glyphicon glyphicon-option-vertical" aria-hidden="true" />
            </button>
        }
        {
          !isNew && // metadata.type != 'player'
            <BugReport />
        }
        {
          !isWrite && // metadata.type != 'player'
            <ShareWidget />
        }
      </div>
    );
  }
}

export default RecordingTools;
