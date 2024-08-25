import React from 'react';

const categories = [
    { name: "Restaurant food", count: 37 },
    { name: "Travel news", count: 10 },
    { name: "Modern technology", count: 3 },
    { name: "Product", count: 11 },
    { name: "Inspiration", count: 21 },
    { name: "Health Care", count: 9 },
];

const PostCategoryWidget = () => {
    return (
        <aside className="single_sidebar_widget post_category_widget mb-4 p-4 border border-gray-200 rounded">
            <h4 className="widget_title font-bold text-lg mb-4" style={{ color: '#2d2d2d' }}>Category</h4>
            <ul className="list cat-list">
                {categories.map((category, index) => (
                    <li key={index} className="mb-2">
                        <a href="#" className="flex justify-between items-center hover:text-blue-600">
                            <p>{category.name}</p>
                            <p>({category.count})</p>
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default PostCategoryWidget;
