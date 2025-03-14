import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../styles/scrollToTopButton.css';

function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 440) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll); // Mỗi khi người dùng cuộn trang, hàm handleScroll sẽ được gọi.
    }, []);

    return (
        <div>
            {visible && (
/*{visible && (...)}:
 Đây là một cách viết phổ biến trong JSX để chỉ render phần tử khi điều kiện là true. Nếu visible là true, 
 phần tử bên trong dấu ngoặc đơn sẽ được render. Nếu không, không có gì được render. */
                <Link
                    to="nav"
                    smooth={true}
                    duration={200}
                >
                    <button className="btn scroll-to-top-btn">
                        <i class="fa-solid fa-angles-up"></i>
                    </button>
                </Link>
            )}
        </div>
    );
}

export default ScrollToTopButton;
