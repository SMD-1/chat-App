import * as MaterialIcon from "react-icons/md";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MaterialIcon.MdRssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <MaterialIcon.MdChat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <MaterialIcon.MdPlayCircleFilled className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <MaterialIcon.MdGroup className="sidebarIcon" />
            <span className="sidebarListItemText">Group</span>
          </li>
          <li className="sidebarListItem">
            <MaterialIcon.MdBookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <MaterialIcon.MdEvent className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <MaterialIcon.MdHelp className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="/assets/images/user1.jpg" alt="Friend" />
            <span className="sidebarFriendName">Dan pro</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/images/user1.jpg" alt="Friend" />
            <span className="sidebarFriendName">Dan pro</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/images/user1.jpg" alt="Friend" />
            <span className="sidebarFriendName">Dan pro</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/images/user1.jpg" alt="Friend" />
            <span className="sidebarFriendName">Dan pro</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/images/user1.jpg" alt="Friend" />
            <span className="sidebarFriendName">Dan pro</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/images/user1.jpg" alt="Friend" />
            <span className="sidebarFriendName">Dan pro</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
