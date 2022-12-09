import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Button,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import { Logo } from "./Logo";
import { useNavbarRoutes } from "../routes";
import { PrimaryLink } from "./Link";
import { Text1 } from "./UI/Text";

export const Navbar = (): JSX.Element => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Container maxWidth="xl">
      <AppBar
        sx={{ backgroundColor: "transparent", boxShadow: "none !important" }}
        className="navbar-appbar"
        position="static"
      >
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Logo color="black" />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <MobileNav
              handleCloseNavMenu={handleCloseNavMenu}
              handleOpenNavMenu={handleOpenNavMenu}
              anchorElNav={anchorElNav}
            />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <Logo color="black" />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <NavRoutes handleCloseNavMenu={handleCloseNavMenu} />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <LanguageSwitcher />
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

const LanguageSwitcher = (): JSX.Element => {
  const { i18n } = useTranslation();
  const lngs = { en: "en", sv: "sv" };

  return (
    <ToggleButtonGroup
      color="primary"
      className={i18n.resolvedLanguage}
      value={i18n.resolvedLanguage}
      exclusive
      aria-label="Language"
    >
      {Object.keys(lngs).map((lng) => (
        <ToggleButton
          color="primary"
          key={lng}
          value={lng}
          disabled={i18n.resolvedLanguage === lng}
          onClick={() => i18n.changeLanguage(lng)}
          sx={{ padding: 1, paddingTop: 0, paddingRight: 1, paddingBottom: 0 }}
        >
          {lng}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
type MobileNavProps = {
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseNavMenu: () => void;
  anchorElNav: null | HTMLElement;
};
const MobileNav = ({
  handleOpenNavMenu,
  handleCloseNavMenu,
  anchorElNav,
}: MobileNavProps): JSX.Element => {
  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="primary"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {useNavbarRoutes().map((route) => (
          <PrimaryLink to={route.to} key={route.to}>
            <MenuItem onClick={handleCloseNavMenu}>
              <Text1 mb={0} color="primary" textAlign="center">
                {route.text}
              </Text1>
            </MenuItem>
          </PrimaryLink>
        ))}
      </Menu>
    </>
  );
};
type NavRoutesProps = {
  handleCloseNavMenu: () => void;
};
const NavRoutes = ({ handleCloseNavMenu }: NavRoutesProps): JSX.Element => {
  return (
    <>
      {useNavbarRoutes().map((route) => (
        <PrimaryLink to={route.to} key={route.to}>
          <Button onClick={handleCloseNavMenu} sx={{ my: 2, display: "block" }}>
            {route.text}
          </Button>
        </PrimaryLink>
      ))}
    </>
  );
};
