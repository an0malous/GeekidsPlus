import React from 'react';
import { connect } from 'react-redux'
 
const LanguageDisplayContainer = ({ english, EngContent, JpContent, ...rest }) => {
   return (
      <div {...rest}>{english ? EngContent : JpContent }</div>
   )
}

const mapStateToProps = state => ({
   english: state.english
});

export default connect(mapStateToProps)(LanguageDisplayContainer);