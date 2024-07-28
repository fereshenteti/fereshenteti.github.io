import { forwardRef } from 'react';

const MadeByMe = forwardRef<any>((props, ref) => {

    return (
        <div className="made-by-me-wrapper" ref={ref}>
            <img src="assets/me.jpg" alt='avatar' className='my-avatar-made-by-me'/>
            <h3>This website was<br/>
            made by <strong>me</strong>,<br/>
            from <strong>scratch</strong>,<br/>
            with <strong>love</strong>!
            </h3>
        </div>
    )
})

export default MadeByMe;