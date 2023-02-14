import { Component } from "react";


class CommentList extends Component {
    render() {
        return(
            <>
                {<h1>ciao</h1> && console.log(this.props.comments)}
                
                   <ul>
                   {this.props.comments.map(comment => 
                            <li key={comment._id}>{comment.comment}</li>
                            
                        )}
                   </ul>
                    
            
            </>
            
        )
    }
}

export default CommentList