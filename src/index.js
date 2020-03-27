  import React from 'react';
  import ReactDOM from 'react-dom';
   import faker from 'faker';
   import CommentDetail from './CommentDetail';
   import ApprovalCard from './ApprovalCard';
  
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
            <CommentDetail 
             writer= "Mary"
             time="Yesterday at 10:00PM" 
             text="Very nice blog"
             img={faker.image.avatar()}/>
             </ApprovalCard>
            
            <ApprovalCard>
            <CommentDetail
             writer="Ting" 
             time="Today at 9:00AM"
             text="Great adventure"
             img={faker.image.avatar()}/>
             </ApprovalCard>
             

             
            <ApprovalCard>
            <CommentDetail 
             writer="Sheng"
             time="Today at 5:00PM"
             text="Happy memories"
             img={faker.image.avatar()}/>
             </ApprovalCard>
             

             
             <ApprovalCard>
            <CommentDetail 
             writer="Jerk"
             time="Today at 12:00PM"
             text="Just so so"
             img={faker.image.avatar()}/>
             </ApprovalCard>
            
            </div>
        
    );
};


ReactDOM.render(<App  />, document.querySelector('#root'));
