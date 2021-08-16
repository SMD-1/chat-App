import "./topbar.css";
import * as MaterialIcon from "react-icons/md";
import profile from "../../assets/images/user2.jpg";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Lets Chat</span>
      </div>
      <div className="topbarCenter">
        <MaterialIcon.MdSearch size="1.5rem" style={{ marginRight: "10px" }} />
        <input
          type="text"
          placeholder="Search for friends or posts"
          className="searchInput"
        />
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink" style={{ margin: "0 10px" }}>
            Homepage
          </span>
          <span className="topbarLink" style={{ margin: "0 10px" }}>
            Timeline
          </span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <MaterialIcon.MdPerson size="1.7rem" />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <MaterialIcon.MdChat size="1.7rem" />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <MaterialIcon.MdNotificationsActive size="1.7rem" />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src={profile} alt="profile" className="topbarImg" />
      </div>
    </div>
  );
};

export default Topbar;
