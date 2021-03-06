import React from 'react';
import OneNote from './oneNote/oneNote';
import c from './notes.module.css';

const Notes = (props) => {
    return <>
        <div className={c.main}>
            <OneNote text="lorem ipsum ffffffff ffefewfsf hy tjyrj x akfk n njnk buhn hgnk nim ij bb j h nuh unhgygtyfygrdrctfy hyg yhy frf frdr vtrdt bh gy u u jjijji jhu hjgtft grff t ft tf tdrse ggygguk jnjhftvrdr vhgy.lgesrf ht ghdr cv vgft ff tf ygy gj r v gy..." 
                date="01-01-2000" urgency="high" />
        </div>
    </>
}

export default Notes;