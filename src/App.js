import React from 'react';

const Card = ({ style, saveRef, id, children }) => (
  <div className="card" style={ style } ref={ card => { if (id === 0) saveRef(card) } }>{ children }</div>
);

class Cards extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      spacerSize: 0
    };

    this.setBaseCard = this.setBaseCard.bind(this);
  }

  calcSpacerSize(containerWidth, cardWidth) {

    const {
      cardSpace,
      cards
    } = this.props;

    const cardsNumber = cards.length;
    const cardSize    = Math.floor(cardWidth + 2 * cardSpace);

    let cardsInTheFullRow = containerWidth / cardSize;

    const roundedNum = Math.round(cardsInTheFullRow);
    const flooredNum = Math.floor(cardsInTheFullRow);

    cardsInTheFullRow = Math.abs(roundedNum - cardsInTheFullRow) > 0.1 ? flooredNum : roundedNum;

    const cardsInTheLastRow = cardsNumber % cardsInTheFullRow;

    const spacerSize = cardsInTheLastRow === 0 && cardsNumber > cardsInTheFullRow ? 0 : (cardsInTheFullRow - cardsInTheLastRow) * cardSize;

    if (!isNaN(spacerSize)) this.setState({ spacerSize });
  }

  setBaseCard(cardEl) {
    this.baseCard = cardEl;
  }

  componentDidMount() {
    this.calcSpacerSize(this.container.offsetWidth, this.baseCard.offsetWidth);

    window.addEventListener('resize', () => {
      this.calcSpacerSize(this.container.offsetWidth, this.baseCard.offsetWidth);
    });
  }

  render() {

    const {
      cards,
      maxCardWidth,
      minCardWidth,
      cardSpace
    } = this.props;

    return (

      <div
        className="cards"
        ref={ container => { this.container = container } }
      >
        { cards.map(
          (card, id) => (
            <Card
              id={ id }
              key={ `card${id}` }
              saveRef={ this.setBaseCard }
              style={
                {
                  minWidth: minCardWidth,
                  maxWidth: maxCardWidth,
                  margin: cardSpace
                }
              }
            >
              { card.text }
            </Card>
          )
        ) }
        <div className="spacer" style={ { width: this.state.spacerSize} }></div>
      </div>

    );
  }
}

export default Cards;
