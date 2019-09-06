//material ui
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  //global
  listContainer: {
    marginBottom: "100px",
    marginTop: "50px"
  },
  appBar: {
    /* background: "linear-gradient(to bottom, #ddd 0%, #EDEAE0 100%)",
      color: "inherit", 
      boxShadow: "0 0 5px #d2d4dc" */
    height: "48px"
  },
  appBarInner: {
    display: "grid",
    gridTemplateColumns: "auto 12% 8%",
    alignItems: "center",
    padding: "0 15px"
  },
  deleteIcon: {
    fill: "RGB(132,132,130)"
  },
  favIcon: {
    fill: "RGB(206,32,41, 0.8)"
  },

  //TemplateList
  listGrid: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "5% auto repeat(2, 10%)",
    boxShadow: "2px 2px 5px RGB(192, 178, 131, 0.5)",
    padding: 0
  },
  listItemText: {
    padding: 0
  },

  //ExploreCategoryList
  categoryName: {
    fontSize: "12px",
    display: "flex",
    justifyContent: "center"
  },

  //ExploreSpeechList
  searchInputArea: {
    display: "flex",
    justifyContent: "center"
  },

  //FavoritesTabView
  favReminder: {
    fontSize: "20px",
    textAlign: "center",
    opacity: 0.2,
    marginTop: "80px"
  },

  //ScriptTabView
  backButton: {
    padding: "0 12px"
  },
  scriptHeader: {
    textAlign: "center"
  },
  scriptContainer: {
    overflow: "auto",
    position: "absolute",
    top: "115px",
    bottom: "135px",
    lineHeight: "2em",
    padding: "0 20px",
    textAlign: "justify",
    opacity: 0.7
  },

  //SettingsAboutTab
  aboutMain: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "8% 25% auto",
    margin: "5px 5px"
  },
  aboutFooter: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    textAlign: "center"
  },

  //PlayerControls
  controlsContainer: {
    boxShadow: "none",
    background: "inherit",
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
  speedLabel: {
    height: "20px",
    minWidth: "30px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "2px solid RGB(111,134,131)"
  }
});

export default useStyles;
