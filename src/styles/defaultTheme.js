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
        display: "grid",
        gridTemplateColumns: "auto 16% 10% 10%",
        background: "RGB(202,187,143)",
        paddingLeft: "10px",
        paddingRight: 0
      },
      regular: {
        minHeight: "48px"
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

    MuiAvatar: {
      root: {
        width: "80px",
        height: "80px",
        margin: "10px"
      }
    },
    MuiGridListTileBar: {
      title: {
        fontSize: "0.8rem",
        lineHeight: "20px",
        whiteSpace: "normal"
      }
    },

    MuiPaper: {
      root: {
        backgroundColor: "inherit"
      },
      elevation1: {
        boxShadow: "none"
      }
    },
    MuiDialogContent: {
      root: {
        padding: "18px 18px",
        position: "fixed",
        bottom: "30px",
        borderRadius: "5px",
        background: "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)",
        "&:first-child": {
          paddingTop: 0
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
        padding: "12px 20px",
        color: "RGB(111,134,131)"
        /* padding: 0 */
      }
    },
    MuiSvgIcon: {
      root: {
        transform: "scale(1.2)"
      }
    }
  },
  typography: {
    useNextVariants: true
  }
});
