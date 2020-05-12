import React from 'react';

export default function Toolbar(props) {
  const { title } = props;
  return (
    <div class="toolbar">
      <h1 class="toolbar-title">{ title }</h1>
    </div>
  );
}