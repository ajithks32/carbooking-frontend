import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./DashboardNavbar.css"; // Import custom CSS

const DashboardNavbar = () => {
  return (
    <Navbar bg="custom" expand="lg" className="change fixed-top">
      <Container fluid className="change">
        {/* Brand/Logo */}
        <Navbar.Brand as={Link} to="/dashboard" className="fw-bold text-white">
          My Dashboard
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle" />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard/analytics" className="text-white">
            Analytics
            </Nav.Link>
            <Nav.Link as={Link} to="/settings" className="text-white">
              Settings
            </Nav.Link>
            <NavDropdown
              title={<span className="text-white">More</span>}
              id="basic-nav-dropdown"
              className="text-white"
            >
              <NavDropdown.Item as={Link} to="/reports">
                Reports
              </NavDropdown.Item>
             
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/help">
                Help
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Right-aligned Items (e.g., User Profile, Logout) */}
          <Nav>
            <NavDropdown
              title={
                <span className="text-white">
                  <i className="bi bi-person-circle me-2"></i>Aji
                </span>
              }
              align="end"
              id="profile-dropdown"
            >
              <NavDropdown.Item as={Link} to="/profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/settings">
                Account Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/logout">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default DashboardNavbar;