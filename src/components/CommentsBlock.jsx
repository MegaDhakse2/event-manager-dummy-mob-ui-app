import './CommentsBlock.css';
import MyInputComponent from './UI/MyInputComponent';
import userIcon from '../assets/icons/icons8-user-94.png';
import sendIcon from '../assets/icons/icons8-send-48.png';
import deleteIcon from '../assets/icons/icons8-waste-32.png';
import Icon from './UI/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { eventActions } from '../store/event';

export default function CommentsBlock(){
    const dispatch = useDispatch();
    const currentEventAssignee = useSelector(state => state.event.event.assignee);
    const comments = useSelector(state => state.event.event.comments);

    function onSaveComment(event){
        event.preventDefault();

        const rawFD = new FormData(event.target);
        const userCommentData = Object.fromEntries(rawFD.entries());
        // console.log(userCommentData);

        if (!userCommentData.commentTxt) {
            return
        }

        //Store user comment data
        dispatch(eventActions.setComments({
            commentTxt: userCommentData.commentTxt,
            commenter: currentEventAssignee
        }));

        event.target.reset();
    }

    return(
        <div className="comments-block">
            <div>
                <div className='comments-heading'>Comments</div>
                <div className='comments-list'>
                {
                    comments.map((comment)=>(
                        <div className='comment' key={comment.commentId}> 
                            <img 
                                src={userIcon}
                                alt={'User Icon'}
                                height={30}
                                width={30}
                            />

                            <span style={{overflowX:'hidden'}}>
                                <span className='comment_header'>{comment.commenter}</span>
                                <br/>
                                {comment.commentTxt}
                                {comment.commentId}
                            </span>
                            <button 
                                onClick={()=>dispatch(eventActions.deleteComment({commentId : comment.commentId}))}
                                style={{all:'unset', alignSelf:'end'}}
                            >
                                <Icon 
                                    src={deleteIcon}
                                    alt={'Delete Icon'}
                                />
                            </button>
                        </div>
                    ))
                }
                </div>
            </div>
            <div className='write-comment-form'>
                <img 
                    src={userIcon}
                    alt={'currentAssignee.assigne'}
                    height={30}
                    width={30}
                />
                <form method='post' onSubmit={onSaveComment}>
                    <MyInputComponent 
                        name={'commentTxt'}
                        type={'text'}
                        style={{textAlign:'left'}}
                    />
                    <button>
                        <Icon 
                            src={sendIcon}
                            alt={'Send Icon'}
                        />
                    </button>
                </form>
                
            </div>
        </div>
    )
}