import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'
import ChatIcon from '@material-ui/icons/Chat'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Photo from '../asset/20160917_174959.jpg'
import SideBarChat from './SideBarChat'

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__left">
                    <Avatar src={Photo} />
                </div>
                <div className="sidebar__right">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input 
                        placeholder="Search or start new chat"
                        type="text"
                    />
                </div>
            </div>
            <div className="sidebar__chats">
                <SideBarChat />
            </div>
        </div>
    )
}

export default SideBar
