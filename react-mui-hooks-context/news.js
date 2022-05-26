// LICENSE_CODE AT
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Collapse,
  IconButton,
  InputAdornment,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography
} from '@mui/material';
import {
  Blinking,
  Clickable,
  Gui_box,
  Gui_divider,
  Gui_table,
  Gui_table_container,
  Gui_text_field,
  Gui_tooltip,
  Start_purchase_btn
} from './comp';
import Search_icon from '@mui/icons-material/Search';
import {use_purchases_styles} from './theme';
import eserf from './eserf';
import * as util from './util';
import {id2hierarchy, token_get, tree_id_for_img_get} from './util';
import {news_archive} from './server';
import {useAuth0} from '@auth0/auth0-react';
import {Gctx} from './gctx';
import {
  ReactComponent as Table_expand_up_icon
} from './img/table_expand_up_icon.svg';
import {
  ReactComponent as Table_expand_down_icon
} from './img/table_expand_down_icon.svg';
import images from './img_import';
import format from 'date-fns/format';
import format_distance from 'date-fns/formatDistance';
import {useLocation, useParams} from 'react-router-dom';
import {debounce} from 'lodash';


let head_cells = [
  {id: 'expand', lbl: '', is_sortable: false},
  {id: 'news_img', lbl: '', is_sortable: false},
  {id: 'tree_ids', lbl: 'Product Name', is_sortable: true},
  {id: 'ts_publication', lbl: 'Submission date', is_sortable: true},
  {id: 'title', lbl: 'Headline', is_sortable: true},
  {id: 'tags', lbl: 'Tags', is_sortable: false},
];

const Enhanced_table_head = ({
  order, order_by, on_request_sort
})=>{
  const create_sort_handler = property=>event=>{
    on_request_sort(event, property);
  };
  return (
    <TableHead>
      <TableRow>
        {head_cells.map(head_cell=><TableCell
          key={head_cell.id}
          align={head_cell.align}
        >
          {head_cell.is_sortable ?
            <TableSortLabel
              active={order_by === head_cell.id}
              direction={order_by === head_cell.id ? order : 'asc'}
              onClick={create_sort_handler(head_cell.id)}
            >
              {head_cell.lbl}
            </TableSortLabel> :
            head_cell.lbl
          }
        </TableCell>)}
      </TableRow>
    </TableHead>
  );
};

const Row = ({
  news,
})=>{
  let classes = use_purchases_styles();
  let [open, open_set] = React.useState(false);
  let {product} = useContext(Gctx);

  const [grp, prod] = useMemo(()=>{
    for (let id in news.tree_ids)
    {
      let {grp_id, prod_id} = id2hierarchy(id);
      if (grp_id && prod_id)
      {
        return [
          util._get(product.get, grp_id),
          util._get(product.get, prod_id)
        ];
      }
    }
    let id = Object.keys(news.tree_ids)[0];
    let {grp_id, prod_id} = id2hierarchy(id);
    return [
      grp_id && util._get(product.get, grp_id),
      prod_id && util._get(product.get, prod_id)
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [news.length]);

  let tags = Object.keys(news.tree_ids).map(id=>util._get(product.get, id).lbl);
  let more_tags_length =
      tags.length > 3 ? `${tags.length - 3} more products` : '';

  let prod_item = util._get(product.get, news.id_for_img);
  return (
    <>
      <TableRow sx={{'& > *': {borderBottom: 'unset'}}}>
        <TableCell sx={{padding: 0}}>
          <Gui_tooltip arrow title="Open details">
            <Clickable>
              <IconButton
                aria-label="expand row" size="small"
                onClick={()=>open_set(!open)}
              >
                {open ? <Table_expand_up_icon /> :
                  <Table_expand_down_icon />}
              </IconButton>
            </Clickable>
          </Gui_tooltip>
        </TableCell>
        <TableCell width={'70px'}>
          <Gui_box>
            <img
              src={images[prod_item.img]}
              style={{
                width: 70,
                height: 70,
                objectFit: 'cover',
                display: 'block'
              }}/>
          </Gui_box>
        </TableCell>
        <TableCell>
          <Typography variant="subtitle1">
            {grp ? grp.lbl : ''}
          </Typography>
          <Typography
            variant="body2"
            className={classes.subText}
          >
            {prod ? prod.lbl: ''}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant="subtitle1">
            {format(new Date(news.ts_publication), 'd/M/y')}
          </Typography>
          <Typography
            variant="body2"
            className={classes.subText}
          >
            {format_distance(
              new Date(news.ts_publication),
              new Date(),
              {addSuffix: true}
            )}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant="subtitle1">
            {news.title}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant="subtitle1">
            {
              tags
                .slice(0, 3)
                .filter(a=>!!a)
                .map(
                  (tag, index, arr)=>`${tag}${arr.length-1 == index ? '': ', '}`
                )}
          </Typography>
          <Typography
            variant="body2"
            className={classes.subText}
          >
            {more_tags_length}
          </Typography>
        </TableCell>
      </TableRow>

      <TableRow sx={{
        '&.MuiTableRow-root td.MuiTableCell-body:last-child': {border: 'unset'},
        '& td:before, & td:after': {display: 'none'}
      }}>
        <TableCell colSpan={6} sx={{padding: 0}}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={'13px'}>
              <Typography variant="h6" gutterBottom component="div">
                Body
              </Typography>
            </Box>
            <Gui_divider sx={{'&': {boxShadow: 'none'}}}/>
            <Box margin={'13px'}>
              <Typography variant={'body'}>
                {news.body}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>

    </>
  );
};


const News = ()=>{
  let [order_by, order_by_set] = useState('placement_dt');
  let [order, order_set] = useState('asc');
  let [news, news_set] = useState([]);
  let [search, search_set] = useState('');
  let [count, count_set] = useState(0);
  let [loading, loading_set] = useState(false);
  let classes = use_purchases_styles();
  let {getAccessTokenSilently: get_access_token_silently} = useAuth0();
  let {seg_sid, cat_sid, grp_sid, prod_sid} = useParams();
  let {pathname} = useLocation();
  let {product} = useContext(Gctx);
  let prod_id = [seg_sid, cat_sid, grp_sid, prod_sid]
    .filter(a=>!!a)
    .map((item, index, arr)=>{
      return index === arr.length - 1 ? item : `${item}__`;
    })
    .join('');

  const get_news = useCallback((qs, _news)=>eserf(function* _get_news(){
    loading_set(true);
    let t = yield token_get(get_access_token_silently);
    let {result: _articles, count: _count} = yield news_archive(t.token,
      {
        prod_id,
        limit: 30,
        ...qs
      });
    count_set(_count);
    for (let a of _articles)
      a.id_for_img = tree_id_for_img_get(a, product);
    news_set([..._news || [], ..._articles]);
    loading_set(false);
  })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  , []);
  let start_purchase_link = pathname.replace('news', 'purchase/seg');
  useEffect(()=>{
    search_set('');
    get_news(prod_id? {prod_id}: {});
  }, [get_news, prod_id]);

  let on_search= debounce(e=>{
    get_news({
      sort_direction: order,
      sort_by: order_by,
      query: e.target.value
    });
  }, 100);
  const handle_request_sort = (event, property)=>{
    let is_asc = order_by === property && order === 'asc';
    let sort_direction = is_asc ? 'desc' : 'asc';
    let sort_by = property;
    order_set(sort_direction);
    order_by_set(sort_by);
    get_news({sort_direction, sort_by});
  };
  return <><Box
    display="flex"
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between"
    marginBottom={2}
  >
    <Blinking>
      <Gui_text_field
        fullWidth
        onChange={e=>{
          search_set(e.target.value);
          on_search(e);
        }}
        value={search}
        InputProps={{
          startAdornment: <InputAdornment position="start">
            <Search_icon color="primary" />
          </InputAdornment>
        }}
        sx={{width: 400}}
      />
    </Blinking>
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
    >
      <Blinking>
        <Start_purchase_btn link={start_purchase_link}/>
      </Blinking>
    </Box>
  </Box>
  <Gui_table_container className={classes.table_container}>
    <Gui_table
      stickyHeader
      aria-label="purchases table"
    >
      <Enhanced_table_head
        order={order}
        order_by={order_by}
        on_request_sort={handle_request_sort}
      />
      <TableBody>
        {news.map(news_tem=><Row
          key={news_tem.id}
          news={news_tem}
        />)}
        {loading && <TableRow sx={{
          '&.MuiTableRow-root td.MuiTableCell-body:last-child':
              {border: 'unset'},
          '& td:before, & td:after': {display: 'none'}
        }}>
          <TableCell colSpan={6} sx={{padding: 0}}>
            <Gui_divider sx={{'&': {boxShadow: 'none'}}}/>
            <Box display="flex" justifyContent="center" mt={2} mb={3}>
              <CircularProgress />
            </Box>
          </TableCell>
        </TableRow>}
        {count > news.length &&<TableRow sx={{
          '&.MuiTableRow-root td.MuiTableCell-body:last-child':
              {border: 'unset'},
          '& td:before, & td:after': {display: 'none'}
        }}>
          <TableCell colSpan={6} sx={{padding: 0}}>
            <Gui_divider sx={{'&': {boxShadow: 'none'}}}/>
            <Box display="flex" justifyContent="center" mt={2} mb={3}>
              <Button onClick={
                ()=>get_news({offset: news.length,
                  sort_direction: order,
                  sort_by: order_by}, news)
              }
              sx={{padding: 1}}>
                <Clickable>
                  <Typography color="primary" style={{textShadow: 'none'}}>
                    Show more
                  </Typography>
                </Clickable>
              </Button>
            </Box>
          </TableCell>
        </TableRow>}
      </TableBody>
    </Gui_table>
  </Gui_table_container>
  </>;
};

export default News;
