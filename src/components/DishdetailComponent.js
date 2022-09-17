import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
  constructor(props){
      super(props);
  }

  renderDish(dish){
    if (dish == null){
        return(
            <div></div>
        );
    }

    return (
        <div className="col-12 col-md-5 m-1">
          <Card>
              <CardImg top width="100%" key={dish.id} src={dish.image} alt={dish.name} />
              <CardBody>
                  <CardTitle tag="h5">{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
              </CardBody>
          </Card>
        </div>
    );
  }

  renderComments(comments){
      if (comments == null){
          return(
              <div></div>
          );
      }

      const dishComments = comments.map((comment)=> {
          return (
              <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>-- {comment.author},
                  {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit'
                  }).format(new Date(comment.date))}
                  </p>
              </li>
          );
      });

      return (
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {dishComments}
            </ul>
        </div>
      );
  }

  render() {
      if (this.props.dish != null){

          const dish = this.props.dish;
          const dishDetails = this.renderDish(dish);
          const commentDetails = this.renderComments(dish.comments);

          return(
            <div class="container">
                <div className="row">
                    {dishDetails}
                    {commentDetails}
                </div>
            </div>
          );
      }
      else {
          return(
              <div></div>
          );
      }
  }
}

export default Dishdetail;
