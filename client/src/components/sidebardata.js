import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Overview',
        path: '/overview',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                tite: 'Users',
                path: '/overivew/users',
                icons: <IoIcons.IoIosPaper/>,
            },
            {
                tite: 'Revenue',
                path: '/overivew/revenue',
                icons: <IoIcons.IoIosPaper/>,
            },

        ]
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                tite: 'Reports',
                path: '/reports/reports1',
                icons: <IoIcons.IoIosPaper/>,
            },
            {
                tite: 'Reports 2',
                path: '/reports/reports2',
                icons: <IoIcons.IoIosPaper/>,
            },
            {
                tite: 'Reports 3',
                path: '/reports/reports4',
                icons: <IoIcons.IoIosPaper/>,
            },


        ]
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus />
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople />
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Messages',
                path: '/messages/message1',
                icons: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Messages',
                path: '/messages/message2',
                icons: <IoIcons.IoIosPaper/>,
            },
            
        ]
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />
    },
]