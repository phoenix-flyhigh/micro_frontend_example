import React from 'react';
import { createRoot } from 'react-dom/client';
import 'remoteApp/globalStyles';
import "./globals.css"
import './styles.css'
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);