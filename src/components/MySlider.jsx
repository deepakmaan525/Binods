import React from 'react';
import Typed from 'typed.js';

function MySlider() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Vishnu', ' Prince','Deepak','Sanju','Vikram','Deepak Seth', 'Pankaj','Sameer','Ram Sharma','Shubham Tau','Manoj','Dinesh'],
      typeSpeed: 100,
      loop: true,
      startDelay: 100,
        backSpeed: 100,
      backDelay: 300,
      smartBackspace: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="App min-h-screen container mx-auto px-4 flex items-center">
      <p className=' text-start text-8xl font-bold text-white'> Binods Are: <span className=' text-orange-400'  ref={el} />
      </p>
    </div>
  );
}
export default MySlider