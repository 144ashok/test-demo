import React, { Component } from 'react';
import './CardList.css';

class CardList extends Component {

    componentDidMount() {
        this.page = 9;
        this.props.getScrollItem(this.page);
        this.trackScrollEvent = this.debounce(this.trackScrolling, 200)
        document.addEventListener('scroll', this.trackScrollEvent);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }

    debounce = (func, delay) => {
        let debounceTimer
        return function () {
            const context = this
            const args = arguments
            clearTimeout(debounceTimer)
            debounceTimer = setTimeout(() => func.apply(context, args), delay)
        }
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    trackScrolling = () => {
        const wrappedElement = document.getElementsByTagName('body')[0];
        debugger;
        if (this.isBottom(wrappedElement)) {
            console.log('header bottom reached');
            this.page += 9;
            this.props.getScrollItem(this.page);
            if (this.props.cardItem.length > 50) {
                console.log(this.props.cardItem.length)
                document.removeEventListener('scroll', this.trackScrollEvent);
            }

        }
    };

    render() {
        const { cardItem } = this.props;
        return (
            <div className="main" ref={this.myRef}>
                {cardItem.map((item, index) =>
                    <div key={index} className="card-item">
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </div>
                )}
            </div>
        );
    }
}
export default CardList;
