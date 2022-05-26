// LICENSE_CODE AT
import {makeStyles, withStyles} from '@mui/styles';
import {createTheme, alpha} from '@mui/material/styles';
import {cyan, orange, indigo, grey} from '@mui/material/colors';
import step_icon_top_left from './img/step_icon_top_left.svg';
import step_icon_top_right from './img/step_icon_top_right.svg';
import step_icon_bottom_right from './img/step_icon_bottom_right.svg';
import step_icon_bottom_left from './img/step_icon_bottom_left.svg';
import menu_top_left from './img/menu_top_left.svg';
import menu_top_right from './img/menu_top_right.svg';
import menu_bottom_right from './img/menu_bottom_right.svg';
import menu_bottom_left from './img/menu_bottom_left.svg';
import menu_item_top_left from './img/menu_item_top_left.svg';
import menu_item_top_right from './img/menu_item_top_right.svg';
import menu_item_bottom_right from './img/menu_item_bottom_right.svg';
import menu_item_bottom_center from './img/menu_item_bottom_center.svg';
import switch_icon from './img/switch_icon.svg';
import switch_track from './img/switch_track.svg';
import switch_checked_icon from './img/switch_checked_icon.svg';
import switch_checked_track from './img/switch_checked_track.svg';
import switch_disabled_icon from './img/switch_disabled_icon.svg';
import switch_disabled_track from './img/switch_disabled_track.svg';
import gui_table_row_top_left from './img/gui_table_row_top_left.svg';
import gui_table_row_top_right from './img/gui_table_row_top_right.svg';
import amcharts_range_selector_period_button_border_left
  from './img/amcharts_range_selector_period_button_border_left.svg';
import amcharts_range_selector_period_button_border_right
  from './img/amcharts_range_selector_period_button_border_right.svg';

let drawer_width = 240;
let app_bar_height = 64;

const colors = {
  black: '#000000',
  white: '#ffffff',
  primary_light: cyan.A100,
  primary_main: cyan.A200,
  primary_dark: cyan.A400,
  primary_background: '#214E58',
  secondary_background: '#00182C',
  secondary_light: indigo.A100,
  secondary_main: indigo.A200,
  secondary_dark: indigo.A400,
  error_light: '#FF6C75',
  error_main: '#FF000F',
  error_dark: '#c10028',
  success_light: '#7AFF8F',
  success_main: '#00FF29',
  success_dark: '#348D33',
  warning_light: orange[300],
  warning_main: orange[500],
  warning_dark: orange[700],
};

export const theme = createTheme({
  palette: {
    common: {
      black: colors.black,
      white: colors.white
    },
    background: {
      paper: alpha(colors.white, 0),
      default: alpha(colors.white, 0)
    },
    primary: {
      light: colors.primary_light,
      main: colors.primary_main,
      dark: colors.primary_dark,
      background: colors.primary_background,
      contrastText: colors.black
    },
    secondary: {
      light: colors.secondary_light,
      main: colors.secondary_main,
      dark: colors.secondary_dark,
      background: colors.secondary_background,
      contrastText: colors.white
    },
    error: {
      light: colors.error_light,
      main: colors.error_main,
      dark: colors.error_dark,
      contrastText: colors.white
    },
    success: {
      light: colors.success_light,
      main: colors.success_main,
      dark: colors.success_dark,
      contrastText: colors.white
    },
    warning: {
      light: colors.warning_light,
      main: colors.warning_main,
      dark: colors.warning_dark,
    },
    text: {
      primary: alpha(colors.white, 1),
      secondary: alpha(colors.black, 0.54),
      disabled: grey[500],
      hint: grey[500]
    },
    disabled: {
      main: '#424242',
    },
  },
  typography: {
    fontFamily: 'Oxanium, Open Sans',
    body_legal: {
      fontSize: 7,
      lineHeight: 1.5
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          textShadow: `0px 0px 6px ${colors.primary_main}`,
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: 12,
          backgroundColor: colors.black,
          padding: '10px 15px',
          boxShadow: `0px 0px 20px ${colors.primary_main}`,
        },
        arrow: {
          color: colors.black,
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: 'none'
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: colors.white
        },
        select: {
          '&.Mui-disabled': {
            cursor: 'not-allowed'
          }
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: alpha(colors.black, 0.95)
        }
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        popper: {
          backgroundColor: alpha(colors.black, 0.95)
        },
        option: {
          '&:hover': {
            backgroundColor: `${alpha(colors.primary_main, 0.95)} !important`,
            color: colors.black,
          }
        },
        noOptions: {
          color: colors.white,
          textShadow: `0px 0px 6px ${colors.white}`
        }
      }
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          textShadow: `0px 0px 6px ${colors.white}`,
          zIndex: 10
        },
        separator: {
          color: colors.white
        },
        li: {
          textTransform: 'capitalize',
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: alpha(colors.primary_main, 0.95),
            color: colors.black,
            '&.Mui-focusVisible': {
              backgroundColor: alpha(colors.primary_main, 0.95),
            },
            '&:hover': {
              backgroundColor: alpha(colors.primary_main, 0.95),
              color: colors.black,
            }
          }
        },
        button: {
          '&:hover': {
            backgroundColor: alpha(colors.primary_main, 0.95),
            color: colors.black,
          }
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: colors.white
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: colors.white
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        outlinedPrimary: {
          boxShadow: `0px 0px 10px ${colors.primary_main}`,
          '&:hover': {
            boxShadow: `0px 0px 10px ${colors.primary_main}`,
          }
        },
        containedPrimary: {
          boxShadow: `0px 0px 10px ${colors.primary_main}`,
          '&:hover': {
            boxShadow: `0px 0px 10px ${colors.primary_main}`,
          }
        },
        contained: {
          '&.Mui-disabled': {
            boxShadow: `0px 0px 10px ${alpha(colors.primary_main, 0.5)}`,
            backgroundColor: alpha(colors.primary_main, 0.5),
            color: colors.primary_main
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: colors.white,
          filter: `drop-shadow(0px 0px 6px ${colors.white})`,
          '&.Mui-disabled': {
            color: alpha(colors.white, 0.26)
          }
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: colors.white,
          textShadow: `0px 0px 6px ${alpha(colors.white, 0.5)}`,
          '&$focused': {
            color: colors.white
          }
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          border: `1px solid ${colors.primary_main}`,
          boxShadow: `0px 0px 10px ${colors.primary_main}`,
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(colors.black, 0.8),
          '&.Mui-error': {
            '& input': {
              color: colors.error_main,
              '&::placeholder': {
                color: colors.error_main
              }
            },
            '& .MuiIconButton-label': {
              color: colors.error_main
            }
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        formControl: {
          color: alpha(colors.white, 0.87),
          textShadow: `0px 0px 6px ${alpha(colors.white, 0.5)}`,
        },
        root: {
          '&.Mui-disabled': {
            color: alpha(colors.white, 0.3),
            textShadow: `0px 0px 6px ${alpha(colors.white, 0.3)}`,
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          textShadow: `0px 0px 6px ${alpha(colors.white, 0.5)}`,
          '&::placeholder': {
            textShadow: `0px 0px 6px ${alpha(colors.white, 0.5)}`,
            color: colors.white,
            opacity: 1
          }
        },
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.white,
          },
          '&.Mui-disabled': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: alpha(colors.white, 0.3)
            }
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(colors.white, 0.5),
          color: alpha(colors.white, 0.87),
        },
        deleteIcon: {
          zIndex: 10,
          color: colors.white
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: colors.white,
          filter: `drop-shadow(0px 0px 10px ${colors.primary_main})`,
        },
        colorPrimary: {
          '&.Mui-checked': {
            color: colors.white
          }
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: colors.white,
          filter: `drop-shadow(0px 0px 10px ${colors.primary_main})`,
          '&.Mui-disabled': {
            color: '#9e9e9e',
          }
        },
        colorPrimary: {
          '&.Mui-checked': {
            color: colors.white
          }
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          textShadow: `0px 0px 6px ${colors.white}`,
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: alpha(colors.black, 0.8),
          border: `2px solid ${colors.white}`,
          boxShadow: `0px 0px 20px ${colors.primary_main}`,
          borderRadius: 0
        }
      }
    },
    MuiTimeline: {
      styleOverrides: {
        root: {
          maxWidth: 'fit-content',
          marginLeft: 'auto',
          marginRight: 'auto',
        }
      }
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          '& > .MuiTableRow-root': {
            borderTop: `1px solid ${colors.primary_main}`,
          }
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: alpha(colors.white, 0.25),
            '&:hover': {
              backgroundColor: alpha(colors.white, 0.25)
            }
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${colors.primary_main}`,
          textShadow: `0px 0px 6px ${colors.white}`,
        }
      }
    },
    MuiStepContent: {
      styleOverrides: {
        root: {
          paddingTop: 20
        }
      }
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
        }
      }
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          color: colors.primary_main,
          textShadow: `0px 0px 6px ${colors.primary_main}`,
          '&.MuiStepLabel-active': {
            color: colors.primary_main,
          },
          '&.MuiStepLabel-completed': {
            color: colors.primary_main,
          }
        }
      }
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: alpha(colors.black, 0.8),
          maxHeight: 'calc(100% - 82px);'
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(colors.black, 0.8),
          '& .MuiTypography-root': {
            color: colors.primary_main
          }
        }
      }
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: grey[500]
          }
        }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          filter: 'none',
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.3
          }
        },
        colorSecondary: {
          '&.Mui-disabled + .MuiSwitch-track': {
            backgroundColor: colors.white
          }
        },
        track: {
          backgroundColor: colors.white
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: colors.white,
          textShadow: `0px 0px 6px ${alpha(colors.white, 0.5)}`
        }
      }
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          '&:hover': {
            color: colors.primary_main,
            '&.Mui-active .MuiTableSortLabel-icon': {
              color: colors.primary_main
            }
          },
          '&.Mui-active .MuiTableSortLabel-icon': {
            color: colors.white
          }
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: colors.white
        }
      }
    }
  },
});

export default theme;

export const Global_css = withStyles(()=>({
  '@global': {
    'body::-webkit-scrollbar': {
      background: theme.palette.common.black,
    },
    'body::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.common.black,
    },
    '*::-webkit-scrollbar': {
      width: '1vw',
      height: '1vw',
      background: 'transparent',
      '&:horizontal': {
        borderBottom: `1px solid ${theme.palette.primary.main}`,
      },
      '&:vertical': {
        borderRight: `1px solid ${theme.palette.primary.main}`,
      }
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'transparent',
      '&:horizontal': {
        borderLeft: '0.5vw solid transparent',
        borderRight: '0.5vw solid transparent',
        borderBottom: `1vw solid ${theme.palette.primary.main}`,
      },
      '&:vertical': {
        borderTop: '0.5vw solid transparent',
        borderRight: `1vw solid ${theme.palette.primary.main}`,
        borderBottom: '0.5vw solid transparent',
      }
    },
    '*::-webkit-scrollbar-corner': {
      background: 'transparent'
    }
  }
}))(()=>null);

export const use_app_styles = makeStyles(()=>({
  root: {
    display: 'flex',
    position: 'relative',
  },
  appBar: {
    width: `calc(100% - ${72}px)`,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    height: `${app_bar_height}px`,
    backgroundColor: 'transparent',
    borderBottom: 0,
    color: theme.palette.common.white,
    boxShadow: 'none',
  },
  app_bar_line: {
    width: '100%',
    height: '1px',
    backgroundColor: theme.palette.primary.main,
    position: 'absolute',
    bottom: 0,
    right: 0,
    boxShadow: `0px 0px 9px 2px ${theme.palette.common.white}`
  },
  top_bar_background: {
    backgroundColor: alpha(theme.palette.primary.background, 0.9),
    clipPath: `
      polygon(
        0 0,
        100% 0,
        100% calc(100% - 18px),
        calc(100% - 18px) 100%,
        0 100%
      )
    `,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
  },
  blinking: {
    opacity: 0,
    animation: 'blinking 500ms',
    animationFillMode: 'forwards',
  },
  img_blinking: {
    opacity: 0,
    animation: 'fade_in 500ms',
    animationDelay: '1s',
    animationFillMode: 'forwards',
  },
  appBarShift: {
    width: `calc(100% - ${drawer_width}px)`
  },
  appBarFull: {
    width: '100% !important',
    boxShadow: `0px 0px 12px ${theme.palette.common.white}`,
    transition: 'none'
  },
  logo_container: {
    minWidth: 110,
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    filter: `drop-shadow(0px 0px 10px ${theme.palette.primary.main})`,
    '& .logo': {
      maxHeight: 50,
      maxWidth: 110
    },
    '& .powered_by': {
      height: 40,
      marginLeft: theme.spacing(2)
    }
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawer_width,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    minHeight: '100vh',
    position: 'fixed',
    zIndex: 1299
  },
  drawerOpen: {
    width: drawer_width,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(9)
  },
  drawerContainer: {
    backgroundColor: theme.palette.common.black,
    borderRight: 0,
    overflow: 'initial',
  },
  drawer_container_gui2: {
    backgroundColor: 'transparent',
  },
  left_side_bar_line: {
    height: '100vh',
    width: '1px',
    backgroundColor: theme.palette.primary.main,
    position: 'absolute',
    top: 0,
    right: 0,
    boxShadow: `0px 0px 9px 2px ${theme.palette.common.white}`
  },
  draw_expand_line: {
    width: '100%',
    height: '1px',
    backgroundColor: theme.palette.primary.main,
    position: 'absolute',
    left: 0,
    bottom: 0,
    boxShadow: `0px 0px 9px 2px ${theme.palette.common.white}`
  },
  toolbar: {
    overflowX: 'clip',
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0 12px',
    ...theme.mixins.toolbar
  },
  toolbar_gui2: {
    backgroundColor: alpha(theme.palette.primary.background, 0.9),
  },
  breadcrumbs: {
    width: '100%',
  },
  breadcrumbs_li: {
    margin: '0 8px',
    height: '100%',
  },
  content: {
    flexGrow: 1,
    width: '100%',
    minHeight: `calc(100vh - ${app_bar_height}px)`,
    marginTop: app_bar_height + 'px'
  },
  welcome_content: {
    width: '100vw',
    height: `calc(100vh - ${app_bar_height}px)`,
    marginTop: app_bar_height + 'px'
  },
  pageContainer: {
    width: 'calc(100vw - 72px - 4px)',
    marginLeft: 72
  },
  pageShift: {
    width: `calc(100vw - ${drawer_width}px)`,
    marginLeft: drawer_width
  },
  listItem: {
    position: 'relative',
    margin: '20px 0',
    '& .MuiListItem-gutters': {
      padding: '8px 0',
      '& .MuiListItemIcon-root': {
        minWidth: 'initial',
        width: 72,
        display: 'flex',
        justifyContent: 'center',
      },
      '& .MuiListItemText-root': {
        marginLeft: '10px'
      }
    }
  },
  listItemActive: {
    '&::before': {
      content: "''",
      position: 'absolute',
      left: '0',
      top: '0',
      width: '4px',
      height: '100%',
      backgroundColor: theme.palette.primary.main,
      boxShadow: `0px 0px 6px ${theme.palette.common.white}`,
      borderRadius: 10,
    }
  },
  sidebar: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  sidebar_gui2: {
    backgroundColor: alpha(theme.palette.primary.background, 0.9),
    clipPath: `
      polygon(
        0 0,
        100% 0,
        100% calc(100% - 18px),
        calc(100% - 18px) 100%,
        0 100%
      )
    `,

  },
  voyagers_logo_container: {
    maxHeight: 64,
    overflow: 'hidden'
  },
  voyagers_logo: {
    marginTop: 2,
    height: 70,
    width: 'auto',
    display: 'block'
  },
  developer_snackbar: {
    backgroundColor: alpha(theme.palette.error.main, 0.8),
    color: theme.palette.common.white,
    alignItems: 'center',
    '& a': {
      textShadow: 'none'
    }
  },
  drawer_outer_container: {
    position: 'absolute',
    left: '100%',
    top: `${app_bar_height}px`,
    width: '14px',
    height: '14px',
    backgroundColor: alpha(theme.palette.primary.background, 0.9),
    clipPath: `
      polygon(
        0 0,
        100% 0,
        0 100%
      )
    `,
    pointerEvents: 'none',
  },
  border: {
    position: 'absolute',
    filter: 'drop-shadow(0 0 10px #536DFE)',
    pointerEvents: 'none',
  },
  drawer_bottom_right_border: {
    bottom: 0,
    right: 0,
  },
  drawer_center_left_border: {
    bottom: '30%',
    left: 0,
  },
  drawer_top_left_border: {
    top: 0,
    left: 0,
  },
  drawer_outer_border: {
    top: `${app_bar_height}px`,
    left: '100%',
  },
  app_bar_bottom_center_border: {
    bottom: 0,
    left: '30%',
  },
  app_bar_bottom_right_border: {
    bottom: 0,
    right: 0,
  },
  app_bar_top_right_border: {
    top: 0,
    right: 0,
  },
  footer_divider: {
    textShadow: 'none',
  },
}));

export const use_topbar_dropdown_styles = makeStyles(()=>({
  topbar_dropdown: {
    '& .MuiPopover-paper': {
      boxShadow: `0px 0px 20px ${theme.palette.primary.main}`,
      border: `2px solid ${theme.palette.common.white}`,
    },
  },
  dropdown_list: {
    width: '100%',
    maxWidth: '348px',
    paddingTop: 0,
    paddingBottom: 0
  },
  dropdown_list_item: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    cursor: 'pointer',
    '& .MuiListItemText-secondary': {
      color: theme.palette.primary.main
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      boxShadow: `0px 0px 12px ${theme.palette.primary.main}`,
      '& .MuiListItemText-primary': {
        color: 'black'
      },
      '& .MuiListItemText-secondary': {
        color: 'black'
      }
    }
  },
  sender_icon: {
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: `0px 0px 6px ${theme.palette.common.white}`,
    marginRight: theme.spacing(2),
  },
  text: {
    textShadow: `0px 0px 6px ${theme.palette.common.white}`,
  },
  all: {
    justifyContent: 'center'
  },
  link: {
    '&:hover': {
      textDecoration: 'none'
    }
  }
}));

export const use_search_bar_styles = makeStyles(()=>({
  search: {
    position: 'relative',
    backgroundColor: 'transparent',
    width: 'auto'
  },
  search_icon: {
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    filter: `drop-shadow(0px 0px 6px ${theme.palette.common.white})`,
  },
  search_icon_active: {
    pointerEvents: 'none',
  },
  input_root: {
    color: 'inherit',
    padding: theme.spacing(0.5, 1),
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '0px',
    opacity: 0,
    border: `1px solid ${theme.palette.common.white}`,
    boxShadow: 'none',
  },
  input_root_active: {
    width: '250px',
    opacity: 1,
    boxShadow: `0px 0px 6px ${theme.palette.common.white}`,
  },
  listbox: {
    width: '100%',
    zIndex: 1,
    position: 'absolute',
    backgroundColor: alpha(theme.palette.common.black, 0.8),
    overflow: 'auto',
    maxHeight: 200,
    border: `1px solid ${alpha(theme.palette.common.black, 0.25)}`
  },
  list_item: {
    '&:hover': {
      color: theme.palette.common.white,
      textDecoration: 'none',
      backgroundColor: 'transparent',
    }
  },
  active_item: {
    color: `${theme.palette.common.black} !important`,
    textDecoration: 'none',
    backgroundColor: `${alpha(theme.palette.primary.main, 0.8)} !important`,
  },
  blinking: {
    opacity: 0,
    animation: 'blinking 500ms',
    animationFillMode: 'forwards',
  },
}));

export const use_menu_styles=makeStyles(()=>({
  menu_list: {
    padding: 0,
  },
  menu_item: {
    width: 250
  }
}));

export const use_background_video_styles = makeStyles(()=>({
  video_background: {
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: '-1',
    backgroundColor: theme.palette.common.black,
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 9999
  },
  skip_button: {
    position: 'absolute',
    top: 90,
    right: 30,
  },
  hide: {
    display: 'none'
  }
}));

export const use_auth_loading_styles = makeStyles(()=>{
  return {
    loadingContainer: {
      position: 'fixed',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.common.black,
      height: '100vh',
      width: '100vw',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      '& > img': {
        width: '100%'
      }
    },
    skip_button: {
      position: 'absolute',
      top: 30,
      right: 30
    },
    video_background: {
      width: '100vw',
      height: '100%',
      objectFit: 'cover',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: '-1',
    },
  };
});

export const use_ai_insight_styles = makeStyles(()=>({
  prod_img: {
    width: 58,
    height: 58,
    objectFit: 'cover',
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: `0px 0px 6px ${theme.palette.common.white}`,
  },
  type_icon: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '50%',
    width: 58,
    height: 58,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    filter: `drop-shadow(0px 0px 6px ${theme.palette.primary.main})`,
  },
  subText: {
    color: theme.palette.primary.main,
  },
  read_more_button: {
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  }
}));

export const use_bids_styles = makeStyles(()=>({
  title: {
    textAlign: 'center'
  },
  sub_text: {
    color: theme.palette.primary.main,
    textAlign: 'left'
  },
  button_progress_container: {
    position: 'relative'
  },
  button_progress: {
    color: theme.palette.common.white,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  prod_img: {
    width: 58,
    height: 58,
    objectFit: 'cover',
    overflow: 'hidden',
    boxShadow: `0px 0px 6px ${theme.palette.common.white}`,
  },
  contract_title: {
    textShadow: `0px 0px 7px ${theme.palette.primary.main}`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'underline'
  },
  total_cost_title: {
    fontWeight: 400,
    fontSize: '2.125rem',
    lineHeight: 1.235,
    textShadow: '0px 0px 6px #18ffff',
    textAlign: 'center',
    margin: '20px 0'
  },
  form_section: {
    padding: '0 32px'
  },
  gui_prod_img: {
    width: '60px !important',
    height: 60,
    margin: theme.spacing(1),
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));

export const use_voyagers_club_styles = makeStyles(()=>({
  voyagers_logo: {
    textAlign: 'center',
    '& img': {
      width: '100%'
    }
  },
  check_icon: {
    width: 80,
    height: 48,
    marginRight: -20,
    marginLeft: -20,
    marginTop: -20,
    transform: 'translate(0px, 20px)'
  },
  text: {
    textTransform: 'uppercase'
  }
}));

export const use_percentage_styles = makeStyles(()=>({
  inventory: {
    display: 'flex',
    alignItems: 'center',
    margin: '24px 0'
  },
  progress_bar_container: {
    width: '100%',
    backgroundColor: alpha(theme.palette.primary.main, 0.3),
    height: 23,
    borderRadius: 3,
    boxShadow: `0px 0px 15px 2px ${alpha(theme.palette.primary.main, 0.3)}`,
    position: 'relative',
    '&:hover': {
      '& $balloon': {
        transform: 'scale(1) translateY(-10px)'
      }
    }
  },
  inventory_progress_bar: {
    backgroundColor: theme.palette.primary.main,
    height: '100%',
    borderRadius: 3,
  },
  inventory_progress_bar_under: {
    backgroundColor: theme.palette.secondary.main,
  },
  inventory_lbl: {
    paddingLeft: 12,
    color: theme.palette.common.black,
    position: 'absolute',
    top: 0,
    left: 0,
    lineHeight: '23px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  inventory_lbl_under: {
    color: theme.palette.common.white
  },
  inventory_percent: {
    paddingLeft: 10,
    minWidth: 75,
    color: theme.palette.primary.main
  },
  progress_limit: {
    position: 'absolute',
    top: 0
  },
  progress_limit_wrapper: {
    position: 'relative'
  },
  balloon: {
    zIndex: 1,
    position: 'absolute',
    top: '-38px',
    left: '-13px',
    transform: 'scale(0)',
    transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    fontWeight: 400,
    lineHeight: 1.2,
    letterSpacing: '0.01071em',
    transformOrigin: 'bottom center',
  },
  balloon_circle: {
    width: 32,
    height: 32,
    display: 'flex',
    transform: 'rotate(-45deg)',
    alignItems: 'center',
    borderRadius: '50% 50% 50% 0',
    justifyContent: 'center',
    backgroundColor: alpha(theme.palette.primary.main, 0.8),
    color: theme.palette.common.black
  },
  balloon_lbl: {
    transform: 'rotate(45deg)',
  },
  progress_bar_container_gui2: {
    position: 'relative',
    width: '140px',
    height: '23px',
    '&:hover': {
      '& $balloon_gui2': {
        transform: 'scale(1) translateY(-10px)'
      }
    },
    '& .MuiSvgIcon-colorSecondary': {
      color: theme.palette.secondary.main,
    },
    '& .MuiSvgIcon-colorPrimary': {
      color: '#18FFFF'
    }
  },
  progress_bar_wrapper_gui2: {
    height: '100%',
    padding: 1,
    clipPath: `
      polygon(
        0 45%,
        100% 0,
        100% 100%,
        0 100%
      )
    `,
  },
  progress_bar_wrapper_bg_gui2: {
    height: '100%',
    background: alpha(theme.palette.common.black, 0.5),
    position: 'relative',
    clipPath: `
      polygon(
        0 50%,
        100% 0,
        100% 100%,
        0 100%
      )
    `,
  },
  progess_cube_gui2: {
    background: alpha(theme.palette.common.black, 0.5),
    height: '100%',
    width: '9.2%',
    float: 'right',
    marginRight: 1
  },
  progress_limit_gui2: {
    position: 'absolute',
    top: 0,
  },
  progress_bar_gui2: {
    height: '100%',
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    '& > div': {
      width: '140px',
      height: '100%',
      backgroundImage: 'linear-gradient(90deg, #00CBCC 16.7%, #FFFFFF 79.63%)',
      clipPath: `
        polygon(
          0 50%,
          100% 0,
          100% 100%,
          0 100%
        )
      `,
    }
  },
  balloon_gui2: {
    position: 'absolute',
    transform: 'scale(0)',
    transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  },
  balloon_circle_gui2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#081B2B',
    padding: '5px 10px',
    clipPath: `
      polygon(
        2.5px 0,
        100% 0,
        100% calc(100% - 2.5px),
        calc(100% - 2.5px) 100%,
        0 100%,
        0 2.5px
      )
    `,
  },
  balloon_arrow_gui2: {
    position: 'absolute',
    bottom: -14,
    left: 'calc(50% - 12px)'
  },
  border: {
    position: 'absolute',
  },
  top_left_border: {
    top: 0,
    left: 0
  },
  top_right_border: {
    top: 0,
    right: 0
  },
  bottom_left_border: {
    bottom: 0,
    left: 0
  },
  bottom_right_border: {
    bottom: 0,
    right: 0
  },
}));

export const use_module_styles = makeStyles(()=>({
  prevent: {
    pointerEvents: 'none',
  },
  root: {
    width: '100%',
    border: `2px solid ${theme.palette.common.white}`,
    boxShadow: `0px 0px 15px 4px ${alpha(theme.palette.primary.main, 0.8)},
      inset 0px 0px 10px 2px ${alpha(theme.palette.primary.main, 0.8)}`,
    background: alpha(theme.palette.common.black, 0.75),
  },
  root2: {
    width: '100%',
    position: 'relative',
    background: alpha(theme.palette.primary.main, 0.1),
  }
}));

export const use_module_header_styles = makeStyles(()=>({
  module_header: {
    width: '100%',
    padding: '12px 24px'
  },
}));

export const use_gui_table_styles = makeStyles({
  root: {
    '& .MuiTableHead-root': {
      '& .MuiTableCell-root': {
        color: theme.palette.primary.main,
        textShadow: 'none',
        borderBottom: 0
      }
    },
    '& .MuiTableBody-root': {
      '& .MuiTableRow-root': {
        borderTop: 0,
        '& td': {
          borderTop: `1px solid ${colors.primary_main}`,
          borderBottom: 0,
          '&:first-child': {
            position: 'relative',
            '&:before': {
              content: "''",
              position: 'absolute',
              top: 0,
              left: 0,
              background: `url(${gui_table_row_top_left}) top left`,
              backgroundRepeat: 'no-repeat !important',
              width: '27px',
              height: '7px'
            }
          },
          '&:last-child': {
            position: 'relative',
            '&:after': {
              content: "''",
              position: 'absolute',
              top: 0,
              right: 0,
              background: `url(${gui_table_row_top_right}) top right`,
              backgroundRepeat: 'no-repeat !important',
              width: '27px',
              height: '7px'
            }
          }
        }
      }
    }
  },
});

export const use_module_footer_styles = makeStyles(()=>({
  modul_footer: {
    width: '100%',
    padding: '12px 24px'
  }
}));

export const use_loading_styles = makeStyles(()=>{
  return {
    loadingContainer: {
      position: 'fixed',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.common.black,
      height: '100vh',
      width: '100vw',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      '& > img': {
        width: '100%'
      }
    }
  };
});

export const use_news_styles = makeStyles(()=>{
  return {
    all_news_btn: {
      width: '100%',
      border: `2px solid ${theme.palette.common.white}`,
      boxShadow: `0px 0px 15px 4px ${alpha(theme.palette.primary.main, 0.8)},
        inset 0px 0px 10px 2px ${alpha(theme.palette.primary.main, 0.8)}`,
      background: alpha(theme.palette.common.black, 0.75),
    },
    all_news_btn_gui2: {
      color: theme.palette.primary.main,
      fontSize: 14,
      textShadow: `0px 0px 6px ${theme.palette.primary.main}`,
      textTransform: 'initial',
      '&:hover': {
        backgroundColor: alpha(theme.palette.primary.background, 0.7),
      }
    },
    article: {
      width: '100%',
      border: `2px solid ${theme.palette.common.white}`,
      boxShadow: `0px 0px 15px 4px ${alpha(theme.palette.primary.main, 0.8)},
        inset 0px 0px 10px 2px ${alpha(theme.palette.primary.main, 0.8)}`,
      background: alpha(theme.palette.common.black, 0.75),
      marginBottom: theme.spacing(2),
      transition: 'all .1s ease-in-out',
      cursor: 'pointer',
      '&:hover': {
        transform: 'scale(1.1)',
        zIndex: 1
      },
      '& .MuiAccordionSummary-expandIconWrapper': {
        color: theme.palette.common.white
      }
    },
    article2_container: {
      position: 'relative',
      width: '100%',
      background: alpha(theme.palette.primary.main, 0.1),
      marginBottom: theme.spacing(2),
      transition: 'all .1s ease-in-out',
      cursor: 'pointer',
      '&:hover': {
        transform: 'scale(1.1)',
        zIndex: 1
      },
    },
    article2: {
      '& .MuiAccordionSummary-expandIconWrapper': {
        color: theme.palette.common.white
      },
      '& .MuiAccordionSummary-root': {
        paddingLeft: 0
      },
      '& .MuiAccordionSummary-content': {
        margin: 0
      }
    },
    article2_expanded: {
      '& .MuiAccordionSummary-root': {
        paddingLeft: theme.spacing(2)
      },
      '& .MuiAccordionSummary-content': {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
      },
      '& $news_avatar2': {
        boxShadow: `0px 0px 6px ${theme.palette.primary.main}`,
        border: `1px solid ${theme.palette.primary.main}`,
      }
    },
    article_border_left: {
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      filter: `drop-shadow(0px 0px 10px ${theme.palette.primary.main})`,
      pointerEvents: 'none',
      zIndex: 1
    },
    article_border_right: {
      height: '100%',
      position: 'absolute',
      top: 0,
      right: 0,
      filter: `drop-shadow(0px 0px 10px ${theme.palette.primary.main})`,
      pointerEvents: 'none',
      zIndex: 1
    },
    avatar_border_right: {
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 'calc(94px - 5.81px)',
      filter: `drop-shadow(0px 0px 10px ${theme.palette.primary.main})`,
      pointerEvents: 'none',
      zIndex: 1
    },
    news_avatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      boxShadow: `0px 0px 6px ${theme.palette.primary.main}`,
      marginRight: theme.spacing(2)
    },
    news_avatar2: {
      width: 94,
      height: 94,
      marginRight: theme.spacing(2),
      borderRadius: 0,
    },
    news_header: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    news_date: {
      paddingLeft: theme.spacing(1),
      color: theme.palette.common.white
    },
    news_title: {
      display: '-webkit-box',
      WebkitLineClamp: 1,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
    },
  };
});

export const use_timeline_item_styles = makeStyles(()=>({
  timeline_item: {
    paddingTop: 12,
    paddingBottom: 12
  },
  timeline_date: {
    color: theme.palette.common.white,
    '&.ative': {
      color: theme.palette.primary.main,
      textShadow: `0px 0px 6px ${theme.palette.common.white}`,
    }
  },
  timeline_dot: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.white, 0.1),
    color: theme.palette.common.white,
    padding: theme.spacing(1.5),
    '&.ative': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.black,
      boxShadow: `0px 0px 35px ${theme.palette.common.white}`,
    },
    '& img': {
      maxWidth: '100%'
    }
  },
  timeline_dot_gui2_container: {
    borderRadius: 'initial',
    backgroundColor: 'transparent',
    margin: 0,
  },
  timeline_dot_gui2: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.common.white,
    padding: theme.spacing(1.5),
    '&.ative': {
      backgroundColor: alpha(theme.palette.primary.main, 0.5),
      color: theme.palette.common.black,
      boxShadow: `0px 0px 35px ${theme.palette.common.white}`,
    },
    '& img': {
      maxWidth: '100%'
    }
  },
  timeline_connector: {
    backgroundColor: theme.palette.primary.light,
    '&.hide': {
      visibility: 'hidden'
    }
  },
  timeline_content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: `2px solid ${alpha(theme.palette.common.white, 0.5)}`,
    textShadow: `0px 0px 6px ${theme.palette.common.white}`,
    boxShadow: `0px 0px 6px ${alpha(theme.palette.primary.main)},
      inset 0 0 6px ${alpha(theme.palette.primary.main)},`,
    '&.ative': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.black,
      border: `2px solid ${theme.palette.common.white}`
    },
    '&.not_processed': {
      '& svg path': {
        fill: alpha(theme.palette.common.white, 0.5)
      }
    }
  },
  timeline_content_gui2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    textShadow: `0px 0px 6px ${theme.palette.common.white}`,
    '&.ative': {
      backgroundColor: alpha(theme.palette.primary.main, 0.5)
    },
    '&.not_processed': {
      '& .download_icon path': {
        fill: alpha(theme.palette.common.white, 0.5)
      }
    }
  },
}));

export const use_seller_logo_styles = makeStyles(()=>({
  seller_logo: {
    width: 64,
    height: 64,
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.common.white,
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: `0px 0px 12px ${theme.palette.common.white}`,
    '& > img': {
      maxWidth: '100%'
    }
  },
  seller_logo_gui2: {
    width: 64,
    height: 64,
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${theme.palette.common.white} !important`,
    '& > img': {
      maxWidth: '100%'
    }
  },
  arktrade_logo: {
    backgroundColor: `${alpha(theme.palette.primary.main, 0.3)} !important`,
    boxShadow: `0px 0px 12px ${theme.palette.primary.main}`,
  }
}));

export const use_input_number_styles = makeStyles({
  wrapper: {
    position: 'relative',
    width: '100%',
  },
  input: {
    width: '100%',
    '& .MuiOutlinedInput-input': {
      textAlign: 'right',
      paddingRight: theme.spacing(4),
      MozAppearance: 'textfield',
      '&::-webkit-outer-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
      },
      '&::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
      }
    }
  },
  prefix: {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
  },
  controls_container: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderLeft: `1px solid ${theme.palette.common.white}`,
    height: '100%'
  },
  gui_controls_container: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    paddingLeft: 10,
    paddingRight: 10
  },
  arrow_icon: {
    height: '18px',
  },
  gui_arrow_icon: {
    height: '18px',
  },
});

export const use_setting_widget_styles = makeStyles(()=>({
  widget_container: {
    width: '70%',
    minHeight: '70vh',
    padding: '20px 35px',
    border: `2px solid ${theme.palette.primary.main}`,
    boxShadow: `0px 0px 20px ${theme.palette.primary.main}`,
    backgroundColor: `${alpha(theme.palette.common.black, 0.8)} !important`
  }
}));

export const use_account_styles = makeStyles(()=>({
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    filter: `drop-shadow(0px 0px 6px ${theme.palette.common.white})`,
  },
  avar_camera: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    minHeight: 'initial'
  },
  membership: {
    marginLeft: 50,
    padding: 16,
    borderRadius: 8,
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: `0px 0px 12px ${theme.palette.common.white}`,
    textAlign: 'center',
    '& > img': {
      width: 250,
      marginTop: 16
    }
  }
}));

export const use_connected_account_styles = makeStyles(()=>({
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    filter: `drop-shadow(0px 0px 6px ${theme.palette.common.white})`,
  }
}));

export const use_dash_styles = makeStyles(()=>({
  widget_container: {
    padding: '10px 15px',
    border: `2px solid ${theme.palette.primary.main}`,
    boxShadow: `0px 0px 20px ${theme.palette.primary.main}`,
    backgroundColor: alpha(theme.palette.common.black, 0.8)
  },
  fav_container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    marginRight: 36,
    margin: '-8px',
  },
  fav_prod_wrapper: {
    width: 768,
    '& .swiper-button-prev': {
      color: theme.palette.primary.main,
      opacity: 0,
      '&.swiper-button-disabled': {
        opacity: 0,
      }
    },
    '& .swiper-button-next': {
      color: theme.palette.primary.main,
      opacity: 0,
      '&.swiper-button-disabled': {
        opacity: 0,
      }
    },
    '&:hover .swiper-button-prev': {
      opacity: 1
    },
    '&:hover .swiper-button-next': {
      opacity: 1
    }
  },
  fav_prod: {
    width: '80px !important',
    height: 80,
    margin: theme.spacing(1),
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: `0px 0px 6px ${theme.palette.primary.main}`,
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      '& $history_lbl': {
        transform: 'translateY(0%)',
        transition: 'transform 0.5s'
      }
    }
  },
  save_layout_btn: {
    marginLeft: theme.spacing(2),
    padding: 8,
    boxShadow: 'none',
    borderWidth: '2px',
    borderRadius: 7,
    minWidth: 'initial',
    '&:hover': {
      borderWidth: '2px',
    },
    '& svg': {
      width: 24,
      height: 24
    }
  },
  history_wrapper: {
    margin: theme.spacing(0.7),
    paddingTop: `calc(100% - calc(${theme.spacing(0.7)} * 2))`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: `0px 0px 6px ${theme.palette.primary.main}`,
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      '& $history_lbl': {
        transform: 'translateY(0%)',
        transition: 'transform 0.5s'
      }
    }
  },
  history_lbl: {
    transform: 'translateY(100%)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: alpha(theme.palette.common.black, 0.5),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme.palette.common.white,
    '&:hover': {
      textDecoration: 'none'
    }
  },
  accordion_root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    '& .MuiAccordionSummary-expandIconWrapper': {
      color: theme.palette.common.white
    },
    '&.Mui-expanded': {
      margin: 0,
      '& .MuiAccordionSummary-content.Mui-expanded': {
        margin: '12px 0'
      }
    },
    '& .MuiAccordionSummary-root': {
      minHeight: '64px'
    }
  },
  purchase_item: {
    paddingLeft: 0,
    paddingRight: 0,
    cursor: 'pointer'
  },
  purchase_img: {
    boxShadow: `0px 0px 6px ${theme.palette.primary.main}`,
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }
  },
  message_img: {
    background: theme.palette.common.white,
    boxShadow: `0px 0px 6px ${theme.palette.primary.main}`,
  },
  business_text_primary: {
    '& .MuiListItemText-primary': {
      textShadow: `0px 0px 7px ${theme.palette.primary.main}`,
    },
    '& .MuiListItemText-secondary': {
      color: theme.palette.primary.main
    }
  },
  business_center_icon: {
    width: 24,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    filter: `drop-shadow(0px 0px 10px ${theme.palette.primary.main})`,
  },
  prod_checkbox_list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: `0px ${theme.spacing(1)}`
  },
  prod_checkbox_list_modal: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: `0px ${theme.spacing(1)}`
  },
  prod_checkbox: {
    marginRight: 0,
    '& .MuiCheckbox-root': {
      filter: `drop-shadow(0px 0px 0px ${theme.palette.primary.main})`
    },
    '& .MuiFormControlLabel-label': {
      textShadow: `0px 0px 0px ${theme.palette.common.white}`,
    }
  },
  best_offer_tablebody: {
    '& > tr:last-child': {
      '& > td': {
        border: 0
      }
    }
  },
  prod_chart_control: {
    '& .amcharts-range-selector-title': {
      color: theme.palette.primary.main
    },
    '& .amcharts-range-selector-from-input': {
      background: 'transparent',
      border: 0,
      borderRadius: 4,
      padding: theme.spacing(1),
      color: theme.palette.common.white,
      minWidth: 120,
      outline: 'none',
      pointerEvents: 'none',
    },
    '& .amcharts-range-selector-to-input': {
      background: 'transparent',
      border: 0,
      borderRadius: 4,
      padding: theme.spacing(1),
      color: theme.palette.common.white,
      minWidth: 120,
      outline: 'none',
      pointerEvents: 'none',
    },
    '& .amcharts-range-selector-period-button': {
      background: 'transparent',
      border: `2px solid ${alpha(theme.palette.primary.main, 0.5)}`,
      borderRadius: 4,
      padding: theme.spacing(1),
      color: theme.palette.common.white,
      outline: 'none',
      transition: 'all .1s ease-in-out',
      cursor: 'pointer',
      '&:hover': {
        transform: 'scale(1.1)',
        zIndex: 1,
        boxShadow: `0px 0px 10px ${theme.palette.primary.main}`,
        border: `2px solid ${alpha(theme.palette.primary.main, 1)}`,
      }
    }
  },
  prod_chart: {
    '& > div': {
      zIndex: 1
    }
  },
  prevent: {
    pointerEvents: 'none',
  }
}));

export const use_layout_menu_styles = makeStyles(()=>({
  layout_edit_btn: {
    marginLeft: theme.spacing(2),
    padding: 8,
    boxShadow: 'none',
    borderWidth: '2px',
    borderRadius: 7,
    minWidth: 'initial',
    '&:hover': {
      borderWidth: '2px',
    },
    '& svg': {
      width: 24,
      height: 24
    }
  },
  menu_list: {
    padding: 0,
    border: `solid 2px ${theme.palette.common.white}`
  },
  menu_item: {
    width: 250,
    '& .icon': {
      marginRight: theme.spacing(1)
    },
    '&:hover': {
      '& .icon': {
        '& path': {
          stroke: theme.palette.common.black
        }
      }
    },
    '&.Mui-selected': {
      '& .icon': {
        '& path': {
          stroke: theme.palette.common.black
        }
      }
    }
  }
}));

export const use_inventory_styles = makeStyles(()=>({
  inventory_bg: {
    position: 'relative'
  },
  amsterdam: {
    position: 'absolute',
    top: '53%',
    right: '11.44%',
    cursor: 'pointer'
  },
  varsha: {
    position: 'absolute',
    bottom: '0%',
    left: '18%',
    cursor: 'pointer'
  },
  berlin: {
    position: 'absolute',
    bottom: '15%',
    right: '30%',
    cursor: 'pointer'
  },
  company_list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridGap: '30px',
    cursor: 'pointer'
  },
  logo: {
    maxHeight: 42
  }
}));

export const use_inventory_summary_dlg_style = makeStyles(()=>({
  summary_dlg: {
    '& .MuiDialog-container .MuiDialog-paper': {
      overflowY: 'scroll',
    },
  },
  summary_dlg_content: {
    padding: '24px 56px 24px 56px'
  },
  total: {
    marginTop: theme.spacing(4)
  }
}));

export const use_inventory_percentage_styles = makeStyles(()=>({
  accordion_root: {
    paddingLeft: 0,
    paddingRight: 0,
    '& .MuiAccordionSummary-expandIconWrapper': {
      color: theme.palette.common.white
    },
    '& .MuiAccordionSummary-content': {
      flexGrow: 'initial'
    },
    '&.Mui-expanded': {
      margin: 0,
      '& .MuiAccordionSummary-content.Mui-expanded': {
        margin: '12px 0'
      }
    },
    '& .MuiAccordionSummary-root': {
      minHeight: '0',
      backgroundColor: alpha(theme.palette.common.black, 0.5),
      margin: '5px auto',
      width: '60%',
      flexDirection: 'column',
      alignItems: 'end'
    }
  },
  inv: {
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  progress_bar_container: {
    width: '100%',
    backgroundColor: alpha(theme.palette.primary.main, 0.3),
    height: 23,
    borderRadius: 3,
    boxShadow: `0px 0px 15px 2px ${alpha(theme.palette.primary.main, 0.3)}`,
    position: 'relative',
    '&:hover': {
      '& $balloon': {
        transform: 'scale(1) translateY(-10px)'
      }
    }
  },
  inv_progress_bar: {
    backgroundColor: theme.palette.primary.main,
    height: '100%',
    borderRadius: 3,
  },
  inv_progress_bar_under: {
    backgroundColor: theme.palette.secondary.main,
  },
  inv_lbl: {
    paddingLeft: 12,
    color: theme.palette.common.white,
    position: 'absolute',
    left: 0,
    lineHeight: '23px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  inv_lbl_under: {
    color: theme.palette.common.white
  },
  inv_percent: {
    paddingLeft: 10,
    minWidth: 75,
    color: theme.palette.primary.main
  },
  progress_limit: {
    position: 'absolute',
    top: 0
  },
  progress_limit_wrapper: {
    position: 'relative'
  },
  balloon: {
    zIndex: 1,
    position: 'absolute',
    top: '-38px',
    left: '-13px',
    transform: 'scale(0)',
    transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    fontWeight: 400,
    lineHeight: 1.2,
    letterSpacing: '0.01071em',
    transformOrigin: 'bottom center',
  },
  balloon_circle: {
    width: 32,
    height: 32,
    display: 'flex',
    transform: 'rotate(-45deg)',
    alignItems: 'center',
    borderRadius: '50% 50% 50% 0',
    justifyContent: 'center',
    backgroundColor: alpha(theme.palette.primary.main, 0.8),
    color: theme.palette.common.black
  },
  balloon_lbl: {
    transform: 'rotate(45deg)',
  },
  inventory_summary_container: {
    width: '100%',
    height: 150,
    background: '#000'
  },
  inventory: {
    display: 'flex',
    alignItems: 'center',
    margin: '24px 0'
  },
  inventory_progress_bar: {
    backgroundColor: theme.palette.primary.main,
    height: '100%',
    borderRadius: 3,
  },
  inventory_progress_bar_under: {
    backgroundColor: theme.palette.secondary.main,
  },
  inventory_lbl: {
    paddingLeft: 12,
    color: theme.palette.common.black,
    position: 'absolute',
    top: 0,
    left: 0,
    lineHeight: '23px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  inventory_lbl_under: {
    color: theme.palette.common.white
  },
  inventory_percent: {
    paddingLeft: 10,
    minWidth: 75,
    color: theme.palette.primary.main
  },
  progress_bar_container_gui2: {
    position: 'relative',
    width: '140px',
    height: '23px',
    '&:hover': {
      '& $balloon_gui2': {
        transform: 'scale(1) translateY(-10px)'
      }
    },
    '& .MuiSvgIcon-colorSecondary': {
      color: theme.palette.secondary.main,
    },
    '& .MuiSvgIcon-colorPrimary': {
      color: '#18FFFF'
    }
  },
  progress_bar_wrapper_gui2: {
    height: '100%',
    padding: 1,
    clipPath: `
      polygon(
        0 45%,
        100% 0,
        100% 100%,
        0 100%
      )
    `,
  },
  progress_bar_wrapper_bg_gui2: {
    height: '100%',
    background: alpha(theme.palette.common.black, 0.5),
    position: 'relative',
    clipPath: `
      polygon(
        0 50%,
        100% 0,
        100% 100%,
        0 100%
      )
    `,
  },
  progess_cube_gui2: {
    background: alpha(theme.palette.common.black, 0.5),
    height: '100%',
    width: '9.2%',
    float: 'right',
    marginRight: 1
  },
  progress_limit_gui2: {
    position: 'absolute',
    top: 0,
  },
  progress_bar_gui2: {
    height: '100%',
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    '& > div': {
      width: '140px',
      height: '100%',
      backgroundImage: 'linear-gradient(90deg, #00CBCC 16.7%, #FFFFFF 79.63%)',
      clipPath: `
        polygon(
          0 50%,
          100% 0,
          100% 100%,
          0 100%
        )
      `,
    }
  },
  balloon_gui2: {
    position: 'absolute',
    transform: 'scale(0)',
    transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  },
  balloon_circle_gui2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#081B2B',
    padding: '5px 10px',
    clipPath: `
      polygon(
        2.5px 0,
        100% 0,
        100% calc(100% - 2.5px),
        calc(100% - 2.5px) 100%,
        0 100%,
        0 2.5px
      )
    `,
  },
  balloon_arrow_gui2: {
    position: 'absolute',
    bottom: -14,
    left: 'calc(50% - 12px)'
  },
  border: {
    position: 'absolute',
  },
  top_left_border: {
    top: 0,
    left: 0
  },
  top_right_border: {
    top: 0,
    right: 0
  },
  bottom_left_border: {
    bottom: 0,
    left: 0
  },
  bottom_right_border: {
    bottom: 0,
    right: 0
  },


}));

export const use_kyc_styles = makeStyles(()=>({
  fieldContainer: {
    position: 'relative'
  },
  typography: {
    textShadow: `0px 0px 6px ${theme.palette.common.white}`,
  },
  fieldIcon: {
    position: 'absolute',
    right: '-60px',
    top: 'calc(50% - 25px)',
    color: theme.palette.text.primary
  },
  submit_button_wrapper: {
    position: 'relative',
  },
  button_progress: {
    color: theme.palette.common.white,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

export const use_kyc_status_modal_styles = makeStyles(()=>({
  timelineDate: {
    color: theme.palette.common.white,
    textShadow: `0px 0px 6px ${theme.palette.common.white}`,
    '&.ative': {
      color: theme.palette.primary.main
    }
  },
  timeline_dot: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.white, 0.1),
    color: theme.palette.common.white,
    padding: theme.spacing(1.5),
    '&.ative': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.black,
      boxShadow: `0px 0px 35px ${theme.palette.common.white}`,
    },
    '& img': {
      maxWidth: '100%'
    }
  },
  timelineConnector: {
    backgroundColor: theme.palette.primary.light,
  },
  timeline_content: {
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: `2px solid ${alpha(theme.palette.common.white, 0.5)}`,
    textShadow: `0px 0px 6px ${theme.palette.common.white}`,
    '&.ative': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.black,
      border: `2px solid ${theme.palette.common.white}`
    },
    '&.not_processed': {
      '& svg path': {
        fill: alpha(theme.palette.common.white, 0.5)
      }
    }
  },
  shippingIcons: {
    '& .MuiSvgIcon-root': {
      color: theme.palette.common.white
    }
  },
  shippingIcon: {
    padding: 20,
    display: 'flex',
    '& .icon': {
      maxWidth: 25,
      maxHeight: 25,
      '& path': {
        fill: theme.palette.common.white
      },
      '& g': {
        opacity: 1
      }
    }
  }
}));

export const use_file_upload_icon_styles = makeStyles(()=>({
  root: {
    position: 'relative'
  },
  progress_circle: {
    position: 'absolute',
    top: 'calc(50% - 20px)',
    left: 'calc(50% - 20px)'
  }
}));

export const use_offers_styles = makeStyles(()=>({
  prod_name: {
    color: 'unset',
    '&:hover': {
      textDecoration: 'none'
    }
  },
  sub_text: {
    color: theme.palette.primary.main,
  },
  button_progress_container: {
    position: 'relative'
  },
  button_progress: {
    color: theme.palette.common.white,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  prod_img: {
    width: 58,
    height: 58,
    objectFit: 'cover',
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: `0px 0px 6px ${theme.palette.common.white}`,
  },
  future_input_wrapper: {
    position: 'relative'
  },
  future_input: {
    '& .MuiOutlinedInput-input': {
      textAlign: 'right',
      paddingRight: theme.spacing(4),
      MozAppearance: 'textfield',
      '&::-webkit-outer-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
      },
      '&::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
      }
    }
  },
  contract_title: {
    textShadow: `0px 0px 7px ${theme.palette.primary.main}`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'underline'
  }
}));

export const use_onboard_styles = makeStyles(()=>({
  onboard_container: {
    margin: -theme.spacing(8),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    overflow: 'hidden'
  },
  onboard_wrapper: {
    minHeight: '100vh',
    position: 'relative',
    padding: `${theme.spacing(4)} 5%`,
    boxShadow: `0px 0px 12px ${theme.palette.primary.main}`,
    '&::before': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      width: 1,
      height: '100%',
      backgroundColor: theme.palette.common.white
    },
    '&::after': {
      content: "''",
      position: 'absolute',
      top: 0,
      right: 0,
      width: 1,
      height: '100%',
      backgroundColor: theme.palette.common.white
    }
  },
  title: {
    color: theme.palette.primary.main,
    textShadow: `0px 0px 6px ${theme.palette.primary.main}`
  },
  subtitle: {
    textShadow: `0px 0px 6px ${theme.palette.primary.main}`
  },
  description: {
    maxHeight: 207,
    padding: 20,
    overflowY: 'auto',
    border: `1px solid ${theme.palette.primary.main}`,
    whiteSpace: 'pre-line',
  },
  receive_key_btn: {
    padding: '15px 32px',
    '&.Mui-disabled': {
      color: theme.palette.common.black,
      boxShadow: 'none',
      backgroundColor: theme.palette.disabled.main
    }
  },
  submit_button_wrapper: {
    position: 'relative',
    width: 'fit-content',
  },
  button_progress: {
    color: theme.palette.common.white,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  clipboard: {
    filter: `drop-shadow(0px 0px 15px ${theme.palette.primary.main})`
  }
}));

export const use_voyager_onboard_styles = makeStyles(()=>({
  disclaimer_container: {
    border: `1px solid ${theme.palette.primary.main}`,
    maxHeight: '200px',
    overflow: 'auto',
  },
  clipboard: {
    filter: `drop-shadow(0px 0px 15px ${theme.palette.primary.main})`
  },
}));

export const use_prod_info_styles = makeStyles(()=>({
  property_container: {
    padding: '0 15px',
    boxSizing: 'content-box',
    paddingBottom: 12,
    overflow: 'hidden',
    transition: 'height 350ms',
  },
  property_wraper: {
    margin: '0 -24px',
    padding: '0 24px'
  },
  property: {
    border: `2px solid ${theme.palette.common.white}`,
    borderRadius: 4,
    boxShadow: `0px 0px 12px 1px ${alpha(theme.palette.primary.main, 0.8)}`,
    padding: 6
  },
  propertyList: {
    padding: '27px 27px 0 27px'
  },
  propertySeperator: {
    height: 1,
    backgroundColor: theme.palette.primary.main,
    boxShadow: `0px 0px 4px ${theme.palette.primary.main}`,
    margin: '0 33px'
  },
  chartContainer: {
    flexDirection: 'column',
    padding: '5px 38px 5px 0'
  },
  chart: {
    height: 120,
    position: 'relative',
    transition: 'height 350ms',
  },
  chartExpanded: {
    height: 300
  },
  expandButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    color: alpha(theme.palette.common.white, 0.54),
    transition: 'transform 150ms',
  },
  expand_button: {
    transition: 'transform 150ms',
  },
  expandButtonRotate: {
    transform: 'rotate(180deg)',
  },
  aiPic: {
    width: 56,
    height: 56,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      width: '100%'
    }
  },
  circularProgress: {
    position: 'absolute',
    left: 0,
    top: 0,
    color: theme.palette.primary.main
  },
  prod_img: {
    width: 56,
    height: 56,
    objectFit: 'cover',
    borderRadius: '50%',
    boxShadow: `0px 0px 6px ${theme.palette.common.white}`
  },
  star_btn: {
    animationIterationCount: 5
  },
  prod_checkbox_list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: `0px ${theme.spacing(0.05)}`
  },
  prod_checkbox_list_modal: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: `0px ${theme.spacing(1)}`
  },
  prod_checkbox: {
    marginRight: 0,
    '& .MuiCheckbox-root': {
      filter: `drop-shadow(0px 0px 0px ${theme.palette.primary.main})`
    },
    '& .MuiFormControlLabel-label': {
      textShadow: `0px 0px 0px ${theme.palette.common.white}`,
    }
  },
  save_layout_btn: {
    marginLeft: theme.spacing(2),
    padding: 8,
    boxShadow: 'none',
    borderWidth: '2px',
    borderRadius: 7,
    minWidth: 'initial',
    '&:hover': {
      borderWidth: '2px',
    },
    '& svg': {
      width: 24,
      height: 24
    }
  },
  prevent: {
    pointerEvents: 'none',
  },
  trade_signal_tb: {
    marginLeft: '-24px',
    marginRight: '-24px',
    width: 'initial',
    overflow: 'hidden',
    transition: 'height 350ms',
    '& .MuiTableCell-root': {
      paddingTop: 0,
      paddingBottom: 0,
    }
  },
  trade_signal_tb_cell: {
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    '&:first-child': {
      borderLeft: 0
    },
    '&:last-child': {
      borderRight: 0
    }
  },
  tab_container: {
    margin: '-24px',
    '& .MuiTab-root': {
      padding: '12px 32px',
      '&.Mui-selected': {
        background: alpha(theme.palette.primary.main, 0.5),
        color: theme.palette.common.white
      }
    },
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      width: 'calc(100% - 24px)',
      backgroundColor: theme.palette.primary.main,
    }
  },
  radio_container: {
    background: alpha(theme.palette.primary.main, 0.5),
    margin: '-24px -24px 0 -24px',
    padding: '0 24px'
  },
  event_icon: {
    color: theme.palette.primary.main,
    '&.clicked': {
      color: theme.palette.common.white
    }
  },
  price_container: {
    display: 'flex',
    alignItems: 'flex-end'
  },
  price_symbol: {
    paddingRight: 10,
    lineHeight: 2
  }
}));

export const use_ticker_property_styles = makeStyles(()=>({
  label: {
    textAlign: 'left',
    whiteSpace: 'nowrap',
    overflow: 'none',
    textOverflow: 'none',
  },
  value: {
    textAlign: 'right',
    textShadow: `0px 0px 6px ${theme.palette.common.white}`,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }
}));

export const use_tender_form_styles = makeStyles(()=>({
  field_container: {
    position: 'relative'
  },
  typography: {
    textShadow: `0px 0px 6px ${theme.palette.common.white}`,
  },
  field_icon: {
    position: 'absolute',
    right: '-40px',
    top: '15px',
    color: theme.palette.text.primary,
    filter: `drop-shadow(0px 0px 6px ${theme.palette.common.white})`,
  },
  tender_auction_switch: {
    '& .MuiSwitch-switchBase': {
      '& .MuiSwitch-thumb': {
        background: `url(${switch_checked_icon}) top left / cover`,
        filter: `drop-shadow(0px 0px 6px ${theme.palette.primary.main})`
      },
      '&+.MuiSwitch-track': {
        background: `url(${switch_checked_track}) top left / cover`,
        filter: `drop-shadow(0px 0px 6px ${theme.palette.primary.main})`
      }
    }
  },
  slider: {
    '& .MuiSlider-mark': {
      height: 12,
      marginTop: '-5px'
    },
    '& .MuiSlider-markActive': {
      backgroundColor: 'currentColor'
    },
    '& .MuiSlider-markLabel': {
      color: theme.palette.common.white
    }
  },
  dst_port_delay_info: {
    position: 'absolute',
    left: 'calc(100% + 10px)',
    top: '-10px',
    width: 'max-content',
    '& svg': {
      filter: `drop-shadow(0px 0px 6px ${theme.palette.common.white})`,
    },
    '& p': {
      textShadow: `0px 0px 6px ${theme.palette.primary.main}`,
      maxWidth: 170
    }
  },
  dst_port_delay_info_loading: {
    position: 'absolute',
    left: 'calc(100% + 10px)',
    top: '18px',
  },
  diversify_container: {
    padding: 0
  },
  diversify_table: {
    '& tr': {
      '&:first-child': {
        '& td': {
          borderTop: `1px solid ${theme.palette.primary.main}`
        }
      }
    }
  },
}));

export const use_best_shipping_styles = makeStyles(()=>({
  root: {
    borderRadius: 0,
    padding: '20px 16px',
    boxShadow: `0px 0px 15px ${theme.palette.primary.main}`,
    backgroundColor: alpha(theme.palette.common.black, 0.8)
  },
  field_container: {
    position: 'relative'
  },
}));

export const use_containers_table_styles = makeStyles(()=>({
  collapse_row: {
    '& .MuiTableCell-root': {
      borderBottom: 0
    }
  },
}));

export const use_purchases_styles = makeStyles(()=>({
  table_container: {
    maxHeight: 'calc(100vh - 64px - 128px - 72px)',
    '& > div > table > thead > tr > th': {
      backdropFilter: 'blur(2px)',
      backgroundColor: alpha(theme.palette.common.black, 0.5)
    },
  },

  prod_name: {
    color: 'unset',
    '&:hover': {
      textDecoration: 'none'
    }
  },
  subText: {
    color: theme.palette.primary.main,
  },
  timeline_item: {
    paddingTop: 12,
    paddingBottom: 12
  },
  timeline_date: {
    color: theme.palette.common.white,
    '&.ative': {
      color: theme.palette.primary.main,
      textShadow: `0px 0px 6px ${theme.palette.common.white}`,
    }
  },
  timeline_separator: {
    justifyContent: 'center'
  },
  timeline_dot: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.white, 0.1),
    color: theme.palette.common.white,
    padding: theme.spacing(1.5),
    '&.ative': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.black,
      boxShadow: `0px 0px 35px ${theme.palette.common.white}`,
    },
    '& img': {
      maxWidth: '100%'
    }
  },
  timeline_connector: {
    backgroundColor: theme.palette.primary.light,
  },
  timeline_content: {
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: `2px solid ${alpha(theme.palette.common.white, 0.5)}`,
    textShadow: `0px 0px 6px ${theme.palette.common.white}`,
    boxShadow: `0px 0px 6px ${alpha(theme.palette.primary.main)},
      inset 0 0 6px ${alpha(theme.palette.primary.main)},`,
    '&.ative': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.black,
      border: `2px solid ${theme.palette.common.white}`
    },
    '&.not_processed': {
      '& svg path': {
        fill: alpha(theme.palette.common.white, 0.5)
      }
    }
  },
  shipping_icons: {
    '& .MuiSvgIcon-root': {
      color: theme.palette.common.white
    }
  },
  shipping_icon: {
    padding: 20,
    display: 'flex',
    '& .icon': {
      maxWidth: 25,
      maxHeight: 25,
      '& path': {
        fill: theme.palette.common.white
      },
      '& g': {
        opacity: 1
      }
    }
  },
  status_btn: {
    padding: 6,
    minWidth: 0,
    '& img': {
      filter: 'invert(1)',
      maxHeight: 24
    }
  },
  button: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  bid_button: {
    animationIterationCount: 5
  },
  summary_button: {
    marginRight: theme.spacing(2)
  },
  action_btn: {
    padding: 6,
    minWidth: 0
  },
  search: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '7px',
    boxShadow: `0px 0px 6px ${theme.palette.primary.main}`,
    background: alpha(theme.palette.common.black, 0.8),
    '& .MuiInputBase-root': {
      backgroundColor: 'transparent'
    }
  },
  status_disabled: {
    '& path': {
      fill: grey[500]
    }
  }
}));

export const use_pred_assumption_table_styles = makeStyles(()=>({
  table_container: {
    maxHeight: 'calc(100vh - 64px - 128px - 72px)',
    '& > table > thead > tr > th': {
      backdropFilter: 'blur(2px)',
    }
  },
  collapsing_cell: {
    overflow: 'hidden',
    border: 'none !important',
    padding: 0,
    paddingLeft: '128px',
    '&::before': {
      left: '128px !important',
    },
  },
  collapse: {
    borderTop: `1px solid ${colors.primary_main}`,
  },
}));

export const use_quote_module_styles = makeStyles(()=>({
  collapsing_cell: {
    overflow: 'hidden',
    border: 'none !important',
    padding: 0,
    paddingLeft: '128px',
    '&::before': {
      left: '128px !important',
    },
  },
  collapse: {
    borderTop: `1px solid ${colors.primary_main}`,
  },
}));

export const use_social_styles = makeStyles(()=>({
  prod_img: {
    width: 58,
    height: 58,
    objectFit: 'cover',
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: `0px 0px 6px ${theme.palette.common.white}`,
  },
  prod_img_gui2: {
    width: 58,
    height: 58,
    '& img': {
      width: 58,
      height: 58,
      objectFit: 'cover',
    }
  },
  type_icon: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '50%',
    width: 58,
    height: 58,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    filter: `drop-shadow(0px 0px 6px ${theme.palette.primary.main})`,
  },
  prod_name: {
    color: 'unset'
  },
  subText: {
    color: theme.palette.primary.main,
  },
  read_more_button: {
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  }
}));

export const use_clickable_styles = makeStyles(()=>({
  grow: {
    transition: 'all .1s ease-in-out',
    cursor: 'pointer',
    width: 'fit-content',
    display: 'flex',
    '&:hover': {
      transform: 'scale(1.1)',
      zIndex: 1
    },
    '& *': {
      cursor: 'pointer',
    }
  }
}));

export const use_card_container_styles = makeStyles(()=>({
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    '& > *': {
      padding: '4vw 3vw'
    }
  }
}));

export const use_flip_card_styles = makeStyles(()=>({
  cub_box: {
    cursor: 'pointer'
  },
  scene: {
    width: '20vw',
    height: '20vw',
    perspective: 1200,
    opacity: 1,
  },
  box_disabled: {
    pointerEvents: 'none',
    opacity: 0.5
  },
  box: {
    width: '20vw',
    height: '20vw',
    position: 'relative',
    transformStyle: 'preserve-3d',
    transform: 'translateZ(-10vw)',
    transition: 'transform 1s',
  },
  box_left: {
    transform: 'translateZ(-10vw) rotateY(13deg) scale(1.04, 1.04)'
  },
  box_right: {
    transform: 'translateZ(-10vw) rotateY(-13deg) scale(1.04, 1.04)'
  },
  show_front: {
    transform: 'translateZ(-10vw) rotateY(0deg)',
  },
  show_back: {
    transform: 'translateZ(-10vw) rotateY(-180deg)',
    '&.left': {
      transform: 'translateZ(-10vw) rotateY(193deg) scale(1.04, 1.04)'
    },
    '&.right': {
      transform: 'translateZ(-10vw) rotateY(-193deg) scale(1.04, 1.04)'
    }
  },
  show_right: {
    transform: 'translateZ(-10vw) rotateY(-90deg)',
  },
  show_left: {
    transform: 'translateZ(-10vw) rotateY(90deg)',
  },
  show_top: {
    transform: 'translateZ(-10vw) rotateX( -90deg)',
  },
  show_bottom: {
    transform: 'translateZ(-10vw) rotateX(  90deg)',
  },
  box_face: {
    position: 'absolute',
  },
  box_border_top: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    filter: `drop-shadow(0px 0px 10px ${theme.palette.primary.main})`,
  },
  box_border_bottom: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    filter: `drop-shadow(0px 0px 10px ${theme.palette.primary.main})`,
  },
  box_border_blinking: {
    opacity: 0,
    animation: 'blinking 500ms',
    animationFillMode: 'forwards',
  },
  media_blinking: {
    opacity: 0,
    animation: 'fade_in 500ms',
    animationDelay: '0.2s',
    animationFillMode: 'forwards',
  },
  star_blinking: {
    opacity: 0,
    animation: 'blinking 500ms',
    animationDelay: '0.2s',
    animationFillMode: 'forwards',
  },
  button_blinking: {
    opacity: 0,
    animation: 'blinking 500ms',
    animationDelay: '0.4s',
    animationFillMode: 'forwards',
  },
  front: {
    width: '20vw',
    height: '20vw',
    transform: 'rotateY(  0deg) translateZ(10vw)',
    backfaceVisibility: 'hidden',
  },
  back: {
    width: '20vw',
    height: '20vw',
    transform: 'rotateY(180deg) translateZ(10vw)',
    backfaceVisibility: 'hidden',
  },
  right: {
    width: '20vw',
    height: '20vw',
    transform: 'rotateY( 90deg) translateZ(10vw)',
  },
  left: {
    width: '20vw',
    height: '20vw',
    transform: 'rotateY(-90deg) translateZ(10vw)',
  },
  top: {
    width: '20vw',
    height: '20vw',
    transform: 'rotateX( 90deg) translateZ(10vw)',
  },
  bottom: {
    width: '20vw',
    height: '20vw',
    transform: 'rotateX(-90deg) translateZ(10vw)',
  },
  card: {
    width: '100%',
    height: '100%',
    background: 'transparent',
    borderRadius: 0,
  },
  cardContent: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '3vw',
    position: 'relative',
    '&:last-child': {
      padding: '3vw'
    }
  },
  media: {
    paddingTop: '56.25%',
    width: '100%'
  },
  star_wrapper: {
    position: 'absolute',
    top: 15,
    right: 15,
    width: 36,
    height: 36,
    zIndex: 1,
    '& svg': {
      width: '100%',
      height: '100%'
    }
  },
  star: {
    filter: `drop-shadow(0px 0px 10px ${theme.palette.primary.main})`
  },
}));

export const use_setting_card_styles = makeStyles(()=>({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '3vw',
    height: '100%',
    boxSizing: 'border-box'
  },
  card_icon: {
    width: '100%',
    filter: `drop-shadow(0px 0px 50px ${theme.palette.common.white})`,
    flex: 1,
    paddingBottom: theme.spacing(2),
    maxHeight: '8vw'
  },
  card_icon_back: {
    transform: 'rotate3d(0, -180, 0, 180deg)'
  }
}));

export const use_product_status_styles = makeStyles(()=>({
  product_container: {
    margin: '8px 0 16px',
    paddingRight: 25
  },
  percentage_lbl: {
    width: 'calc(60% + 50px)',
    marginLeft: 'auto',
    marginRight: '-25px',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
  },
  lbl: {
    color: theme.palette.primary.main,
    textShadow: 'none',
  },
  product_item: {
    display: 'grid',
    gridTemplateColumns: '40% 60%',
    alignItems: 'center',
    marginTop: 5
  },
  product_label: {
    paddingRight: 8
  },
  percentage: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    margin: '12px 0'
  },
  percentage_left: {
    backgroundColor: alpha(theme.palette.primary.main, 0.3),
    height: 23,
    borderRadius: 3,
    boxShadow: `0px 0px 15px 2px ${alpha(theme.palette.primary.main, 0.3)}`,
    position: 'relative',
    overflow: 'hidden',
    lineHeight: '23px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  percentage_right: {
    backgroundColor: alpha(theme.palette.primary.main, 0.3),
    height: 23,
    borderRadius: 3,
    boxShadow: `0px 0px 15px 2px ${alpha(theme.palette.primary.main, 0.3)}`,
    position: 'relative',
    overflow: 'hidden',
    lineHeight: '23px',
    display: 'flex',
    alignItems: 'center'
  },
  percentage_bar: {
    backgroundColor: theme.palette.primary.main,
    height: '100%',
    color: theme.palette.common.black,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 3,
  },
  prod_lbl: {
    '&.active': {
      color: theme.palette.common.white
    }
  },
  graph_icon: {
    opacity: 0.5,
    '&.active': {
      opacity: 1
    }
  }
}));

export const use_welcome_styles = makeStyles(()=>({
  video_background: {
    width: '100vw',
    height: '100%',
    objectFit: 'cover',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: '-1',
  },
  hide: {
    display: 'none'
  },
  title: {
    textShadow: `0px 0px 6px ${theme.palette.primary.main}`
  },
  description: {
    textShadow: `0px 0px 6px ${theme.palette.common.white}`
  },
  youtubeButton: {
    filter: `drop-shadow(0px 0px 6px ${theme.palette.primary.main})`,
  },
  startButton: {
    boxShadow: `0px 0px 12px ${theme.palette.common.white}`,
    '&:hover': {
      boxShadow: `0px 0px 12px ${theme.palette.common.white}`,
    }
  },
  skip_button: {
    position: 'absolute',
    top: 90,
    right: 30
  },
  fade_out: {
    visibility: 'hidden',
    transition: 'visibility 1.5s linear 0s',
  },
  isolated_env: {
    position: 'absolute',
    top: 90,
    right: 30,
    display: 'flex',
    alignItems: 'center',
    width: 340,
    '& img': {
      maxWidth: 100,
      maxHeight: 36,
      marginRight: theme.spacing(1.5)
    },
    '& .MuiTypography-root': {
      color: theme.palette.primary.main
    }
  },
}));

export const use_xy_chart_styles = makeStyles(()=>({
  chart_control: {
    '& .amcharts-range-selector-title': {
      color: theme.palette.primary.main
    },
    '& .amcharts-range-selector-from-input': {
      background: 'transparent',
      border: 0,
      borderRadius: 4,
      padding: theme.spacing(1),
      color: theme.palette.common.white,
      minWidth: 110,
      outline: 'none',
      pointerEvents: 'none',
    },
    '& .amcharts-range-selector-to-input': {
      background: 'transparent',
      border: 0,
      borderRadius: 4,
      padding: theme.spacing(1),
      color: theme.palette.common.white,
      minWidth: 110,
      outline: 'none',
      pointerEvents: 'none',
    },
    '& .amcharts-range-selector-period-button': {
      background: alpha(theme.palette.primary.main, 0.1),
      border: 'none',
      borderRadius: 4,
      padding: theme.spacing(1),
      color: theme.palette.common.white,
      outline: 'none',
      transition: 'all .1s ease-in-out',
      cursor: 'pointer',
      position: 'relative',
      width: 60,
      height: 36,
      clipPath: `
        polygon(
          6px 0,
          100% 0,
          100% calc(100% - 6px),
          calc(100% - 6px) 100%,
          0 100%,
          0 6px
        )
      `,
      '&:before': {
        position: 'absolute',
        top: 0,
        left: 0,
        content: `url(${
          amcharts_range_selector_period_button_border_left})`,
        opacity: 0.7,
      },
      '&:after': {
        position: 'absolute',
        top: 0,
        right: 0,
        content: `url(${
          amcharts_range_selector_period_button_border_right})`,
        opacity: 0.7,
      },
      '&:hover': {
        transform: 'scale(1.1)',
        zIndex: 1,
        background: alpha(theme.palette.primary.main, 0.2),
      },
      '&:active': {
        background: alpha(theme.palette.primary.main, 0.3),
      },
    }
  },
  chart: {
    transition: 'height 350ms'
  }
}));

export const use_msg_styles = makeStyles(()=>({
  message_wrap: {
    display: 'flex',
    height: 'calc(100vh - 64px - 64px - 64px)'
  },
  channellist_wrap: {
    width: '320px',
    marginRight: 16,
    border: `2px solid ${theme.palette.primary.main}`,
    boxShadow: `0px 0px 20px ${theme.palette.primary.main}`,
    backgroundColor: alpha(theme.palette.common.black, 0),
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  channel_list_header: {
    display: 'flex',
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20,
    paddingTop: 30,
    position: 'relative'
  },
  search_button: {
    position: 'absolute',
    right: 35,
    height: 55,
  },
  search_buton_header: {
    position: 'absolute',
    right: 0,
    height: 55
  },
  chat_items: {
    position: 'absolute',
    right: 0,
    marginTop: 5
  },
  channel: {
    position: 'relative',
    cursor: 'pointer',
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '20px 30px 12px 30px',
    '&:last-child': {
      borderBottom: 0
    },
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.5)
    }
  },
  channel_avatar: {
    backgroundColor: theme.palette.common.white,
    width: 60,
    height: 60,
    boxShadow: `0px 0px 6px ${theme.palette.common.white}`,
    marginRight: theme.spacing(2),
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  wapper_avatar: {
    position: 'relative'
  },
  channel_avatar_gui2: {
    position: 'absolute !important',
    zIndex: 1,
    padding: '0 !important',
    width: 60,
    height: 60,
    backgroundColor: 'transparent !important'
  },
  channel_avatar_msg_gui2: {
    position: 'absolute !important',
    zIndex: 1,
    padding: '0 !important',
    width: 53,
    height: 53,
    backgroundColor: 'transparent !important'
  },
  channel_content: {
    width: `calc(100% - 60px - ${theme.spacing(2)})`,
    height: '100%',
  },
  channel_content_upper: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  channel_content_lower: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  chat_wrap: {
    flex: '1 1',
    position: 'relative',
    border: `2px solid ${theme.palette.primary.main}`,
    boxShadow: `0px 0px 20px ${theme.palette.primary.main}`,
    backgroundColor: alpha(theme.palette.common.black, 0.8),
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  chat: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  chat_header: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '85px',
    minHeight: '85px',
    paddingLeft: '24px',
    paddingRight: '14px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  chat_messages: {
    overflowY: 'auto',
    flex: '1 1',
    order: '2',
    padding: theme.spacing(2)
  },
  chat_footer: {
    padding: '0px 16px 16px 8px',
    position: 'relative',
    order: '3',
    display: 'flex',
    alignItems: 'center'
  },
  sendbtn: {
    marginLeft: 16
  },
  msg: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    padding: '12px 0'
  },
  msg_avatar_container: {
    width: 53,
    marginRight: theme.spacing(2),
  },
  msg_avatar: {
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    boxShadow: `0px 0px 6px ${theme.palette.common.white}`,
    borderTopLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  msg_content: {
    width: `calc(100% - 42px - ${theme.spacing(2)})`,
  },
  msg_content_inner: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  msg_content_text: {
    maxWidth: '50%'
  },
}));

export const use_gui_button_styles = makeStyles(()=>({
  button_wrapper: {
    display: 'inline-block',
    transition: '0.25s ease',
    '&:hover': {
      filter: `drop-shadow(0 0 20px ${theme.palette.secondary.main})`,
    },
    '&:active': {
      filter: 'none',
    },
  },
  button: {
    position: 'relative',
    background: 'none',
    boxShadow: 'none !important',
    clipPath: `
      polygon(
        6px 0,
        100% 0,
        100% calc(100% - 6px),
        calc(100% - 6px) 100%,
        0 100%,
        0 6px
      )
    `,
  },
  button_disabled: {
    color: `${theme.palette.grey[400]} !important`,
    backgroundColor: `${alpha(theme.palette.common.white, 0.1)} !important`,
  },
  button_default: {
    color: theme.palette.primary.main,
    background: alpha(theme.palette.primary.main, 0.1),
    '& svg': {
      opacity: 0.7,
    },
    '&:hover': {
      background: alpha(theme.palette.primary.main, 0.2),
    },
    '&:active': {
      background: alpha(theme.palette.primary.main, 0.3),
      '& svg': {
        opacity: 0.7,
      },
    },
  },
  button_primary: {
    color: theme.palette.common.black,
    background: alpha(theme.palette.primary.main, 0.6),
    '& svg': {
      opacity: 0.7,
    },
    '&:hover': {
      background: alpha(theme.palette.primary.main, 0.8),
    },
    '&:active': {
      background: alpha(theme.palette.primary.main, 0.9),
      '& svg': {
        opacity: 0.7,
      },
    },
  },
  button_secondary: {
    color: theme.palette.secondary.main,
    background: alpha(theme.palette.secondary.main, 0.1),
    '& svg': {
      opacity: 0.7,
    },
    '&:hover': {
      background: alpha(theme.palette.secondary.main, 0.1),
    },
    '&:active': {
      background: alpha(theme.palette.secondary.main, 0.1),
      '& svg': {
        opacity: 0.7,
      },
    },
  },
  button_success: {
    color: theme.palette.success.main,
    background: alpha(theme.palette.success.main, 0.1),
    '& svg': {
      opacity: 0.7,
    },
    '&:hover': {
      background: alpha(theme.palette.success.main, 0.1),
    },
    '&:active': {
      background: alpha(theme.palette.success.main, 0.1),
      '& svg': {
        opacity: 0.7,
      },
    },
  },
  button_error: {
    color: theme.palette.error.main,
    background: alpha(theme.palette.error.main, 0.1),
    '& svg': {
      opacity: 0.7,
    },
    '&:hover': {
      background: alpha(theme.palette.error.main, 0.1),
    },
    '&:active': {
      background: alpha(theme.palette.error.main, 0.1),
      '& svg': {
        opacity: 0.7,
      },
    },
  },
  border: {
    position: 'absolute',
  },
  top_left_border: {
    top: 0,
    left: 0
  },
  top_right_border: {
    top: 0,
    right: 0
  },
  bottom_left_border: {
    bottom: 0,
    left: 0
  },
  bottom_right_border: {
    bottom: 0,
    right: 0
  },
}));

export const use_gui_text_field_styles = makeStyles(()=>({
  wrapper: {
    position: 'relative',
    width: '100%'
  },
  border: {
    position: 'absolute',
    transition: theme.transitions.create('filter'),
    zIndex: 1,
    pointerEvents: 'none',
  },
  top_left_border: {
    top: 0,
    left: 0
  },
  top_right_border: {
    top: 0,
    right: 0
  },
  bottom_right_border: {
    right: 0
  },
  bottom_center_border: {
    left: '30%',
  },
  border_glow: {
    filter: 'drop-shadow(0 0 10px #536DFE)',
  },
  disabled: {
    '& .MuiInputBase-root': {
      backgroundColor: `${alpha(theme.palette.grey[900], 0.7)} !important`,
    },
  },
  error: {
    '& .MuiInputBase-root': {
      backgroundColor: `${alpha('#300A0770', 0.7)} !important`,
    },
  },
  root: {
    '& input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
    },
    '& .MuiInputBase-root': {
      borderRadius: 0,
      backgroundColor: alpha('#153E3E', 0.8),
      clipPath: `
        polygon(
          12px 0,
          100% 0,
          100% calc(100% - 12px),
          calc(100% - 12px) 100%,
          0 100%,
          0 12px
        )
      `,
    },
    '& fieldset': {
      border: 0,
    },
    '& label.MuiInputLabel-shrink': {
      transform: 'translate(14px, -16px) scale(0.75)',
    },
  },
  paper: {
    borderRadius: 0,
    backgroundColor: 'transparent',
  },
  popper: {
    backgroundColor: 'transparent',
    '& .MuiAutocomplete-noOptions': {
      backgroundColor: '#021919',
      background: `
        url(${menu_top_left}) top left,
        url(${menu_top_right}) top right,
        url(${menu_bottom_right}) bottom right,
        url(${menu_bottom_left}) bottom left
      `,
      backgroundRepeat: 'no-repeat',
      clipPath: `
        polygon(
          12px 0,
          100% 0,
          100% calc(100% - 12px),
          calc(100% - 12px) 100%,
          0 100%,
          0 12px
        )
      `,
    },
  },
  list: {
    padding: 0,
    backgroundColor: '#021919',
    background: `
      url(${menu_top_left}) top left,
      url(${menu_top_right}) top right,
      url(${menu_bottom_right}) bottom right,
      url(${menu_bottom_left}) bottom left
    `,
    backgroundRepeat: 'no-repeat',
    clipPath: `
      polygon(
        12px 0,
        100% 0,
        100% calc(100% - 12px),
        calc(100% - 12px) 100%,
        0 100%,
        0 12px
      )
    `,
    '& .MuiAutocomplete-option, & .MuiMenuItem-root': {
      height: '48px',
      color: `${theme.palette.common.white} !important`,
      '&:hover': {
        backgroundColor: '#153E3E !important',
        clipPath: `
          polygon(
            12px 0,
            100% 0,
            100% calc(100% - 12px),
            calc(100% - 12px) 100%,
            0 100%,
            0 12px
          )
        `,
        background: `
          url(${menu_item_top_left}) top left,
          url(${menu_item_top_right}) top right,
          url(${menu_item_bottom_right}) bottom right,
          url(${menu_item_bottom_center}) bottom center
        `,
        backgroundRepeat: 'no-repeat',
      }
    },
  },
}));

export const use_gui_paper_styles = makeStyles(()=>({
  root: {
    position: 'relative',
    backgroundColor: alpha('#153E3E', 0.8),
    boxShadow: 'none',
    border: 'none',
    padding: '40px',
    clipPath: `
      polygon(
        12px 0,
        100% 0,
        100% calc(100% - 12px),
        calc(100% - 12px) 100%,
        0 100%,
        0 12px
      )
    `,
  },
  border: {
    position: 'absolute',
    filter: 'drop-shadow(0 0 10px #536DFE)',
  },
  top_left_border: {
    top: 0,
    left: 0
  },
  top_right_border: {
    top: 0,
    right: 0
  },
  bottom_left_border: {
    bottom: 0,
    left: 0
  },
  bottom_right_border: {
    bottom: 0,
    right: 0
  },
}));

export const use_gui_module_styles = makeStyles(()=>({
  root: {
    position: 'relative',
    backgroundColor: alpha(theme.palette.primary.background, 0.7),
    boxShadow: 'none',
    border: 'none',
    clipPath: `
      polygon(
        12px 0,
        100% 0,
        100% calc(100% - 12px),
        calc(100% - 12px) 100%,
        0 100%,
        0 12px
      )
    `,
  },
  border: {
    position: 'absolute',
    filter: 'drop-shadow(0 0 10px #536DFE)',
  },
  top_left_border: {
    top: 0,
    left: 0
  },
  top_right_border: {
    top: 0,
    right: 0
  },
  bottom_left_border: {
    bottom: 0,
    left: 0
  },
  bottom_right_border: {
    bottom: 0,
    right: 0
  },
}));

export const use_gui_step_icon_styles = makeStyles(()=>({
  root: {
    width: '60px',
    height: '60px',
    marginLeft: '-18px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
    clipPath: `
      polygon(
        7px 0,
        100% 0,
        100% calc(100% - 7px),
        calc(100% - 7px) 100%,
        0 100%,
        0 7px
      )
    `,
    background: `
      url(${step_icon_top_left}) top left,
      url(${step_icon_top_right}) top right,
      url(${step_icon_bottom_right}) bottom right,
      url(${step_icon_bottom_left}) bottom left
    `,
    backgroundRepeat: 'no-repeat',
    filter: 'drop-shadow(0 0 10px #536DFE)',
  },
}));

export const use_gui_switch_styles = makeStyles(()=>({
  root: {
    width: '72px',
    '& .MuiTouchRipple-root': {
      display: 'none',
    },
    '& .MuiSwitch-switchBase': {
      backgroundColor: 'transparent !important',
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(32px)',
      '& .MuiSwitch-thumb': {
        background: `url(${switch_checked_icon}) top left / cover`,
        filter: `drop-shadow(0px 0px 6px ${theme.palette.primary.main})`
      },
      '&+.MuiSwitch-track': {
        background: `url(${switch_checked_track}) top left / cover`,
        filter: `drop-shadow(0px 0px 6px ${theme.palette.primary.main})`
      }
    },
    '& .MuiSwitch-switchBase.Mui-disabled': {
      '& .MuiSwitch-thumb': {
        background: `url(${switch_disabled_icon}) top left / cover`,
      },
      '&+.MuiSwitch-track': {
        background: `url(${switch_disabled_track}) top left / cover`,
        opacity: 1
      }
    },
    '& .MuiSwitch-thumb': {
      borderRadius: 0,
      width: '25.56px',
      height: '20px',
      backgroundColor: 'transparent',
      background: `url(${switch_icon}) top left / cover`,
      boxShadow: 'none',
      marginTop: '2px',
      filter: `drop-shadow(0px 0px 8px ${theme.palette.common.black})`
    },
    '& .MuiSwitch-track': {
      borderRadius: 0,
      width: '46px',
      height: '18px',
      backgroundColor: 'transparent !important',
      background: `url(${switch_track}) top left / cover`,
      boxShadow: 'none',
    },
  },
}));

export const use_gui_divider_styles = makeStyles(()=>({
  root: {
    position: 'relative'
  },
  divider_left: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  divider_right: {
    position: 'absolute',
    top: 0,
    right: 0
  }
}));

export const use_pie_chart_styles = makeStyles(()=>({
  avg_precent: {
    textShadow: `0px 0px 6px ${colors.primary_main}`
  }
}));

export const use_gui_tooltip_styles = makeStyles(()=>({
  root: {
    position: 'relative',
    padding: 12,
    backgroundColor: theme.palette.secondary.background,
    boxShadow: 'none',
    border: 'none',
    color: theme.palette.primary.main,
    textShadow: `0px 0px 6px ${theme.palette.primary.main}`,
    clipPath: `
      polygon(
        9px 0,
        100% 0,
        100% calc(100% - 9px),
        calc(100% - 9px) 100%,
        0 100%,
        0 9px
      )
    `,
  },
  border: {
    position: 'absolute',
    filter: 'drop-shadow(0 0 10px #536DFE)',
  },
  top_left_border: {
    top: 0,
    left: 0
  },
  top_right_border: {
    top: 0,
    right: 0
  },
  bottom_left_border: {
    bottom: 0,
    left: 0
  },
  bottom_right_border: {
    bottom: 0,
    right: 0
  },
}));

export const use_gui_paper_box_styles = makeStyles(()=>({
  root: {
    position: 'relative',
    backgroundColor: theme.palette.secondary.background,
    border: 'none',
    // padding: '40px',
  },
  border: {
    position: 'absolute',
    filter: `drop-shadow(0px 0px 6px ${theme.palette.primary.main})`,
  },
  top_left_border: {
    top: 0,
    left: 0
  },
  top_right_border: {
    top: 0,
    right: 0
  },
  bottom_left_border: {
    bottom: 0,
    left: 0
  },
  bottom_right_border: {
    bottom: 0,
    right: 0
  },
}));

export const use_gui_dialog_styles = makeStyles(()=>({
  root: {
    backgroundColor: theme.palette.secondary.background,
    maxHeight: 'calc(100vh - 64px)',
    position: 'relative',
    boxShadow: 'none',
    border: 'none',
    clipPath: `
      polygon(
        12px 0,
        100% 0,
        100% calc(100% - 12px),
        calc(100% - 12px) 100%,
        0 100%,
        0 12px
      )
    `,
  },
  content: {
    overflowY: 'auto',
    maxHeight: 'calc(100vh - 64px)',
  },
  border: {
    position: 'absolute',
    filter: 'drop-shadow(0 0 10px #536DFE)',
  },
  top_left_border: {
    top: 0,
    left: 0
  },
  top_right_border: {
    top: 0,
    right: 0
  },
  bottom_left_border: {
    bottom: 0,
    left: 0
  },
  bottom_right_border: {
    bottom: 0,
    right: 0
  },
}));

export const use_gui_popover_styles = makeStyles(()=>({
  root: {
    backgroundColor: theme.palette.secondary.background,
    position: 'relative',
    boxShadow: 'none',
    border: 'none',
    clipPath: `
      polygon(
        12px 0,
        100% 0,
        100% calc(100% - 12px),
        calc(100% - 12px) 100%,
        0 100%,
        0 12px
      )
    `,
  },
  content: {
    overflowY: 'auto',
    maxHeight: 'calc(100vh - 82px)',
  },
  border: {
    position: 'absolute',
    filter: 'drop-shadow(0 0 10px #536DFE)',
  },
  top_left_border: {
    top: 0,
    left: 0
  },
  top_right_border: {
    top: 0,
    right: 0
  },
  bottom_left_border: {
    bottom: 0,
    left: 0
  },
  bottom_right_border: {
    bottom: 0,
    right: 0
  },
}));

export const use_gui_table_container_styles = makeStyles(()=>({
  root: {
    backgroundColor: alpha(theme.palette.secondary.background, 0.7),
    '& svg': {
      zIndex: 999
    }
  },
}));

export const use_gui_chip_styles = makeStyles(()=>({
  root: {
    position: 'relative',
    backgroundColor: theme.palette.secondary.background,
    boxShadow: 'none',
    border: 'none',
    clipPath: `
      polygon(
        6px 0,
        100% 0,
        100% calc(100% - 6px),
        calc(100% - 6px) 100%,
        0 100%,
        0 6px
      )
    `,
  },
  border: {
    position: 'absolute',
    filter: 'drop-shadow(0 0 10px #536DFE)',
  },
  top_left_border: {
    top: 0,
    left: 0
  },
  top_right_border: {
    top: 0,
    right: 0
  },
  bottom_left_border: {
    bottom: 0,
    left: 0
  },
  bottom_right_border: {
    bottom: 0,
    right: 0
  },
  chip_container: {
    paddingLeft: 12,
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.main
  }
}));

export const use_blinking_styles = makeStyles(()=>({
  root: {
    opacity: 0,
    animation: 'second_blinking 500ms',
    animationFillMode: 'forwards',
  }
}));

export const use_border_blinking_styles = makeStyles(()=>({
  root: {
    '& .border_blinking': {
      '& > svg': {
        opacity: 0,
        animation: 'second_blinking 500ms',
        animationFillMode: 'forwards'
      }
    }
  }
}));
