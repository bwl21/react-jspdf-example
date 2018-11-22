'use strict';

const e = React.createElement;

class PdfDrawing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {liked: false, inputValue: ""};
    this.pdf = "";
    this.handleChangeInputValue =  this.handleChangeInputValue.bind(this);
  }

  handleChangeInputValue(event){
    this.setState({inputValue: event.target.value});
    this.drawPdf(this.props.commentID, event.target.value);
    this.setState({liked: false});
  }

  drawPdf(number, input) {
    var doc = new jsPDF();
    var inputstring = input ? input :  target.state.inputValue;

    doc.setFontSize(22);
    doc.text(20, 20, 'This is a title of ' + number + ':' + inputstring);

    doc.setFontSize(16);
    doc.text(20, 30, 'This is some normal sized text underneath.');
    var string = doc.output('datauristring');
    this.setState({pdf: string});
    PDFObject.embed(string, "#pdf_" + number, {height: "100px", width: "400px"});
  }

  render() {
    // if (this.state.liked) {
    //   return 'You liked comment number ' + this.props.commentID;
    // }

    return [
      e('button', {key: 1, onClick: () => this.setState({liked: true})}, "like: " + this.state.liked),
      e('button', {key: 2, onClick: () => this.drawPdf(this.props.commentID)}, "draw"),
      e('input', {key: 3, value: this.state.inputValue, onChange: (event) => this.handleChangeInputValue(event, "x" + this.value)}),
      e('p', {key: 4}, "input: " + this.state.inputValue),
      e('iframe', {key:5, src: this.state.pdf, height: "100px", width: "400px"},"no pdf available "),
      e('span', {key:6, id: "pdf_"+this.props.commentID},"no pdf available "),
    ]
  }
}

// Find all DOM containers, and render Like buttons into them.
document
  .querySelectorAll(
    '.like_button_container'
  )
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    const
      commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM
      .render(
        e(
          PdfDrawing
          , {
            commentID: commentID
          }
        ),
        domContainer
      )
    ;
  })
;
