//material ui
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  //global
  listContainer: {
    marginBottom: "100px",
    marginTop: "50px"
  },
  appBar: {
    /* background: "linear-gradient(to bottom, #ddd 0%, #EDEAE0 100%)" */
    height: "48px"
  },
  appBarInner: {
    display: "grid",
    gridTemplateColumns: "auto 12% 8%",
    alignItems: "center",
    padding: "0 15px"
  },
  listItemText: {
    paddingLeft: "10px"
  },
  backBtn: {
    padding: "5px 0",
    color: "inherit"
  },
  favIcon: {
    fill: "RGB(206,32,41,0.8)"
  },
  bottomIcons: {
    fill: "#f4f4f4"
  },

  //PlayerControls
  controlsContainer: {
    overflowX: "hidden",
    padding: "10px 10px",
    position: "fixed",
    top: "auto",
    bottom: 0,
    touchAction: "none" // to fix slider error "Unable to preventDefault inside passive event listener due to target being treated as passive."
  },
  iconWrapper: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
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

  //FavoritesTabView
  favReminder: {
    fontSize: "20px",
    textAlign: "center",
    opacity: 0.2,
    marginTop: "80px"
  },

  //ScriptTabView
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
    opacity: 0.7
  },

  //SettingsAboutTab
  aboutMain: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "8% 28% auto"
  },
  aboutFooter: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    textAlign: "center"
  },
  aboutIcons: {
    fill: "RGB(111,134,131,0.8)",
    fontSize: "18px"
  },

  //TemplateList
  listGrid: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "5% auto repeat(2, 10%)",
    boxShadow: "2px 2px 5px RGB(192, 178, 131, 0.5)",
    padding: 0
  },

  //ExploreSpeechList
  searchInputArea: {
    display: "flex",
    justifyContent: "center"
  },

  //ExploreCategoryList
  categoryName: {
    fontSize: "12px",
    display: "flex",
    justifyContent: "center"
  }
});

export default useStyles;
