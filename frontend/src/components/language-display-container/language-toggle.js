import React, { Fragment } from 'react';
import { connect } from 'react-redux'
 
const LanguageToggle = ({ english, EngContent, JpContent}) => (
   <Fragment >{english ? EngContent() : JpContent() }</Fragment>
);

const mapStateToProps = state => ({
   english: state.languageDisplayReducer.english
});

export default connect(mapStateToProps)(LanguageToggle);