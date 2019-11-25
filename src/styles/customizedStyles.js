import { makeStyles } from "@material-ui/core/styles";

// !important required(but not for all Mui components??) for changing values of built-in css props
const useStyles = makeStyles({
  // global
  listContainer: {
    marginBottom: "100px",
    marginTop: "50px"
  },
  backBtn: {
    padding: "5px 0"
  },
  favBtn: {
    fill: "RGB(206,32,41,0.8)"
  },
  tlbarBtn: {
    fill: "#f4f4f4"
  },
  speakerName: {
    opacity: 0.7
  },

  // SpeechListItem
  listGrid: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "5% auto repeat(2, 10%)",
    boxShadow: "2px 2px 2px RGB(192, 178, 131, 0.5)",
    padding: 0
  },

  // PlayerControls
  ctrlsContainer: {
    position: "fixed",
    top: "auto",
    bottom: 0,
    paddingRight: "25px",
    touchAction: "none", // to fix slider error "Unable to preventDefault inside passive event listener due to target being treated as passive."
    // desktop look
    maxWidth: "600px !important"
  },
  ctrlsFlex: {
    display: "flex",
    justifyContent: "space-evenly"
  },
  duration: {
    display: "flex",
    justifyContent: "flex-end"
  },
  playPauseBtn: {
    transform: "scale(1.8)"
  },
  speedBtn: {
    height: "20px",
    minWidth: "30px",
    fontSize: "14px",
    borderRadius: "5px",
    boxShadow: "1px 1px 3px RGB(202,187,143)"
  },
  speedDialog: {
    position: "fixed",
    bottom: "30px",
    borderRadius: "5px",
    "&:first-child": {
      paddingTop: "0 !important"
    }
  },

  // ScriptTabView
  scriptHeader: {
    textAlign: "center"
  },
  scriptContainer: {
    overflow: "auto",
    position: "absolute",
    top: "150px",
    bottom: "150px",
    lineHeight: "2em !important",
    paddingRight: "20px",
    textAlign: "justify",
    opacity: 0.8,
    // desktop look
    maxWidth: "576px"
  },

  // ExploreCategoryList
  ctgAvatar: {
    width: "70px !important",
    height: "70px !important"
  },
  ctgName: {
    fontSize: "12px !important"
  },

  // ExploreSpeechList
  searchInput: {
    display: "flex",
    justifyContent: "center",
    boxShadow: "2px 2px 2px RGB(192, 178, 131, 0.5)"
  },

  // BottomViewToolbar
  sliderThumb: {
    height: 0
  },

  // TemplateTopbar
  topBar: {
    height: "48px"
  },
  topBarInner: {
    display: "grid",
    gridTemplateColumns: "auto 12% 8%",
    alignItems: "center",
    padding: "0 15px"
  },

  // SettingsAboutTab
  aboutSvg: {
    fill: "var(--aboutSvgF)"
  },
  aboutTypo: {
    opacity: 0.7
  },
  aboutLink: {
    color: "inherit",
    opacity: 0.7
  },
  aboutFooter: {
    position: "fixed",
    bottom: "10px",
    width: "100%",
    textAlign: "center",
    // desktop look
    maxWidth: "576px"
  },

  // FavoritesTabView
  favReminder: {
    fontSize: "20px",
    textAlign: "center",
    opacity: 0.3,
    marginTop: "80px"
  }
});

export default useStyles;
