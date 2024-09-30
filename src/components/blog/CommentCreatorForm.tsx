import { ChangeEvent, useState } from 'react';
import toast from 'react-hot-toast';

const CommentCreatorForm = ({id}: any) => {
    const [commentText, setCommentText] = useState<string>('');

    async function handleFormSubmit(ev: ChangeEvent<HTMLInputElement>) {
        ev.preventDefault();
    
            const data = {
                desc: commentText,
                postId: id, 
                
            };
            const response = await fetch('/api/comments', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(data),
            });
            if (response.ok) {
                toast.success('Comment added, wait for moderation!')
            } else {
                toast.error('Error');
            }
        }

    function clearComment() {
        setCommentText('')
    }

  return (
    <div className=''>
        <form onSubmit={handleFormSubmit}>
        <label className='input-label'>Create a comment</label>
            <textarea onChange={ev => setCommentText(ev.target.value)} value={commentText} placeholder='Write your comment about this post...'/>
            <div className='flex gap-2 mt-4'>
                <button type="submit" className='submitButton'>
                    Create
                </button>
                <button onClick={clearComment} type='button' className='submitButton'>
                    Clear
                </button>
            </div>       
        </form>
    </div>
  )
}

export default CommentCreatorForm;