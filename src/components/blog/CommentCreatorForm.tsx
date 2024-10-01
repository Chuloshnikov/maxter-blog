
import { validateCommentForm } from '@/lib/validation';
import { useSession } from 'next-auth/react';
import { ChangeEvent, useState } from 'react';
import toast from 'react-hot-toast';

const CommentCreatorForm = ({id}: any) => {
    const session = useSession();
    const [commentText, setCommentText] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    async function handleFormSubmit(ev: ChangeEvent<HTMLFormElement>) {
        ev.preventDefault();
        setLoading(true);
    
            const data = {
                desc: commentText,
                postId: id, 
            };

            const validationErrors = validateCommentForm(data);
    
            if (validationErrors.length > 0) {
                setError(validationErrors.join(', '));  
                toast.error(validationErrors.join(', '), {
                    style: {
                        borderRadius: '0px',
                        border: '1px solid #EF4444',
                        padding: '16px',
                        color: '#EF4444',
                    },
                    iconTheme: {
                        primary: '#EF4444',
                        secondary: '#FFFAEE',
                    },
                });
                setLoading(false);
                return;  
            }

            const response = await fetch('/api/comments', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(data),
            });
            if (response.ok) {
                toast.success('Comment added, wait for moderation!', {
                    style: {
                        borderRadius: '0px',
                        border: '1px solid #3DB4FF',
                        padding: '16px',
                        color: '#3DB4FF',
                    },
                    iconTheme: {
                        primary: '#3DB4FF',
                        secondary: '#FFFAEE',
                    },
                });
                setCommentText('');
            } else {
                toast.error('An error has occurred', {
                    style: {
                        borderRadius: '0px',
                        border: '1px solid #EF4444',
                        padding: '16px',
                        color: '#EF4444',
                    },
                    iconTheme: {
                        primary: '#EF4444',
                        secondary: '#FFFAEE',
                    },
                });
            }
        }

    function clearComment() {
        setCommentText('')
    }

    if (session.status === "unauthenticated") {
        return
    } else {
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
}

export default CommentCreatorForm;