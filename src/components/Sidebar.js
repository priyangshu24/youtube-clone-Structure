/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
    MdHomeFilled,
    MdOutlineSlowMotionVideo,
    MdSubscriptions,
    MdOutlineVideoLibrary,
    MdHistory,
    MdOutlineWatchLater,
} from 'react-icons/md';
import { LuThumbsUp } from 'react-icons/lu';

export default function Sidebar() {
    const mainLinks = [
        {
            icon: <MdHomeFilled className='text-xl' />,
            name: 'Home'
        },
        {
            icon: <MdOutlineSlowMotionVideo className='text-xl' />,
            name: 'Shorts'
        },
        {
            icon: <MdSubscriptions className='text-xl' />,
            name: 'Subscriptions'
        }
    ];

    const otherLinks = [
        {
            icon: <MdOutlineVideoLibrary className='text-xl' />,
            name: 'Library'
        },
        {
            icon: <MdHistory className='text-xl' />,
            name: "History"
        },
        {
            icon: <MdOutlineWatchLater className='text-xl' />,
            name: "Watch Later"
        },
        {
            icon: <LuThumbsUp className='text-xl' />,
            name: "Liked Videos"
        }
    ];

    return (
        <div className='sticky w-2/12 h-screen pb-8 pr-5 overflow-auto bg-black top-12'>
            <ul className='flex flex-col border-b border-gray-700'>
                {mainLinks.map(({ icon, name }) => (
                    <li key={name} className={`pl- py-3 hover:bg-red-600 transition duration-200 ${name === "Home" ? "bg-red-500" : ""} rounded-lg`}>
                        <a href='#' className='flex items-center gap-4 text-white'>
                            {icon}
                            <span className='text-sm tracking-wider'>{name}</span>
                        </a>
                    </li>
                ))}
            </ul>
            <ul className='flex flex-col mt-4 border-b border-gray-800'>
                {otherLinks.map(({ icon, name }) => (
                    <li key={name} className={`pl-6 py-3 hover:bg-red-600 transition duration-200 rounded-lg`}>
                        <a href='#' className='flex items-center gap-4 text-white'>
                            {icon}
                            <span className='text-sm tracking-wider'>{name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}