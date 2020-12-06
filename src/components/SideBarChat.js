import { Avatar } from "@material-ui/core"

function SideBarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>ROOM NAME</h2>
                <p>This is the last message</p>
            </div>
        </div>
    )
}

export default SideBarChat
