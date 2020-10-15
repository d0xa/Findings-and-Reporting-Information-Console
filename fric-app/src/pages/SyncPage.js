/**
 * 
 */

import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutTemplate from '../components/general/LayoutTemplate';
import SyncOverview from '../components/sync/FRIC_gui_sync_overview';
import { darkTheme } from '../components/general/ThemeColors';

export default function Sync() {
	return (
		// Added dark theme provider, remove for normal colors
		<ThemeProvider theme={darkTheme}>
			<LayoutTemplate
				mainContentComponent={<SyncOverview />}
			/>
		</ThemeProvider>
	);
}
