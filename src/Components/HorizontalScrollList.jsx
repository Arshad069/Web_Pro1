import React from 'react';
import '../Styles/HorizontalScrollList.css'; // Import the CSS file
import { FaUmbrellaBeach, FaTree, FaStar, FaMoneyBillAlt, FaUsers, FaDog, FaCoffee, FaHome, FaMountain, FaHeart, FaSwimmer, FaFire, FaSkiing, FaHiking, FaPlane } from 'react-icons/fa';

const categoriesData = [
    { title: 'All', type: '', icon: <FaHome className='icon-size' /> },
    { title: 'Beachfront', type: 'Beachfront', icon: <FaUmbrellaBeach className='icon-size' /> },
    { title: 'Cabins', type: 'Cabins', icon: <FaTree className='icon-size' /> },
    { title: 'Trending', type: 'Trending', icon: <FaStar className='icon-size' /> },
    { title: 'Luxury', type: 'Luxury', icon: <FaMoneyBillAlt className='icon-size' /> },
    { title: 'Budget', type: 'Budget', icon: <FaMoneyBillAlt className='icon-size' /> },
    { title: 'Family', type: 'Family-Friendly', icon: <FaUsers className='icon-size' /> },
    { title: 'Farms', type: 'Pet-Friendly', icon: <FaDog className='icon-size' /> },
    { title: 'Unique', type: 'Unique Stays', icon: <FaCoffee className='icon-size' /> },
    { title: 'Romantic', type: 'Romantic Getaways', icon: <FaHeart className='icon-size' /> },
    { title: 'Adventure', type: 'Adventure', icon: <FaMountain className='icon-size' /> },
    { title: 'Swimming', type: 'Swimming', icon: <FaSwimmer className='icon-size' /> },
    { title: 'Camping', type: 'Camping', icon: <FaFire className='icon-size' /> },
    { title: 'Skiing', type: 'Skiing', icon: <FaSkiing className='icon-size' /> },
    { title: 'Hiking', type: 'Hiking', icon: <FaHiking className='icon-size' /> },
];

const HorizontalScrollList = ({ selectCategory }) => {
    return (
        <div className="scroll-container no-scrollbar">
            {categoriesData.map((item, index) => (
                <button
                    key={index}
                    onClick={() => selectCategory(item.type)}
                    className="scroll-item"
                >
                    {item.icon}
                    <p>{item.title}</p>
                </button>
            ))}
        </div>
    );
};

export default HorizontalScrollList;
