import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import PropTypes from "prop-types"

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#353b48',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

export default function PhotoUploader(props) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    // accept: 'image/*'
    noDrag:!props.allowDrag,
    noClick:!props.allowClick,
    multiple: props.multiple,
    onDrop:(e)=> {
      props.onSelect(e)
    }
  });


  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <div className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div style={{ textAlign: 'center ' }}>
          <p>{props.title}</p>
          <p style={{ fontSize: '0.8rem' }}>{props.photoAccept}</p>
        </div>
      </div>
    </div>
  );
}


PhotoUploader.propTypes = {
    title: PropTypes.string,
    photoAccept: PropTypes.string,
    onSelect: PropTypes.func,
    allowDrag: PropTypes.bool,
    allowClick: PropTypes.bool,
    multiple: PropTypes.bool
}