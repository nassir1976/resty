import React from 'react';
import './results.scss';

class Results extends React.Component {

  // instead of looping and doing lists ... you should be using JSON Pretty Component to just dump the JSON
  render() {
    return (
      <>
      <h2>Results From API</h2>
      <ul>
        {
          this.props.data.map( (item,idx) =>
            <ul className="data-list"data-testid={`item-${idx}`} key={idx}>{item.name}</ul>
          )
        }
      </ul>
      </>
    )
  }

}

export default Results;
