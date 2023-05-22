import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function Row({ row }) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow onClick={() => setOpen(!open)} sx={{
        '& > *': { borderBottom: 'unset' },
        backgroundColor: open && '#34324A',
      }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            sx={{ color: open && '#fff' }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" sx={{ color: open && '#fff' }}>
          {row.time}
        </TableCell>
        <TableCell sx={{ color: open && '#fff' }}>{row.id}</TableCell>
        <TableCell sx={{ color: open && '#fff' }}>{row.location}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                {row.id}
              </Typography>
              <Table size="small" aria-label="details">
                <TableHead>
                  <TableRow>
                    {row.invitees && <TableCell>Invitees</TableCell>}
                    <TableCell>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.invitees && <TableCell>{row.invitees}</TableCell>}
                  <TableCell>{row.tooltip}</TableCell>
                </TableBody>
              </Table>

              <div style={{ textAlign: 'center', marginTop: '15px' }}>
                <td style={{
                  fontSize: '16px',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  lineHeight: 'initial',
                  textAlign: 'left',
                  marginBottom: '15px',
                }} dangerouslySetInnerHTML={{ __html: row.map }} />
              </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function ItineraryGrid({ rows }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#9995DB' }}>
            <TableCell />
            <TableCell sx={{ fontWeight: 'bold', fontSize: 'medium', color: '#000' }}>Time</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: 'medium', color: '#000' }}>Activity</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize: 'medium', color: '#000' }}>Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
