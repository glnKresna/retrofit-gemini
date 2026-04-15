import React, { useState } from 'react';

interface SidebarItemsProps {
    icon: string;
    label: string;
    isActive?: boolean;
    onClick?: () => void;
}
