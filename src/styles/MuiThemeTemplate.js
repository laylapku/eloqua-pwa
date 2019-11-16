import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  overrides: {
    MuiBottomNavigation: {
      root: {
        backgroundColor: "var(--btmNavBg)",
        height: "48px"
      }
    },
    MuiBottomNavigationAction: {
      root: {
        color: "var(--btmNavActionC)",
        "&$selected": {
          color: "var(--btmNavActionCSlt)"
        }
      }
    },
    MuiToolbar: {
      gutters: {
        background: "var(--tlbarGuttersBg)",
        display: "grid",
        gridTemplateColumns: "auto 16% 10% 10%",
        paddingRight: 0
      },
      regular: {
        minHeight: "48px"
      }
    },

    MuiAppBar: {
      colorPrimary: {
        color: "var(--appbarC)",
        backgroundColor: "var(--appbarBg)",
        maxWidth: "576px",
        right: "auto"
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
          background: "var(--tabSltBg)",
          color: "var(--tabSltC)"
        }
      }
    },

    MuiTypography: {
      root: {
        color: "var(--typoC)"
      }
    },
    MuiIconButton: {
      root: {
        color: "var(--btnC)"
      }
    },
    MuiDialogContent: {
      root: {
        background: "var(--dialogBg)"
      }
    },
    MuiSlider: {
      root: {
        color: "var(--sliderC)",
        padding: 0
      },
      rail: {
        backgroundColor: "var(--sliderRailBg)",
        height: "3px"
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: "var(--dividerBg)"
      },
      inset: {
        marginLeft: "60px"
      }
    },
    MuiCircularProgress: {
      root: {
        margin: "180px 180px"
      },
      colorPrimary: {
        color: "var(--circularC)"
      }
    },
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: "var(--inputBefore)"
        },
        "&:after": {
          borderBottom: "var(--inputAfter)"
        }
      }
    },

    // no color changes
    MuiSvgIcon: {
      root: {
        transform: "scale(1.2)"
      }
    },
    MuiGridListTileBar: {
      title: {
        fontSize: "0.8rem",
        lineHeight: "20px",
        whiteSpace: "normal"
      }
    },
    MuiGrid: {
      item: {
        textAlign: "-webkit-center",
        padding: "5px"
      }
    }
  },
  typography: {
    useNextVariants: true
  }
});
