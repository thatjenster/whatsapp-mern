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
                </div>
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
            <div className="chat__body">
                <p>
                    <span className="chat__timestamp">{new Date().toUTCString()} </span>
                    MESSAGE: REAL TIME CHAT
                </p>
                
            </div>
        </div>
    )
}

export default Chat
