import React from 'react';

class Faqs extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      question: []
    }
  }

  componentDidMount() {
    fetch('https://baconipsum.com/api/?type=meat-and-filler')
      .then(r => r.json())
      .then(data => {
        this.setState({
          question: data
        })
        console.dir(this.state)
        return data
      })
      .catch(e => console.log("Fetch Failed"))


  }

  componentWillMount() {

  }

  render() {
    return (
      <div className="faq">
        <h2>FAQs</h2>
        <ul>
          {this.state.question.map((q, i) =>
            <li key={i}>{q}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default Faqs;
