'use strict';

import React, { Component, PropTypes } from 'react';
import Portal from 'react-portal';
import _ from 'underscore';

class InnerModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalWidth: 0,
            modalHeight: 0
        };
    }

    componentDidMount() {
        let w = document.getElementsByClassName('modal')[0].clientWidth;
        let h = document.getElementsByClassName('modal')[0].clientHeight;
        this.setState({modalWidth: w, modalHeight: h});
    }

    render() {
        let modalStyle = _.extend(styles.modal, {marginLeft: - this.state.modalWidth / 2, marginTop: - this.state.modalHeight / 2});
        return (
            <div style={modalStyle}
                 className='modal'>
                {this.props.children}
            </div>
        );
    }
}

class Modal extends Component {
    render() {
        return (
            <Portal style={styles.dimmer}
                className='dimmer' isOpened={this.props.isOpened} onClose={this.props.onClose}
                    closeOnEsc={this.props.closeOnEsc} closeOnOutsideClick={this.props.closeOnOutsideClick}>
                <InnerModal>
                    {this.props.children}
                </InnerModal>
            </Portal>
        );
    }
}

Modal.propTypes = {
    isOpened: PropTypes.bool.isRequired, // Control opening/closing of modal
    onClose: PropTypes.func.isRequired, // Should be used to update the opening/closing state of modal
    closeOnEsc: PropTypes.bool,
    closeOnOutsideClick: PropTypes.bool,
    children: PropTypes.element.isRequired
};

const styles = {
    modal: {
        display: 'block',
        position: 'fixed',
        top: '50%',
        left: '50%',
        padding: '1rem',
        backgroundColor: '#FFFFFF'
    },

    dimmer: {
        position: 'fixed',
        opacity: 1,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.50)'
    }
}

export default Modal;
