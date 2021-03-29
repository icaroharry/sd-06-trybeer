import { makeStyles } from '@material-ui/core/styles';

// const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  toolBarMenu: {
    display: 'flex',
    backgroundColor: '#32325b',
    height: '70px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButton: {
    display: 'flex',
    position: 'relative',
    zIndex: '1',
    marginRight: '92vw',
    '&:focus': {
      outline: 'none',
    },
  },
  topMenuTitle: {
    display: 'flex',
    fontSize: '30px',
    fontWeight: '700',
    position: 'absolute',
    zIndex: '2',
  },
  appBarShift: {
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: { display: 'none' },
  drawer: {
    background: 'transparent',
  },
  drawerContainer: {
    backgroundColor: '#fbb80f',
    height: '100%',
    width: '40vw',
    borderRight: '2px solid #32325b',
  },
  listContainer: {
    fontSize: '20px',
    fontWeight: '800',
    color: 'white',
  },
}));

export default useStyles;
