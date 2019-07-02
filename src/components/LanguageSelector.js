import React from 'react';
import LanguageContext from '../context/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    console.log(this.context);

    const onLanguageChange = this.context.onLanguageChange.bind(this);

    return (
      <div>
        Select a language:
        <i className="flag us" onClick={() => onLanguageChange('english')} />
        <i className="flag nl" onClick={() => onLanguageChange('dutch')} />
      </div>
    );
  }
}

export default LanguageSelector;
