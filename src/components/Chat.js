const { Avatar, IconButton } = require("@material-ui/core");
const { AttachFile, SearchOutlined, MoreVert } = require("@material-ui/icons");

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>ROOM NAME</h3>
                    <p>Last seen at ...</p>
                    <div className="chat_headerRight">
                        <IconButton>
                            <SearchOutlined />
                        </IconButton>
                        <IconButton>
                            <AttachFile />
                        </IconButton>
                        <IconButton>
                            <MoreVert />
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Chat
