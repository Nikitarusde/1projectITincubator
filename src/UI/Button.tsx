import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


 export const BootstrapButton = styled(Button)({
    marginLeft: "10px",
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 14,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1,
    backgroundColor: '#8269A8',
    borderColor: '#8269A8',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#8269A8',
        borderColor: '#8269A8',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#8269A8',
        borderColor: '#8269A8',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});

