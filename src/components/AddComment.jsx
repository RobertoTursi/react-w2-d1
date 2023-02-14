import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {

  state = {
    comment: ""
  }


    commentChange = (propertyName, propertyValue) => {
      const value = pr
    }

    commentSubmit = async e => {
      e.preventDefault()

      try {
        const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
          method: "POST",
          body: JSON.stringify(this.state.comment)
        })
      
      } catch (error) {
        
      }
    }

    render() {
        return(
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Commento</Form.Label>
        <Form.Control type="text" placeholder="Inserisci un commento" value={this.state.comment} onChange={(e) => this.handleChange("comment", e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Select aria-label="Default select example" value={this.state.comment} onChange={(e) => this.handleChange("rating", e.target.value)}>
            <option>Open this select menu</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
      </Form.Select>
      </Form.Group>               
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        )
    }
}

export default AddComment