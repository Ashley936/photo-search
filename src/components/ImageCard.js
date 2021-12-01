import React from "react";

class ImageCard extends React.Component{
    state = {spans: 0}
    constructor(props) {
        super(props)
        this.refImage = React.createRef();
    }
    setSpans() {
        const height = this.refImage.current.clientHeight
        const spans = Math.ceil(height / 10)
        
        this.setState({spans})
    }
    componentDidMount() {
        this.refImage.current.addEventListener('load', () => this.setSpans())
    }
    render() {
        const img = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img src={img.urls.regular} alt={img.desciption} ref={this.refImage}/>
            </div>
        )
    }
}

export default ImageCard;