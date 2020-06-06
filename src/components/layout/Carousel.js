import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const Carousel = () => {
    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var options = {
                fullWidth: true,
                indicators: true,
                numVisible: 5
            }
            var instances = M.Carousel.init(elems, options);
          });
    });
    
    return (
        <div class="carousel indicators">
            <a class="carousel-item" href=""><img src="/images/pipes.jpg" /></a>
            <a class="carousel-item" href=""><img src="/images/drip3.jpg" /></a>
        </div>
    )
};

export default Carousel;
