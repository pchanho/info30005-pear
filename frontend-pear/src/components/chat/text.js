import React from 'react';

export default function Text(props) {
    return (
      <div class="container">
        <input type="text" className="input" placeholder="Type a message"
        />

        {
          props.rightItems
        }
      </div>
    );
}