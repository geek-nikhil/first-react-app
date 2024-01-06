import React from 'react'
import propTypes from 'prop-types';

export default function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+ lower.slice(1)
    }
  return (
     props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{backgroundColor:'gold'}}>
        <strong>{capitalize (props.alert.type)}</strong>:{props.alert.msg}
  </div>
  )
}
