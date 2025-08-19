"use client";

import { Group, ActionIcon, Text, ScrollArea, Divider } from '@mantine/core';
import {
	IconPointer,
	IconRectangle,
	IconCircle,
	IconTypography,
	IconPolygon,
	IconPhoto,
	IconLayoutGrid,
} from '@tabler/icons-react';
import classes from './EditorLayout.module.css';

export function EditorLayout() {
	return (
		<div className={classes.editorRoot}>
			
			<div className={classes.topBar}>
				<Group justify="space-between" px={12} h={48}>
					<Group gap={8}>
						<Text fw={600}>Figma Clone</Text>
						<Divider orientation="vertical" />
						<Text c="dimmed" size="sm">Untitled</Text>
					</Group>
					<Group gap={6}>
						<ActionIcon variant="light" size="sm">?
						</ActionIcon>
					</Group>
				</Group>
			</div>

			
			<div className={classes.leftToolbar}>
				<ToolButton icon={<IconPointer size={18} />} label="Move" />
				<ToolButton icon={<IconRectangle size={18} />} label="Rect" />
				<ToolButton icon={<IconCircle size={18} />} label="Ellipse" />
				<ToolButton icon={<IconPolygon size={18} />} label="Polygon" />
				<ToolButton icon={<IconTypography size={18} />} label="Text" />
				<ToolButton icon={<IconPhoto size={18} />} label="Image" />
			</div>

			
			<div className={classes.leftPanel}>
				<ScrollArea h="100%" type="never">
					<Group p={8} justify="space-between">
						<Text fw={600} size="sm">Layers</Text>
						<ActionIcon variant="subtle" size="sm">
							<IconLayoutGrid size={16} />
						</ActionIcon>
					</Group>
					<Divider />
					<div style={{ padding: 8 }}>
						<Text size="sm" c="dimmed">No layers yet</Text>
					</div>
				</ScrollArea>
			</div>

			
			<div className={classes.canvasAreaWrapper}>
				<div className={classes.canvasAreaInner}>
					<Text c="dimmed">Canvas</Text>
				</div>
			</div>

			
			<div className={classes.rightSidebar}>
				<Text fw={600} size="sm" mb={8}>Properties</Text>
				<Divider mb={8} />
				<Text size="sm" c="dimmed">Select an object to edit properties</Text>
			</div>
		</div>
	);
}

function ToolButton({ icon, label }: { icon: React.ReactNode; label: string }) {
	return (
		<ActionIcon variant="subtle" size="lg" title={label} aria-label={label}>
			{icon}
		</ActionIcon>
	);
}


