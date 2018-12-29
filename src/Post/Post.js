import React from "react";

require('./Post.css');

export default class Post extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    const { title, text } = this.props;
    const { visible } = this.state;

    return (
      <div className='Post'>
        <div className='Post__header'>
          <h3 className='Post__title'>{title}</h3>
          <button className='Post__toggle' onClick={this.toggleVisibility}>
            {visible ? 'Скрыть' : 'Показать'}
          </button>
        </div>
        {visible && <div className="Post__text">{text}</div>}
      </div>
    )
  }
}