import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  // global
  listContainer: {
    marginBottom: "100px",
    marginTop: "50px"
  },
  backBtn: {
    padding: "5px 0"
  },
  favIcon: {
    fill: "RGB(206,32,41,0.8)"
  },
  toolbarIcon: {
    fill: "#f4f4f4"
  },
  speakerName: {
    opacity: 0.7
  },

  // BottomViewToolbar
  sliderThumb: {
    height: 0
  },

  // PlayerControls
  controlsContainer: {
    position: "fixed",
    top: "auto",
    bottom: 0,
    //overflowX: "hidden",
    paddingRight: "25px",
    touchAction: "none" // to fix slider error "Unable to preventDefault inside passive event listener due to target being treated as passive."
  },
  controlsFlex: {
    display: "flex",
    justifyContent: "space-evenly"
  },
  duration: {
    display: "flex",
    justifyContent: "flex-end"
  },
  playPauseIcon: {
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
    padding: "16px 16px",
    borderRadius: "5px",
    "&:first-child": {
      paddingTop: 0
    }
  },

  // ExploreSpeechList
  searchInputArea: {
    display: "flex",
    justifyContent: "center"
  },

  // ExploreCategoryList
  ctgAvatar: {
    width: "80px",
    height: "80px"
  },
  ctgText: {
    fontSize: "12px",
    fontFamily: "cursive"
  },

  // FavoritesTabView
  favReminder: {
    fontSize: "20px",
    textAlign: "center",
    opacity: 0.3,
    marginTop: "80px"
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
    lineHeight: "2em",
    paddingRight: "20px",
    textAlign: "justify",
    opacity: 0.8
  },

  // SettingsAboutTab
  svgIcon: {
    fill: "var(--svgIcon)"
  },
  aboutTypo: {
    opacity: 0.7
  },
  aboutFooter: {
    position: "fixed",
    bottom: "10px",
    width: "100%",
    textAlign: "center"
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

  // SpeechListItem
  listGrid: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "5% auto repeat(2, 10%)",
    boxShadow: "2px 2px 5px RGB(192, 178, 131, 0.5)",
    padding: 0
  }
});

export default useStyles;
