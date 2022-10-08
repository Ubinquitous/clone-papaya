import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-wrap'>
                <div className='header-text'>
                    <h1>Papaya</h1>
                </div>
                <div className='input-wrap'>
                    <form>
                        <input type='text' />
                    </form>
                </div>
            </div>
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
               
            `}</style>
        </div>
    );
};

export default Header;