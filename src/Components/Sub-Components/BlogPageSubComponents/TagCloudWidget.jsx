import React from 'react'

const tags = ["project", "love", "technology", "travel", "restaurant", "life style", "design", "illustration"];

function TagCloudWidget() {
    return (
        <aside className="single_sidebar_widget tag_cloud_widget mb-4 p-4 border border-gray-200 rounded">
            <h4 className="widget_title font-bold text-lg mb-4" style={{ color: '#2d2d2d' }}>Tag Clouds</h4>
            <ul className="list flex flex-wrap">
                {tags.map((tag, index) => (
                    <li key={index} className="mr-2 mb-2">
                        <a href="#" className="bg-gray-200 py-1 px-3 rounded text-sm hover:bg-blue-500 hover:text-white">{tag}</a>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default TagCloudWidget