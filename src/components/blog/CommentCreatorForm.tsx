import { useState } from 'react';

const CommentCreatorForm = () => {
    const [commentText, setCommentText] = useState<string>('');

    function handleFormSubmit() {

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