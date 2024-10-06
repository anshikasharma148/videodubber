'use client'
import { useState } from "react";
import {
  FaCut,
  FaMusic,
  FaSearch,
  FaFlag,
  FaChartLine,
  FaUser,
  FaMicrophone,
} from "react-icons/fa";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri"; // Menu icons
import { AiOutlineScissor } from "react-icons/ai"; // For Cutter icon

// Define types for SidebarItem props
interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
  active?: boolean;
}

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true); // Default collapsed

  return (
    <div
      style={{
        height: "100vh",
        width: isCollapsed ? "80px" : "250px", // Adjusted for bigger icons
        backgroundColor: "#171723", // Dark background
        color: "#bbb", // Text color
        display: "flex",
        flexDirection: "column",
        paddingTop: "20px",
        position: "fixed",
        top: "0",
        left: "0",
        transition: "width 0.3s ease", // Smooth collapse
        overflow: "hidden",
      }}
    >
      {/* Toggle Collapse Button */}
      <div
        style={{
          width: "100%",
          padding: "10px 0",
          cursor: "pointer",
          textAlign: "center",
        }}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <RiMenuUnfoldFill size={30} /> : <RiMenuFoldFill size={30} />}
      </div>

      {/* Scrollable Icons Section */}
      <div
        style={{
          flex: 1,
          width: "100%",
          overflowY: "auto", // Scrollable content
          paddingRight: "10px", // Add padding for scrollbar space
        }}
      >
        {/* Sidebar Items */}
        <SidebarItem
          icon={<FaMusic size={32} style={{ color: "#7DF9FF" }} />}
          label="Remover"
          collapsed={isCollapsed}
        />
        <SidebarItem
          icon={<FaCut size={32} style={{ color: "#7DF9FF" }} />}
          label="Splitter"
          collapsed={isCollapsed}
        />
        <SidebarItem
          icon={<FaChartLine size={32} style={{ color: "#7DF9FF" }} />}
          label="Pitcher"
          collapsed={isCollapsed}
        />
        <SidebarItem
          icon={<FaSearch size={32} style={{ color: "#7DF9FF" }} />}
          label="Key BPM Finder"
          collapsed={isCollapsed}
        />
        <SidebarItem
          icon={<AiOutlineScissor size={32} style={{ color: "#7DF9FF" }} />}
          label="Cutter"
          collapsed={isCollapsed}
          active // Highlight active item
        />
        <SidebarItem
          icon={<FaUser size={32} style={{ color: "#7DF9FF" }} />}
          label="Joiner"
          collapsed={isCollapsed}
        />
        <SidebarItem
          icon={<FaUser size={32} style={{ color: "#7DF9FF" }} />}
          label="Support"
          collapsed={isCollapsed}
        />
        {/* Recorder and Karaoke */}
        <SidebarItem
          icon={<FaMicrophone size={32} style={{ color: "#7DF9FF" }} />}
          label="Recorder"
          collapsed={isCollapsed}
        />
        <SidebarItem
          icon={
            <div
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#7DF9FF",
                borderRadius: "50%",
              }}
            />
          }
          label="Karaoke"
          collapsed={isCollapsed}
        />
      </div>

      {/* Language/Flag at the Bottom */}
      <div
        style={{
          width: "100%",
          textAlign: "center",
          padding: "20px 0",
          borderTop: "1px solid #333",
        }}
      >
        <FaFlag size={32} style={{ color: "#7DF9FF" }} />
      </div>
    </div>
  );
};

// Reusable SidebarItem Component
const SidebarItem = ({ icon, label, collapsed, active }: SidebarItemProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: active ? "#262537" : "transparent", // Highlight background
        color: active ? "#fff" : "#bbb", // Text color
        cursor: "pointer",
        width: "100%",
        justifyContent: collapsed ? "center" : "flex-start",
        marginBottom: "10px",
      }}
    >
      {icon}
      {!collapsed && (
        <span style={{ marginLeft: "20px", whiteSpace: "nowrap", fontSize: "18px" }}>
          {label}
        </span>
      )}
    </div>
  );
};

export default Sidebar;
