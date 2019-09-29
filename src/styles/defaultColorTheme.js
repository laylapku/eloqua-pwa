import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  overrides: {
    MuiBottomNavigation: {
      root: {
        background: "#F4F4F4",
        height: "48px"
      }
    },
    MuiBottomNavigationAction: {
      root: {
        color: "RGB(111,134,131)",
        "&$selected": {
          color: "RGB(203,125,64)"
        }
      }
    },
    MuiToolbar: {
      gutters: {
        background: "RGB(202,187,143)"
      }
    },

    MuiAppBar: {
      colorPrimary: {
        color: "inherit",
        backgroundColor: "#EDEAE0",
        borderRadius: "3px"
      }
    },
    MuiTabs: {
      indicator: {
        display: "none"
      }
    },
    MuiTab: {
      root: {
        minHeight: "35px",
        marginTop: "8px",
        borderRadius: "5px"
      },
      textColorInherit: {
        "&$selected": {
          background: "RGB(203,125,64,0.6)",
          color: "#fff"
        }
      }
    },

    MuiSlider: {
      root: {
        color: "RGB(203,125,64)",
        padding: 0
      },
      rail: {
        backgroundColor: "RGB(202,187,143)",
        height: "3px"
      }
    },
    MuiIconButton: {
      root: {
        color: "RGB(111,134,131)"
      }
    },
    MuiSvgIcon: {
      root: {
        transform: "scale(1.2)"
      }
    },
    MuiCircularProgress: {
      root: {
        margin: "150px 150px"
      },
      colorPrimary: {
        color: "RGB(202,187,143)"
      }
    }
  },
  typography: {
    useNextVariants: true
  }
});
