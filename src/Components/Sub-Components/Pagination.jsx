import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Pagination = () => {
    return (
        <nav className="blog-pagination justify-center flex mt-8">
            <ul className="pagination flex justify-center items-center text-gray-600 space-x-2">
                <li className="page-item">
                    <button
                        className="page-link p-2 rounded hover:text-blue-700 disabled:text-gray-400"
                        aria-label="Previous"
                        disabled
                    >
                        <FaAngleLeft />
                    </button>
                </li>
                <li className="page-item">
                    <button
                        className="page-link p-2 rounded  hover:bg-blue-100"
                    >
                        1
                    </button>
                </li>
                <li className="page-item">
                    <button
                        className="page-link p-2 rounded"
                    >
                        2
                    </button>
                </li>
                <li className="page-item">
                    <button
                        className="page-link p-2 rounded  hover:bg-blue-100"
                    >
                        3
                    </button>
                </li>
                <li className="page-item">
                    <button
                        className="page-link p-2 rounded hover:text-blue-700"
                    >
                        <FaAngleRight />
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
