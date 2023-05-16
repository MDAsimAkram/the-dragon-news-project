import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>See Our Terms & Condition</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magni expedita sed, quidem itaque accusantium ratione repellat laboriosam alias temporibus eligendi amet? Architecto amet deserunt optio error voluptatibus necessitatibus commodi laboriosam sed temporibus, officia, nemo odio aspernatur aliquid perferendis, vel eligendi molestias libero excepturi! Amet esse obcaecati quos et totam.</p>

            <p>Go Back To <Link to='/register'> Register</Link></p>
        </div>
    );
};

export default Terms;