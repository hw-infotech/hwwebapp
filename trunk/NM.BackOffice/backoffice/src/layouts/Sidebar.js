import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";
import { Navigation } from "react-minimal-side-navigation";
import Icon from "awesome-react-icons";

const Sidebar = () => {

    const history = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div >
            <Navigation
                // you can use your own router's api to get pathname
                activeItemId="/management/members"
                onSelect={({ itemId }) => {
                    // maybe push to the route
                }}
                items={[
                    {
                        title: 'Dashboard',
                        itemId: '/dashboard',
                        // you can use your own custom Icon component as well
                        // icon is optional
                        elemBefore: () => <Icon name="inbox" />,
                    },
                    {
                        title: 'Management',
                        itemId: '/management',
                        elemBefore: () => <Icon name="users" />,
                        subNav: [
                            {
                                title: 'Projects',
                                itemId: '/management/projects',
                            },
                            {
                                title: 'Members',
                                itemId: '/management/members',
                            },
                        ],
                    },
                    {
                        title: 'Another Item',
                        itemId: '/another',
                        subNav: [
                            {
                                title: 'Teams',
                                itemId: '/management/teams',
                            },
                        ],
                    },
                ]}
            />
        </div>
    )
}

export default Sidebar
